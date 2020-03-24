import {countriesCrossed} from '../constants';
const getVisitedCountries = visitedCountries => {
  var string = '';
  for (const [key, value] of visitedCountries.entries()) {
    for (let index = countriesCrossed.length - 1; index >= 0; index--) {
      if (countriesCrossed[index].id === key && value) {
        string = string + countriesCrossed[index].data + ', ';
      }
    }
  }
  return string.slice(0, string.length - 2);
};
export default getVisitedCountries;
