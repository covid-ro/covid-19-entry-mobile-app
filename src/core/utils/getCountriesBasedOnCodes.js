import {countriesCrossed} from '../constants';

const getCountriesBasedOnCodes = codes => {
  var countries = '';
  for (let codesIndex = 0; codesIndex < codes.length; codesIndex++) {
    for (let index = 0; index < countriesCrossed.length; index++) {
      if (codes[codesIndex] === countriesCrossed[index].code) {
        countries = countries + countriesCrossed[index].data + ', ';
      }
    }
  }
  return countries.slice(0, countries.length - 2);
};

export default getCountriesBasedOnCodes;
