import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import SignUp from "./components/SignUp/SignUp";

function App() {
  return (
    <>
      {" "}
      <div className="App">
        <Button />
        <Input text={"input"} type={"text"} />
        <br></br>
        <br></br>
        <SignUp />
      </div>
    </>
  );
}

export default App;
