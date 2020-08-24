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

# Webpack!

* takes in the packages such as react, bootstrap, ect. and saves tehm locally via npm packages. 
* bundles all of you source code (src), to optimize UX and serve it as distribution dir (dist) in a bundle.js to be used from the html.

* dev dependecies
    * webpack
    * webpack-cli (command line interface)
* you don't want to install webpack globally because projects can have conflicting versions.
    * npm install -g (installs globally, be weary about it)
* package json build webpack includes --watch
    * looks for changes in any of the resolved files. 
* plugins: [new NameOfThePlug()]

## activity 19
* *Functional Programing*
    * for things that are not real work related and Object oriented programming would to work. 
    * making the distinction between the two is important to know. 

* Import {function/method} from "./file";
    * bring in (imports) the specific function from an outside file.

* in webpack config
    * new module: that contains rules that are presented in an array []
        * test: code on line 11, says find all js files
        * exclude: node_modules
        * use: 
            * Babel
                * takes all of the code and compiles it to the lowest common denominator of the language ex. ES5 from ES6;


# REACT
* allows for testable front end because of the  component
* helps bridge the gap between designers and developers
* allows for reusable code (components)
* React only manipulates the virtual DOM. 
    * compares the virtual DOM and the real DOM, and only updates the components that are changed
        * this helps avoid isues of reloading the entire DOM

* React and React Native are not the same 
* with React we build a SPA Single  Page Application, that continueously uses the index page and is being altered by react
