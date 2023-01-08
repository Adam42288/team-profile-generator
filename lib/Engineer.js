// importing Employee constructor 
const Employee = require("./Employee");

// engineer constructor extends employee constructor 
class Engineer extends Employee {
    constructor (name, id, email, github) {
        // calling employee constructor 
        super (name, id, email);

        this.github = github; 
    }

    // returning github from input 
    getGithub () {
        console.log(`Github: ${this.github}`);
        return this.github;
    }

     // override employee role to engineer
    getRole () {
        return 'Engineer';
    }
}

// export the class
module.exports = Engineer; 

// super = Reference to the parent class (also known as super class)
// very similar to "this" keyword
// Can use a super(parent) classes constructor and methods