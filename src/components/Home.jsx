import React, { useState } from "react";
import CountriesCard from "./CountriesCard";
import { MdOutlineSearch } from "react-icons/md";
import { useTheme } from "./ThemeContext";

function Home({ countries }) {
  const { isDarkMode } = useTheme();

  const [searchTerm, setSearchTerm] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const filteredCountries = countries.filter((country) => {
    return (
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (regionFilter === "" || country.region === regionFilter)
    );
  });

  return (
    <div className={`homeContainer ${isDarkMode ? "darkMode" : "lightMode"}`}>
      <div
        className={`searchContainer ${
          isDarkMode ? "darkModeElement" : "lightModeElement"
        }`}
      >
        <MdOutlineSearch />

        <input
          className={`searchBar ${
            isDarkMode ? "darkModeElement" : "lightModeElement"
          }`}
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <select
        className={`filterOption ${
          isDarkMode ? "darkModeElement" : "lightModeElement"
        }`}
        value={regionFilter}
        onChange={(e) => setRegionFilter(e.target.value)}
      >
        <option value="">Filter by Region</option>
        <option value="Africa">Africa</option>
        <option value="Americas">Americas</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>

      <CountriesCard countries={filteredCountries} />
    </div>
  );
}

export default Home;
