import React, { useState } from "react";
import request from "../../config/axios";
import Button from "../Button/Button";
import "./CompanyCard.css";

const CompanyCard = ({ company }) => {
  const data1 = {
    company_id: company._id,
  };
  const [isFollowed, setIsFollowed] = useState(false);

  request({ method: "post", url: "/users/is-following", data: data1 })
    .then((res) => {
      setIsFollowed(res);
    })
    .catch((err) => {
      console.log(err);
    });

  const onClick = () => {
    const data = {
      company_id: company._id,
    };
    request({ method: "post", url: "/users/follow", data })
      .then((res) => {
        console.log(res);
        setIsFollowed(!isFollowed);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="company-card">
        <div className="company-logo">
          <img src={company.profilePicture} alt="company-logo" />
        </div>
        <div className="company-name">
          <h3>{company.name}</h3>
        </div>
        <Button
          text={isFollowed ? "Unfollow" : "Follow"}
          onClick={onClick}
          color={isFollowed ? "red" : "green"}
        />
      </div>
    </>
  );
};

export default CompanyCard;
