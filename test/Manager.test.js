// import Manager constructor
const { exportAllDeclaration } = require('@babel/types');
const { default: test } = require('node:test');
const Manager = require('../lib/Manager');

// create a Manager object
test('creates a Manager object', () => {
    const manager = new Manager('Adam', 23942, 'asantillana@apple.com', 6);
    exportAllDeclaration(manager.officeNumber).toEqual(expect.any(Number));
});