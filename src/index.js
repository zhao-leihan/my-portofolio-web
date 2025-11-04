import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/globals.css';
import App from './App.js';

// Inisialisasi AOS
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);