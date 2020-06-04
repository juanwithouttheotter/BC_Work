const inquirer = require('inquirer');
const fs = require("fs");
inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    },
    {
        type: "input",
        message: "What languages do you know?",
        name: "language"
    },
    {
        type: "list",
        message: "What is your preffered method of communication?",
        choices: ['phone call', 'text', 'email', 'snailmail'],
        name: "communication"
    }
  ])
  .then(answers => {
      fs.appendFile("user-info.json", JSON.stringify(answers));
  })
  .catch(error => {
    if(error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });