import React from "react";

function CountriesCard({countries}) {
    return (
        <div className="countriesContainer">
            {
                countries.map((country) => (
                    <div className="countryCard">
                        <img src={country.flags.png} alt="country-flag"/>
                        <br />
                        <div className="countriesText">
                            <h2>{country.name.common}</h2>
                            <br />
                            <label htmlFor="">Population: </label>
                            <p>{country.population}</p>
                            <br />
                            <label htmlFor="">Region: </label>
                            <p>{country.region}</p>
                            <br />
                            <label htmlFor="">Capital: </label>
                            <p>{country.capital}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default CountriesCard;