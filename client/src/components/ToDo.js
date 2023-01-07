import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button } from "@mui/material";
import React from "react";
import { useInView } from "react-intersection-observer";
import EditToDo from "./EditToDo";

const ToDo = (props) => {
  const handleDelete = (event) => {
    props.onHandleDelete(props.id);
  };

  const handleEdit = (event) => {
    props.onEdit(props.id);
  };
  const date = props.date.substr(0, 10);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const cName = inView ? "toDo fade-in" : "toDo";

  return (
    <li className={cName} ref={ref}>
      <h2 className="toDoTitle">{props.title}</h2>
      <span className="line"></span>
      <h3 className="toDoDesc">{props.desc}</h3>
      <p className="toDoDate">{`Created on ${date}`}</p>
      <p>{props.completed}</p>
      <div className="buttons">
        <EditToDo id={props.id} desc={props.desc} />
        <Button
          variant="outlined"
          sx={{
            color: "black",
            borderColor: "black",
            backgroundColor: "#F0F0F0",
          }}
          onClick={handleDelete}
        >
          <DeleteForeverIcon />
        </Button>
      </div>
    </li>
  );
};

export default ToDo;
