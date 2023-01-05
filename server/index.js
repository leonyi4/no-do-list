const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

app.use(cors());
app.use(express.json());

//post a todo
app.post("/todos", async (req, res) => {
  try {
    const { title, description, importance } = req.body;
    const newToDo = await pool.query(
      "INSERT INTO todo (title,description,importance) VALUES($1,$2,$3) RETURNING *",
      [title, description, importance]
    );

    res.json(newToDo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//get all todos
app.get("/todos", async (req, res) => {
  try {
    const toDos = await pool.query("SELECT * FROM todo");
    res.json(toDos.rows);
  } catch (err) {
    console.log(err.message);
  }
});

//get a todos
app.get("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const toDo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [
      id,
    ]);
    res.json(toDo.rows[0]);
  } catch (err) {
    console.log(err.message);
  }
});

//update a todo
app.put("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    const updatedToDo = await pool.query(
      "UPDATE todo SET description = $1 WHERE todo_id = $2 ",
      [description, id]
    );

    res.json("To Do has been updated");
  } catch (err) {
    console.log(err.message);
  }
});

//delete a todo
app.delete("/todos/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteToDO = await pool.query("DELETE FROM todo WHERE todo_id = $1", [
      id,
    ]);

    res.json("To Do has been deleted");
  } catch (err) {
    console.log(err.message);
  }
});

pool
  .query("SELECT * FROM todo ORDER BY todo_id ASC")
  .then((res) => console.log(res.rows));

app.listen(5000, () => {
  console.log("server started on port 5000");
});
