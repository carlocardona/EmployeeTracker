USE employee_tracker;

INSERT INTO employee
    (first_name,last_name,role_id)
VALUES('Harry', 'Potter', 1);

INSERT INTO department
    (id,name)
VALUES(1, 'Customer Service');

INSERT INTO role
    (id,title,salary,department_id)
VALUES
    (1, 'Customer Service Agent', 65000, 1);