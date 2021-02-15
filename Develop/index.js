// TODO: Include packages needed for this apnplication
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectname',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description about your project!'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps to installing your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions on how your project is used!'
    },
    {
        type: 'input',
        name: 'screenshot',
        message: 'Have a screenshot? Add the url link here!'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Provide the github usernames of those who contributed to this project:'
    },
    {
        type: 'list',
        name: 'license', 
        message: 'Which license would you like to use?',
        choices: ['Modzilla', 'Apache', 'MIT', 'Unlicense']
    },
    {
        type: 'input',
        name: 'username',
        message: 'Provide your github username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },

    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if(err) {
            console.log(err)
        } else {console.log('Wrote to file')}        
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(data) {
        const generatedReadMe = generateMarkdown(data)
        writeToFile("./generatedreadme.md", generatedReadMe)
    })
}

// Function call to initialize app
init();
