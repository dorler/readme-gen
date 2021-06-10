// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "what is the title of project?",
        name: "title"
    },
    {
        type: "input",
        message: "what is the description of project?",
        name: "description" 
    }
];

inquirer.prompt(questions).then((answers) => {
    console.log("answers:",answers);
    fs.writeFileSync(path.join(__dirname,"ReadME.md"),generateMarkdown(answers));
});


