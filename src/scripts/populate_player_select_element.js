import * as LcsProPlayers from '../static_data/lcs_pro_players';

export const populatePlayerSelectElement = () => {
  let currName;
  const allLcsPlayers = LcsProPlayers.grabAllPlayerNames();
  const allLcsTeams = LcsProPlayers.grabAllTeamNames();
  d3.select('.player-select')
    .selectAll('option')
    .data(allLcsPlayers)
    .enter()
    .append('option')
    .text((playerName) => {
      currName = playerName;
      // d3.select('.player-select')
      //   .attr('value', currName)
      return (playerName)
    });
};
