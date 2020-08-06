# Hello React

In this activity, we will dissect a simple React application.

## Instructions

* If you haven't already, generate a starter React app using Create React App. You can do this by running `npx create-react-app reactpractice`. We will run all of the activity code today inside of this boilerplate, as to avoid constantly reinstalling the same node modules.

* Once you have a `reactpractice` React app generated, delete the `src` folder inside of your starter app and replace it with the [src](Unsolved/src) provided with this activity.

* Start the app by running `npm start` in your terminal, take a moment to study the HTML code being rendered in the browser at [http://localhost:3000](http://localhost:3000).

### HelloReact.js

* Then go into the `src` folder and with your partner, try to answer the following questions:

  * What's happening inside of `src/components/HelloReact.js`? 
    * Importing the react module,
    * contains the function that creates a 'Hello World' in p tag
    * exports the function

  * How does it relate to the content being rendered to the browser?
    * It is the function that used. 

### App.js

* Open the `src/App.js` file, what's going on in this file? Try to answer the following questions:

  * What does the `App` function return?
    * returns the JSX tag HelloReact that simultaneously uses the p tact form the components/ HelloReact

  * Why do we import the React library? We aren't using the React keyword anywhere. Is it possible to remove this and still have our code work?
    * No, because it is being used int the tag because of the default

### index.js

* Open the `src/index.js` file and go over the code. Notice that we're importing the `ReactDOM` library. Try to answer the following questions:

  * Do you remember what the purpose of `ReactDOM.render` is? What is it doing?
    * creates a virtual instance of the DOM and compares for changes to the Real DOM

  * Is this where our components are rendered to the DOM?
    * yes-ish

  * Instead of splitting our files up into `App`, `components/HelloReact` and `index`, is it possible to just write our entire Hello World app in the `index.js` file?
    * not sure. 
