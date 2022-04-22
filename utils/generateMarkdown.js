// TODO: Add code to generate markdown for README given a data object parameter containing the user input.
function generateMarkdown(answers) {
    return `
    ${answers.projectTitle}
  
${answers.license}<br />

## Description
 ${answers.description}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Installation
 ${answers.installation}

## Usage
 ${answers.usage}

## License
${answers.license}
<br />

This application is covered by the ${answers.license} license. 
`;
}

module.exports = generateMarkdown;