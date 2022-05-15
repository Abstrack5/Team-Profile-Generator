const Engineer = require('../lib/Engineer.js');

test('create Engineer object', () => {
    const engineer = new Engineer();

    expect(typeof(engineer)).toBe('object');
});

test('can set Engineer name ', () => {
    const engineer = new Engineer('Depp');

    expect(engineer.name).toBe('Depp');

});

test('can set Engineer id ', () => {
    const testId = 123;
    const engineer = new Engineer('Depp', testId);

    expect(engineer.id).toBe(testId);

});

test('can set engineer email ', () => {
    const testEmail = 'depp@example.com';
    const engineer = new Engineer('Depp', 123, testEmail);

    expect(engineer.email).toBe(testEmail)
});

test('getName()', () => {
    const engineer = new Engineer('Depp');

    expect(engineer.name).toBe('Depp');
});

test('getId()', () => {
    const testId = 123;
    const engineer = new Engineer('Depp', testId );

    expect(engineer.getId()).toBe(testId);
});

test('getEmail()', () => {
    const testEmail = 'depp@example.com';
    const engineer = new Engineer('Depp', 123, testEmail);

    expect(engineer.getEmail()).toBe(testEmail);
});

test('getRole()', () => {
    const testRole = 'Engineer';
    const engineer = new Engineer('Depp', 123, 'depp@example.com');

    expect(engineer.getRole()).toBe(testRole);
});

test('create github for Engineer', () => {
    const testHub = 'test12'
    const engineer = new Engineer('Depp', 123, 'depp@example.com', testHub);

    expect(engineer.github).toBe(testHub);
});

test('create getGithub() for Engineer', () => {
    const testHub = 'test12'
    const engineer = new Engineer('Depp', 123, 'depp@example.com', testHub);

    expect(engineer.getGithub()).toBe(testHub);
});

