// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var orm = require("../model/character");
const character = require("../model/character");


// Routes
// =============================================================
module.exports = function (app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", async (req, res) => {
    if (req.params.characters) {
      const result = await character.findOne({
        where: {
          route_name: req.params.characters
        }
      });
      return res.json(result);
    } else {
      const result = character.findAll();
      return res.json(result);
    }
  });
// app.post('/api/new', async (req,res) => {
//   const characters = req.body;
//   const routeName = characters.name.replace(\/s+\g, "").toLowerCase();

// });

  //   orm.searchCharacter(req.params.characters, function(data) {
  //     res.json(data);
  //   });
  // }

  // // Otherwise...
  // else {
  //   // Otherwise display the data for all of the characters.
  //   // (Note how we're using the ORM here to run our searches)
  //   orm.allCharacters(function(data) {
  //     res.json(data);
  //   });
  // }



  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {

    // Take the request...
    var character = req.body;

    // Then send it to the ORM to "save" into the DB.
    orm.addCharacter(character, function (data) {
      console.log(data);
    });

  });
};
