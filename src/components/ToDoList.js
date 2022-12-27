import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  let content = props.toDos
    .filter((toDo) => toDo.completed !== true)
    .sort((a, b) => {
      return a.importance - b.importance;
    })
    .map((toDo) => (
      <ToDo
        completed={toDo.completed}
        id={toDo.id}
        key={toDo.id}
        date={toDo.date}
        title={toDo.title}
        desc={toDo.desc}
        importance={toDo.importance}
        onHandleDelete={props.onHandleDelete}
      />
    ));

  return <ul className="toDoList">{content}</ul>;
};

export default ToDoList;
