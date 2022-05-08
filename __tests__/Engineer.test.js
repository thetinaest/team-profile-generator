const Engineer = require('../lib/Engineer.js');

test('creates an engineer', () => {
    const engineer = new Engineer('Linda', 1, 'linda@company.com', 'lindaHub');
    const name = 'Linda';
    const id = 1; 
    const email = 'linda@company.com';
    const github = 'lindaHub'

    expect(engineer.name).toBe(name);
    expect(engineer.id).toBe(id);
    expect(engineer.email).toBe(email);
    expect(engineer.github).toBe(github);

});

test('get github', () => {
    const engineer = new Engineer('Linda', 1, 'linda@company.com', 'lindaHub');

    const github = engineer.getGithub();

    expect(github).toBe(engineer.github);
});

test('get role', () => {
    const engineer = new Engineer('Linda', 1, 'linda@company.com', 'lindaHub');

    expect(engineer.getRole()).toBe('Engineer');
});

