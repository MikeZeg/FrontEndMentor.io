import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import LandingPage from './component/LandingPage.js'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);