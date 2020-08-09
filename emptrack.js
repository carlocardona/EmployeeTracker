const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "forgo-reason",
    database: "employee_tracker"
});

connection.connect(err => {
    if(err) throw err;
    console.log('connect as id: ' + connection.threadId);
    main();
});

const main = () => {
    console.log('Main Function');
    end();
}

const end = () => {
    console.log('End Connection');
    connection.end();
}