import * as d3 from 'd3';
import './stylesheets/application.scss';
import {
  grabPlayerOnlineWins,
  grabPlayerStageWins,
} from './scripts/grab_player_wins';
import {
  populatePlayerSelectElement,
  changePlayerNameDisplay,
} from './scripts/populate_player_select_element';

// Find a way to insert the team names before each group of players
document.addEventListener('DOMContentLoaded', () => {
  populatePlayerSelectElement();

  const renderSelectedPlayer = () => {
    changePlayerNameDisplay();
    grabPlayerOnlineWins();
    grabPlayerStageWins();
  };

  d3.select('.player-select')
    .on('change', renderSelectedPlayer);
});
