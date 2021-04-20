import React, { useReducer } from "react";
import Input from "../Input";

function AddTaskPage({ setNotStartedList, notStartedList }) {
  const newTaskExample = {
    name: "Add something to db",
    description: "post request",
    size: 3,
    deadline: "2021-04-29T00:00:00",
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

  return (
    <div>
      <Input
        placeholder="Add Name"
        type="text"
        onChange={(e) => {
          dispatch({ type: "SET_NAME", payload: e.target.value });
        }}
      />
      <Input
        placeholder="Add Description"
        type="text"
        onChange={(e) => {
          dispatch({ type: "SET_DESCRIPTION", payload: e.target.value });
        }}
      />
      <Input
        type="date"
        onChange={(e) => {
          console.log(e.target.value);
          dispatch({ type: "SET_DEADLINE", payload: e.target.value });
        }}
      />
      {/* <SizePicker />
      <DatePicker /> */}

      {/* <input
        placeholder="add new todo"
        type="text"
        onChange={(e) =>
          setCurrentTodo({ ...currentTodo, name: e.target.value })
        }
      ></input>
      <input
        placeholder="add details"
        type="text"
        onChange={(e) =>
          setCurrentTodo({ ...currentTodo, details: e.target.value })
        }
      ></input>
      <input
        placeholder="add size"
        type="text"
        onChange={(e) =>
          setCurrentTodo({ ...currentTodo, size: e.target.value })
        }
      ></input>
      <input
        placeholder="add deadline"
        type="text"
        onChange={(e) =>
          setCurrentTodo({ ...currentTodo, deadline: e.target.value })
        }
      ></input> */}
      <button
        // onClick={() => {
        //   setTodoList([...todoList, currentTodo]);
        // }}

        onClick={() => {
          console.log(task);
          postTask(task);
          setNotStartedList([...notStartedList, task]);
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default AddTaskPage;
