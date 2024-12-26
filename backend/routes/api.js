const express = require('express');
const router = express.Router();
const pool = require('../config/db');

// Rota para listar dados
router.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM "Data"');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/test-db', async (req, res) => {
    try {
      // Tenta fazer uma consulta simples ao banco
      await pool.query('SELECT NOW()');
      res.status(200).json({ message: 'Conexão com o banco de dados bem-sucedida!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao conectar ao banco de dados.', error: error.message });
    }
  });
  

module.exports = router;