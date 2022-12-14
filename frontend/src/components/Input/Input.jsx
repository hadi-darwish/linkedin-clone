import React from "react";
import "./Input.css";
const Input = ({
  type,
  value,
  onChange,
  text,
  name,
  id,
  onSelect,
  labelOn = true,
  checked,
}) => {
  return (
    <div className="div">
      {labelOn && <label htmlFor={id}>{text}</label>}
      <input
        className="input"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={text}
        name={name}
        id={id}
        onSelect={onSelect}
        checked={checked}
      />
    </div>
  );
};

export default Input;
