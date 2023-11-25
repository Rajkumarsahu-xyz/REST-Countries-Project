import "./index.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import CountriesDetail from "./components/CountriesDetail";

import React, { useState, useEffect } from "react";
import DarkModeToggle from "./components/DarkModeToggle";
import { useTheme } from "./components/ThemeContext";

function App() {
  const [countries, setCountries] = useState([]);
  const { isDarkMode } = useTheme();

  useEffect(() => {
    const fetchCountriesData = async () => {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    };

    fetchCountriesData();
  }, []);

  return (
    <div className={`appContainer ${isDarkMode ? "darkMode" : "lightMode"}`}>
      <header
        className={`${isDarkMode ? "darkModeElement" : "lightModeElement"}`}
      >
        <h1>Where in the world?</h1>
        <DarkModeToggle />
      </header>
      <Routes>
        <Route path="/" element={<Home countries={countries} />}></Route>
        <Route
          path="/country/:code"
          element={<CountriesDetail countries={countries} />}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
