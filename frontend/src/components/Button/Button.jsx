import React from "react";
import "./Button.css";
const Button = ({ color, type, text, onClick, id, clickable }) => {
  return (
    <>
      {" "}
      <button
        className="btn"
        style={{ backgroundColor: color }}
        type={type}
        onClick={onClick}
        id={id}
        disabled={!clickable}
      >
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "default",
};

export default Button;
