const Intern = require("../lib/Intern");

test('creates an Intern object', () => {
    const intern = new Intern('Jose', 1, 'Jose@gmail.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String));
});

test('gets employee school', () => {
    const intern = new Intern('Jose', 1, 'Jose@gmail.com', 'UCF');

    expect(intern.school).toEqual(expect.stringContaining(intern.school.toString()));
});

test('role of employee', () => {
    const intern = new Intern('Jose', 1, 'Jose@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
});
