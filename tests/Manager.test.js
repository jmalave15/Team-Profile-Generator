const Manager = require("../lib/Manager");

test('creates an Manager object', () => {
    const manager = new Manager('Jose', 1, 'Jose@gmail.com', 3);

    expect(manager.office).toEqual(expect.any(Number));
});

test('gets employee office number', () => {
    const manager = new Manager('Jose', 1, 'Jose@gmail.com', 3);

    expect(manager.office).toEqual(expect.any(Number));
});

test ('role of employee', () => {
    const manager = new Manager('Jose', 1, 'Jose@gmail.com');

    expect(manager.getRole()).toEqual("Manager");
});