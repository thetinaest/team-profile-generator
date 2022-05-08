const Intern = require('../lib/Intern.js');

test('creates an intern', () => {
    const intern = new Intern('Linda', 1, 'linda@company.com', 'Linda University');
    const name = 'Linda';
    const id = 1; 
    const email = 'linda@company.com';
    const school = 'Linda University'

    expect(intern.name).toBe(name);
    expect(intern.id).toBe(id);
    expect(intern.email).toBe(email);
    expect(intern.school).toBe(school);

});

test('get school', () => {
    const intern = new Intern('Linda', 1, 'linda@company.com', 'Linda University');

    const school = intern.getSchool();

    expect(school).toBe(intern.school);
});

test('get role', () => {
    const intern = new Intern('Linda', 1, 'linda@company.com', 'Linda University');

    expect(intern.getRole()).toBe('Intern');
});