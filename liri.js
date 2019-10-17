require("dotenv").config();
var fs = require('fs');
var keys = require("./keys.js");
// var request = require('request');
var axios = require("axios");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var question = process.argv[3];

function switchCase() {

    switch (action) {

        case 'concert-this':
            bands(question);
            break;

        case 'spotify-this-song':
            spotSong(question);
            break;

        case 'movie-this':
            movieInfo(question);
            break;

        case 'do-what-it-says':
            getRandom();
            break;

        default:
            logIt("Invalid Instruction");
            break;
            console.log(action);
    }
};


function movieInfo(question) {
    var findMovie;
    if (parameter === undefined) {
        findMovie = "Mr. Nobody";
    } else {
        findMovie = question;
    };

    // Store all of the arguments in an array
    var nodeArgs = process.argv;

    // Create an empty variable for holding the movie name
    var movieName = "";

    // Loop through all the words in the node argument
    // And do a little for-loop magic to handle the inclusion of "+"s
    for (var i = 2; i < nodeArgs.length; i++) {

        if (i > 2 && i < nodeArgs.length) {
            movieName = movieName + "+" + nodeArgs[i];
        } else {
            movieName += nodeArgs[i];

        }
    }

    // Then run a request with axios to the OMDB API with the movie specified

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // This line is just to help us debug against the actual URL.

    console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Year);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.Rating);
                console.log("Country where it was produce: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.Actors);
            })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });
}

function bands(question) {

    var queryUrl = "https: rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // This line is just to help us debug against the actual URL.

    console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                console.log("Venue: " + response.data.Title);
                console.log("Location: " + response.data.Year);
                console.log("date: " + response.data.Rating);

            })
        .catch(function (error) {
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.log("---------------Data---------------");
                console.log(error.response.data);
                console.log("---------------Status---------------");
                console.log(error.response.status);
                console.log("---------------Status---------------");
                console.log(error.response.headers);
            } else if (error.request) {
                // The request was made but no response was received
                // `error.request` is an object that comes back with details pertaining to the error that occurred.
                console.log(error.request);
            } else {
                // Something happened in setting up the request that triggered an Error
                console.log("Error", error.message);
            }
            console.log(error.config);
        });

    // var queryURl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp");

    //what the user should be able to use 
    //setting up a series of functions (switch, case case )about 40
    //write to file


    // // creates the printInfo method and applies it to all programmer objects
    // Programmer.prototype.printInfo = function () {
    //     console.log("Name: " + this.name + "\nPosition: " + this.position + "\nAge: " +
    //         this.age + "\nLanguages: " + this.language);
    // };



    // 9. Make it so liri.js can take in one of the following commands:

    //     *
    //     `concert-this`

    //     *
    //     `spotify-this-song`

    //     *
    //     `movie-this`

    //     *
    //     `do-what-it-says`

    // ### What Each Command Should Do

    // 1. `node liri.js concert-this <artist/band name here>`

    //     *
    //     This will search the Bands in Town Artist Events API(`"https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"`) for an artist and render the following information about each event to the terminal:

    //     *
    //     Name of the venue

    //     *
    //     Venue location

    //     *
    //     Date of the Event(use moment to format this as "MM/DD/YYYY")

    //     *
    //     ** Important **: There is no need to sign up
    // for a Bands in Town `api_id`
    // key.Use the `codingbootcamp`
    // as your `app_id`.For example, the URL used to search
    // for "Celine Dion"
    // would look like the following:

    //     *
    //     `https://rest.bandsintown.com/artists/celine+dion/events?app_id=codingbootcamp`
    // for (var i = 3; i < process.argv.length; i++) {
    //     if (i >= 4) {
    //         userQuery += (" " + process.argv[i].toLowerCase())
    //     } else {
    //         userQuery = (process.argv[i]).toLowerCase()
    //     }
}