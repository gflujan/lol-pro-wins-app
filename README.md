# LoL Pro Wins App

[Live Demo!](https://lol-pro-wins.herokuapp.com/)

## Synopsis
This is a data visualization project to attempt to show the correlation between a League of Legends pro player's Solo Queue win rate vs. their on-stage competitive win rate.

## Background & Overview
League of Legends is currently the biggest eSports game in the world. It's latest World Championships (in Dec. 2018) gathered approximately 100 million viewers (online). Which, by comparison, is on par with this year's (2019) Super Bowl (approx. 98 million viewers). Their professional players are starting to become full-fledged celebrities with endorsements, sponsorships and rising fan bases.

My interest for this project comes from the fact that I am a huge fan of the game. Before starting AppAcademy, I played it regularly and very much enjoy their eSports scene. I have tended to prefer watching their broadcasts online instead of traditional TV or other traditional media.

As a fan, and with my desire to become a full-time developer, I am very interested in merging these two worlds together.

## Functionality & MVP Features
The functionality of this project will be a data visualization to show the correlation between a pro players solo, online ranked queue win rate and their competitive, on-stage team play & win rate.

My list of MVP's are:

* Pro Player Lookup & Results
    * The search results will be confined to North America to start
    * User ability to enter a pro players name & search for both of their win rates
    * The data will be shown as "online ranked wins" & "on-stage wins"
* In-Game Minimap Heatmap Example
    * This will display the locations played of all games for that user
* D3.js visualization of wins per "Split"
    * A "split" is a mini-season that competitive play is measured by
    * There are 2 splits per calendar year
    * I will include, at minimum, the last 2 years (2017-2019)
* (Potential Bonus Feature) Comparison of two or more players, possibly a head-to-head account of results

## Architecture & Technologies
1. Architecture 
   * RootFolder 
      * dist/ 
         * index.html 
         * bundle.js
      * src/ 
         * lpw_entry.js 
      * package.json 
      * webpack.config.js
2. Technologies 
   * Riot Games Developer API 
      * I will be querying their API/database for user entered names of pro players
      * I will be parsing through their data to get relevant win results 
      * I will then compare that data to archived on-stage competitive play wins
      * This is the crux of this project. Without it, it would be a much more tedious (and manual) process to get results of a pro players online wins 
   * D3.js 
      * I will use this library to "prettify" my data

## Data & API's
1) Riot Games Developer API 
   * I will need a simple backend to query the API from Riot Games 
   * This is due to the fact that users will be able to search for any current, existing pro player and the search will need to be dynamic based on the current data provided by Riot Games 
   * To avoid any potential legal risks or violations of Riot's TOS, I will not be storing any of this data in a database 
   * All data will be individual requests to their API 
   * Also, due to their enforcement of rate limits (i.e. num requests per second), I will try to enforce my own restriction of how many can be requests made, and how quickly 
   * Possible Endpoints (all will be GET requests): 
      * /lol/champion-mastery/v4/champion-masteries/by-summoner/{encryptedSummonerId} 
      * /lol/champion-mastery/v4/scores/by-summoner/{encryptedSummonerId} 
      * /lol/league/v4/challengerleagues/by-queue/{queue} 
      * /lol/league/v4/positions/by-summoner/{encryptedSummonerId} 
      * /lol/match/v4/matches/{matchId} 
      * /lol/match/v4/timelines/by-match/{matchId} 
      * /lol/summoner/v4/summoners/by-name/{summonerName}

## Implementation Timeline
1. Day One 
   * Implementation and build out of a basic backend to talk with Riot Games' API 
   * Create the skeleton for my project 
   * Create wireframes 
   * Decide on a color scheme/palette and fonts to be used project wide
2. Day Two 
   * Research D3 info and tutorials 
   * Create routes and Axios calls to retrieve data from Riot Games API 
   * Aggregation of historical data pertaining to pro players on-stage, competitive play win rates
3. Day Three 
   * Build out sidebar to be used for selections entry 
   * Build out data visualizations, structure for info & prettify it
4. Day Four 
   * BONUS: Build minimap heatmap

## Future Features & Tasks 
* Change visualization type
    * the user can switch between a bar chart, a pie graph and some other option(s) 
    * these other options may or may not have more/less info 


