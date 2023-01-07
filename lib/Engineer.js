const Employee = require('./Employee');

class Engineer extends Employee {
constructor(name, id, email, github) {
    super(name, id, email)
    this.github = github;
}

getRole() {
    return 'Engineer';
}
}

// super = Reference to the parent class (also known as super class)
// very similar to "this" keyword
// Can use a super(parent) classes constructor and methods