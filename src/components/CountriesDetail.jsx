import React from "react";
import { useParams, Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTheme } from "./ThemeContext";

function CountriesDetail({ countries }) {
  const { isDarkMode } = useTheme();
  const { code } = useParams();
  const countriesCCA3 = countries.reduce((acc, curr) => {
    return [...acc, curr.cca3];
  }, []);
  const countryCode = countriesCCA3.indexOf(code);

  return (
    <div
      className={`countryDetailsPage ${isDarkMode ? "darkMode" : "lightMode"}`}
    >
      <Link to="/">
        <button
          className={`backButton ${
            isDarkMode ? "darkModeElement" : "lightModeElement"
          }`}
        >
          <FaArrowLeftLong />
          <p className="btn-text">Back</p>
        </button>
      </Link>
      <div className="detailsContainer">
        <img src={countries[countryCode].flags.png} alt="" />
        <div className="countryDetails">
          <h1>{countries[countryCode].name.common}</h1>

          <div className="countryDetailsColumn">
            <div>
              <label htmlFor="">Native Name: </label>
              {Object.keys(countries[countryCode].name).includes(
                "nativeName"
              ) ? (
                <p>
                  {
                    Object.values(countries[countryCode].name.nativeName)[0]
                      .official
                  }
                </p>
              ) : (
                "None"
              )}
              <br />
              <label htmlFor="">Population: </label>
              <p>{countries[countryCode].population}</p>
              <br />
              <label htmlFor="">Region: </label>
              <p>{countries[countryCode].region}</p>
              <br />
              <label htmlFor="">Sub Region: </label>
              {Object.keys(countries[countryCode]).includes("subregion") ? (
                <p>{countries[countryCode].subregion}</p>
              ) : (
                "None"
              )}
              <br />
              <label htmlFor="">Capital: </label>
              {Object.keys(countries[countryCode]).includes("capital") ? (
                <p>{countries[countryCode].capital.join(", ")}</p>
              ) : (
                "None"
              )}
            </div>

            <div>
              <label htmlFor="">Top Level Domain: </label>
              <p>{countries[countryCode].cca2}</p>
              <br />
              <label htmlFor="">Currencies: </label>
              {Object.keys(countries[countryCode]).includes("currencies") ? (
                <p>
                  {Object.values(countries[countryCode].currencies)[0].name}
                </p>
              ) : (
                "None"
              )}
              <br />
              <label htmlFor="">Languges: </label>
              {Object.keys(countries[countryCode]).includes("languages") ? (
                <p>
                  {Object.values(countries[countryCode].languages).join(", ")}
                </p>
              ) : (
                "None"
              )}
            </div>
          </div>

          <br />

          <div className="borderCountriesDiv">
            <label htmlFor="">Border Countries: </label>
            {Object.keys(countries[countryCode]).includes("borders")
              ? countries[countryCode].borders.map((border) => (
                  <Link to={`/country/${border}`}>
                    <button
                      key={border}
                      className={`borderBtn ${
                        isDarkMode ? "darkModeElement" : "lightModeElement"
                      }`}
                    >
                      {countries[countriesCCA3.indexOf(border)].name.common}
                    </button>
                  </Link>
                ))
              : "None"}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountriesDetail;
