import React from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import request from "../config/axios";

const EditProfilePage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  const [name, setName] = useState(`${user.name}`);
  const [password, setPassword] = useState("");
  const [age, setAge] = useState(`${user.age}`);
  const [image, setImage] = useState();

  const onClick = () => {
    const data = {
      name,
      password,
      age,
      profilePicture: image,
    };
    request({ method: "put", url: `/users/${user._id}`, data })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="container">
        <h1>Edit Profile Page</h1>
        <Input
          type="text"
          text="Name"
          value={name}
          id="name"
          onChange={(e) => setName(e.target.value)}
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
        <Button text="Edit Profile" onClick={onClick} />
      </div>
    </>
  );
};

export default EditProfilePage;
