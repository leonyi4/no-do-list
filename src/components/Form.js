import UploadIcon from "@mui/icons-material/Upload";
import { format } from 'date-fns';
import React, { useRef, useState } from "react";

const Form = (props) => {
  const [selected, setSelected] = useState();


  const titleRef = useRef("");
  const descRef = useRef("");

  const submitHandler = (e) => {
    e.preventDefault();

    const date = format(new Date(), "MMMM dd, yyyy pp");

    const toDos = {
      title: titleRef.current.value,
      desc: descRef.current.value,
      importance: selected,
      date: date,
      completed: false,
    };
    console.log(toDos)

    props.onAddToDos(toDos);
  };

  return (
    <form onSubmit={submitHandler} id="toDoForm" className="form">
      <label htmlFor="newToDo-Title">Enter the To Do Title</label>
      <div className="newToDo-Title">
        <input
          type="text"
          id="newToDo-Title"
          // value={newToDoTitle}
          placeholder="Enter the To Do Title"
          ref={titleRef}
        />
      </div>
      <label htmlFor="newToDo-Desc">Enter description</label>
      <div className="newToDo-Desc">
        <input
          type="text"
          id="newToDo-Desc"
          // value={newToDoDesc}
          placeholder="Enter the To Do Description"
          ref={descRef}
        />
      </div>
      <div className="urgent">
        <input
          onClick={e => setSelected(1)}
          type="radio"
          id="high"
          name="importance"
          value="HIGH"
        />
        <label htmlFor="high">High</label>
        <input
          onClick={e => setSelected(2)}
          type="radio"
          id="middle"
          name="importance"
          value="MIDDLE"
        />
        <label htmlFor="middle">Middle</label>
        <input
          onClick={e => setSelected(3)}
          type="radio"
          id="low"
          name="importance"
          value="LOW"
        />
        <label htmlFor="low">Low</label>
      </div>
      <button className="submit">
        <UploadIcon />
      </button>
    </form>
  );
};

export default Form;
