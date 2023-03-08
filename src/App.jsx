import React, { useState } from 'react';
import axios from 'axios';

import './App.css';

const App = () => {
  const [advise, setAdvise] = useState('');

  const fetchAdvise = () => {
    axios
      .get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;
        setAdvise(advice);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  fetchAdvise();
  return (
    <div className="app">
      <div className="card">
        <h1 className="heading">{advise}</h1>
        <button className="button" onClick={fetchAdvise}>
          <span>GIVE ME ADVICE!</span>
        </button>
      </div>
    </div>
  );
};

export default App;
