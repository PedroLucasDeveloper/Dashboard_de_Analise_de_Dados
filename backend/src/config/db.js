const { Sequelize } = require('sequelize');

// Configuração direta das credenciais
const sequelize = new Sequelize(
  'dashboard_analytics',  // Nome do banco
  'spedr',                // Usuário do banco
  'abc@123',              // Senha do banco
  {
    host: 'localhost',    // Host do banco
    port: 5432,           // Porta do banco
    dialect: 'postgres',  // Dialeto do banco
    logging: false,       // Desabilita logs SQL no console
  }
);

// Testar conexão
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o PostgreSQL bem-sucedida!');
  } catch (error) {
    console.error('Erro ao conectar ao banco de dados:', error);
  }
})();

module.exports = sequelize;
