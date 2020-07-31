# Performance Scalability

## Things that affect performance
* Distance
    * the physical distance the information needs to travel
* (file size) The size of the application
    * The web app is temporarily saved on your device.
* Complexity
    * how the code is written
        * time complexity
            * the number of times that something is running 
        * space (memory) complexity 
            * how much working storage an algorithm needs 

## Ways to increase performance
* reduce the distance to users
* making the application smaller and more *compact*
* reduce the complexity of the application


# Chrome tools
* Elements
    * Shows the DOM (document object model)
    * informs you of how thing in the DOM are manipulated
* Console
    * where the javascript engine runs
    * can be used to test things that exist in the app
* Sources
    * files that are saved and retain data from the user
    * these are not cookies
* Network
    * contains all of the files and documents
    * shows you the *noise*
        * information about how long it took to load 
        * HXR which is equivalent to ajax calls. 
    * can be used to mimic a varied connections. 
* Performance
    * can record performance of the website and screenshot (highlight) areas that are problematic. 
* Memory
* Security
    * informs us of trustworthyness of the app
* Lighthouse
    * Gives you statistics of your webb app.
    * Items such ass performance, accessibility, best practices, SEO, and Progressive Web App.

## Minification
* the process of removing unnecessary or redundant data without affecting how the resource is processed by the browser
* removes whitespace
* will probably not affect functionality

## Uglification
* makes code unreadable making variables less verbose. 
* could break functionality because it is changing variables. 

## Compression


## Lazy Loading
* intersection observer
    * gives you different commands 

## PWA (progressive web apps)
* web applications that use web browser APIs to enhance user experience
* Linkability
    * when users are able to create a link for your application vs having to download an app.
* built and enhanced with browser api to deliver native-like "capabilities, reliability, and installability" 
* Works for every user regardless of browser choice

* Manifest
    * required for a PWA
    * inside we find these of many
        * short_name --> name presented if there is not enough space to present full name
        * name --> found on top of browser
        * icon --> varying sizes
        * start_url --> tell where the project starts
        * background_color --> color for the app, white, darkmode, 
        * display --> how is this going to display on the device. Standalone = looks and feels like a standalon application. 
        * 

## Service worker
* files_to_cache: 
    * and array of all of the files that need to be cached

* cache_name: 
    * which version is used, static
* data_cache_name:  
    * data version cache used
* Self
    * refers to the entire file itself, in our case is the service-worker.js
    * 