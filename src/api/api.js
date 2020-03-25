import axios from 'axios';

const API_BASE_URL = 'https://monitor-api.indispus.dev/';

export const sendPhoneNumber = async (phone, countryCode, phoneID) => {
  return axios
    .post(
      `${API_BASE_URL}/phone/validate`,
      {
        phone,
        phone_country_prefix: countryCode,
        phone_identifier: phoneID,
      },
      {
        headers: {
          'X-API-KEY': 'Zeileeg4xahdi4zixeaquo0aothooj0b',
        },
      },
    )
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error.response, 'err');
      return error.response;
    });
};

export const sendCode = async (phone, countryCode, phoneID) => {
  return axios
    .post(
      `${API_BASE_URL}/phone/validate`,
      {
        phone,
        phone_country_prefix: countryCode,
        phone_identifier: phoneID,
      },
      {
        headers: {
          'X-API-KEY': 'Zeileeg4xahdi4zixeaquo0aothooj0b',
        },
      },
    )
    .then(response => {
      console.log(response);
      return response;
    })
    .catch(error => {
      console.log(error.response, 'err');
      return error.response;
    });
};
