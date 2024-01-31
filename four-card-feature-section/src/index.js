import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './Component/App';

// add css to root


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);