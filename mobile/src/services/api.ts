import axios from 'axios';

const api = axios.create({
  //TODO: Variáveis ambiente
  baseURL: 'http://192.168.24.123:3333',
});

export default api;
