import React, { useState } from "react";
import TaskCard from "../TaskCard";

export default function ToDoList({ todos, setList, text }) {
  async function deleteItem(id, index) {
    console.log(id);
    await fetch(`${process.env.REACT_APP_BACKEND_URL}${id}`, {
      method: "delete",
    });
    setList([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  //use dragula

  return (
    <div className="flexChild">
      <h1>{text}</h1>
      {todos.length > 0
        ? todos.map((todo, index) => (
            <TaskCard
              deleteItem={deleteItem}
              {...todo}
              index={index}
              key={index}
            />
          ))
        : "no tasks"}
    </div>
  );
}
