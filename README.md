# liri-node-app
1. **App Overview** 
We are creating a command line interface application that retrieves information from three sources, BandsTown, OMDB Movies and Spotify with specific commands created within the applications
   

2. **Architecture of the App:**

I have created several files:
-liri.js, the main app where queries can  be made
-keys.js,  where we access key id information
-random.txt 
-.env where we store our passwords and keys
-gitignore- a file that tells the terminal what files not to load to Github:
set all the files you don't want loaded before you push anything to Github or they will be stored there in early versions.  I did not do this and there are some stray meaningless files in my repository now

-README.md- this file to explain my process

In order to accomlish this we must work with modules that allow us to access information, and upload it to GitHub without sharing password IDs.

**The modules we will have are:**
 
    "api": "^1.0.0",
    "axios": "^0.19.0",
    "dotenv": "^8.2.0",
    "moment": "^2.24.0",
    "node": "^12.12.0",
    "node-spotify-api": "^1.1.1",
    "spotify": "^0.3.0"
 
3. Give start-to-finish instructions on how to run the app

4. Include screenshots, gifs or videos of the app functioning

5. **Link to the app**
    https://github.com/Artierra/liri-node-app

6. **Technologies used in the app**
    This app uses node.js and modules

7. I am trying to undersand the concepts in node.js and cli applications by developing this applications.
    