import React from "react";

function AddTaskPage() {
  const newTaskExample = {
    name: "Add something to db",
    description: "post request",
    size: 3,
    deadline: "2021-04-25T00:00:00",
    status: "Not started",
  };

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

        onClick={() => postTask(newTaskExample)}
      >
        Submit
      </button>
    </div>
  );
}

export default AddTaskPage;
