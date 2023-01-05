CREATE DATABASE toDoList;

CREATE TABLE todo(
    todo_id SERIAL PRIMArY KEY,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(255) NOT NULL,
    importance smallint not null
);