import React, { useState } from 'react';
import { Container, Box, Typography } from '@mui/material';
import DataList from './components/dataList';
import DataForm from './components/dataForm';

const App = () => {
  const [data, setData] = useState([]);

  const handleNewData = (newItem) => {
    setData((prevData) => [...prevData, newItem]);
  };

  return (
    <Container>
      <Box textAlign="center" my={4}>
        <Typography variant="h3" gutterBottom>
          Dashboard de Análise de Dados
        </Typography>
      </Box>
      <DataForm onNewData={handleNewData} />
      <DataList />
    </Container>
  );
};

export default App;