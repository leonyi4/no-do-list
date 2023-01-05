import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "../api/post";
import Form from "../components/Form";
import "../styles/Create.css";

const Create = () => {
  const history = useNavigate();
  
  const addToDoHandler = (toDo) => {
    axios
      .post(
        "/toDos.json",
        {
          title: toDo.title,
          desc: toDo.desc,
          importance: toDo.importance,
          date: toDo.date,
        }
      )
      .then(function (response) {
      })
      .catch(function (error) {       
      });

      history('/view');

  };

  return (
    <div className="card">
      <Form onAddToDos={addToDoHandler} />
    </div>
  );
};

export default Create;
