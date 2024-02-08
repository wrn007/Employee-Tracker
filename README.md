# Command-Line Employee Management Application
View the walkthrough video at https://youtu.be/B3ww4tA1x9g
View the Repo at https://github.com/wrn007/Employee-Tracker

This is a command-line application for managing departments, roles, and employees.

## Options
- View all departments
- View all roles
- View all employees
- Add a department
- Add a role
- Add an employee
- Update an employee role

## How to Use
1. Start the application using node 'index.js'
2. Choose from the presented options to perform various actions using the arrowkeys and keyboard.

## Functionality
- Viewing all departments displays a formatted table showing department names and ids.
- Viewing all roles presents job titles, role ids, the department each role belongs to, and the salary for each role.
- Viewing all employees shows a formatted table with employee data, including ids, first names, last names, job titles, departments, salaries, and managers.
- Adding a department prompts the user to enter the name of the department, which is then added to the database.
- Adding a role asks for the name, salary, and department for the role, which is then added to the database.
- Adding an employee requires input for the employee’s first name, last name, role, and manager, and then adds the employee to the database.
- Updating an employee role prompts the user to select an employee to update and their new role, updating this information in the database.

## Technologies Used
- Node.js
- MySQL
- Inquirer.js

## Author
Wesley N
https://github.com/wrn007
