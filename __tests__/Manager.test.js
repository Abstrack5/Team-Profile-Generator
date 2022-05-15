const Manager = require('../lib/Manager.js');

test('create manager object', () => {
    const manager = new Manager();

    expect(typeof(manager)).toBe('object');
});

test('can set manager name ', () => {
    const manager = new Manager('Depp');

    expect(manager.name).toBe('Depp');

});

test('can set manager id ', () => {
    const testId = 123;
    const manager = new Manager('Depp', testId);

    expect(manager.id).toBe(testId);

});

test('can set manager email ', () => {
    const testEmail = 'depp@example.com';
    const manager = new Manager('Depp', 123, testEmail);

    expect(manager.email).toBe(testEmail)
});

test('getName()', () => {
    const manager = new Manager('Depp');

    expect(manager.name).toBe('Depp');
});

test('getId()', () => {
    const testId = 123;
    const manager = new Manager('Depp', testId );

    expect(manager.getId()).toBe(testId);
});

test('getEmail()', () => {
    const testEmail = 'depp@example.com';
    const manager = new Manager('Depp', 123, testEmail);

    expect(manager.getEmail()).toBe(testEmail);
});

test('getRole()', () => {
    const testRole = 'Manager';
    const manager = new Manager('Depp', 123, 'depp@example.com');

    expect(manager.getRole()).toBe(testRole);
});

test('create officeNumber for manager', () => {
    const testOffice = 456
    const manager = new Manager('Depp', 123, 'depp@example.com', testOffice);

    expect(manager.getofficeNumber()).toBe(testOffice);

});