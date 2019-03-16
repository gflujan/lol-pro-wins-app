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
import { populatePlayerSelectElement } from './scripts/populate_player_select_element';

// Find a way to insert the team names before each group of players
document.addEventListener('DOMContentLoaded', () => {
  populatePlayerSelectElement();

  d3.select('.player-select')
    .on('change', () => {});

  const addBars = () => {
    const data = [80, 120, 60, 150, 200];
    const barHeight = 20;
    d3.select('.ranked-wins-svg')
      .selectAll('rect')
      .data(data)
      .enter()
      .append('rect')
      .attr('width', 100)
      .attr('height', barHeight - 1)
      .attr('fill', 'white')
      .attr('transform', (d, i) => {
        return ('translate(0,' + i * barHeight + ')');
      })
  };

  d3.select('.player-select')
    .on('change', addBars)
});
