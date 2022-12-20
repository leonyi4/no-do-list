import axios from "axios";
import React, { useEffect, useState } from "react";
import ToDoList from "../components/ToDoList";
import "../styles/View.css";

const View = () => {
  const [toDos, setToDos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const { data: response } = await axios.get(
          "https://todolist-9f57e-default-rtdb.asia-southeast1.firebasedatabase.app/toDos.json"
        );
        const loadedToDos = [];
        for(const key in response){
          loadedToDos.push({
            id:key,
            title:response[key].title,
            desc:response[key].desc,
            importance: response[key].importance,
            date: response[key].date
          })
        }
        setToDos(loadedToDos);
      } catch (error) {
        console.error(error.message);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  

  return (
    <div className="view">
      {isLoading && <div>Loading</div>}
      {!isLoading && <ToDoList toDos={toDos}/>}
    </div>
  );
};

export default View;
