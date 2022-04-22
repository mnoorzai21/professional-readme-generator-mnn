// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');
const generateReadme = require('./utils/generateReadme');
const writeFileAsync = util.promisify(fs.writeFile);


const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            message: 'What is the project tile?',
            name: 'projectTitel'
        },
        {
            type: 'input',
            message: 'What is a brief descriptions of your project?',
            name: 'description'
        },
        {
            type: 'input',
            message: 'Describe the installation process: ',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'What is the usage of this project?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'Chose an appropriate license for this project: ',
            name: 'license'
        }
    ])

};

const init = () => {
    promptUser()
        .then((answers) => fs.writeFileSync("index.html", generateHTML(answers)))
        .then(() => console.log("successfully wrote to index.html"))
        .catch((err) => console.error(err));
};

init();

// TODO: import the generateMarkdown function from utils/generateMarkdown.js

// TODO: Write code to get user input, generate markdown, and save it to a file.