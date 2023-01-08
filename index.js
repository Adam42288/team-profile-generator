// add inquirer into the project
const inquirer = require('inquirer');

// initialize variables for employee arrays
let employees; 
let manager = {
    name: "",
    id: "",
    email: "",
    officeNumber: "",
};

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



  // Use response to build the objects from the classes?
  // Change question array into re-usable functions.
  const getName = () => {
    inquirer
      .prompt([
        {
            name: "name",
            message: "Enter your name",
            type: "input",
        },
      ])
      .then((response) => console.log('Success!'));
  };
//   getName();

  const getId = () => {
    inquirer
      .prompt([
        {
            name: "id",
            message: "Enter your employee ID",
            type: "number",
        },
      ])
      .then((answer) => {
        if (!answer.id) {
          console.log("That wasn't a number!");
          getId();
        } else {
          console.log(`Your ID is ${answer.id}`);
      }});
    };
//   getId();

const getEmail = () => {
    inquirer
      .prompt([
        {
            name: "email",
            message: "Enter your email address",
            type: "input",
        },
      ])
      .then((response) => console.log('Success!'));
  };
//   getEmail();

const getOfficeNumber = () => {
    inquirer
      .prompt([
        {
            name: "officeNumber",
            message: "Enter your office number",
            type: "number",
        },
      ])
      .then((answer) => {
        if (!answer.officeNumber) {
          console.log("That wasn't a number!");
          getOfficeNumber();
        } else {
          console.log(`Your ID is ${answer.officeNumber}`);
      }});
    };
//   getOfficeNumber();

const getGithub = () => {
    inquirer
      .prompt([
        {
            name: "github",
            message: "Enter your GitHub username",
            type: "input",
        },
      ])
      .then((response) => console.log('Success!'));
  };
//   getGithub();

const getSchool = () => {
    inquirer
      .prompt([
        {
            name: "school",
            message: "Enter your School",
            type: "input",
        },
      ])
      .then((response) => console.log('Success!'));
  };
//   getSchool();
const startApp = () => {
inquirer
  .prompt(managerQuestions)
  .then((response) => {
manager.name = response.name;
manager.id = response.id;
manager.email = response.email;
manager.officeNumber = response.officeNumber;
menu();
});
};

const menu = () => {
    inquirer
      .prompt([
        {
          name: "start",
          type: "list",
          message: "What would you like to do?",
          choices: ["Add engineer", "Add Intern", "Finish building team"],
        },
      ])
      .then((res) => {
        if (res.start === "Finish building team") {
          return;
        } else {
          clearOrder();
          getName();
        }
      });
  };

function init() {}

init();
startApp();