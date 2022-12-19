import React from "react";
import "../styles/View.css";

const dummyData = [
  {
    userId: 1,
    id: 1,
    desc: "abc",
    title: "delectus aut autem",
    completed: true,
  },
  {
    userId: 1,
    id: 2,
    desc: "def",
    title: "quis ut nam facilis et officia qui",
    completed: false,
  },
  {
    userId: 1,
    id: 4,
    desc: "hij",
    title: "et porro tempora",
    completed: true,
  },
  {
    userId: 1,
    id: 6,
    desc: "kmn",
    title: "qui ullam ratione quibusdam voluptatem quia omnis",
    completed: false,
  },
];

const View = () => {
  return (
    <div className="view">
      <h1>View</h1>
    </div>
  );
};

export default View;
