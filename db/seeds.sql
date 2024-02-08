
INSERT INTO department (id, name) VALUES
  (1, 'Engineering'),
  (2, 'Sales'),
  (3, 'Marketing');

INSERT INTO role (id, title, salary, department_id) VALUES
  (1, 'Software Engineer', 80000, 1),
  (2, 'Sales Representative', 60000, 2),
  (3, 'Marketing Coordinator', 55000, 3);


INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES
  (1, 'John', 'Doe', 1, NULL),
  (2, 'Jane', 'Smith', 2, 1),
  (3, 'Mike', 'Johnson', 3, 1),
  (4, 'Sara', 'Williams', 1, 2),
  (5, 'Chris', 'Brown', 2, 2),
  (6, 'Emily', 'Davis', 3, 3);
