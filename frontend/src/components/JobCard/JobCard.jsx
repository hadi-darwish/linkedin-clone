import React from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import "./JobCard.css";
import logo from "../../assets/logo.svg";

const JobCard = ({}) => {
  return (
    <>
      <div className="job-card">
        <div className="job-company">
          <img src={logo} alt="company-logo" />
          <h4>Company Name</h4>
        </div>
        <div className="job-title">
          <h3>Job Title</h3>
        </div>
        <div className="job-description"></div>

        <Button text="Apply" />
      </div>
    </>
  );
};

export default JobCard;
