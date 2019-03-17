export const lcsTeams = {
  t100: {
    // https://lol.gamepedia.com/100_Thieves
    teamName: '100 Thieves',
    teamWins: {
      '2019': { spring: 4, summer: 0 },
      '2018': { spring: 12, summer: 10 },
      '2017': { spring: null, summer: null },
    },
    allPlayers: ['Ssumday', 'AnDa', 'huhi', '100T Bang', 'aphromoo'],
    top: 'Ssumday',
    jg: 'AnDa',
    mid: 'huhi',
    bot: '100T Bang',
    sup: 'aphromoo',
    coach: 'Pr0lly',
  },
  c9: {
    // https://lol.gamepedia.com/Cloud9
    teamName: 'Cloud 9',
    teamWins: {
      '2019': { spring: 11, summer: 0 },
      '2018': { spring: 11, summer: 11 },
      '2017': { spring: 14, summer: 12 },
    },
    allPlayers: ['Licorice', 'Svenskeren', 'C9 Nisqyyy', 'C9 Sneaky', 'C9 Zeyzal'],
    top: 'Licorice',
    jg: 'Svenskeren',
    mid: 'C9 Nisqyyy',
    bot: 'C9 Sneaky',
    sup: 'C9 Zeyzal',
    coach: 'Reapered',
  },
  cg: {
    // https://lol.gamepedia.com/Clutch_Gaming
    teamName: 'Clutch Gaming',
    teamWins: {
      '2019': { spring: 5, summer: 0 },
      '2018': { spring: 11, summer: 6 },
      '2017': { spring: null, summer: null },
    },
    allPlayers: ['Huni', 'Lira', 'Damonte', 'Piglet', 'Vulcan'],
    top: 'Huni',
    jg: 'Lira',
    mid: 'Damonte',
    bot: 'Piglet',
    sup: 'Vulcan',
    coach: 'McScrag',
  },
  clg: {
    // https://lol.gamepedia.com/Counter_Logic_Gaming
    teamName: 'Counter Logic Gaming',
    teamWins: {
      '2019': { spring: 5, summer: 0 },
      '2018': { spring: 7, summer: 7 },
      '2017': { spring: 10, summer: 12 },
    },
    allPlayers: ['Darshan', 'Wiggily', 'PowerOfEvil', 'Stixxay', 'Biofrost'],
    top: 'Darshan',
    jg: 'Wiggily',
    mid: 'PowerOfEvil',
    bot: 'Stixxay',
    sup: 'Biofrost',
    coach: 'Weldon',
  },
  fox: {
    // https://lol.gamepedia.com/Echo_Fox
    teamName: 'Echo Fox',
    teamWins: {
      '2019': { spring: 4, summer: 0 },
      '2018': { spring: 12, summer: 10 },
      '2017': { spring: 6, summer: 5 },
    },
    allPlayers: ['Solo', 'Rush', 'Fenix', 'Apollo', 'Hakuho'],
    top: 'Solo',
    jg: 'Rush',
    mid: 'Fenix',
    bot: 'Apollo',
    sup: 'Hakuho',
    coach: 'Ssong',
  },
  fly: {
    // https://lol.gamepedia.com/FlyQuest
    teamName: 'FlyQuest',
    teamWins: {
      '2019': { spring: 7, summer: 0 },
      '2018': { spring: 6, summer: 10 },
      '2017': { spring: 9, summer: 6 },
    },
    allPlayers: ['V1per', 'Santorin', 'Pobelter', 'WildTurtle', 'JayJ'],
    top: 'V1per',
    jg: 'Santorin',
    mid: 'Pobelter',
    bot: 'WildTurtle',
    sup: 'JayJ',
    coach: 'Invert',
  },
  ggs: {
    // https://lol.gamepedia.com/Golden_Guardians
    teamName: 'Golden Guardians',
    teamWins: {
      '2019': { spring: 6, summer: 0 },
      '2018': { spring: 4, summer: 5 },
      '2017': { spring: null, summer: null },
    },
    allPlayers: ['Hauntzer', 'Contractz', 'Froggen', 'Deftly', 'Olleh'],
    top: 'Hauntzer',
    jg: 'Contractz',
    mid: 'Froggen',
    bot: 'Deftly',
    sup: 'Olleh',
    coach: 'Inero',
  },
  opt: {
    // https://lol.gamepedia.com/OpTic_Gaming
    teamName: 'Optic Gaming',
    teamWins: {
      '2019': { spring: 6, summer: 0 },
      '2018': { spring: 5, summer: 9 },
      '2017': { spring: null, summer: null },
    },
    allPlayers: ['Dhokla', 'Meteos', 'Crown', 'Arrow', 'Big'],
    top: 'Dhokla',
    jg: 'Meteos',
    mid: 'Crown',
    bot: 'Arrow',
    sup: 'Big',
    coach: 'Zaboutine',
  },
  tl: {
    // https://lol.gamepedia.com/Team_Liquid
    teamName: 'Team Liquid',
    teamWins: {
      '2019': { spring: 13, summer: 0 },
      '2018': { spring: 11, summer: 12 },
      '2017': { spring: 5, summer: 4 },
    },
    allPlayers: ['Impact', 'Xmithie', 'Jensen', 'Doublelift', 'CoreJJ'],
    top: 'Impact',
    jg: 'Xmithie',
    mid: 'Jensen',
    bot: 'Doublelift',
    sup: 'CoreJJ',
    coach: 'Cain',
  },
  tsm: {
    // https://lol.gamepedia.com/Team_SoloMid
    teamName: 'Team SoloMid',
    teamWins: {
      '2019': { spring: 9, summer: 0 },
      '2018': { spring: 11, summer: 10 },
      '2017': { spring: 15, summer: 14 },
    },
    allPlayers: ['Broken Blade', 'Akaadian', 'Bjergsen', 'Zven', 'Smoothie'],
    top: 'Broken Blade',
    jg: 'Akaadian',
    mid: 'Bjergsen',
    bot: 'Zven',
    sup: 'Smoothie',
    coach: 'Zikz',
  },
};

export const grabAllTeamNames = () => {
  const teamNames = Object.keys(lcsTeams);
  return teamNames;
};

export const grabAllPlayerNames = () => {
  const teams = Object.values(lcsTeams);
  let players = [];
  let coaches = [];

  teams.forEach((team) => {
    players.push(team.top);
    players.push(team.jg);
    players.push(team.mid);
    players.push(team.bot);
    players.push(team.sup);
    coaches.push(team.coach);
  });

  return (players);
};

/* ---------------------------------------------
// LINKS
--------------------------------------------- */
// https://www.esportspedia.com/lol/LCS_2019_Spring
// https://www.esportspedia.com/lol/LCS_2019_Summer
// https://www.esportspedia.com/lol/NA_LCS_2018_Spring_Split
// https://www.esportspedia.com/lol/NA_LCS_2018_Summer_Split
// https://www.esportspedia.com/lol/NA_LCS_2017_Spring_Split
// https://www.esportspedia.com/lol/NA_LCS_2017_Summer_Split
