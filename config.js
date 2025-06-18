export const BASE_URL = 'http://api.smilesviagens.com.br/api/v1';  // Ajustei para a base correta
export const API_KEY = '';

export const options = {
  stages: [
    { duration: '5s', target: 5 },
    { duration: '15s', target: 20 },
    { duration: '10s', target: 0 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<1000'], // 95% das requisições < 1s
    taxa_sucesso: ['rate>0.95'],       // taxa_sucesso deve ser > 95%
  },
};
