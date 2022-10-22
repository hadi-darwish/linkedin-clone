import React, { useEffect, useState } from "react";
import CompanyCard from "../components/CompanyCard/CompanyCard";
import JobCard from "../components/JobCard/JobCard";
import request from "../config/axios";

const HomePage = () => {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    request({ method: "get", url: "/users/companies" })
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
        <CompanyCard company={company} />
      ))}
    </>
  );
};

export default HomePage;
