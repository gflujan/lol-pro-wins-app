import * as PlayerApiUtil from '../../util/player_api_util';

/* ---------------------------------------------
// SAVE THIS FOR LATER USE
// MAKE SURE TO NEST THIS SCRIPT INTO A FUNCTION
// ALSO MAKE SURE TO PAY ATTENTION TO MY ASYNC CALLS
// SO THAT I CAN GRAB THE RETURNED INFORMATION PROPERLY
--------------------------------------------- */

let gameIds = [];
matches.forEach((match) => {
  gameIds.push(match.gameId);
});

function findPlayerParticipantId(playerId, participantIdentities) {
  let found;
  participantIdentities.forEach((participant) => {
    if (playerId === participant.player.summonerId) {
      found = participant.participantId;
      break;
    }
  });
  return (found);
};

function didFoundParticipantWin(participantId, participants) {
  let theyWon = false;
  participants.forEach((participant) => {
    if ((participantId === participant.participantId) && (participant.stats.win)) {
      theyWon = true;
    }
  });
  return (theyWon);
};

let wins = 0;
gameIds.forEach((gameId) => {
  PlayerApiUtil.fetchMatch(gameId)
    .then((game) => {
      const participantIdentities = game.participantIdentities;
      const foundParticipantId = findPlayerParticipantId(playerId, participantIdentities);
      const participants = game.participants;
      if (didFoundParticipantWin(foundParticipantId, participants)) wins += 1;
    });
});
