import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import request from "../../config/axios";
import Button from "../Button/Button";
import Input from "../Input/Input";
import "./SignUp.css";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [userType, setUserType] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();
  const onClick = () => {
    const data = {
      name,
      email,
      password,
      age,
      type: userType,
      profilePicture: image,
    };
    request({ method: "post", url: "/auth/signup", data })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="signup">
        <h1>Sign Up</h1>
        <Input
          type="text"
          text="Name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
        />
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
        <Input
          type="number"
          text="Age"
          value={age}
          id="age"
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          type="file"
          text="Image"
          value={image}
          id="image"
          onChange={(e) => setImage(e.target.value)}
        />

        <fieldset id="user-type">
          <legend>User Type</legend>
          <Input
            type="radio"
            text="Normal"
            name={"user-type"}
            value={"user"}
            id="user"
            onSelect={(e) => setUserType(e.target.value)}
            onChange={(e) => setUserType(e.target.value)}
          />
          <Input
            type="radio"
            text="Company"
            name={"user-type"}
            value={"company"}
            id="company"
            onSelect={(e) => setUserType(e.target.value)}
            onChange={(e) => setUserType(e.target.value)}
          />
        </fieldset>
        <Button text="Sign Up" id="sign-up" onClick={onClick} />
        <Link to="/">Already have an account? Login</Link>
      </div>
    </div>
  );
};

export default SignUp;
