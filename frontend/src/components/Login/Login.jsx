import axios from "axios";
import React, { useState } from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import Input from "../Input/Input";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onClick = () => {
    const data = {
      email,
      password,
    };
    axios
      .post("http://localhost:8000/auth/login", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <Input type="email" text="Email" />
        <Input type="password" text="Password" />
        <Button text="Login" onClick={onClick} />
      </div>
    </div>
  );
};

export default Login;
