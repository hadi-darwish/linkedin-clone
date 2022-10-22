import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import request from "../config/axios";

const LandingPage = () => {
  return (
    <>
      <Routes>
        {" "}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </>
  );
};

export default LandingPage;
