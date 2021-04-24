import React, { useReducer } from "react";
import Input from "../Input";
import Button from "../Button";

function AddTaskPage({ setNotStartedList, notStartedList, setAddItem }) {
  const newTaskExample = {
    name: null,
    description: null,
    size: 3,
    deadline: null,
    status: "not started",
  };

  const [task, dispatch] = useReducer(reducer, newTaskExample);

  //reducer function to assign values to the task object to be posted to the database

  function reducer(task, action) {
    switch (action.type) {
      case "SET_NAME":
        return { ...task, name: action.payload };
      case "SET_DESCRIPTION":
        return { ...task, description: action.payload };
      case "SET_SIZE":
        return { ...task, size: action.payload };
      case "SET_DEADLINE":
        return { ...task, deadline: action.payload };
      default:
        return task;
    }
  }

  async function postTask(newTaskObject) {
    console.log(newTaskObject);
    await fetch(`${process.env.REACT_APP_BACKEND_URL}`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newTaskObject),
    });
    //setList([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log(task);
    if (!task.name) {
      alert("Please enter a task");
      return;
    }
    postTask(task);
    setNotStartedList([...notStartedList, task]);
    setAddItem(false);
  }

  return (
    <form className="taskForm" onSubmit={onSubmit}>
      <div className="addtask">
        <Input
          text="Task"
          type="text"
          onChange={(e) => {
            dispatch({ type: "SET_NAME", payload: e.target.value });
          }}
        />
        <Input
          text="Details"
          type="text"
          onChange={(e) => {
            dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
          }}
        />

        <Input
          type="date"
          text="Deadline"
          onChange={(e) => {
            console.log(e.target.value);
            dispatch({ type: "SET_DEADLINE", payload: e.target.value });
          }}
        />

        <input type="submit" value="Save" className="submitButton"></input>
        <Button text="Cancel" onClick={() => setAddItem(false)} />
      </div>
    </form>
  );
}

export default AddTaskPage;
