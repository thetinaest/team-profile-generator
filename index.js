const inquirer = require('inquirer');
const createFile = require('./src/generateHTML.js');
const path = require('path');
const distribution = path.resolve(__dirname, 'dist');
const outIndex = path.join(distribution, 'index.html');
const team = [];

const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');

function newEmployee() {
    inquirer.prompt ([
        {
            type: 'list',
            name: 'newEmployee',
            message: 'What role is the next employee?',
            choices: ['Engineer', 'Intern', 'No more team members']
        }
    ]).then (response => {
        if (response.newEmployee === 'Manager') {
            promptManager ();
        } else if (response.newEmployee === 'Engineer') {
            promptEngineer ();
        } else if (response.newEmployee === "Intern") {
            promptIntern ();
        } else if (response.newEmployee === "No more team members") {
            console.log('Your team is complete!')
            createFile(team);
        }
    })
}

function promptManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Manager\'s name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the manager\'s email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the manager\'s id?'
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is the manager\'s office number?'
        },
    ]).then(response => {
        const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
        team.push(manager);
        newEmployee();
    })
}

function promptEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the engineer\'s name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineer\'s email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineer\'s id?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineer\'s github username?'
        },
    ]).then(response => {
        const engineer = new Engineer(response.name, response.id, response.email, response.github);
        team.push(engineer);
        newEmployee();
    })
}

function promptIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the intern\'s name?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the intern\'s email?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the intern\'s id?'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the intern\'s school?'
        }
    ]).then(response => {
        const intern = new Intern(response.name, response.id, response.email, response.school);
        team.push(intern);
        newEmployee();
    })
}

promptManager();
