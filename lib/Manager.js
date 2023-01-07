const Employee = require('./Employee');

class Manager extends Employee {
constructor(name, id, email, officeNumber) {
    super(name, id, email)
    this.officeNumber = officeNumber;
}

getRole() {
    return 'Manager';
}
}

// super = Reference to the parent class (also known as super class)
// very similar to "this" keyword
// Can use a super(parent) classes constructor and methods