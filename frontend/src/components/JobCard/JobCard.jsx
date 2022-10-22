import React from "react";
import request from "../../config/axios";
import Button from "../Button/Button";

const JobCard = ({}) => {
  return (
    <>
      <div className="job-card">
        <div className="job-company">
          <h4>Company Name</h4>
          <img src="" alt="" />
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
