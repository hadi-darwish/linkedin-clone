import React from "react";

const Input = ({ type, value, setValue, text }) => {
  return (
    <>
      <label>{text}</label>
      <input
        className="input"
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={text}
      />
    </>
  );
};

export default Input;
