import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

function TaskCard(props) {
  console.log(props.id);
  return (
    <div className="taskCard">
      <div className="icons">
        <FaTimes
          onClick={() => props.deleteItem(props.id, props.index)}
          style={{ color: "red" }}
        />
        <FaEdit />
      </div>
      <ul>
        <li>{props.name}</li>
        {props.description && <li>{props.description}</li>}
        {props.deadline && <li>Deadline: {props.deadline.slice(0, 10)}</li>}
      </ul>
    </div>
  );
}

export default TaskCard;
