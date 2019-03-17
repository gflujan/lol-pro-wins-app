import * as PlayerApiUtil from '../../util/player_api_util';
import { addBars } from './generate_wins_bars.js';
import * as PlayerSelectElements from './populate_player_select_element';

export const grabPlayerOnlineWins = () => {
  const selectedPlayerName =
    d3.select('.player-select')
      .node()
      .value;

  const playerWinsInfo = {
    player: null,
    playerId: null,
    playerAccountId: null,
    playerIGN: null,
    playerRankedWins: 0,
  };

  PlayerApiUtil.fetchPlayer(selectedPlayerName)
    .then((fetchedPlayer) => {
      playerWinsInfo.player = fetchedPlayer;
      playerWinsInfo.playerId = fetchedPlayer.id;
      playerWinsInfo.playerAccountId = fetchedPlayer.accountId;
      playerWinsInfo.playerIGN = fetchedPlayer.name;

      PlayerApiUtil.fetchPlayerPositionsData(playerWinsInfo.playerId)
        .then((res) => {
          d3.select('.online-wins-svg').selectAll('g').remove();
          d3.select('.stage-wins-svg').selectAll('g').remove();
          playerWinsInfo.playerRankedWins = res[0].wins;
          return (playerWinsInfo.playerRankedWins);
        })
        .then((wins) => {
          PlayerSelectElements.updateWinsInfo(wins, 'online');
          addBars([wins], 'online');
        });
    });
};
