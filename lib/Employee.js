// Employee class constructor

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
}
// Returns employee name when called
getName() {
console.log(`Name: ${this.name}`);
return this.name;
}
// Returns employee ID when called
getId() {
    console.log(`ID: ${this.id}`);
    return this.id;
}

// Returns employee email when called
getEmail() {
    console.log(`Email: ${this.email}`);
    return this.email;
}
// Returns employee role when called
getRole() {
return 'Employee';
}

}

// export the class
module.exports = Employee;