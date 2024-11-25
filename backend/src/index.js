const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const sequelize = require('./config/db.js');
const dataRoutes = require('./routes/dataRoutes.js');

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares globais
app.use(cors());
app.use(bodyParser.json());

// Rotas
app.use('/api/data', dataRoutes);

// Sincronizar banco de dados e iniciar o servidor
(async () => {
  try {
    await sequelize.sync();
    console.log('Banco de dados sincronizado.');
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error('Erro ao iniciar o servidor:', error);
  }
})();
