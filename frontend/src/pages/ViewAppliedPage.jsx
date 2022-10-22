import React, { useEffect, useState } from "react";
import ViewApplied from "../components/ViewApplied";
import request from "../config/axios";

const ViewAppliedPage = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [applied, setApplied] = useState([]);
  useEffect(() => {
    request({ method: "get", url: `/users/company-offers` })
      .then((res) => {
        setApplied(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <h1>View Applied Page</h1>
      {applied.map((offer) => (
        <>
          <div>
            <h1>{offer.title}</h1>
            <h1>{offer.description}</h1>
          </div>
          <ViewApplied offer_id={offer._id} />
        </>
      ))}
    </>
  );
};

export default ViewAppliedPage;
