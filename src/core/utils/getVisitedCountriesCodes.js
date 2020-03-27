import {countriesCrossed} from '../constants';

const getVisitedCountriesCodes = visitedCountries => {
  var countriesCodes = [];
  for (const [key, value] of visitedCountries.entries()) {
    for (let index = countriesCrossed.length - 1; index >= 0; index--) {
      if (countriesCrossed[index].id === key && value) {
        countriesCodes.push(countriesCrossed[index].code);
      }
    }
  }
  return countriesCodes;
};

export default getVisitedCountriesCodes;
