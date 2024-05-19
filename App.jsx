import React from 'react';
import { Route,Routes } from 'react-router-dom'


import CurrencyConverter from './components/CurrencyConverter';
import CurrencyList from './components/CurrencyList';
import NotFound from './components/NotFound';


function App() {
  return (
    <Routes>
     
        <Route  path="/" element={<CurrencyConverter/>} />
        <Route path="/currency-list" element={<CurrencyList/>} />
        <Route element={<NotFound/>} />
     
    </Routes>
  );
}

export default App;
