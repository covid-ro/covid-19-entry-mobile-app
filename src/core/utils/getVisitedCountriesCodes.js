import {countriesCrossed} from '../constants';

const getVisitedCountriesCodes = visitedCountries => {
  var countriesCodes = [];
  for (const [key, value] of visitedCountries.entries()) {
    for (let index = countriesCrossed.length - 1; index >= 0; index--) {
      for (
        let entries = countriesCrossed[index].data.length - 1;
        entries >= 0;
        entries--
      ) {
        if (countriesCrossed[index].data[entries].iso === key && value) {
          countriesCodes.push(countriesCrossed[index].data[entries].iso);
        }
      }
    }
  }
  return countriesCodes;
};

export default getVisitedCountriesCodes;
