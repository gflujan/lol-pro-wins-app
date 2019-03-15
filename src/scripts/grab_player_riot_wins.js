import * as PlayerApiUtil from '../../util/player_api_util';

export const grabPlayerRiotWins = (playerDisplayName) => {
  // make an object for this
  // let player;
  // let playerId;
  // let playerAccountId;
  // let playerIGN;
  // let playerRankedWins = 0;

  const playerWinsInfo = {
    player: null,
    playerId: null,
    playerAccountId: null,
    playerIGN: null,
    playerRankedWins: 0,
  };

  PlayerApiUtil.fetchPlayer(playerDisplayName)
    .then((fetchedPlayer) => {
      playerWinsInfo.player = fetchedPlayer;
      playerWinsInfo.playerId = fetchedPlayer.id;
      playerWinsInfo.playerAccountId = fetchedPlayer.accountId;
      playerWinsInfo.playerIGN = fetchedPlayer.name;

      PlayerApiUtil.fetchPlayerPositionsData(playerWinsInfo.playerId)
        .then((res) => {
          playerWinsInfo.playerRankedWins = res[0].wins;
          console.log(playerWinsInfo);
          return (playerWinsInfo);
        });
    });
};
