const Data = require('../models/dataModel');

// Obter todos os dados
exports.getAllData = async (req, res) => {
  try {
    const data = await Data.findAll();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar os dados' });
  }
};

// Adicionar novos dados
exports.addData = async (req, res) => {
  try {
    const { name, value } = req.body;
    const newData = await Data.create({ name, value });
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar os dados' });
  }
};