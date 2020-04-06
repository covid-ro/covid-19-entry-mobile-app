import {countriesCrossed} from '../constants';

const getCountriesBasedOnCodes = codes => {
  var countries = '';
  for (let codesIndex = 0; codesIndex < codes.length; codesIndex++) {
    for (let index = 0; index < countriesCrossed.length; index++) {
      for (
        let entries = 0;
        entries < countriesCrossed[index].data.length;
        entries++
      ) {
        if (codes[codesIndex] === countriesCrossed[index].data[entries].iso) {
          countries =
            countries + countriesCrossed[index].data[entries].country + ', ';
        }
      }
    }
  }
  return countries.slice(0, countries.length - 2);
};

export default getCountriesBasedOnCodes;
