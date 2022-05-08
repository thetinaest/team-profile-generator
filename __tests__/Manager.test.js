const Manager = require('../lib/Manager.js');

test('creates a manager', () => {
    const manager = new Manager('Linda', 1, 'linda@company.com', 5);
    const name = 'Linda';
    const id = 1; 
    const email = 'linda@company.com';
    const officeNumber = 5;

    expect(manager.name).toBe(name);
    expect(manager.id).toBe(id);
    expect(manager.email).toBe(email);
    expect(manager.officeNumber).toBe(officeNumber);

});

test('get office number', () => {
    const manager = new Manager('Linda', 1, 'linda@company.com',  5);

    const officeNumber = manager.getOfficeNumber();

    expect(officeNumber).toBe(manager.officeNumber);
});

test('get role', () => {
    const manager = new Manager('Linda', 1, 'linda@company.com',  5);

    expect(manager.getRole()).toBe('Manager');
});