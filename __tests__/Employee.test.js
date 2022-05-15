const Employee = require("../lib/Employee");

test('creates an employee object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');

});

test('can set employee name ', () => {
    const employee = new Employee('Depp');

    expect(employee.name).toBe('Depp');

});

test('can set employee id ', () => {
    const testId = 123;
    const employee = new Employee('Depp', testId);

    expect(employee.id).toBe(testId);

});

test('can set employee email ', () => {
    const testEmail = 'depp@example.com';
    const employee = new Employee('Depp', 123, testEmail);

    expect(employee.email).toBe(testEmail)
});

test('getName()', () => {
    const employee = new Employee('Depp');

    expect(employee.name).toBe('Depp');
});

test('getId()', () => {
    const testId = 123;
    const employee = new Employee('Depp', testId );

    expect(employee.getId()).toBe(testId)
});

test('getEmail()', () => {
    const testEmail = 'depp@example.com';
    const employee = new Employee('Depp', 123, testEmail);

    expect(employee.getEmail()).toBe(testEmail)
});

test('getRole()', () => {
    const testRole = 'Employee';
    const employee = new Employee('Depp', 123, 'depp@example.com');

    expect(employee.getRole()).toBe(testRole)
});