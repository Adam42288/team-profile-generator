const inquirer = require('inquirer');


const managerQuestions = [
    {
        name: "name",
        message: "Enter your name",
        type: "input",
    },
    {
        name: "id",
        message: "Enter your employee ID",
        type: "number",
    },
    {
        name: "email",
        message: "Enter your email address",
        type: "input",
    },
    {
        name: "officeNumber",
        message: "Enter your office number",
        type: "number",
    }
];
const engineerQuestions = [
    {
        name: "name",
        message: "Enter your name",
        type: "input",
    },
    {
        name: "id",
        message: "Enter your employee ID",
        type: "number",
    },
    {
        name: "email",
        message: "Enter your email address",
        type: "input",
    },
    {
        name: "github",
        message: "Enter your GitHub username",
        type: "input",
    }
];
const internQuestions = [
    {
        name: "name",
        message: "Enter your name",
        type: "input",
    },
    {
        name: "id",
        message: "Enter your employee ID",
        type: "number",
    },
    {
        name: "email",
        message: "Enter your email address",
        type: "input",
    },
    {
        name: "school",
        message: "Enter your School",
        type: "input",
    }
];

inquirer
  .prompt(managerQuestions)
  .then((response) => console.log('Success!'));

  // Use response to build the objects from the classes?

function init() {}

init();