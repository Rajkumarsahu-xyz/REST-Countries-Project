import React from "react";
import CountriesCard from "./CountriesCard";
// import countries from "../countries.json"

function Home({countries}) {
    
    return (
        <div>
            <input />
            <select name="countries by region">
                <option value="Bob">Filter by Region</option>
                <option value="Alice">Africa</option>
                <option value="Bob">America</option>
                <option value="Bob">Asia</option>
                <option value="Bob">Europe</option>
                <option value="Bob">Ocenia</option>
            </select>

            <CountriesCard countries={countries}/>
            
        </div>
    );
}

export default Home;