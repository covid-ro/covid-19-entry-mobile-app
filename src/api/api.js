import axios from 'axios';
import {getUserToken} from '../core/utils';

const API_BASE_URL = 'https://covid-api-dev.citizennext.ro/';

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
      return response;
    })
    .catch(error => {
      return error.response;
    });
};

export const sendCode = async (code, phoneID) => {
  return axios
    .post(
      `${API_BASE_URL}/phone/check`,
      {
        phone_validation_code: parseInt(code, 10),
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

export const sendDeclaration = async declaration => {
  const userToken = await getUserToken();
  return axios
    .post(
      `${API_BASE_URL}/declaration`,
      {
        ...declaration,
      },
      {
        headers: {
          'X-API-KEY': 'Zeileeg4xahdi4zixeaquo0aothooj0b',
          authorization: userToken ? `Bearer ${userToken}` : '',
        },
      },
    )
    .then(response => {
      return response;
    })
    .catch(error => {
      return error.response;
    });
};
