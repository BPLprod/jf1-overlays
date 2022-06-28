const rawData = `driverCaps\tteam.code\trank\tpoints\tnumber\tdriver\theadshot\tteam.livery\tteam.fullName\tteam.shortName\tteam.id\tfastestLaps\tpoles\tfinishes
JORDAN\tOCT\t9\t31\t24\tJordan\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t1\t0\t0,1,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0
SHADOWKHAS\tINM\t7\t52\t25\tshadowkhas\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966441047125278750/IMN.png\tInumi Racing\tInumi\tC67eERGMeAiND5\t0\t0\t0,0,1,1,0,1,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0
BEASTBURGER\tOMB\t16\t10\t27\tBeastburger\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095462641714/f1-para-1.png\tOmbra\tOmbra\tpoNJPwirwA7dq8\t0\t0\t0,0,0,0,0,0,1,0,1,2,0,0,0,0,0,0,0,0,0,0,0
MRMRMAN\tZSR\t4\t79\t80\tMrMrMan\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095705915474/f1-zusor.png\tZusor AVRL Elite Motor E-sport\tZusor AVRL\tlkFqctLB6o6ov8\t0\t1\t0,1,1,1,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0
SAMUEL\t\t19\t0\t26\tSamuel\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0
SPOOKEY\tOMB\t12\t22\t28\tSpookey\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095462641714/f1-para-1.png\tOmbra\tOmbra\tpoNJPwirwA7dq8\t0\t0\t0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,0
JOSHEN\tHWS\t13\t18\t66\tJoshen\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t0\t0\t0,0,0,0,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0
DAWS\tBAM\t5\t75\t8\tdaws\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t3\t0\t0,1,1,0,1,0,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0
EMMY\tCDR\t19\t0\t69\tEmmy\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0
MEGA\tCDR\t19\t0\t19\tMega\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DUPIDER\tCSR\t17\t6\t12\tdupider\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093096347648000/f1-clown.png\tClown School SLMN F1 Team\tClown School\tED8SlZj7KdhXrc\t0\t0\t0,0,0,0,0,0,1,0,0,0,1,2,2,0,0,0,0,0,0,0,0
CHKNNUGGETGOD\tGXY\t13\t18\t21\tChknNuggetGod\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444611566456842/GXY.png\tCygnet Technologies Galaxy Racing\tGalaxy\tJCDEU5GSsjOFUf\t0\t0\t0,0,0,0,0,1,0,1,2,1,1,0,0,0,0,0,0,0,0,0,0
TEKUGEN\tINM\t19\t0\t13\tTekuGen\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966441047125278750/IMN.png\tInumi Racing\tInumi\tC67eERGMeAiND5\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0
TOMASBS\tGG\t19\t0\t30\tTomásbs\t\thttps://cdn.discordapp.com/attachments/485493459357007876/968626670091251792/GG2.png\tGuenther Gang\tGuenther Gang\tQyf0UcgsspXtVp\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0
AARON\tCSR\t2\t118\t20\tAaron\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093096347648000/f1-clown.png\tClown School SLMN F1 Team\tClown School\tED8SlZj7KdhXrc\t2\t5\t4,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0
PERSON839\tOMB\t11\t26\t39\tperson839\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095462641714/f1-para-1.png\tOmbra\tOmbra\tpoNJPwirwA7dq8\t0\t0\t0,1,0,0,0,1,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0
PROTEIN\tBAM\t17\t6\t97\tProtein\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t0\t0\t0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0
JOEY\tZSR\t19\t0\t79\tJoey\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095705915474/f1-zusor.png\tZusor AVRL Elite Motor E-sport\tZusor AVRL\tlkFqctLB6o6ov8\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
JJONI\tGG\t10\t28\t23\tJJoni\t\thttps://cdn.discordapp.com/attachments/485493459357007876/968626670091251792/GG2.png\tGuenther Gang\tGuenther Gang\tQyf0UcgsspXtVp\t0\t0\t0,0,0,2,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0
PLEWT0\tHWS\t19\t0\t72\tPlewt0\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t0\t0\t0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0
ZAZLAK\tCDR\t19\t0\t88\tZazlak\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440086247989328/CDR.png\tChengdu Racers\tChengdu Racers\tlUKP66Bn5vzubl\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DI0PTAS\tZSR\t6\t67\t74\tDi0ptas\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093095705915474/f1-zusor.png\tZusor AVRL Elite Motor E-sport\tZusor AVRL\tlkFqctLB6o6ov8\t0\t1\t0,1,1,1,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0
PARSA\tOCT\t19\t0\t32\tParsa Parsi\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
KIZZLE\t\t19\t0\t85\tKizzle\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
MINT\tGXY\t1\t119\t98\tmint\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444611566456842/GXY.png\tCygnet Technologies Galaxy Racing\tGalaxy\tJCDEU5GSsjOFUf\t0\t0\t2,2,1,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0
LUX\tGXY\t19\t0\t95\tLux\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444611566456842/GXY.png\tCygnet Technologies Galaxy Racing\tGalaxy\tJCDEU5GSsjOFUf\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
SAADIST\tBAM\t8\t42\t94\tSaadist\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t0\t0\t1,0,0,0,0,1,0,2,0,1,0,0,0,0,0,0,0,0,0,0,0
FREYA\tOCT\t15\t16\t29\tFreya\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966444614376652810/OCT.png\tOctave\tOctave\tjCOJICeanHOZuj\t0\t0\t0,0,0,0,0,1,1,0,0,2,1,0,0,0,0,0,0,0,0,0,0
LETTUCE\tBAM\t19\t0\t56\tLettuce\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440085698515014/BAM.png\tSquaderia Bamonti\tBamonti\tdCuLU3xvCh8kfc\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0
ROVERE\tCSR\t19\t0\t75\tRovere\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966093096347648000/f1-clown.png\tClown School SLMN F1 Team\tClown School\tED8SlZj7KdhXrc\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DUCKS\tHWS\t19\t0\t87\tducks\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0
MULLINS\tGG\t3\t82\t57\tMullins\t\thttps://cdn.discordapp.com/attachments/485493459357007876/968626670091251792/GG2.png\tGuenther Gang\tGuenther Gang\tQyf0UcgsspXtVp\t0\t0\t0,0,2,0,3,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0
MARLUN\tHWS\t19\t0\t68\tmarlun\t\thttps://cdn.discordapp.com/attachments/485493459357007876/966440683827237054/HWS.png\tHighway Stars\tHighway Stars\ttsexLAp7frrsMo\t0\t0\t0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0
DRIVER 34\t\t\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DRIVER 35\t\t\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DRIVER 36\t\t\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DRIVER 37\t\t\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DRIVER 38\t\t\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DRIVER 39\t\t\t\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0
DRIVER 40\t\t19\t0\t\t\t\t\t\t\t\t0\t0\t0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0`;

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

const sponsorRaw = `slot_proper=Race Title Sponsor|slot=race_title|id=CSR GB|name=Clown School Racing British Grand Prix|logo=https://data.slmn.gg/image?size=orig&url=https://dl.airtable.com/.attachments/78a7e9810fb7c2b35110d7b3a6250262/1e17ce83/ClownSchoolLogonobg-AaronPlace.png|color=#BDDEFD|context_name=Clown School Racing British Grand Prix|lower_text=;;slot_proper=Penalties Sponsor|slot=penalty|id=Thinking Emoji Esports|name=Thinking Emoji Esports|logo=https://cdn.discordapp.com/attachments/965673893522210847/965675179252527125/oWAKGmGFRw8bzuTiMDkP3Off1hWpu57GqWCtWMCDIZc1.png|color=#F58F0E|context_name=|lower_text=Penalties sponsored by Thinking Emoji Esports;;slot_proper=Driver Retirement Sponsor|slot=dnf|id=Aether DNF|name=Aether|logo=https://data.slmn.gg/image?size=w-200&url=https://dl.airtable.com/.attachments/030302c72126d9c55ab0f4c3ba34a8a9/b1189a8a/image0.png|color=#FE8100|context_name=Aether Retirement|lower_text=Retirement presented by Aether;;slot_proper=Warnings Sponsor|slot=warning|id=Emmy|name=mentallyill.co.uk|logo=https://cdn.discordapp.com/attachments/965672965545001061/965719525435768862/pan_panda.png|color=#FF218C|context_name=|lower_text=Sponsored by mentallyill.co.uk;;slot_proper=Safety Car Partner|slot=safety_car|id=Super Bald|name=Super Bald|logo=https://data.slmn.gg/image?size=w-200&url=https://dl.airtable.com/.attachments/3dd3dd0e2f4bb38fc10e9a2660c3dabc/ba02180e/SuperBaldLogo.png|color=#0048B6|context_name=Super Bald Safety Car|lower_text=Secured by Super Bald;;slot_proper=Fastest Lap Sponsor|slot=fastest_lap|id=Wisp Hot Lap|name=Wisp|logo=https://cdn.discordapp.com/attachments/485493459357007876/990393243634114580/Wisp_2_Color.svg|color=#FB8A22|context_name=Wisp Hot Lap|lower_text=;;slot_proper=Podium Sponsor|slot=podium|id=Rapha's TikTok Podium|name=Rapha's TikTok|logo=|color=|context_name=Podium Sponsored by Rapha's TikTok|lower_text=;;slot_proper=Pole Position Award Sponsor|slot=pole|id=Aaron|name=Aaron|logo=|color=|context_name=Aaron Pole Position Award|lower_text=;;slot_proper=Driver of the Day Award Sponsor|slot=dotd|id=AVRL|name=AVRL|logo=https://cdn.discordapp.com/attachments/485493459357007876/966436125587681301/avrl.png|color=|context_name=AVRL Driver of the Day Award|lower_text=;;;;;;slot_proper=Production Partner|slot=production_partner|id=BPL|name=BPL|logo=https://data.slmn.gg/image?size=orig&url=https://dl.airtable.com/.attachments/c70442a7b1ae535e8d84161169732dff/06707e6d/bpl-wordmark-500.png|color=#AC3C76|context_name=|lower_text=;;slot_proper=Technology Partner|slot=tech_partner|id=SLMN|name=SLMN|logo=https://data.slmn.gg/image.png?size=w-200&url=https://dl.airtable.com/.attachmentThumbnails/c5ac285e0b06f160d93c7f4516703caf/bd192950|color=#4380BC|context_name=SLMN Timing Systems|lower_text=Presented by SLMN Timing Systems Ltd\t`;

const sponsorData = sponsorRaw.split(";;").map(sponsorSlotRaw => Object.fromEntries(sponsorSlotRaw.split("|").map(row => [row.slice(0, row.indexOf("=")), row.slice(row.indexOf("=") + 1)]))).filter(s => s.slot)

module.exports = {
    async getData() {
        return data;
    },
    async getSponsorData() {
        return sponsorData;
    }
}
