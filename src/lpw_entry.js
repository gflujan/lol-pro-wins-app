import * as d3 from 'd3';
import './stylesheets/application.scss';
import {
  populatePlayerSelectElement,
} from './scripts/populate_player_select_element';
import {
  grabPlayerOnlineWins,
  grabPlayerStageWins,
} from './scripts/grab_player_wins';
import {
  openAboutLpwModal,
  closeAboutLpwModal,
} from './scripts/about_lpw_modal';

// Find a way to insert the team names before each group of players
document.addEventListener('DOMContentLoaded', () => {
  populatePlayerSelectElement();
  // populateSplitSelectElement();

  const renderSelectedPlayer = () => {
    grabPlayerOnlineWins();
    grabPlayerStageWins();
  };

  d3.select('.player-select')
    .on('change', renderSelectedPlayer);

  document.getElementById('about').addEventListener('mouseover', openAboutLpwModal);
  document.getElementById('about').addEventListener('mouseout', closeAboutLpwModal);
  // document.getElementById('about').addEventListener('click', (about) => {
  //   (about.className === 'is-open') ? closeAboutLpwModal() : openAboutLpwModal()
  // });
});
