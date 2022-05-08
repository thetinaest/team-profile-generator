const fs = require('fs');

const createFile = (team) => {
    return fs.writeFile('./dist/index.html', generateTeam(team), err => {
        if (err) throw err;

        console.log('File has been created!');
    });
}

const generateTeam = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link href="./style.css" rel="stylesheet">
    </head>
    <body>
        <header>
            <h1>My Team</h1>
        </header>
        <section id="teamMembers">
        ${generateCards(team)}
        </section>
    </body>
    </html>`
}

function generateCards(team) {
    const employees = team.map(emp => {
        switch (emp.getRole()) {
            case "Manager":
                return `
                    <section id="card">
                        <div id="title">
                            <h2>${emp.getName()}</h2>
                            <p><i class="fa-solid fa-mug-hot"></i> Manager</p>
                        </div>
                        <div id="content">
                            <p>ID: ${emp.getId()}</p>
                            <p>Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
                            <p>Office Number: ${emp.officeNumber}</p>
                        </div>
                    </section>
                    `
            case "Engineer":
                return `
                    <section id="card">
                        <div id="title">
                            <h2>${emp.getName()}</h2>
                            <p><i class="fa-solid fa-glasses"></i> Engineer</p>
                        </div>
                        <div id="content">
                            <p>ID: ${emp.getId()}</p>
                            <p>Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
                            <p>Github: <a href='https://github.com/${emp.github}' target='_blank'>${emp.github}</a></p>
                        </div>
                    </section>
                    `
            case "Intern":
                return `
                    <section id="card">
                        <div id="title">
                            <h2>${emp.getName()}</h2>
                            <p><i class="fa-solid fa-user-graduate"></i> Intern</p>
                        </div>
                        <div id="content">
                            <p>ID: ${emp.getId()}</p>
                            <p>Email: <a href="mailto:${emp.getEmail()}">${emp.getEmail()}</a></p>
                            <p>School: ${emp.school}</p>
                        </div>
                    </section>
                    `
        }
    })
    return employees.join('');
}


module.exports = createFile;
