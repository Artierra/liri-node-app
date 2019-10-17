
search: function ({
    type: 'artist OR album OR track',
    query: 'My search query',
    limit: 20
}, callback);
var spotify = new Spotify({
    id: < your spotify client id > ,
    secret: < your spotify client secret >
});

spotify.search({
    type: 'track',
    query: 'All the Small Things'
}, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }

    console.log(data);
});



// This package also optionally works with promises.
// Just omit the callback parameter and the search method 
//returns a promise object containing the response:
        
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: < your spotify client id > ,
    secret: < your spotify client secret >
});

spotify
    .search({
        type: 'track',
        query: 'All the Small Things'
    })
    .then(function (response) {
        console.log(response);
    })
    .catch(function (err) {
        console.log(err);
                });
            
 {/* //request can be used to make API requests to any Spotify endpoint you supply. */}

var Spotify = require('node-spotify-api');

var spotify = new Spotify({
    id: < your spotify client id > ,
    secret: < your spotify client secret >
});

spotify
    .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.error('Error occurred: ' + err);
                        });
                    
    {/* //get method */}
    etch("https://api.spotify.com/v1/audio-analysis/6EJiVf7U0p1BBfs0qqeb1f", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${userAccessToken}`
            }
        })
        .then(response => response.json())
        .then(({
            beats
        })) => {
            beats.forEach((beat, index) => {
                console.log(`Beat ${index} starts at ${beat.start}`);
            })
        }