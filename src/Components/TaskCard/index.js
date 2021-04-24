import React from "react";
import { FaTimes, FaEdit } from "react-icons/fa";

function TaskCard(props) {
  console.log(props.id);
  return (
    <div className="taskCard">
      <div className="icons">
        <FaTimes
          onClick={() => props.deleteItem(props.id, props.index)}
          style={{ color: "rgb(59, 59, 59)" }}
        />
        {/* <FaEdit /> */}
      </div>
      <li>{props.name}</li>
      {props.description && <li>{props.description}</li>}
      {props.deadline && <li>Deadline: {props.deadline.slice(0, 10)}</li>}
    </div>
  );
}

export default TaskCard;
