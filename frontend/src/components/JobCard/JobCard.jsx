import React, { useState } from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import "./JobCard.css";
import logo from "../../assets/logo.svg";

const JobCard = ({ offer_id, title, description, company }) => {
  const [isApplied, setIsApplied] = useState(false);

  request({ method: "post", url: "/users/have-applied", data: { offer_id } })
    .then((res) => {
      setIsApplied(res);
    })
    .catch((err) => {
      console.log(err);
    });

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
        setIsApplied(true);
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

        <Button
          text={isApplied ? "Applied" : "Apply"}
          onClick={onClick}
          color={isApplied ? "red" : "green"}
          clickable={!isApplied}
        />
      </div>
    </>
  );
};

export default JobCard;
