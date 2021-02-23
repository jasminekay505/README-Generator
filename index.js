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
        message: 'Please provide a link to your GitHub profile.',
        name: 'profile'
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
    return `Hi`;
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => { 
        fs.writeFileSync('newREADME.md', writeToFile(response), (err) => { 
            err ? console.error(err) : console.log('Success!')
        })
    })
 }

// Function call to initialize app
init();
