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
    inquirer.prompt(
        {
            type: 'list',
            name: 'addItem',
            message: 'What would you like to add? ',
            choices: ['Department', 'Role', 'Employee']
        }).then(response => {

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
}

//Add Department
const addDepart = () => {
    console.log('Add Department');

    inquirer.prompt({
        type: 'list',
        name: 'department',
        message: 'Choose Department',
        choices: ['Customer Service', 'Human Resources', 'Engineering']
    }).then(res => {

        const choice = res.department;

        let deptVal = 0;

        switch (choice) {
            case 'Customer Service': deptVal = 1;
                break;
            case 'Human Resources': deptVal = 2;
                break;
            case 'Engineering': deptVal = 3;
                break;
            default: deptVal = 0;
                break;
        }
    });
}

//Add Role
const addRole = () => {
    console.log('Add Role');
}

//Add Employee
const addEmployee = () => {

    console.log('Add Employee');
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstname',
            message: 'First Name: '
        },
        {
            type: 'input',
            name: 'lastname',
            message: 'Last Name: '
        },
        {
            type: 'list',
            name: 'role',
            message: 'Role: ',
            choices: ['Customer Service Agent', 'Manager']
        }
    ]).then(res => {
        const fName = res.firstname;
        const lName = res.lastname;
        const role = res.role;
        let roleVal = 0;

        if (role === 'Customer Service Agent') {
            roleVal = 1;
        }

        if (role === 'Manager') {
            roleVal = 2;
        }

        const query = connection.query(
            'INSERT INTO employee SET ?',
            {
                first_name: fName,
                last_name: lName,
                role_id: roleVal
            },
            function (err, res) {
                if (err) throw err;
            }
        );
    })

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