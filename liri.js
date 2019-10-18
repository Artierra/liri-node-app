require("dotenv").config();
var fs = require('fs');

//this var requires  the keys file
var keys = require("./keys.js");
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var request = require('request');
var axios = require("axios");
var action = process.argv[2];
var question = process.argv[3];

// function switchCase() {

//     switch (action) {
//         case 'concert-this':
//             bands(question);
//             break;

//         case 'spotify-this-song':
//             spotSong(question);
//             break;

//         case 'movie-this':
//             movieInfo(question);
//             break;

//         case 'do-what-it-says':
//             getRandom();
//             break;

//         default:
//             logIt("Invalid Instruction");
//             break;
//             console.log(action);
//     }
//};

function movieInfo(question) {
    // Create an empty variable for holding the movie name
    var movieName = undefined;

    if (question === undefined) {
        movieName = "Mr. Nobody";
        //alert('NO MOVIE ENTERED');
    } else {
        movieName = question;
    };

    // Store all of the arguments in an array

    // movieName = process.argv[3];
    // var nodeArgs = process.argv;
    // // Loop through all the words in the node argument
    // // And do a little for-loop magic to handle the inclusion of "+"s
    // for (var i = 2; i < nodeArgs.length; i++) {

    //     if (i > 2 && i < nodeArgs.length) {
    //         movieName = movieName + "+" + nodeArgs[i];
    //     } else {
    //         movieName += nodeArgs[i];

    //     }
    // }


    // Then run a request with axios to the OMDB API with the movie specified

    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
    // This line is just to help us debug against the actual URL.

    console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                console.log(response.data)
                console.log("Title: " + response.data.Title);
                console.log("Release Year: " + response.data.Released);
                console.log("IMDB Rating: " + response.data.imdbRating);
                console.log("Rotten Tomatoes Rating: " + response.data.tomatoRating);
                console.log("Country where it was produce: " + response.data.Country);
                console.log("Language: " + response.data.Language);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
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
    var artist = undefined;
    if (question === undefined) {
        band = "Celine Dion";
        alert('No band entered');
    } else {
        artist = question;
    }

    var queryUrl = "https: rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    // This line is just to help us debug against the actual URL.
    //     *

    // for (var i = 3; i < process.argv.length; i++) {
    //     if (i >= 4) {
    //         userQuery += (" " + process.argv[i].toLowerCase())
    //     } else {
    //         userQuery = (process.argv[i]).toLowerCase()
    //     }
    console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                console.log(response.data);
                // console.log("Venue: " + response.data.);
                // console.log("Location: " + response.data.);
                // console.log("date: " + response.data.);

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


function spotSong(question) {
    var songs = undefined;

    if (question === undefined) {
        songs = "Let it Be";

    } else {
        songs = question;
    };
    spotify.search({
        type: 'track',
        query: 'All the Small Things'
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.item);
        for (var i = 0; i < songs.length; i++) {
            console.log(i);
            console.log("Artist: " + songs[i].artist);
            console.log("Song Name: " + songs[i].name);
            console.log("Preview Song: " + songs[i].preview_url);
            console.log("album: " + songs[i].album.name)
        }


    });

}



function getRandom() {
    fs.readFile('random.txt', 'utf8', function (err, data) {
        if (err) throw err;
        console.log(data);
    });
}

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
            break;
            console.log("Liri does not know that");
    }
}
switchCase();