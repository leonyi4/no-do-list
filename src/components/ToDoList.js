import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {

    console.log(props.toDos)


  return (
    <ul className="toDoList">
      {props.toDos.map((toDo) => (
        <ToDo
             key={toDo.id}
          title={toDo.title}
          desc={toDo.desc}
          importance={toDo.importance}
          date={toDo.date}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
