import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import api from '../api/api';

const DataForm = ({ onNewData }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/data', {
        name,
        value: parseFloat(value),
      });
      onNewData(response.data); // Atualiza a lista com o novo dado
      setName('');
      setValue('');
    } catch (error) {
      console.error('Erro ao adicionar os dados:', error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap={2}
      p={2}
      border="1px solid #ccc"
      borderRadius="8px"
    >
      <Typography variant="h5" gutterBottom>
        Adicionar Novo Dado
      </Typography>
      <TextField
        label="Nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <TextField
        label="Valor"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <Button type="submit" variant="contained" color="primary">
        Adicionar
      </Button>
    </Box>
  );
};

export default DataForm;