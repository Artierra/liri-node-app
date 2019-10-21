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

// // Loop through all the words in the node argument
// // And do a little for-loop magic to handle the inclusion of "+"s
// for (var i = 2; i < question.length; i++) {

//     if (i > 2 && i < question.length) {
//         movieName = movieName + "+" + question[i];
//     } else {
//         movieName += question[i];

//     }
// }


function movieInfo(question) {
    // Create an empty variable for holding the movie name
    var movieName = "";

    if (question === undefined) {
        movieName = "Mr. Nobody";
        //alert('NO MOVIE ENTERED');
    } else {
        movieName = question;
    };



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
    var artist = question;
    if (artist === undefined) {
        artist = "Celine Dion";
        // alert('No band entered');
    }

    var queryUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";

    //console.log(queryUrl);

    axios.get(queryUrl).then(
            function (response) {
                console.log(response.data[0]);

                console.log("Venue: " + response.data[0].venue.name);
                console.log("Location: " + response.data[0].venue.city);
                console.log("Location: " + response.data[0].venue.region);
                console.log("date: " + response.data[0].datetime);

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

    if (question === undefined) {
        songName = "The Sign";

    } else {
        songName = question;
    }

    spotify.search({
        type: 'track',
        query: songName
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0]);
        //for (var i = 0; i < songs.length; i++) {
        console.log("\n---------------------------------------------------\n");
        console.log("Artist: " + data.tracks.items[0].artists[0].name);
        console.log("Song Name: " + data.tracks.items[0].name);
        console.log("Preview Song: " + data.tracks.items[2].preview_url);
        console.log("album: " + data.tracks.items[0].album.name)
        console.log("\n---------------------------------------------------\n");

    });
};


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