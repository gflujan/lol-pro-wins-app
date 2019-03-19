// READ THIS
// https://developer.riotgames.com/getting-started.html
const riot = require('./config/keys').riotGamesApi;
const express = require('express');
const app = express();
const path = require('path');
const fetch = require('node-fetch');
const PORT = process.env.PORT || 8000;
const api_path = 'https://na1.api.riotgames.com/lol';

// This logic is used for Heroku deployment
// to make sure we don't have "run build" before pushing to Heroku
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  })
}

/* ---------------------------------------------
// FIND A PRO PLAYER BY THEIR SUMMONER NAME
--------------------------------------------- */
app.get('/player/:name', (req, res) => {
  const summonerName = req.params.name;
  fetch(`${api_path}/summoner/v4/summoners/by-name/${summonerName}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "player" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// GET ALL OF A PRO PLAYERS MATCHES
--------------------------------------------- */
app.get('/matchlist/:encryptedAccountId', (req, res) => {
  const encryptedAccountId = req.params.encryptedAccountId;
  fetch(`${api_path}/match/v4/matchlists/by-account/${encryptedAccountId}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "matchlist" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// FIND A SPECIFIC MATCH
--------------------------------------------- */
app.get('/matches/:matchId', (req, res) => {
  const matchId = req.params.matchId;
  fetch(`${api_path}/match/v4/matches/${matchId}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "matches" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// GET WINS/LOSSES/POINTS DATA FOR A PLAYER
--------------------------------------------- */
app.get('/positions/:encryptedSummonerId', (req, res) => {
  const encryptedSummonerId = req.params.encryptedSummonerId;
  fetch(`${api_path}/league/v4/positions/by-summoner/${encryptedSummonerId}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "positions" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// GET A PRO PLAYERS CURRENT CHAMPION MASTERIES LEVEL
--------------------------------------------- */
app.get('/summoner-masteries/:encryptedSummonerId', (req, res) => {
  const encryptedSummonerId = req.params.encryptedSummonerId;
  fetch(`${api_path}/champion-mastery/v4/champion-masteries/by-summoner/${encryptedSummonerId}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "summoner-masteries" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// GET A PRO PLAYERS CHAMPION MASTERY SCORE
--------------------------------------------- */
app.get('/scores/:encryptedSummonerId', (req, res) => {
  const encryptedSummonerId = req.params.encryptedSummonerId;
  fetch(`${api_path}/champion-mastery/v4/scores/by-summoner/${encryptedSummonerId}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "scores" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// GET ALL PLAYERS FROM A SPECIFIC SOLO QUEUE CHALLENGER LEAGUE
--------------------------------------------- */
app.get('/challenger-queue/:queue', (req, res) => {
  const queue = req.params.queue;
  fetch(`${api_path}/league/v4/challengerleagues/by-queue/${queue}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "queue-leagues" ERROR, GABE! -----');
      console.log(err);
    });
});
/* ---------------------------------------------
// GET A PRO PLAYERS MATCH TIMELINES
// (i.e. HEATMAP COORDS/DATA?)
--------------------------------------------- */
app.get('/match-timelines/:matchId', (req, res) => {
  const matchId = req.params.matchId;
  fetch(`${api_path}/match/v4/timelines/by-match/${matchId}?api_key=${riot}`)
    .then((res) => {
      return (res.text());
    })
    .then((body) => {
      const results = JSON.parse(body);
      res.send(results);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A BACKEND "match-timelines" ERROR, GABE! -----');
      console.log(err);
    });
});

app.listen(PORT, () => {
  console.log('--- END OF APP.js FILE ---');
  console.log(__dirname);
  console.log(`listening on ${PORT}`);
  console.log('--- END OF APP.js FILE ---');
});
