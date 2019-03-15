import * as PlayerApiUtil from '../../util/player_api_util';

export const grabPlayerRiotInfo = (playerDisplayName) => {
  let player;
  let playerId;
  let playerAccountId;
  PlayerApiUtil.fetchPlayer(playerDisplayName)
    .then((fetchedPlayer) => {
      player = fetchedPlayer;
      playerId = player.id;
      playerAccountId = player.accountId;
    });

  let matches;
  PlayerApiUtil.fetchPlayerMatchlist(playerAccountId)
    .then((fetchedMatches) => {
      matches = fetchedMatches.matches;
    });

  const playerInfo = [player, playerDisplayName, playerId, playerAccountId, matches];
  console.log(playerInfo);
  // return (playerInfo);
};
