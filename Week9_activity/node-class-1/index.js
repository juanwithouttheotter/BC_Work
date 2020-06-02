const fs = require("fs");
const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);


myArgs.forEach( function (arg) {
    fs.appendFile("log.txt", arg + "\n", function (err) {
        if (err) console.log(err);
    });
});

// fs.appendFile('log.txt', myArgs + "\n", function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

// using async and await, promises
