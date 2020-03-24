import {countriesCrossed} from '../constants';
const getVisitedCountries = visitedCountries => {
  var string = '';
  for (const [key, value] of visitedCountries.entries()) {
    for (let country = countriesCrossed.length - 1; country >= 0; country--) {
      if (countriesCrossed[country].id === key && value) {
        string = string + countriesCrossed[country].data + ', ';
      }
    }
  }
  return string.slice(0, string.length - 2);
};
export default getVisitedCountries;
