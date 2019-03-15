import * as PlayerApiUtil from '../../player_api_util';

// General workflow of grabbing player data

// User selects player from dropdown,
// this then triggers a call to Riot's API
const playerName = '';
PlayerApiUtil.fetchPlayer(playerName);

// This then returns the player object
// Example:

const nneurall = {
  "id": "c9th24-B4seyxyVao4QCx01chGhRNLX2clJE2rbn7OOOvIg",
  "accountId": "CKKAdRWL1J43Ei8rogr3Y3-RcyNEuN9LxqN8T4ZfMAxDpA",
  "puuid": "DudtkysBiCQ3J8Wf5Q3PXpn1HHJ1xAfNHGPtjRp2O7-3fZctFRSNpwNy8nBlZ2fnHhAF4obX1hvL7g",
  "name": "NNeurall",
  "profileIconId": 3898,
  "revisionDate": 1552464025000,
  "summonerLevel": 155
};

// I then want to grab the id & accountId

let player;
PlayerApiUtil.fetchPlayer(playerName).then((fetchedPlayer) => {
  player = fetchedPlayer;
});

const playerId = player.id;
const playerAccountId = player.accountId;

// From here I want to grab that players matchlist
// and then take the array that is under "matches"

let matches;
PlayerApiUtil.fetchPlayerMatchlist(playerAccountId).then((fetchedMatches) => {
  matches = fetchedMatches.matches;
});

// I now have an array of objects
// At this point, I want to iterate through this array, and grab the "gameId's"
// These will be stored in another array

let gameIds = [];
matches.forEach((match) => {
  gameIds.push(match.gameId);
});

// Next, I have to do a query for each game and parse through it
// Then, I have to determine if the selected player won it or not

let wins = [];
let participantId;
gameIds.forEach();
