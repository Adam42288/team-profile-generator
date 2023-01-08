const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
}

getRole() {
    return 'Intern';
}
getSchool() {
    console.log(`School: ${this.school}`);
    return this.school;
};
}

// export the class
module.exports = Intern;


// super = Reference to the parent class (also known as super class)
// very similar to "this" keyword
// Can use a super(parent) classes constructor and methods