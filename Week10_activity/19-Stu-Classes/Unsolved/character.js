class Character {
  constructor(name,strength,hitPoints){
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    if (this.hitPoints = 0){
      
    }
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
  
    // console.log which character was attacked and how much damage was dealt
    console.log(`${this.name} attacked ${opponent.name}`);
    // Then, change the opponent's hitPoints to reflect this
    opponent.hitPoints -= this.strength;

  }
}

// Create two unique characters using the "character" class
const guy1 = new Character(Dipper, 50, 25);
const guy2= new Character(Bill, 30, 30);


// Create an interval that alternates attacks every 2000 milliseconds
