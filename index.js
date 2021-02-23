// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description'
    },
    {
        type: 'input',
        message: 'What are the installation instructions?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'What is the usage information?',
        name: 'usage'
    },
    {
        type: 'input',
        message: 'What are the contribution guidelines?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'What are the test instructions?',
        name: 'test'
    },
    {
        type: 'list',
        message: 'What is the license for this application?',
        name: 'license',
        choices: ['MIT', 'Apache', 'GPL', 'Other'],
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },

];

// TODO: Create a function to write README file
function writeToFile(response) { 
    console.log(response);
    return `
# ${response.title}

## Description
${response.description}

## Table of Contents
[Description](#Description)  
[Installation](#Installation)  
[Usage](#Usage)  
[License](#License)  
[Contributing](#Contribution)  
[Tests](#Tests)  
[Questions](#Questions) 

## Installation
${response.installation}

## Usage
${response.usage}

## License 
${response.license}

## Contributing
${response.contribution}

## Tests
${response.test}

## Questions
If you have any additional questions please take a look at my GitHub profile or send me an email.  
Link to GitHub profile: github.com/${response.username}  
Email me: ${response.email}  

`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => { 
        fs.writeFileSync(`${response.title}-README.md`, writeToFile(response), (err) => { 
            err ? console.error(err) : console.log('Success!')
        })
    })
 }

// Function call to initialize app
init();
