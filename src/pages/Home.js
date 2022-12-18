import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  let navigate = useNavigate();

  const createClickHandler = (event) => {
    setIsClicked((prev) => !prev);
    navigate("/create");
  };

  return (
    <div className="home">
      <div className="title">
        <h1>Home</h1>
      </div>
      <div className="description">
        <h2>This is A website for making to do lists</h2>
        <h2>You can click on the create button below to get started</h2>
      </div>
      <div className="arrow">
        <ArrowDownwardIcon sx={{ fontSize: "80px", color: "#6023bb",padding:"10px"}} />
      </div>
      <div>
        <button className="createBtn" onClick={createClickHandler}>
          Create
        </button>
      </div>
    </div>
  );
};

export default Home;
