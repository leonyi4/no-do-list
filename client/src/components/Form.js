import UploadIcon from "@mui/icons-material/Upload";
import { format } from 'date-fns';
import React, { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

const Form = (props) => {
  const [selected, setSelected] = useState();

  const { ref, inView } = useInView({
    threshold: 0,
  });

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
    };
    console.log(toDos)

    props.onAddToDos(toDos);

    titleRef.current.value= '';
    descRef.current.value= '';
    setSelected();
    document.getElementById('high').checked = false;
    document.getElementById('middle').checked = false;
    document.getElementById('low').checked = false;

  };

  const cName = inView ? "form fade-in" : "toDo";

  return (
    <form onSubmit={submitHandler} id="toDoForm" className={cName} ref={ref}>
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
        <UploadIcon sx={{borderRadius:'5px'}} />
      </button>
    </form>
  );
};

export default Form;
