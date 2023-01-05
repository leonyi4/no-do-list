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
            key: res[key].todo_id,
            ...res[key],
          });
        }
        console.log(loadedToDos);
        setToDos(loadedToDos);
      })
      .catch((err) => console.log(err.message));
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setIsLoading(true);
  //     try {
  //       const { data: response } = await axios.get("/toDos.json");
  //       const loadedToDos = [];
  //       for (const key in response) {
  //         loadedToDos.push({
  //           id: key,
  //           ...response[key]
  //         });
  //       }
  //       setToDos(loadedToDos);
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //     setIsLoading(false);
  //   };

  //   fetchData();
  // }, []);

  const deleteHandler = (id) => {
    axios
      .delete(`/toDos/${id}.json`, {
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "Content-Type, Accept",
          "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        },
      })
      .then()
      .catch((err) => {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.header);
        } else {
          console.log(`Error: ${err.message}`);
        }
      });

    const toDoList = toDos.filter((toDo) => toDo.id !== id);
    setToDos(toDoList);
  };

  return (
    <div className="view">
      {isLoading && <div>Loading</div>}
      {!isLoading && <ToDoList onHandleDelete={deleteHandler} toDos={toDos} />}
    </div>
  );
};

export default View;
