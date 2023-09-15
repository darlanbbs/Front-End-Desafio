import axios from 'axios';

axios.get('localhost:3000')
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error('Erro ao fazer a requisição:', error);
  });