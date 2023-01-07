import React, { useEffect, useState } from "react";
import axios from "../api/post";
import ToDoList from "../components/ToDoList";
import "../styles/View.css";

const View = () => {
  const [toDos, setToDos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/todos")
      .then((res) => res.json())
      .then((res) => {
        const loadedToDos = [];
        for (const key in res) {
          loadedToDos.push({
            key: res[key].todo_id + res[key].title,
            ...res[key],
          });
        }
        setToDos(loadedToDos);
      })
      .catch((err) => console.log(err.message));
  }, []);

  const deleteHandler = (id) => {
    fetch(`http://localhost:5000/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => {
      })
      .catch((err) => console.log(err));

    const toDoList = toDos.filter((toDo) => toDo.todo_id !== id);
    setToDos(toDoList);
  };

  const editHandler = (id) =>{
    console.log(id)
  }

  return (
    <div className="view">
      {isLoading && <div>Loading</div>}
      {!isLoading && <ToDoList onHandleEdit={editHandler} onHandleDelete={deleteHandler} toDos={toDos} />}
    </div>
  );
};

export default View;
