import axios from 'axios';

const API_BASE_URL = 'https://monitor-api.indispus.dev/';

export const exampleGet = () => {
  axios
    .get('https://www.google.com/')
    .then(response => response)
    .catch(error => error);
};
