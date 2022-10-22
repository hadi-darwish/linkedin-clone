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

        {user !== null && localStorage.getItem("token") && (
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
              {user.type === "user" ? (
                <>
                  <Link to="/home">Home</Link>
                  <Link to="/jobs">Jobs</Link>
                </>
              ) : (
                <Link to="/add-offer">Add Offer</Link>
              )}

              {user.type === "user" ? (
                <Link to="/notifications">Notifications</Link>
              ) : (
                <>
                  <Link to="/view-applied">Applied users</Link>
                  <Link to="/following">Following users</Link>
                </>
              )}
              <Link to="/edit-profile">Edit Profile</Link>

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
