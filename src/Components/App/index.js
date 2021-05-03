import "./App.css";
import ListBoard from "../ListBoard";
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
      <div className="header">
        <h1>Task Manager</h1>
        <Button className="headerButton1" text="Log Out"></Button>
        {!addItem && (
          <Button
            className="headerButton2"
            text="Add Task"
            onClick={() => setAddItem(!addItem)}
          />
        )}
      </div>
      {addItem && (
        <AddTaskPage
          setNotStartedList={setNotStartedList}
          notStartedList={notStartedList}
          setAddItem={setAddItem}
        />
      )}

      <div className="parentListContainer">
        {notStartedList && (
          <ListBoard
            text="To Do"
            setList={setNotStartedList}
            todos={notStartedList}
          />
        )}
        {inProgressList && (
          <ListBoard
            text="In Progress"
            setList={setInProgessList}
            todos={inProgressList}
          />
        )}
        {completedList && (
          <ListBoard
            text="Completed"
            setList={setCompletedList}
            todos={completedList}
          />
        )}
      </div>
    </div>
  );
}

export default App;
