// Step 1: Import your component
import * as React from "react";
// import { Link } from 'gatsby'
import Layout from "../components/layout";

// Step 2: Define your component
const PortfolioPage = () => {
  // create portfolio items

  // var a = new portfolioObj( "Train Schedules", "assets/images/trainTimes.png", "An app that allows user to store train times and learn when the next train arrives. Uses Firebase Real Time DB for data persistence!", "https://github.com/frdclav/TrainSchedule" )

  // var b = new portfolioObj( "GiphyAPI search interface", "assets/images/giphyAPI2.png", "An app that allows user to search for gifs using the giphy api ", "https://github.com/frdclav/giphyApi" )

  // var c = new portfolioObj( "Kpop Trivia with timer", "assets/images/trivia.png", "A simple trivia game app with timer", "https://github.com/frdclav/TriviaGame" )

  // var d = new portfolioObj( "Star Wars RPG!", "assets/images/sw_rpg.png", "A simple RPG fighting game. Player chooses a fighter and fights the others to get stronger. Last one standing wins! Coded with bootstrap, javascript and jquery ", "https://github.com/frdclav/unit-4-game" )

  // var e = new portfolioObj( "Word Guess Game", "assets/images/kpop_hangman_thumb.png", "A simple word guess game where players guess a letter or the entire word. The theme is K-Pop artists. Check it out on github below! ", "https://github.com/frdclav/word-guess-game" )

  // var f = new portfolioObj( "Netflix & Chill Generator", "", "A web app that provides users with a few random netflix selections based on mood/genre as well as suggestions for a type of cocktail to drink based on ingredients. The app utilizes the uNoGS and theCocktailDB apis as well as Materialize and sweetAlert2. This was a group project for my UCBX Full Stack Web Development cohort.", "https://github.com/frdclav/project-1" )

  // var g = new portfolioObj( "Liri-Node-App", "", "A CLI node app that allows the user to search for information on concerts, spotify songs, and movies. Uses node.js", "https://github.com/frdclav/liri-node-app" )

  // var h = new portfolioObj( "Bamazon", "", "A CLI node app that uses mysql database to present a storefront for user to make purchases and admins to keep track of and manage product stock.", "https://github.com/frdclav/bamazon" )

  // var i = new portfolioObj( "FriendFinder", "", "A web app built with nodeJS, express and deployed on heroku that allows users to take a survey and match with other compatible users. The app uses express to handle the api's necessary to get the app working.", "https://github.com/frdclav/friend-finder" )

  // var j = new portfolioObj( "Burgers!", "", "A web app built with nodeJS, express, handlebars, using an ORM to connect to a mysql database. This allows the user to record different burgers and keep track of whether the burger has been eaten or not. Simple app that stores data with mysql db.", "https://github.com/frdclav/burger" )

  // var k = new portfolioObj( "thundertunes", "", "A web app that allows users to upload music, sound tracks, and other audio files to share and collaborate with other artists. The app is built using nodejs, express, howlerjs for handling audio playback, amazon s3 for handling sound file storage, mysql for metadata on tracks. Check it out on heroku at project2berkeley.herokuapp.com", "https://github.com/frdclav/project2" )

  // var l = new portfolioObj( "superfuturescraper", "", "A web app that allows users to scrape superfuture.com for the latest posts/articles, and leave comments on the articles. Articles are saved to mongodb. App uses mongoose, express, handlebars, cheerio and axios. Check it out: https://superfuturescraper.herokuapp.com/", "https://github.com/frdclav/mongoose-hw" )

  // var m = new portfolioObj( "moto-weather", "", "A web app aimed at motorcycle riders. The app helps users to plan motorcycle rides by allowing them to see the weather a different points in thier specified route. The app is built on the MERN stack and also implements react-map-gl, Deck.gl, and axios to make API calls to the OpenWeatherMap API. Check it out: http://moto-weather.herokuapp.com/", "https://github.com/frdclav/riders-on-the-storm-proj3" )

  // var listOfPortfolioItems = [ m, l, k, f ]

  // listOfPortfolioItems.forEach(element => {
  //     element.showItem();
  // })
  return (
    <Layout pageTitle="Portfolio">
      <div style={{ padding: "10px" }}>
        <h5>Rodsqueue</h5> <h6>Twitch chatbot and queue utility</h6>
        <p>
          Application built on NodeJS/Express/React/Firebase that integrates the
          Twitch Chat bot commands with Shopify API to handle queue and orders
          for livestream card rips. App allows users to link to their Shopify
          store, and users who make purchases in Shopify are able to confirm and
          queue in during livestreams via the Twitch Chat bot. Project is
          currently in progress.
        </p>
        <span>
          <a href="https://github.com/frdclav/rodsqueue-twitch-chat-bot">
            -> github
          </a>
        </span>
      </div>
      <div style={{ padding: "10px" }}>
        <h5>MotoWeather</h5>{" "}
        <h6>
          App for planning motorcycle rides around the weather through route
        </h6>
        <p>
          Application aimed at helping motorcycle riders plan rides by allowing
          users to check specific weather forecasts across their intended route.
          Project uses the Mapbox and OpenWeather APIs and is built on the MERN
          stack.
        </p>
        <span>
          <a href="https://github.com/frdclav/riders-on-the-storm-proj3">
            -> github
          </a>
        </span>
      </div>
      <div style={{ padding: "10px" }}>
        <h5>ThunderTunes</h5> <h6>Sound clip upload and sharing app</h6>
        <p>
          Application aimed at musicians for sharing sound clips. Site allows
          upload of audio files and features a universal stream/timeline of
          sound posts for users to browse and listen to. Project uses Firebase,
          Ajax, S3 for file storage and Howler.JS for audio playback.
        </p>
        <span>
          <a href="https://github.com/JWsoundsystems/project2">-> github</a>
        </span>
      </div>
    </Layout>
  );
};

// Step 3: Export your component
export default PortfolioPage;
