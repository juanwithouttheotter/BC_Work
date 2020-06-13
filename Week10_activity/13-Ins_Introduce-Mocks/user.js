class User {
    constructor({id, name, level}){
        this.id = id;
        this.name = name;
        this.level = level;
    }
    get name(){
        return ` ${this.name} `
    }
}

module.exports = User;