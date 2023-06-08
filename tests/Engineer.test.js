const Engineer = require("../lib/Engineer");

test('creates an Engineer object', () => {
    const engineer = new Engineer('Jose', 1, 'Jose@gmail.com', 'jose1');

    expect(engineer.github).toEqual(expect.any(String));
});

test("get engineer github value", () => {
    const engineer = new Engineer("Jose", 1, 'Jose@gmail.com', 'jose1');
    expect(engineer.github).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('role of employee', () => {
    const engineer = new Engineer('Jose', 1, 'Jose@gmail.com', 'jose1');

    expect(engineer.getRole()).toEqual("Engineer");
});