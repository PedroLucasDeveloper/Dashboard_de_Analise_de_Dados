const request = require('supertest');
const app = require('../index'); // Garanta que exporta o app

describe('Testes para rotas de dados', () => {
  it('Deve obter todos os dados', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
  });
});