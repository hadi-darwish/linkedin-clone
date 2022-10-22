import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import JobCard from "./components/JobCard/JobCard";
import HomePage from "./pages/HomePage";
import JobsPage from "./pages/JobsPage";
import NotificationPage from "./pages/NotificationPage";
import EditProfilePage from "./pages/EditProfilePage";
import FollowingPeople from "./pages/FollwingPeople";
import AddOfferPage from "./pages/AddOfferPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <AddOfferPage />
          <Routes>
            <Route path="*" element={<LandingPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
