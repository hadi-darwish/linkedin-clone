import React from "react";
import "./Input.css";
const Input = ({ type, value, onChange, text, name, id, onSelect }) => {
  return (
    <div className="div">
      <label className="label">{text}</label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={text}
        name={name}
        id={id}
        onSelect={onSelect}
      />
    </div>
  );
};

export default Input;
