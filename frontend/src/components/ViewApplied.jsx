import React, { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import request from "../config/axios";

const ViewApplied = ({ offer_id }) => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    request({ method: "get", url: `/users/applicants/${offer_id}` })
      .then((res) => {
        setCompanies(res);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Home Page</h1>

      {companies.map((company) => (
        <CompanyCard company={company} hidden={false} />
      ))}
    </>
  );
};

export default ViewApplied;
