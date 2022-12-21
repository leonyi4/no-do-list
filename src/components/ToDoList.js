import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  let content = props.toDos
    .sort((a, b) => {
      return a.importance - b.importance;
    })
    .map((toDo) => (
      <ToDo
        key={toDo.id}
        title={toDo.title}
        desc={toDo.desc}
        importance={toDo.importance}
        date={toDo.date}
      />
    ));

  return <ul className="toDoList">{content}</ul>;
};

export default ToDoList;
