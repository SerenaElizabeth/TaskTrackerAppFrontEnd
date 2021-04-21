import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

function TaskCard(props) {
  console.log(props.id);
  return (
    <div className="taskCard">
      <ul>
        <li>{props.name}</li>
        <li>{props.description}</li>
        <li>Complete by: {props.deadline.slice(0, 10)}</li>
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
