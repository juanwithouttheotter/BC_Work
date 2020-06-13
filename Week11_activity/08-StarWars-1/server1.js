// // Dependencies
// // ===========================================================
// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Data
// // ===========================================================
// const yoda = {
//   name: "Yoda",
//   role: "Jedi Master",
//   age: 900,
//   forcePoints: 2000
// };

// const darthmaul = {
//   name: "Darth Maul",
//   role: "Sith Lord",
//   age: 200,
//   forcePoints: 1200
// };

// // Create one more data entry for the character Obi Wan Kenobi.
// // Enter any values you like for the parameters following the same format as the Yoda and Darth Maul character
// //

// const obiWan = {
//   name: "Obi Wan Kenobi",
//   role: "Jedi Master",
//   age: 47,
//   forcePoints: 1800
// };

// //

// // Routes
// // ===========================================================
// app.get("/", function(req, res) {
//   res.send("Welcome to the Star Wars Page!");
// });

// app.get("/yoda", function(req, res) {
//   res.json(yoda);
// });

// app.get("/darthmaul", function(req, res) {
//   res.json(darthmaul);
// });

// app.get("/obiWan", function(req,res) {
//   res.json(obiWan);
// });

// // Create a new Express route that leads users to the new Obi Wan Kenobi Data
// // Follow the same format as the Yoda and Darth Maul routes
// //

// // YOUR CODE GOES HERE
// //
// //

// // Listener
// // ===========================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });


// // server 2
// // Dependencies
// // ===========================================================
// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Data
// const characters = [{
//   routeName: "yoda",
//   name: "Yoda",
//   role: "Jedi Master",
//   age: 900,
//   forcePoints: 2000
// }, {
//   routeName: "darthmaul",
//   name: "Darth Maul",
//   role: "Sith Lord",
//   age: 200,
//   forcePoints: 1200
// }, {
//   routeName: "obi",
//   name: "Obi Wan Kenobi",
//   role: "Jedi Knight",
//   age: 60,
//   forcePoints: 1350
// }];

// // Routes
// // ===========================================================
// app.get("/", function(req, res) {
//   res.send("Welcome to the Star Wars Page!");
// });

// app.get("/:character", function(req, res) {
//   const chosen = req.params.character;

//   // What does this log?
//   console.log(chosen);

//   res.end();
// });


// // Listener
// // ===========================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });


// // server 3

// // Dependencies
// // ===========================================================
// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Data
// // ===========================================================
// const characters = [{
//   routeName: "yoda",
//   name: "Yoda",
//   role: "Jedi Master",
//   age: 900,
//   forcePoints: 2000
// }, {
//   routeName: "darthmaul",
//   name: "Darth Maul",
//   role: "Sith Lord",
//   age: 200,
//   forcePoints: 1200
// }, {
//   routeName: "obiwankenobi",
//   name: "Obi Wan Kenobi",
//   role: "Jedi Master",
//   age: 55,
//   forcePoints: 1350
// }];

// // Routes
// // ===========================================================

// app.get("/", function(req, res) {
//   res.send("Welcome to the Star Wars Page!");
// });

// // What does this route do?
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// // What does this route do?
// app.get("/api/characters/:character", function(req, res) {
//   // What does this code do?
//   const chosen = req.params.character;
//   console.log(chosen);

//   // What does this code do?
//   for (const i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   // What does this code do?
//   return res.send("No character found");
// });

// // Listener
// // ===========================================================
// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });

//server 5

// // Dependencies
// const express = require("express");

// const app = express();
// const PORT = 3000;

// // Sets up the Express app to handle data parsing
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Data
// const characters = [
//   {
//     routeName: "yoda",
//     name: "Yoda",
//     role: "Jedi Master",
//     age: 900,
//     forcePoints: 2000
//   },
//   {
//     routeName: "darthmaul",
//     name: "Darth Maul",
//     role: "Sith Lord",
//     age: 200,
//     forcePoints: 1200
//   },
//   {
//     routeName: "obiwankenobi",
//     name: "Obi Wan Kenobi",
//     role: "Jedi Master",
//     age: 55,
//     forcePoints: 1350
//   }
// ];

// // Routes
// app.get("/", function(req, res) {
//   res.send("Welcome to the Star Wars Page!");
// });

// // Displays all characters
// app.get("/api/characters", function(req, res) {
//   return res.json(characters);
// });

// // Displays a single character, or shows "No character found"
// app.get("/api/characters/:character", function(req, res) {
//   const chosen = req.params.character;

//   console.log(chosen);

//   for (const i = 0; i < characters.length; i++) {
//     if (chosen === characters[i].routeName) {
//       return res.json(characters[i]);
//     }
//   }

//   return res.send("No character found");

// });

// // Create New Characters - takes in JSON input
// app.post("/api/characters", function(req, res) {
//   const newCharacter = req.body;

//   console.log(newCharacter);

//   characters.push(newCharacter);

//   res.json(newCharacter);
// });

// app.listen(PORT, function() {
//   console.log("App listening on PORT " + PORT);
// });


// final starwars

