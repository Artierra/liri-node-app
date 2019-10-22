# liri-node-app
This application will search Spotify for songs, Bands in Town for concerts and OMDB for movies.

**Installation Instructions**

The following node modules must be installed in order for the app to work: Moment, DotEnv, and Node-Spotify-API.

To run the application clone this repository to your computer and then run the following commands from a bash command line.

node liri.js concert-this 'artist/band name here" (in quotes to take queries with more than one word)- This will return upcoming concert information from Bands in Town. 

node liri.js spotify-this-song 'name of song' - This will return song information from Spotify. (in quotes to take queries with more than one word)

node liri.js movie-this '' - This will return information about movies from OMDB. (put this in quotes to take queries with more than one word)

node liri.js do-what-it-says - This will run a special command that is stored in a text file.

1. **App Overview** 
We are creating a command line interface application that retrieves information from three sources, BandsInTown, OMDB Movies and Spotify with specific commands created within the applications
   

2. **Architecture of the App:**

I have created several files:

-liri.js, the main app where queries can  be made

-random.txt - where we can store a command for liri to perform

   * the following two files afford protection of API keys and passwords*
-keys.js,  where we access key id information
-.env where we store our passwords and keys

In order to accomlish privacy we must also  work with modules (dotenv) that allow us to access information, and upload it to GitHub without sharing password IDs.

-gitignore- a file that tells the terminal what files not to load to Github:
set all the files you don't want loaded before you push anything to Github or they will be stored there in early versions.  I did not do this and there are some stray meaningless files in my repository now.

 Include in gitignore the.env files that contains your passwords, also the mode nodules because they are listed and contained in the package.json. THe .DS_Store file give information about your Mac folder settings and does not need to be shared. I also included practice and reference files I used to build my code.

-README.md- this file to explain my process


**The modules we will have are:**
 
    "api": "^1.0.0",
    "axios": "^0.19.0",
    "dotenv": "^8.2.0",
    "moment": "^2.24.0",
    "node": "^12.12.0",
    "node-spotify-api": "^1.1.1",
    "spotify": "^0.3.0"

5. **Link to the app**
    https://github.com/Artierra/liri-node-app

6. **Technologies used in the app**
    node.js and modules
    API calls 
    

7. This is a comand line interface application to practice and undersand the concepts in node.js and cli applications. 

8. **Screenshots of app functioning**
This is the format suggested to include a screenshot

Format: ![Alt Text](url)

![bands-in-town screenshot](https://github.com/Artierra/liri-node-app/blob/master/bands-in-townscreenshot.png)


![movie-this-screenshot](https://github.com/Artierra/liri-node-app/blob/master/movie-this%20screenshot.png)

![spotify-this-song](https://github.com/Artierra/liri-node-app/blob/master/spotify-this-song%20screenshot.png)

![spotify-this-song](https://github.com/Artierra/liri-node-app/blob/master/spotify-this-song%20screenshot.png)

