import React from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import "./JobCard.css";
import logo from "../../assets/logo.svg";

const JobCard = ({ offer_id, title, description, company }) => {
  const onClick = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    request({
      method: "post",
      url: `/users/apply/${offer_id}`,
      data: {
        user_id: user._id,
      },
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="job-card">
        <div className="job-company">
          <img src={company.profilePicture} alt="company-logo" />
          <h4>{company.name}</h4>
        </div>
        <div className="job-title">
          <h3>{title}</h3>
        </div>
        <div className="job-description">{description}</div>

        <Button text="Apply" onClick={onClick} />
      </div>
    </>
  );
};

export default JobCard;
