// importing Employee constructor 
const Employee = require('./Employee');

// manager constructor extends employee constructor 
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        // calling employee constructor
        super (name, id, email); 
        
        this.officeNumber = officeNumber; 
    }

    // override employee role to manager 
    getRole () {
        return "Manager";
    }
}

// export the class
module.exports = Manager; 
// super = Reference to the parent class (also known as super class)
// very similar to "this" keyword
// Can use a super(parent) classes constructor and methods