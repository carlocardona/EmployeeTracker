const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "forgo-reason",
    database: "employee_tracker"
});

connection.connect(err => {
    if (err) throw err;
    console.log('connect as id: ' + connection.threadId);
    main();
});

const main = () => {
    inquirer.prompt(
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do',
            choices: ['Add', 'View', 'Update', 'Quit']
        }
    ).then(response => {

        const choice = response.action;

        switch (choice) {
            case 'View': view();
                break;
            case 'Add': addItem();
                break;
            case 'Update': updateEmp();
                break;
            case 'Quit': end();
                break;
            default: end();
        }

    });
}

//Add Item MAIN
const addItem = () => {
    console.log('Add Item');
    inquirer.prompt([
        {
            type: 'list',
            name: 'addItem',
            message: 'What would you like to add? ',
            choices: ['Department', 'Role', 'Employee'],
        }
    ]).then(response => {

        const choice = response.addItem;

        switch (choice) {
            case 'Department': addDepart();
                break;
            case 'Role': addRole();
                break;
            case 'Employee': addEmployee();
                break;
            default: end();
        }

    })
    main();
}

//Add Department
const addDepart = () => {
    console.log('Add Department');
}

//Add Role
const addRole = () => {
    console.log('Add Role');
}

//Add Employee
const addEmployee = () => {
    console.log('Add Employee');
}

//view - department, roles, employees

/////

//Update Employee Roles
const updateEmp = () => {
    console.log('Update Employee Roles');
}

/////

//END CONNECTION
const end = () => {
    console.log('End Connection');
    connection.end();
}