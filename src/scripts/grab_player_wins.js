import * as d3 from 'd3';
import * as PlayerApiUtil from '../../util/player_api_util';
import * as PlayerSelectElements from './populate_player_select_element';
import * as LcsProPlayers from '../static_data/lcs_pro_players';
import { addBars } from './generate_wins_bars.js';

export const grabPlayerOnlineWins = () => {
  const selectedPlayerName =
    d3.select('.player-select')
      .node()
      .value;

  const playerWinsInfo = {
    player:           null,
    playerId:         null,
    playerAccountId:  null,
    playerIGN:        null,
    playerRankedWins: 0,
  };

  PlayerApiUtil.fetchPlayer(selectedPlayerName)
    .then((fetchedPlayer) => {
      playerWinsInfo.player           = fetchedPlayer;
      playerWinsInfo.playerId         = fetchedPlayer.id;
      playerWinsInfo.playerAccountId  = fetchedPlayer.accountId;
      playerWinsInfo.playerIGN        = fetchedPlayer.name;

      PlayerApiUtil.fetchPlayerPositionsData(playerWinsInfo.playerId)
        .then((res) => {
          d3.select('.online-wins-svg').selectAll('g').remove();
          d3.select('.online-wins-field').selectAll('span').remove();
          playerWinsInfo.playerRankedWins = res[0].wins;
          return (playerWinsInfo.playerRankedWins);
        })
        .then((onlineWins) => {
          PlayerSelectElements.updateWinsInfo(onlineWins, 'online');
          addBars([onlineWins], 'online');
        });
    });
};

export const grabPlayerStageWins = () => {
  const selectedPlayerName =
    d3.select('.player-select')
      .node()
      .value;

  const teams = Object.values(LcsProPlayers.lcsTeams);

  let stageWins;
  teams.forEach((team) => {
    if (team.allPlayers.includes(selectedPlayerName)) {
      stageWins = team.teamWins['2019'].spring;
    }
  });
  d3.select('.stage-wins-svg').selectAll('g').remove();
  d3.select('.stage-wins-field').selectAll('span').remove();
  PlayerSelectElements.updateWinsInfo(stageWins, 'stage')
  addBars([stageWins], 'stage');
};
