import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaArrowLeftLong } from "react-icons/fa6";

function CountriesDetail({countries}) {
    const { countryCode } = useParams();
    console.log(countries[countryCode]);
    console.log(Object.values(countries[countryCode].name.nativeName));
    const borderCountries = countries.reduce((acc, curr) => {
        return [...acc, curr.cca3];
    }, []);

    return (
        <div>
            <Link to="/">
                <button className="backButton">
                    <FaArrowLeftLong />
                    <p className="btn-text">Back</p>
                </button>
            </Link>
            <div className="detailsContainer">
                <img src={countries[countryCode].flags.png} alt=""/>
                <div className="countryDetails">
                    <h1>{countries[countryCode].name.common}</h1>
                    {/* <br /> */}

                    <div className="countryDetailsColumn">
                        <div>
                            <label htmlFor="">Native Name: </label>
                            {/* <p>{Object.values(countries[countryCode].name.nativeName)[0].official}</p> */}
                            <br />
                            <label htmlFor="">Population: </label>
                            <p>{countries[countryCode].population}</p>
                            <br />
                            <label htmlFor="">Region: </label>
                            <p>{countries[countryCode].region}</p>
                            <br />
                            <label htmlFor="">Sub Region: </label>
                            {/* <p>{countries[countryCode].subregion}</p> */}
                            <br />
                            <label htmlFor="">Capital: </label>
                            <p>{(countries[countryCode].capital).join(', ')}</p>
                        </div>

                        <div>
                            <label htmlFor="">Top Level Domain: </label>
                            <p>{countries[countryCode].cca2}</p>
                            <br />
                            <label htmlFor="">Currencies: </label>
                            <p>{Object.values(countries[countryCode].currencies)[0].name}</p>
                            <br />
                            <label htmlFor="">Languges: </label>
                            <p>{Object.values(countries[countryCode].languages).join(', ')}</p>
                        </div>
                    </div>

                    <br />

                    <div className="borderCountriesDiv">
                        <label htmlFor="">Border Countries: </label>
                        {
                            Object.keys(countries[countryCode]).includes("borders") ? (countries[countryCode].borders).map((border) => (
                                <button>{countries[borderCountries.indexOf(border)].name.common}</button>
                            )) : "None"
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}
    
export default CountriesDetail;
// const {id} = useParams();
// const navigate = useNavigate(); 