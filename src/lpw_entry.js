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
import { grabPlayerRiotWins } from './scripts/grab_player_riot_wins';

document.addEventListener('DOMContentLoaded', () => {
  // let name = 'nneurall';
  // grabPlayerRiotWins(name);
});
