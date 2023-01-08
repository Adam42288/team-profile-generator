// import Manager constructor

const Manager = require('../lib/Manager');

// create a Manager object
test('creates a Manager object', () => {
    const manager = new Manager('Adam', 23942, 'asantillana@apple.com', 6);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});