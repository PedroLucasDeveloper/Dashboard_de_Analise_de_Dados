import axios from 'axios';

// Configuração global do Axios
const api = axios.create({
  baseURL: 'http://localhost:5000/api', // URL do backend
  timeout: 5000,                        // Tempo limite para requisições (opcional)
  headers: {
    'Content-Type': 'application/json', // Define o tipo padrão de conteúdo
  },
});

// Tratamento de Erros Global (opcional)
api.interceptors.response.use(
  (response) => response, // Sucesso: Retorna a resposta normalmente
  (error) => {
    // Exibe erros no console
    console.error('Erro na API:', error.response || error.message);
    return Promise.reject(error);
  }
);

export default api;