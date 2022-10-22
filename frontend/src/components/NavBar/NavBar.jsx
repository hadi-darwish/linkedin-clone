import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/Input";
import logo from "../../assets/logo.svg";
import "./NavBar.css";

const NavBar = () => {
  const [search, setSearch] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log(search);
  }, [search]);

  return (
    <>
      <div className="nav">
        <div className="nav-left nav-logo">
          <img src={logo} alt="logo" />
        </div>

        {user !== null && (
          <>
            {user.type === "user" && (
              <div className="nav-center">
                <Input
                  type="text"
                  text="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  labelOn={false}
                />
              </div>
            )}
            <div className="nav-right">
              <Link to="/home">Home</Link>
              {user.type === "user" ? (
                <Link to="/notifications">Notifications</Link>
              ) : (
                <Link to="/applied">Applied users</Link>
              )}
              <Link to="/editprofile">Edit Profile</Link>
              <Link
                to="/"
                onClick={() => {
                  localStorage.clear();
                }}
              >
                {" "}
                Log Out
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NavBar;
