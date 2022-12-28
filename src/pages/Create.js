import React from "react";
import axios from "../api/post";
import Form from "../components/Form";
import "../styles/Create.css";

const Create = () => {
  const addToDoHandler = (toDo) => {
    axios
      .post(
        "/toDos.json",
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
