import "./App.css";
import React from "react";
import { useState } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { nanoid } from "nanoid";
import Checkbox from "@mui/material/Checkbox";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [task, setTask] = useState("");
  const [donetasks, setDoneTasks] = useState(0);

  const handleInput = (e) => {
    // console.log(e.target.value);
    setTask(e.target.value);
  };

  const handleButtonClick = () => {
    if (task === "") {
      alert("enter a task");
    } else {
      const newObj = { id: nanoid(), title: task, done: false };
      setTodoList([newObj, ...todoList]);
      setTask("");
    }
  };

  const handleCheckbox = (todoId) => {
    const foundTask = todoList.findIndex((index) => index.id === todoId);
    console.log(foundTask);
    const newData = [...todoList];
    newData[foundTask]["done"] = !newData[foundTask]["done"];
    setTodoList(newData);
    const completedTasks = todoList.filter((item) => item.done).length;
    setDoneTasks(completedTasks);
  };

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <div className="col-sm-6 offset-sm-3 mt-3">
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch", textAlign: "center" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Enter your to do"
          variant="standard"
          onChange={handleInput}
          value={task}
        />
      </Box>
      <Button variant="outlined" onClick={handleButtonClick}>
        Add
      </Button>
      <div className="col-sm-6 offset-sm-3 mt-3 ">
        {todoList.length ? (
          todoList.map((item) => {
            return (
              <div key={item.id} className="d-flex justify-content-between">
                <p
                  className="mt-3"
                  style={{ color: item.done ? "green" : "red" }}
                >
                  {item.title}
                </p>
                <Checkbox
                  {...label}
                  size="small"
                  className="mt-1"
                  onChange={() => handleCheckbox(item.id)}
                />
              </div>
            );
          })
        ) : (
          <p>no to do for now</p>
        )}
      </div>
      <footer>
        <div className="col">
          <p>you have {todoList.length - donetasks} tasks to complete</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
