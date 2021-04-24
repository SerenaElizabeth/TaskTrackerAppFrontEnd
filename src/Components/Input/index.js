import React from "react";

function Input({ text, type, onChange }) {
  return (
    <div>
      <label>{text}</label>
      <input type={type} onChange={onChange}></input>
    </div>
  );
}

export default Input;
