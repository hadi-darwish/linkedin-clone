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
import ViewAppliedPage from "./pages/ViewAppliedPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="*" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/notifications" element={<NotificationPage />} />
            <Route path="/edit-profile" element={<EditProfilePage />} />
            <Route path="/following" element={<FollowingPeople />} />
            <Route path="/add-offer" element={<AddOfferPage />} />
            <Route path="/view-applied" element={<ViewAppliedPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
