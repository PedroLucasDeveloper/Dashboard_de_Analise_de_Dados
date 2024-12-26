import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/data')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('Erro ao buscar dados:', error);
      });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
