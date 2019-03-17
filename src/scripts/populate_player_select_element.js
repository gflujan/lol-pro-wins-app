import * as LcsProPlayers from '../static_data/lcs_pro_players';

export const populatePlayerSelectElement = () => {
  const allLcsPlayers = LcsProPlayers.grabAllPlayerNames();
  const allLcsTeams = LcsProPlayers.grabAllTeamNames();
  d3.select('.player-select')
    .selectAll('option')
    .data(allLcsPlayers)
    .enter()
    .append('option')
    .attr('value', (playerName) => {
      return (playerName);
    })
    .text((playerName) => {
      return (playerName);
    });

  const selectedPlayerName = d3.select('.player-select')
    .node()
    .value
  d3.select('.player-name')
    .data(selectedPlayerName)
    .enter()
    .text((playerName) => {
      return (playerName);
    });
};
