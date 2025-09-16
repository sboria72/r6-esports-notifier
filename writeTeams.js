import fs from "fs";


const globalLeagueTeams = [
  "Enterprise Esports",
  "Weibo Gaming",
  "FearX",
  "G2 Esports",
  "FURIA Esports",
  "Spacestation Gaming",
  "Ludavica",
  "Elevate",
  "Dplus",
  "Falcons Esport",
  "FaZe Clan",
  "DarkZero Esports",
  "Chiefs Esports Club",
  "Gaimin Gladiators",
  "True Synergy Gaming",
  "Fury",
  "Daystar",
  "Soul's Heart Esport",
  "PSG Talon",
  "SCARZ",
  "KINOTROPE gaming",
  "Team Secret",
  "Virtus.pro",
  "Gen.G Esports",
  "Ninjas in Pyjamas",
  "Team Liquid",
  "W7M Gaming",
  "Oxygen Esports",
  "Shopify Rebellion",
  "Wildcard Gaming",
  "Man eSports LFO",
  "Outlast",
  "Dream Warriors",
  "Shark LFO",
  "Latent Dragon Esports",
  "ArrivalSeven",
  "CAG Osaka",
  "ENTER FORCE.36",
  "Mir Gaming",
  "BDS Esport",
  "Fnatic",
  "Wolves Esports",
  "MACKO Esports",
  "WYLDE",
  "Black Dragons e-Sports",
  "9z",
  "LOS",
  "LOUD",
  "ENX",
  "Cloud9",
  "M80",
  "Team Cruelty",
  "ENVY",
  "Standby LFO"
];

const run = async() => {
    let page = 1
    let data = ["temp"]
    let totalTeams = []
    while(data.length !== 0) {
            const res = await fetch(`https://api.pandascore.co/r6siege/teams?page=${page}&token=8NlsTpPV9cqO6vMalaVNIQ6itLzJ1Yo9PlJ8hLu5roHrg9xeiC4`)
            data = await res.json()
            let filteredTeams = data.filter(team => globalLeagueTeams.includes(team.name))
            if(filteredTeams.length !== 0) {
                console.log(filteredTeams.length)
                totalTeams = totalTeams.concat(filteredTeams);
            }
            page++
    }
    console.log(totalTeams[13])
    fs.writeFile('teams.json', JSON.stringify(totalTeams), err => {
        if (err) {
            console.error('Error writing file', err);
        } else {
            console.log('Successfully wrote file');
        }
    });
    console.log(page)
};
run();