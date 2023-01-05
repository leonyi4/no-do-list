const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

app.post("/todos", async (req, res) => {
  try {
    const { title,description,importance } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO todo (title,description,importance) VALUES($1,$2,$3) RETURNING *",
      [title,description,importance]
    );

    res.json(newToDo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

pool.query("SELECT * FROM todo",(err,res)=>{
    console.log(res.rows)
});

app.listen(5000, () => {
  console.log("server started on port 5000");
});
