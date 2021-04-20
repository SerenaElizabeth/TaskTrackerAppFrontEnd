import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

function TaskCard(props) {
  console.log(props.id);
  return (
    <div className="taskCard">
      <ul>
        <li>Name: {props.name}</li>
        <li>Details: {props.description}</li>
        <li>Size: {props.size}</li>
        <li>Deadline: {props.deadline.slice(0, 10)}</li>
        <li>Status: {props.status}</li>
      </ul>
      <FaTimes
        onClick={() => props.deleteItem(props.id, props.index)}
        style={{ color: "red" }}
      />
      <FaEdit />
    </div>
  );
}

export default TaskCard;
