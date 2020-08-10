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
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'What would you like to do',
            choices: ['View All Employees', 'Add an Employee', 'Quit']
        }
    ]).then(response => {
        console.log(response);

        const choice = response.action

        switch (choice) {
            case 'View All Employees': allEmployees();
                break;
            case 'Add an Employee': addEmployee();
                break;
            case 'Quit': end();
                break;
            default: end();
        }

    });
}

const allEmployees = () => {
    console.log('All Employees');

    connection.query('SELECT * FROM employee', function (err, res) {
        if (err) throw err;
        console.table(res);
    });
    main();
}

const addEmployee = () => {
    console.log('Add Employee');
    // inquirer.prompt([
    //     {
    //         type: 'input',
    //         name: 'firstname',
    //         message: 'First Name: '
    //     },
    //     {
    //         type: 'input',
    //         name: 'lastname',
    //         message: 'Last Name: '
    //     },
    //     {
    //         type: 'list',
    //         name: 'role',
    //         choices: ['1. CSA - Customer Service Agent', '2. CSA Manager']
    //     }
    // ]).then(response => {
    //     connection.query()
    // })
    main();
}

const end = () => {
    console.log('End Connection');
    connection.end();
}