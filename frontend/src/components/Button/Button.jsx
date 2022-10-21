const Button = ({ color, type, text, onClick }) => (
  <button
    className={button}
    style={{ backgroundColor: color }}
    type={type}
    onClick={onClick}
  >
    {text}
  </button>
);

Button.defaultProps = {
  text: "default",
};

export default Button;
