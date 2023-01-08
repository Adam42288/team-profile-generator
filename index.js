// require HTML file for generating webpage
const generateHTML = require('./src/generateHTML');

// require classes for use.
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// require various node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// Employee array
const employees = []; 

// Create manager object first 
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the Team Manager's name", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the Team Manager's ID number.",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid ID (numbers only)");
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the Team Manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email');
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the Team Manager's office number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ('Please enter a valid office number (numbers only)');
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(res => {
        const  { name, id, email, officeNumber } = res; 
        const manager = new Manager (name, id, email, officeNumber);

        employees.push(manager); 
        console.log(manager); 
    })
};

// Function to add individual employees
const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "What type of employee would you like to add?",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "Please enter the employees name", 
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID number",
            validate: nameInput => {
                if  (isNaN(nameInput)) {
                    console.log ("Please enter a valid ID (numbers only)")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username",
            // When calls this only if the type of employee was 'Engineer'
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput ) {
                    return true;
                } else {
                    console.log ("Please enter a valid GitHub username")
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            // When calls this only if the type of employee was 'Intern'
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log ("Please enter a valid school")
                }
            }
        },
        {
            // asks if you want to add more employees
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // Creating new employee objects based on answers and then pushing them to the employee array.
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        employees.push(employee); 
// If the confirm was true, adds the employees
        if (confirmAddEmployee) {
            return addEmployee(employees); 
        } else {
            return employees;
        }
    })

};


// Generates HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Team profile created successfully. Open index.html");
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(employees => {
    return generateHTML(employees);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });