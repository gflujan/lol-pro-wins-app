import * as PlayerApiUtil from '../../util/player_api_util';

export const grabPlayerRiotInfo = () => {
  const selectedPlayerName =
    d3.select('.player-select')
      .node()
      .value;

  console.log(selectedPlayerName);

  let player;
  let playerId;
  let playerAccountId;
  PlayerApiUtil.fetchPlayer(selectedPlayerName)
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

  const playerInfo = [player, selectedPlayerName, playerId, playerAccountId, matches];
  console.log(playerInfo);
  // return (playerInfo);
};
