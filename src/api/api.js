import axios from 'axios';

export const exampleGet = () => {
  axios
    .get('https://www.google.com/')
    .then(response => response)
    .catch(error => error);
};
