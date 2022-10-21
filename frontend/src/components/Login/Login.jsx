import axios from "axios";
import React, { useState } from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Login.css";
import { Link } from "react-router-dom";

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
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="login">
        <h1>Login</h1>
        <Input
          type="email"
          text="Email"
          value={email}
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          text="Password"
          value={password}
          id="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="Login" onClick={onClick} />
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
