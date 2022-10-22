import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import JobCard from "./components/JobCard/JobCard";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <JobCard />
          <Routes>
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
