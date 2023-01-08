// import employee constructor
const Employee = require('../lib/Employee');

// create an employee object
test('Create an employee object', () => {
    const employee = new Employee('Adam', 2832, 'asantillana@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));

});

// Get the name from getName()
test('gets employee Name', () => {
    const employee = new Employee('Adam', 2832, 'asantillana@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});
// Get the ID from getID()
test('gets employee ID', () => {
    const employee = new Employee('Adam', 2832, 'asantillana@gmail.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});
// Get the Email from getEmail()
test('gets employee Email', () => {
    const employee = new Employee('Adam', 2832, 'asantillana@gmail.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});
// Get the Role from getRole()
test('gets employee Role', () => {
    const employee = new Employee('Adam', 2832, 'asantillana@gmail.com');
    expect(employee.getRole()).toEqual('Employee');
});