import React from "react";
import { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import request from "../config/axios";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";

const AddOfferPage = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const onClick = () => {
    const data = {
      title,
      description,
    };
    request({ method: "post", url: "/offers", data })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container">
        <h1>Add Offer Page</h1>
        <Input
          type="text"
          text="Title"
          value={title}
          id="title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="text"
          text="Description"
          value={description}
          id="description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button text="Add Offer" onClick={onClick} hidden={true} />
      </div>
    </>
  );
};

export default AddOfferPage;
