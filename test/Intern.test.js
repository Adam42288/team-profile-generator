// import Intern constructor

const Intern = require('../lib/Intern');

// create an Intern object
test('Create an Intern object', () => {
    const intern = new Intern('Adam', 2832, 'asantillana@gmail.com', 'PSU');
    expect(intern.school).toEqual(expect.any(String));
});

// Get the School from getSchool()
test('gets the school', () => {
    const intern = new Intern('Adam', 2832, 'asantillana@gmail.com', 'PSU');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// Get the Role from getRole()
test('gets Intern Role', () => {
    const intern = new Intern('Adam', 2832, 'asantillana@gmail.com', 'PSU');
    expect(intern.getRole()).toEqual('Intern');
});