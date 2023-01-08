// import Engineer constructor
const Engineer = require('../lib/Engineer');

// create an Engineer object
test('Create an Engineer object', () => {
    const engineer = new Engineer('Adam', 2832, 'asantillana@gmail.com', 'adam42288');
    expect(engineer.github).toEqual(expect.any(String));
});

// Get the Github from getGithub()
test('gets Github account', () => {
    const engineer = new Engineer('Adam', 2832, 'asantillana@gmail.com', 'adam42288');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// Get the Role from getRole()
test('gets Engineer Role', () => {
    const engineer = new Engineer('Adam', 2832, 'asantillana@gmail.com', 'adam42288');
    expect(engineer.getRole()).toEqual('Engineer');
});