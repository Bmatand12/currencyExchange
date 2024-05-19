import React, { useState } from 'react';

function CurrencyList() {
  const [exchangeList, setExchangeList] = useState([
    { type: 'DOLLAR', value: 4 },
    { type: 'EURO', value: 5 },
    { type: 'SHEKEL', value: 1 }
  ]);

  const handleDelete = (index) => {
    const newList = exchangeList.filter((item, i) => i !== index);
    setExchangeList(newList);
  };

  return (
    <div>
      <h2>Your Exchange List</h2>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>TYPE</th>
            <th>VALUE</th>
            <th>TO</th>
            <th>FROM</th>
          </tr>
        </thead>
        <tbody>
          {exchangeList.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.type}</td>
              <td>{item.value}</td>
              <td>=</td>
              <td>{item.value * 1}</td>
              <td><button onClick={() => handleDelete(index)}>X</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CurrencyList;
