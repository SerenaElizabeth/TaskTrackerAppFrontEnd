import "./App.css";
import ToDoList from "../ToDoList";
import React, { useState, useEffect } from "react";
import AddTaskPage from "../AddTaskPage";
// import { useAuth0 } from "@auth0/auth0-react";
import Button from "../Button";
import LoginPage from "../LoginPage";

function App() {
  const [notStartedList, setNotStartedList] = useState(null);
  const [inProgressList, setInProgessList] = useState(null);
  const [completedList, setCompletedList] = useState(null);
  const [addItem, setAddItem] = useState(false);

  useEffect(() => {
    async function fetchList() {
      const res = await fetch(process.env.REACT_APP_BACKEND_URL);
      const data = await res.json();
      setNotStartedList(data.filter((todo) => todo.status === "not started"));
      setInProgessList(data.filter((todo) => todo.status === "in progress"));
      setCompletedList(data.filter((todo) => todo.status === "completed"));
    }
    fetchList();
  }, []);

  return (
    <div className="App">
      <Button text="Log Out"></Button>

      <h1>Task Manager</h1>
      <div className="TaskDiv">
        {!addItem && (
          <Button text="Add Task" onClick={() => setAddItem(!addItem)} />
        )}
        {addItem && (
          <AddTaskPage
            setNotStartedList={setNotStartedList}
            notStartedList={notStartedList}
            setAddItem={setAddItem}
          />
        )}
      </div>
      <div className="flexContainer">
        {notStartedList && (
          <ToDoList
            text="not started"
            setList={setNotStartedList}
            todos={notStartedList}
          />
        )}
        {inProgressList && (
          <ToDoList
            text="in prog"
            setList={setInProgessList}
            todos={inProgressList}
          />
        )}
        {completedList && (
          <ToDoList
            text="completed"
            setList={setCompletedList}
            todos={completedList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
