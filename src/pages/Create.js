import UploadIcon from '@mui/icons-material/Upload';
import React from "react";


const Create = () => {
  return (
    <form>
      <label htmlFor="newToDo-Title">Enter the To Do Title</label>
      <div clasName="newToDo-Title">
        <input
          type="text"
          id="newToDo-Title"
          // value={newToDoTitle}
          placeholder="Enter the To Do Title"
        />
      </div>
      <label htmlFor="newToDo-Desc">Enter description</label>
      <div clasName="newToDo-Desc">
        <input
          type="text"
          id="newToDo-Desc"
          // value={newToDoDesc}
          placeholder="Enter the To Do Description"
        />
      </div>
      <div className="urgent">
        <input type="radio" id="high" name="importance" value="HIGH"/>
        <label for="high">High</label>
        <input type="radio" id="middle" name="importance" value="MIDDLE"/>
        <label for="middle">Middle</label>
        <input type="radio" name="importance" value="LOW"/>
        <label for="low">Low</label>
      </div>
      <button className="submit">
        <UploadIcon/>
      </button>
    </form>
  );
};

export default Create;
