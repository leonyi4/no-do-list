import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Fade } from "@mui/material";
import React, { useState } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  const [isClicked, setIsClicked] = useState(false);
  let navigate = useNavigate();

  const createClickHandler = (event) => {
    setIsClicked((prev) => !prev);
    navigate("/create");
  };

  const { ref, inView } = useInView({
    threshold: 0,
  });

  const cName = inView ? "home fade-in" : "home";

  return (
    <div className={cName} ref={ref}>
      <div>
        <div className="title">
          <h1>Home</h1>
        </div>

        <div className="description">
          <h2>This is A website for making to do lists</h2>
          <h2>You can click on the create button below to get started</h2>
        </div>
        <div className="arrow">
          <ArrowDownwardIcon
            sx={{ fontSize: "80px", color: "#6023bb", padding: "10px" }}
          />
        </div>
        <div>
          <button className="createBtn" onClick={createClickHandler}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
