import React from "react";

function Input({ placeholder, type, onChange }) {
  return (
    <div>
      <input placeholder={placeholder} type={type} onChange={onChange}></input>
    </div>
  );
}

export default Input;
