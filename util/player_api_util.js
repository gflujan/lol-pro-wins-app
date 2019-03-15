import axios from 'axios';

export const fetchPlayer = (playerName) => {
  return (axios.get(`/player/${playerName}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "player" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchPlayerMatchlist = (encryptedAccountId) => {
  return (axios.get(`/matchlist/${encryptedAccountId}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "matchlist" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchMatch = (matchId) => {
  return (axios.get(`/matches/${matchId}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "matches" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchPlayerPositionsData = (encryptedSummonerId) => {
  return (axios.get(`/positions/${encryptedSummonerId}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "positions" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchPlayerMasteries = (encryptedSummonerId) => {
  return (axios.get(`/summoner-masteries/${encryptedSummonerId}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "summoner-masteries" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchPlayerScores = (encryptedSummonerId) => {
  return (axios.get(`/scores/${encryptedSummonerId}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "scores" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchAllChallengerPlayers = (queue) => {
  return (axios.get(`/challenger-queue/${queue}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "queue-leagues" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
export const fetchPlayerMatchTimelines = (matchId) => {
  return (axios.get(`/match-timelines/${matchId}`)
    .then((res) => {
      console.log(res);
      return (res.data);
    })
    .catch((err) => {
      console.log('----- YOU HAVE A FRONTEND "match-timelines" ERROR, GABE! -----');
      console.log(err);
    })
  );
};
