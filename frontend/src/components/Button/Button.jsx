import "./Button.css";
const Button = ({ color, type, text, onClick }) => {
  return (
    <>
      {" "}
      <button
        className="btn"
        style={{ backgroundColor: color }}
        type={type}
        onClick={onClick}
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
