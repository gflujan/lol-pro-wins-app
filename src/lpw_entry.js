import './stylesheets/application.scss';
import {
  grabPlayerRiotWins,
} from './scripts/grab_player_riot_wins';
import { populatePlayerSelectElement } from './scripts/populate_player_select_element';
import { addBars } from './scripts/generate_wins_bars.js';

// Find a way to insert the team names before each group of players
document.addEventListener('DOMContentLoaded', () => {
  populatePlayerSelectElement();

  // d3.select('.player-select')
  //   .on('change', addBars)
  const data = [80, 120, 60, 150, 200];
  addBars(data, 'online');
  addBars(data, 'stage');
});
