import "./App.css";
import ToDoList from "../ToDoList";
import React, { useState, useEffect } from "react";
import AddTaskPage from "../AddTaskPage";
// import { useAuth0 } from "@auth0/auth0-react";
import LoginPage from "../LoginPage";

function App() {
  const [notStartedList, setNotStartedList] = useState(null);
  const [inProgressList, setInProgessList] = useState(null);
  const [completedList, setCompletedList] = useState(null);

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
      <LoginPage />
      {/* <Router>
        <Switch>
          <Route path="/CreateEvent">
            <CreateEvent />
          </Route>
          <Route path="/GroupFeed">
            <GroupFeed />
          </Route>
          <Route path="/">
            {isAuthenticated ? <ProfilePage /> : <LoginPage />}
          </Route>
        </Switch>

        {isAuthenticated && <NavBar />}
      </Router> */}

      <h1>To Do</h1>
      <AddTaskPage
        setNotStartedList={setNotStartedList}
        notStartedList={notStartedList}
      />
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
