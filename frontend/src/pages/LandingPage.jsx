import React, { useState } from "react";
import { Link } from "react-router-dom";
import SignUp from "../components/SignUp/SignUp";
import request from "../config/axios";

const LandingPage = () => {
  return (
    <>
      <SignUp />
    </>
  );
};

export default LandingPage;
