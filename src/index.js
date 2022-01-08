const { F1TelemetryClient, constants } = require("@racehub-io/f1-telemetry-client");
const { PACKETS } = constants;

const client = new F1TelemetryClient();
client.on(PACKETS.session, (data) => {
    //'m_header',
    //   'm_weather',
    //   'm_trackTemperature',
    //   'm_airTemperature',
    //   'm_totalLaps',
    //   'm_trackLength',
    //   'm_sessionType',
    //   'm_trackId',
    //   'm_formula',
    //   'm_sessionTimeLeft',
    //   'm_sessionDuration',
    //   'm_pitSpeedLimit',
    //   'm_gamePaused',
    //   'm_isSpectating',
    //   'm_spectatorCarIndex',
    //   'm_sliProNativeSupport',
    //   'm_numMarshalZones',
    //   'm_marshalZones',
    //   'm_safetyCarStatus',
    //   'm_networkGame',
    //   'm_numWeatherForecastSamples',
    //   'm_weatherForecastSamples',
    //   'm_forecastAccuracy',
    //   'm_aiDifficulty',
    //   'm_seasonLinkIdentifier',
    //   'm_weekendLinkIdentifier',
    //   'm_sessionLinkIdentifier',
    //   'm_pitStopWindowIdealLap',
    //   'm_pitStopWindowLatestLap',
    //   'm_pitStopRejoinPosition',
    //   'm_steeringAssist',
    //   'm_brakingAssist',
    //   'm_gearboxAssist',
    //   'm_pitAssist',
    //   'm_pitReleaseAssist',
    //   'm_ERSAssist',
    //   'm_DRSAssist',
    //   'm_dynamicRacingLine',
    //   'm_dynamicRacingLineType'

    let driver = drivers[data.m_spectatorCarIndex]
    if (driver && data.m_isSpectating) {

        if (cache["spectator-networkid"] && cache["spectator-networkid"] !== driver.m_networkId) {
            console.log(`Now spectating #${driver.m_raceNumber} @${driver.m_networkId} ${driver.m_name}`)
        }

        cache["spectator-networkid"] = driver.m_networkId;
    }

    // console.log(Object.keys(data))
});

function zp(num, size) {
    return num.toString().padStart(size, "0")
}

function msToHMS(ms) {
    if (!ms) return "-:--.---"
    let [m, mr] = [Math.floor(ms / (60 * 1000)),ms % (60 * 1000)];
    let [s, sr] = [Math.floor(mr / 1000), ms % 1000]
    // console.log(m, mr);

    return `${m}:${zp(s, 2)}.${zp(sr, 3)}`
}

client.on(PACKETS.carStatus, (data) => {
    // all cars
    // console.log("status", data.m_carStatusData[0])
})

let leaderboard = [];
const purple = {
    sectors: [0, 0, 0]
}
const cache = {}
let drivers = [];


function getSectorColor(oldData, newData, i) {
    if (!oldData) return;
    let sector = oldData.m_sector;
    let time = oldData.currentSectorTime;
    if (time < (5000)) return null;
    if (oldData.m_pitStatus !== 0) return;
    let driver = drivers[i];
    if (driver && driver?.m_networkId !== 255) console.log(`P${newData.m_carPosition} @${driver?.m_networkId === 255 ? driver?.m_driverId : driver?.m_networkId} ${driver?.m_name} #${driver?.m_raceNumber} sector ${sector + 1} finished ${msToHMS(time)}`, `Status D${oldData.m_driverStatus} R${oldData.m_resultStatus} P${oldData.m_pitStatus}`)


    if (!purple.sectors[sector]) {
        purple.sectors[sector] = time
        return null;
    }
    if (purple.sectors[sector] > time) {
        purple.sectors[sector] = time;
        return "purple"
    }

    if (!cache[`car-bestlap-sector-${i}`]?.[sector]) return null;

    if (cache[`car-bestlap-sector-${i}`][sector] > time) {
        return "green"
    } else {
        return "red";
    }

}

function lapComplete(oldData, newData, i) {
    if (!cache[`car-bestlap-time-${i}`]) return cache[`car-bestlap-time-${i}`] = newData.m_lastLapTimeInMS;
    let driver = drivers[i];

    if (cache[`car-bestlap-time-${i}`] > newData.m_lastLapTimeInMS) {
        // best lap
        cache[`car-bestlap-time-${i}`] = newData.m_lastLapTimeInMS;
        cache[`car-bestlap-sector-${i}`] = [
            oldData.m_sector1TimeInMS,
            oldData.m_sector2TimeInMS,
            oldData.currentSectorTime
        ]
        if (driver && driver?.m_networkId !== 255) console.log("player's best lap!", [
            newData.m_lastLapTimeInMS,
            oldData.m_sector1TimeInMS,
            oldData.m_sector2TimeInMS,
            oldData.currentSectorTime
        ].map(p => msToHMS(p)));
    }
}

client.on(PACKETS.participants, (p) => {
    drivers = p.m_participants || [];
})

client.on(PACKETS.lapData, (lapData) => {
    // console.log(Object.keys(lapData.m_lapData[0]).join('\n'))


    leaderboard = lapData.m_lapData.map((car, i) => {
        let driver = drivers[i];
        let old = cache[`car-lapdata-${i}`];

        let currentSectorTime = (car.m_currentLapTimeInMS - car.m_sector1TimeInMS - car.m_sector2TimeInMS)

        if (old && old.m_currentLapNum !== car.m_currentLapNum) {
            lapComplete(old, car, i);
        }

        if (old && old.m_sector !== car.m_sector) {
            let sectorColor = getSectorColor(old, car, i);
            if (driver && driver?.m_networkId !== 255) console.log("sector color:", sectorColor);
            if (driver && driver?.m_networkId !== 255) console.log("current purple sectors: ", [...purple.sectors].map(p => msToHMS(p)))
        }


        cache[`car-lapdata-${i}`] = car;
        cache[`car-lapdata-${i}`].currentSectorTime = currentSectorTime;

        let best = cache[`car-bestlap-time-${i}`];

        return {
            pos: car.m_carPosition,
            status: car.m_resultStatus,
            text: [
                `P${car.m_carPosition}`,
                `@${driver?.m_networkId === 255 ? driver?.m_driverId : driver?.m_networkId}`,
                `Lap: ${car.m_currentLapNum}`,
                `Best: ${msToHMS(best || 0)}`,
                `Last: ${msToHMS(car.m_lastLapTimeInMS)}`,
                `Now: ${msToHMS(car.m_currentLapTimeInMS)}`,
                `SC: ${msToHMS(currentSectorTime)}`,
                // `S1: ${msToHMS(car.m_sector1TimeInMS)}`,
                // `S2: ${msToHMS(car.m_sector2TimeInMS)}`,
                `In sector: ${car.m_sector + 1}`,
                `Status D${car.m_driverStatus} R${car.m_resultStatus} P${car.m_pitStatus}`,
                // `Result status: ${car.m_resultStatus}`,
                `Penalties: ${car.m_penalties} ${car.m_currentLapInvalid}`
            ].join('\t')
        };
    })
})

setInterval(() => {
    console.log("=====")
    console.log(leaderboard.filter(e => e.pos !== 0 && e.status !== 7).sort((a,b) => a.pos - b.pos).map(e => e.text).join('\n'))
    console.log("=====")
}, 2000);

client.start();