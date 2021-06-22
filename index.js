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
        name: "description" ,
    },
    {
        type: "input",
        message: "what are the installation requirements? ",
        name: "installationRequirements",
    },
    {
        type: "input",
        message: "what is the usage of the project?",
        name: "usageInformation",

    },
    {
        type:"input",
        message:"Please enter application test instructions:",
        name:"testInstructions",
    },
    {
        type: "input",
        message:"Please enter your Github username:",
        name:"githubUsername",
    }
];

// TODO:Prompt the questions and store the data in readme file
inquirer.prompt(questions).then((answers) => {
    console.log("answers:",answers);
    fs.writeFileSync(path.join(__dirname,"README.md"),generateMarkdown(answers));
});


