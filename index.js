const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'coding',
  database: 'manage_db', // Replace with your database name
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  startApp();
});

function startApp() {
  inquirer
    .prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartments();
          break;

        case 'View all roles':
          viewRoles();
          break;

        case 'View all employees':
          viewEmployees();
          break;

        case 'Add a department':
          addDepartment();
          break;

        case 'Add a role':
          addRole();
          break;

        case 'Add an employee':
          addEmployee();
          break;

        case 'Update an employee role':
          updateEmployeeRole();
          break;

        case 'Exit':
          connection.end();
          break;

        default:
          console.log('Invalid action');
          break;
      }
    });
}

function viewDepartments() {
  const query = 'SELECT * FROM department';

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log('Departments:');
    res.forEach((department) => {
      console.log(`ID: ${department.id} | Name: ${department.name}`);
    });

    startApp();
  });
}

function viewRoles() {
  const query = 'SELECT * FROM role';

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log('Roles:');
    res.forEach((role) => {
      console.log(`ID: ${role.id} | Title: ${role.title} | Salary: ${role.salary} | Department ID: ${role.department_id}`);
    });

    startApp();
  });
}

function viewEmployees() {
  const query = 'SELECT * FROM employee';

  connection.query(query, (err, res) => {
    if (err) throw err;

    console.log('Employees:');
    res.forEach((employee) => {
      console.log(`ID: ${employee.id} | Name: ${employee.first_name} ${employee.last_name} | Role ID: ${employee.role_id} | Manager ID: ${employee.manager_id}`);
    });

    startApp();
  });
}

function addDepartment() {
  inquirer
    .prompt({
      name: 'name',
      type: 'input',
      message: 'Enter the name of the department:',
    })
    .then((answer) => {
      const query = 'INSERT INTO department SET ?';

      connection.query(query, { name: answer.name }, (err, res) => {
        if (err) throw err;

        console.log('Department added successfully!');
        startApp();
      });
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        name: 'title',
        type: 'input',
        message: 'Enter the title of the role:',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'Enter the salary for the role:',
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'Enter the department ID for the role:',
      },
    ])
    .then((answer) => {
      const query = 'INSERT INTO role SET ?';

      connection.query(query, { title: answer.title, salary: answer.salary, department_id: answer.department_id }, (err, res) => {
        if (err) throw err;

        console.log('Role added successfully!');
        startApp();
      });
    });
}

function addEmployee() {
    inquirer
      .prompt([
        {
          name: 'first_name',
          type: 'input',
          message: 'Enter the first name of the employee:',
        },
        {
          name: 'last_name',
          type: 'input',
          message: 'Enter the last name of the employee:',
        },
        {
          name: 'role_id',
          type: 'input',
          message: 'Enter the role ID for the employee:',
          validate: function (value) {
            // Validate that the input is a number
            const isValid = !isNaN(parseFloat(value)) && isFinite(value);
            return isValid || 'Please enter a valid number for the role ID';
          },
        },
        {
          name: 'manager_id',
          type: 'input',
          message: 'Enter the manager ID for the employee (if applicable):',
          validate: function (value) {
            // Validate that the input is a number
            const isValid = !isNaN(parseFloat(value)) && isFinite(value);
            return isValid || 'Please enter a valid number for the manager ID';
          },
        },
      ])
      .then((answer) => {
        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)';
  
        connection.query(
          query,
          [answer.first_name, answer.last_name, parseInt(answer.role_id), parseInt(answer.manager_id) || null],
          (err, res) => {
            if (err) throw err;
  
            console.log('Employee added successfully!');
            startApp();
          }
        );
      });
  }
  

function updateEmployeeRole() {
  // Implement the logic for updating an employee's role
  // You'll need to prompt the user for the employee to update and the new role ID
  // Then, update the database accordingly

  startApp();
}
