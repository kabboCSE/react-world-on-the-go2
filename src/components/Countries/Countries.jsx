import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setvisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log(country.name.common);
    const newVisitedCountries = [...visitedCountries, country];
    setvisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlag = (flag) => {
    const newVisitedFlag = [...visitedFlags, flag];
    setVisitedFlags(newVisitedFlag);
  };
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(countries);
  return (
    <div>
      <h1>In the Countries : {countries.length}</h1>
      <h2>Total Visited Country : {visitedCountries.length} </h2>
      <h2>Total Visited Flag: {visitedFlags.length}</h2>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.cca3.cca3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="visited-flags-container">
        {visitedFlags.map((flag, index) => (
          <img key={index} src={flag}></img>
        ))}
      </div>
      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            handleVisitedCountries={handleVisitedCountries}
            country={country}
            handleVisitedFlag={handleVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
