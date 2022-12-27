import axios from "axios";
import React from "react";
import Form from "../components/Form";
import "../styles/Create.css";

const Create = () => {
  const addToDoHandler = (toDo) => {
    axios
      .post(
        "https://todolist-9f57e-default-rtdb.asia-southeast1.firebasedatabase.app/toDos.json",
        {
          title: toDo.title,
          desc: toDo.desc,
          importance: toDo.importance,
          date: toDo.date,
          completed: toDo.completed
        }
      )
      .then(function (response) {
      })
      .catch(function (error) {       
      });
  };

  return (
    <div className="card">
      <Form onAddToDos={addToDoHandler} />
    </div>
  );
};

export default Create;
