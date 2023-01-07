import React from "react";
import { useNavigate } from "react-router-dom";
import Form from "../components/Form";
import "../styles/Create.css";

const Create = () => {
  const navigate = useNavigate();

  const addToDoHandler = (toDo) => {
    // axios
    //   .post(
    //     "/toDos.json",
    //     {
    //       title: toDo.title,
    //       desc: toDo.desc,
    //       importance: toDo.importance,
    //       date: toDo.date,
    //     }
    //   )
    //   .then(function (response) {
    //   })
    //   .catch(function (error) {
    //   });

    console.log(toDo);
    const body = {
      title: toDo.title,
      description: toDo.desc,
      importance: toDo.importance,
    };

    fetch("http://localhost:5000/todos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.message));

      navigate('/view')

  };

  return (
    <div className="card">
      <Form onAddToDos={addToDoHandler} />
    </div>
  );
};

export default Create;
