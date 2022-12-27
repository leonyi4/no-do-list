import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ToDoList from "../components/ToDoList";
import "../styles/View.css";

const View = () => {
  const [toDos, setToDos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const listRef = useRef();
  const [width, setWidth] = useState();
  const [height, setHeight] = useState();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://todolist-9f57e-default-rtdb.asia-southeast1.firebasedatabase.app/toDos.json"
        );
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

  const getListSize = () => {
    const newWidth = listRef.current.clientWidth;
    setWidth(newWidth);

    const newHeight = listRef.current.clientWidth;
    setHeight(newHeight);
  };

  useEffect(() => {
    getListSize();
  }, [toDos]);

  // const deleteHandler = (toDo) => {
  //   console.log(toDo);
  //   const newToDo = {
  //     id: toDo.id,
  //     title: toDo.title,
  //     desc: toDo.desc,
  //     importance: toDo.importance,
  //     date: toDo.date,
  //     completed: true,
  //   };

  //   axios
  //     .put(
  //       `https://todolist-9f57e-default-rtdb.asia-southeast1.firebasedatabase.app/toDos/${toDo.id}`,
  //       newToDo
  //     )
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="view" style={{height: `${height}`}} ref={listRef} >
      {isLoading && <div>Loading</div>}
      {!isLoading && <ToDoList /*onHandleDelete={deleteHandler}*/ toDos={toDos} />}
    </div>
  );
};

export default View;
