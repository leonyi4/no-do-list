import React, { useEffect, useRef, useState } from "react";
import axios from "../api/post";
import ToDoList from "../components/ToDoList";
import "../styles/View.css";

const View = () => {
  const [toDos, setToDos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // const listRef = useRef();
  // const [height, setHeight] = useState(929);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios.get("/toDos.json");
        const loadedToDos = [];
        for (const key in response) {
          loadedToDos.push({
            id: key,
            title: response[key].title,
            desc: response[key].desc,
            importance: response[key].importance,
            date: response[key].date,
            completed: response[key].completed,
          });
        }
        setToDos(loadedToDos);
      } catch (error) {
        console.error(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // const getListSize = () => {
  //   const newHeight = listRef.current.clientHeight;
  //   console.log(listRef.current.clientHeight)

  // };

  // useEffect(() => {
  //   getListSize();
  // }, [toDos]);

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
    <div className="view" >
      {isLoading && <div>Loading</div>}
      {!isLoading && <ToDoList onHandleDelete={deleteHandler} toDos={toDos} />}
    </div>
  );
};

export default View;
