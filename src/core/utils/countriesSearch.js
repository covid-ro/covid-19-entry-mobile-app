import countries from '../constants/countriesCrossed';

const countriesSearch = value => {
  let searchedCountries = [
    {
      title: 'Europa',
      data: [],
    },
    {
      title: 'America de Nord',
      data: [],
    },
    {
      title: 'America de Sud',
      data: [],
    },
    {
      title: 'Asia',
      data: [],
    },
    {
      title: 'Africa',
      data: [],
    },
    {
      title: 'Australia și Oceania',
      data: [],
    },
  ];
  for (let index = 0; index < countries.length; index++) {
    for (let entries = 0; entries < countries[index].data.length; entries++) {
      if (countries[index].data[entries].country.includes(value)) {
        searchedCountries[index].data.push(countries[index].data[entries]);
      }
    }
  }
  for (let index = searchedCountries.length - 1; index >= 0; index--) {
    if (searchedCountries[index].data.length === 0) {
      searchedCountries.splice(index, 1);
    }
  }
  return searchedCountries;
};

export default countriesSearch;
