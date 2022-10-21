import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import SignUp from "./components/SignUp/SignUp";
import React from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
