const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Importa o pacote CORS
const apiRoutes = require('./routes/api');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Ativa o CORS para todas as rotas
app.use(express.json());

// Rotas da API
app.use('/api', apiRoutes);

// Inicializar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});