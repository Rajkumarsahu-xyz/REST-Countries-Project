import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function CountriesCard({ countries }) {
  const { isDarkMode } = useTheme();
  return (
    <div className="countriesContainer">
      {countries.map((country) => (
        <div
          className={`countryCard ${
            isDarkMode ? "darkModeElement" : "lightMode"
          }`}
          key={country.cca3}
        >
          <Link to={`/country/${country.cca3}`} className="linkStyle">
            <img
              className="countryFlags"
              src={country.flags.png}
              alt="country-flag"
            />

            <div
              className={`countriesText ${
                isDarkMode ? "darkModeElement" : "lightMode"
              }`}
            >
              <h2>{country.name.common}</h2>
              <br />
              <label htmlFor="">Population: </label>
              <p>{country.population}</p>
              <br />
              <label htmlFor="">Region: </label>
              <p>{country.region}</p>
              <br />
              <label htmlFor="">Capital: </label>
              {Object.keys(country).includes("capital") ? (
                <p>{country.capital.join(", ")}</p>
              ) : (
                "None"
              )}
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CountriesCard;
