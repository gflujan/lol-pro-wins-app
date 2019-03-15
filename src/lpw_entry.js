// VERSION 1.0
// import _ from 'lodash';

// function component() {
//   let element = document.createElement('div');
//   element.innerHTML = _.join(['Bueller', 'lives', 'here'], ' ');
//   return element;
// };

// document.body.appendChild(component());

/* ---------------------------------------------
// VERSION 2.0
--------------------------------------------- */
// Importing the main SCSS/CSS file that will then import other stylesheets
import './stylesheets/application.scss';
import {
  grabPlayerRiotWins
} from './scripts/grab_player_riot_wins';
import * as LcsProPlayers from './static_data/lcs_pro_players';

// Find a way to insert the team names before each group of players
document.addEventListener('DOMContentLoaded', () => {
  const allLcsPlayers = LcsProPlayers.grabAllPlayerNames();
  const allLcsTeams = LcsProPlayers.grabAllTeamNames();
  d3.select('.player-select')
    .selectAll('option')
    .data(allLcsPlayers)
    .enter()
    .append('option', 'disabled')
    .text((playerName) => {
      return (playerName)
    })
    .on('change', grabPlayerRiotWins);
});
