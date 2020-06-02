
const a = process.argv[2];
const b = process.argv[3];

// if conditional
if (a === b) {
    console.log(true);
} else {
    console.log(false);
}


//ternary conditional
const c = a === b ? true : false;
console.log(c);

//direct, pure conditional
console.log(a === b);

//with the fs we ahve appendFile, readFile, writeFile. 