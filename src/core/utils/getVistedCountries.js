import {countriesCrossed} from '../constants';
const getVisitedCountries = visitedCountries => {
  var string = '';
  for (const [key, value] of visitedCountries.entries()) {
    for (let i = countriesCrossed.length - 1; i >= 0; i--) {
      if (countriesCrossed[i].id === key && value) {
        string = string + countriesCrossed[i].data + ', ';
      }
    }
  }
  return string.slice(0, string.length - 2);
};
export default getVisitedCountries;
