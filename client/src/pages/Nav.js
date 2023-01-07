// import ReorderIcon from '@mui/icons-material/Reorder';
import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";
;

const Nav = () => {
  return (
    <nav>
      <h2>Picture</h2>
      {/* <div className="toggleButton">
        <button><ReorderIcon/></button>
      </div> */}
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/view">View</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
