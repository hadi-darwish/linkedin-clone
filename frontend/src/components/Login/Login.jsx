import axios from "axios";
import React, { useState } from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onClick = () => {
    const data = {
      email,
      password,
    };
    request({ method: "post", url: "/auth/login", data })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.token);
        localStorage.setItem("user", JSON.stringify(res.result));
        const user = JSON.parse(localStorage.getItem("user"));
        if (user.type === "user") {
          navigate("/home");
        } else {
          navigate("/add-offer");
        }
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
        <Button text="Login" onClick={onClick} hidden={true} />
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default Login;
