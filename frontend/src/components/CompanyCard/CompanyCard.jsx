import React from "react";
import request from "../../config/axios";
import Button from "../Button/Button";

const CompanyCard = ({ company }) => {
  const onClick = () => {
    const data = {
      company_id: company._id,
    };
    request({ method: "post", url: "/users/follow", data })
      .then((res) => {
        console.log(res);
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
        <Button text={"Follow"} onClick={onClick} />
      </div>
    </>
  );
};

export default CompanyCard;
