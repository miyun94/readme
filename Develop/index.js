// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your github username?'
    },
    {
        type: 'input',
        name: 'projectname',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'What a description about your project!'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What are the steps to installing your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and/or examples of how your project is used!'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who worked on this project? Provide github links if applicable'
    },
    {
        type: 'list',
        name: 'license', 
        message: 'Which license would you like to use?',
        choices: ['GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    }
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
