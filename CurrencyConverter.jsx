import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CurrencyConverter() {
  const [amount, setAmount] = useState('');
  const [currency, setCurrency] = useState('');
  const [convertedAmount, setConvertedAmount] = useState('');
  const nav = useNavigate();

  const currencies = ['USD', 'EUR', 'ILS'];

  const handleConvert = () => {
    if (amount === '' || currency === '') {
      alert('Please enter both amount and currency!');
      return;
    }

    let conversionRate = 1;
    switch (currency) {
      case 'USD':
        conversionRate = 3.25;
        break;
      case 'EUR':
        conversionRate = 3.85;
        break;
      // Additional cases for other currencies can be added here
      default:
        break;
    }

    const result = (amount * conversionRate).toFixed(2);
    setConvertedAmount(result);
  };

  const handleShareOnFacebook = () => {
    // Logic for sharing on Facebook
    alert('Share on Facebook clicked!');
  };

  const handleGoToCurrencyList = () => {
     nav('/currency-list')
  };

  return (
    <div>
      <h2>Currency Converter</h2>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount"
        />
        <select
          value={currency}
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option value="">Select currency</option>
          {currencies.map((cur, index) => (
            <option key={index} value={cur}>{cur}</option>
          ))}
        </select>
        <button onClick={handleConvert}>Convert</button>
      </div>
      <div>
        {convertedAmount && <p>Converted amount: {convertedAmount} ILS</p>}
      </div>
      <div>
        <button onClick={handleShareOnFacebook}>Share on Facebook</button>
        <button onClick={handleGoToCurrencyList}>View your exchange list</button>
      </div>
    </div>
  );
}

export default CurrencyConverter;
