import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import Button from "../Button/Button";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="nav">
        <div className="nav-left nav-logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="nav-center">
          <Input
            type="text"
            text="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            labelOn={false}
          />
        </div>
        <div className="nav-right">
          <Link to="/home">Home</Link>
          <Link to="/notifications">Notifications</Link>
          <Link to="/editprofile">Edit Profile</Link>
          <Link to="/login">Log Out</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
