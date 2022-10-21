import React from "react";
import "./Input.css";
const Input = ({ type, value, setValue, text }) => {
  return (
    <div className="div">
      <label className="label">{text}</label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={text}
      />
    </div>
  );
};

export default Input;
