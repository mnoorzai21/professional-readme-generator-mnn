// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateReadme = require('./utils/generateMarkdown');
const util = require('util');




const promptUser = () => {
    return inquirer.prompt([{
            type: 'input',
            message: 'What is the title of your project?',
            name: 'projectTitle'
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
            type: 'list',
            message: 'Chose an appropriate license for this project: ',
            name: 'license',
            choices: [{
                    name: "Apache 2.0 License",
                    value: "[![License](https://img.shields.io/badge/License-Apache_2.0-yellowgreen.svg)](https://opensource.org/licenses/Apache-2.0)",
                },

                {
                    name: "BSD 3 - Clause License",
                    value: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-orange.svg)](https://opensource.org/licenses/BSD-3-Clause)",
                },

                {
                    name: "GNU GPL v3",
                    value: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
                },

                {
                    name: "ISC License(ISC)",
                    value: "[![License: ICL](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
                },

                {
                    name: "The MIT License",
                    value: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
                },

                {
                    name: "The Unlicense",
                    value: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)",
                }

            ],
        },
    ])
};

const init = () => {
    promptUser()

    .then((answers) => fs.writeFileSync("README.md", generateReadme(answers)))
        .then(() => console.log("successfully wrote to README.md"))
        .catch((err) => console.error(err));
};
init();