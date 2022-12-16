const rawData = `driverCaps\tteam.code\trank\tpoints\tnumber\tdriver\theadshot\tteam.livery\tteam.fullName\tteam.shortName\tteam.id\tteam.color\tfastestLaps\tpoles\tfinishes\tnotes
JORDAN\tOCT\t12\t59\t24\tJordan\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t#C587FF\t3\t1\t0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0\t
SHADOWKHAS\tINM\t6\t144\t25\tshadowkhas\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966441047125278750/IMN.png\tInumi Racing\tInumi\tC67eERGMeAiND5\t#FF5600\t1\t1\t0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0\t
OOOGWAY\tOMB\t11\t62\t27\tOoogway\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095462641714/f1-para-1.png\tOmbra\tOmbra\tpoNJPwirwA7dq8\t#4D3F94\t0\t0\t0,0,0,0,0,0,1,0,1,2,0,0,0,0,0,0,0,0,0,0,0\t
RYAN\tZSR\t1\t248\t80\tRyan\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095705915474/f1-zusor.png\tZusor AVRL Elite Motor E-sport\tZusor AVRL\tlkFqctLB6o6ov8\t#29D1CD\t2\t4\t0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0\t
SAMUEL\t\t22\t0\t26\tSamuel\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0\t
SPOOKEY\tOMB\t8\t76\t28\tSpookey\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095462641714/f1-para-1.png\tOmbra\tOmbra\tpoNJPwirwA7dq8\t#4D3F94\t4\t0\t0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0\t
JOSHEN\tHWS\t16\t18\t66\tJoshen\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t#3254CE\t2\t0\t0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0\t
DAWS\tBAM\t4\t184\t8\tdaws\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t#96D4D0\t0\t5\t0,1,1,0,1,0,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0\tJF1 Season 1 Champion
EMMY\tCDR\t13\t40\t69\tEmmy\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t#FFA001\t3\t0\t0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0\t
MEGA\tCDR\t22\t0\t19\tMega\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t#FFA001\t5\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DUPIDER\tCSR\t18\t12\t12\tdupider\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093096347648000/f1-clown.png\tClown School SLMN F1 Team\tClown School\tED8SlZj7KdhXrc\t#BDDEFD\t1\t0\t0,0,0,0,0,0,1,0,0,0,1,2,2,0,0,0,0,0,0,0,0\t
CHKNNUGGETGOD\tGXY\t10\t63\t21\tChknNuggetGod\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444611566456842/GXY.png\tCygnet Technologies Galaxy Racing\tGalaxy\tJCDEU5GSsjOFUf\t#FF7500\t0\t0\t0,0,0,0,0,1,0,1,2,1,1,0,0,0,0,0,0,0,0,0,0\t
TEKUGEN\tINM\t22\t0\t13\tTekuGen\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966441047125278750/IMN.png\tInumi Racing\tInumi\tC67eERGMeAiND5\t#FF5600\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0\t
TOMASBS\tOCT\t20\t4\t30\tTomásbs\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t#C587FF\t1\t0\t0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0\t
AARON\tCSR\t2\t243\t20\tAaron\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093096347648000/f1-clown.png\tClown School SLMN F1 Team\tClown School\tED8SlZj7KdhXrc\t#BDDEFD\t3\t3\t4,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0\t
PERSON839\tCDR\t14\t34\t39\tperson839\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t#FFA001\t4\t0\t0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0\t
PROTEIN\tBAM\t19\t6\t97\tProtein\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t#96D4D0\t0\t0\t0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0\t
JOEY\tKRJ\t21\t1\t79\tJoey\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966459497654677544/KRJ.png\tKrojcoin.com Racing\tKrojcoin\t1Hop9GseA69FVH\t#0B336F\t6\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
JJONI\tGG\t15\t31\t23\tJJoni\t\thttps://cdn.discordapp.com/attachments/485493459357007876/968626670091251792/GG2.png\tGuenther Gang\tGuenther Gang\tQyf0UcgsspXtVp\t#F67570\t1\t0\t0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0\t
PLEWT0\tINM\t22\t0\t72\tPlewt0\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966441047125278750/IMN.png\tInumi Racing\tInumi\tC67eERGMeAiND5\t#FF5600\t3\t0\t0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0\t
ZAZLAK\tCDR\t22\t0\t88\tZazlak\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t#FFA001\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DI0PTAS\tZSR\t7\t135\t74\tDi0ptas\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095705915474/f1-zusor.png\tZusor AVRL Elite Motor E-sport\tZusor AVRL\tlkFqctLB6o6ov8\t#29D1CD\t2\t0\t0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0\t
PARSA\tOCT\t22\t0\t32\tParsa Parsi\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t#C587FF\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
KIZZLE\tKRJ\t22\t0\t85\tKizzle\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966459497654677544/KRJ.png\tKrojcoin.com Racing\tKrojcoin\t1Hop9GseA69FVH\t#0B336F\t4\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
MINT\tGXY\t3\t217\t98\tmint\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444611566456842/GXY.png\tCygnet Technologies Galaxy Racing\tGalaxy\tJCDEU5GSsjOFUf\t#FF7500\t0\t0\t2,2,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0\t
LUX\tGXY\t22\t0\t95\tLux\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444611566456842/GXY.png\tCygnet Technologies Galaxy Racing\tGalaxy\tJCDEU5GSsjOFUf\t#FF7500\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
SAADIST\tBAM\t8\t76\t94\tSaadist\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t#96D4D0\t1\t0\t1,0,0,0,0,1,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0\t
FREYA\tOCT\t17\t16\t29\tFreya\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t#C587FF\t2\t0\t0,0,0,0,0,1,1,0,0,2,1,0,0,0,0,0,0,0,0,0,0\t
LETTUCE\tBAM\t22\t0\t56\tLettuce\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t#96D4D0\t2\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0\t
ROVERE\tCSR\t22\t0\t75\tRovere\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093096347648000/f1-clown.png\tClown School SLMN F1 Team\tClown School\tED8SlZj7KdhXrc\t#BDDEFD\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DUCKS\tHWS\t22\t0\t87\tducks\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t#3254CE\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0\t
MULLINS\tGG\t5\t147\t57\tMullins\t\thttps://cdn.discordapp.com/attachments/485493459357007876/968626670091251792/GG2.png\tGuenther Gang\tGuenther Gang\tQyf0UcgsspXtVp\t#F67570\t0\t0\t0,0,2,0,3,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
MARLUN\tHWS\t22\t0\t68\tmarlun\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t#3254CE\t1\t0\t0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0\t
HYPER\tHWS\t22\t0\t64\tHypeR\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t#3254CE\t2\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DRIVER 35\t\t\t\t\t\t\t\t\t\t\t\t\t\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DRIVER 36\t\t\t\t\t\t\t\t\t\t\t\t\t\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DRIVER 37\t\t\t\t\t\t\t\t\t\t\t\t\t\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DRIVER 38\t\t\t\t\t\t\t\t\t\t\t\t\t\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DRIVER 39\t\t\t\t\t\t\t\t\t\t\t\t\t\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t
DRIVER 40\t\t22\t0\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0\t`;

data = rawData.split('\n');
let headers = data.shift().split("\t").map(t => t);
const ints = ["rank", "points", "fastestLaps", "poles"]
data = data.map(driver => driver.split('\t')).map(cells => {
    let driver = {};

    cells.forEach((cell, i) => {
        let header = headers[i];
        if (header.includes(".")) {
            let [objectKey, objectValue] = header.split('.');
            if (!driver[objectKey]) driver[objectKey] = {};
            driver[objectKey][objectValue] = cell;
        } else {
            if (ints.includes(header)) {
                driver[header] = parseInt(cell);
            } else {
                driver[header] = cell;
            }
        }
    })
    if (driver.finishes && driver.finishes.includes(",")) driver.finishes = driver.finishes.split(",").map(n => parseInt(n))

    return driver;
}).filter(driver => driver.number);
// console.log(data);

const sponsorRaw = `slot_proper=Race Title Sponsor|slot=race_title|id=Tomas 7-1|name=7-1 Brazillian Grand Prix|logo=https://upload.wikimedia.org/wikipedia/en/0/05/Flag_of_Brazil.svg|color=#009b3a|context_name=7-1 Brazillian Grand Prix|lower_text=;;slot_proper=Penalties Sponsor|slot=penalty|id=Thinking Emoji Esports|name=Thinking Emoji Esports|logo=https://cdn.discordapp.com/attachments/965673893522210847/965675179252527125/oWAKGmGFRw8bzuTiMDkP3Off1hWpu57GqWCtWMCDIZc1.png|color=#F58F0E|context_name=|lower_text=Penalties sponsored by Thinking Emoji Esports;;slot_proper=Driver Retirement Sponsor|slot=dnf|id=Aether DNF|name=Aether|logo=https://data.slmn.gg/image?size=w-200&url=https://dl.airtable.com/.attachments/030302c72126d9c55ab0f4c3ba34a8a9/b1189a8a/image0.png|color=#FE8100|context_name=Aether Retirement|lower_text=Retirement presented by Aether;;slot_proper=Warnings Sponsor|slot=warning|id=Emmy|name=mentallyill.co.uk|logo=https://cdn.discordapp.com/attachments/965672965545001061/965719525435768862/pan_panda.png|color=#FF218C|context_name=mentallyill.co.uk Hungarian Grand Prix|lower_text=Sponsored by mentallyill.co.uk;;slot_proper=Safety Car Partner|slot=safety_car|id=Super Bald|name=Super Bald|logo=https://data.slmn.gg/image?size=w-200&url=https://dl.airtable.com/.attachments/3dd3dd0e2f4bb38fc10e9a2660c3dabc/ba02180e/SuperBaldLogo.png|color=#0048B6|context_name=Super Bald Safety Car|lower_text=Secured by Super Bald;;slot_proper=Fastest Lap Sponsor|slot=fastest_lap|id=Wisp Hot Lap|name=Wisp|logo=https://data.slmn.gg/image?size=orig&url=https://dl.airtable.com/.attachments/2b56459ad3a2e66fc9a91f85e7b190e9/a50f5a89/Wisp_White.svg|color=#FB8A22|context_name=Wisp Hot Lap|lower_text=;;slot_proper=Podium Sponsor|slot=podium|id=Rapha's TikTok Podium|name=Rapha's TikTok|logo=|color=|context_name=Podium Sponsored by Rapha's TikTok|lower_text=;;slot_proper=Pole Position Award Sponsor|slot=pole|id=Aaron|name=Aaron|logo=|color=|context_name=Aaron Pole Position Award|lower_text=;;slot_proper=Driver of the Day Award Sponsor|slot=dotd|id=AVRL|name=AVRL|logo=https://cdn.discordapp.com/attachments/485493459357007876/966436125587681301/avrl.png|color=|context_name=AVRL Driver of the Day Award|lower_text=;;slot_proper=Pit Timing Sponsor|slot=pit_timing|id=BPL|name=BPL|logo=https://data.slmn.gg/image?size=orig&url=https://dl.airtable.com/.attachments/c70442a7b1ae535e8d84161169732dff/06707e6d/bpl-wordmark-500.png|color=#AC3C76|context_name=|lower_text=;;;;slot_proper=Production Partner|slot=production_partner|id=BPL|name=BPL|logo=https://data.slmn.gg/image?size=orig&url=https://dl.airtable.com/.attachments/c70442a7b1ae535e8d84161169732dff/06707e6d/bpl-wordmark-500.png|color=#AC3C76|context_name=|lower_text=;;slot_proper=Technology Partner|slot=tech_partner|id=SLMN|name=SLMN|logo=https://data.slmn.gg/image.png?size=w-200&url=https://dl.airtable.com/.attachmentThumbnails/c5ac285e0b06f160d93c7f4516703caf/bd192950|color=#4380BC|context_name=SLMN Timing Systems|lower_text=Presented by SLMN Timing Systems Ltd\t`;

const sponsorData = sponsorRaw.split(";;").map(sponsorSlotRaw => Object.fromEntries(sponsorSlotRaw.split("|").map(row => [row.slice(0, row.indexOf("=")), row.slice(row.indexOf("=") + 1)]))).filter(s => s.slot)

module.exports = {
    async getData() {
        return data;
    },
    async getSponsorData() {
        return sponsorData;
    }
}
