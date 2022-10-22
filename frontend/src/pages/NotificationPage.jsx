import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import JobCard from "../components/JobCard/JobCard";
import request from "../config/axios";

const NotificationPage = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    request({ method: "get", url: "users/notification" })
      .then((res) => {
        setOffers(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Notifications Page</h1>
      {offers.map((offer) => (
        <JobCard
          offer_id={offer._id}
          title={offer.title}
          description={offer.description}
          company={offer.company}
        />
      ))}
    </>
  );
};

export default NotificationPage;
