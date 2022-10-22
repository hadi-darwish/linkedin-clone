import React, { useEffect, useState } from "react";
import JobCard from "../components/JobCard/JobCard";
import request from "../config/axios";

const HomePage = () => {
  const [offers, setOffers] = useState([]);
  useEffect(() => {
    request({ method: "get", url: "/offers" })
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
      <h1>Home Page</h1>

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

export default HomePage;
