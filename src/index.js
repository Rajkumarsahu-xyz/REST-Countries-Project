import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
// import reportWebVitals from './reportWebVitals';
// const BrowserRouter = require("react-router-dom").BrowserRouter;

// const Route = require("react-router-dom").Route;

// const Link = require("react-router-dom").Link;


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

