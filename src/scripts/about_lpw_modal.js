export const openAboutLpwModal = () => {
  const description =
    `LoL Pro Wins is a data visualization app that aims to show the correlation between a League of Legends pro player's online/solo wins vs. their on-stage/team wins. <br /><br /> The data covers a player's main team wins during the regular season from 2017-2019. <br /><br /> The data is then compared on a direct, 1-to-1 basis, per split.`;
  const about = document.getElementById('about');

  about.classList.toggle('is-open');
  about.style.width = '400px';
  about.style.height = '200px';
  about.style.padding = '1em';
  about.style.fontSize = '1.3em';
  setTimeout(() => {about.innerHTML = description}, 500);
};

export const closeAboutLpwModal = () => {
  const title = 'What is LPW?';
  const about = document.getElementById('about');

  about.classList.toggle('is-open');
  about.style.width = '6em';
  about.style.height = '1em';
  about.style.padding = '.5em';
  about.style.fontSize = '1.5em';
  setTimeout(() => {about.innerHTML = title}, 150);
};
