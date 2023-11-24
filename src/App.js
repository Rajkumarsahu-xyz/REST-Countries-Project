import React, { useEffect, useState } from 'react';
import './index.css';
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom';
import CountriesDetail from './components/CountriesDetail';
// import CountriesData from './components/CountriesData';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchCountriesData = async () => {
            const res = await fetch('https://restcountries.com/v3.1/all');
            const data = await res.json();
            console.log(data);
            setCountries(data);
        }

        fetchCountriesData();
  }, []);

    console.log(countries);

    return (
      <div>
        <h1>Where in the World?</h1>
        <button>Dark Mode</button>
        <Routes>
            <Route path="/" element={<Home countries={countries}/>}></Route>
            <Route path="/country/:id" element={<CountriesDetail countries={countries}/>}></Route>
        </Routes>
        {/* <Home countries={countries}/> */}
      </div>
    );
}

export default App;

