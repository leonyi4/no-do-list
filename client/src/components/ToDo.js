import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import React from "react";
import { useInView } from "react-intersection-observer";

const ToDo = (props) => {
  const handleDelete = (event) => {
    props.onHandleDelete(props.id);
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const cName = inView ? "toDo fade-in" : "toDo";
  
  return (
    <li className={cName} ref={ref}>
      <h2 className="toDoTitle">{props.title}</h2>
      <span className="line"></span>
      <h3 className="toDoDesc">{props.desc}</h3>
      <p className="toDoDate">{props.date}</p>
      <p>{props.completed}</p>
      <button onClick={handleDelete}>
        <DeleteForeverIcon />
      </button>
    </li>
  );
};

export default ToDo;
