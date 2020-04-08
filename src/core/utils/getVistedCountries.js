import {countriesCrossed} from '../constants';
const getVisitedCountries = visitedCountries => {
  var string = '';
  for (const [key, value] of visitedCountries.entries()) {
    for (let index = countriesCrossed.length - 1; index >= 0; index--) {
      for (
        let entries = countriesCrossed[index].data.length - 1;
        entries >= 0;
        entries--
      ) {
        if (countriesCrossed[index].data[entries].iso === key && value) {
          string =
            string + countriesCrossed[index].data[entries].country + ', ';
        }
      }
    }
  }
  return string.slice(0, string.length - 2);
};

export default getVisitedCountries;
