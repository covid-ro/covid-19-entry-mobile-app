const getCountrySearch = (data, value) => {
  let searchedCountries = [];
  for (let index = 0; index < data.length; index++) {
    if (data[index].name.includes(value)) {
      searchedCountries.push(data[index]);
    }
  }
  return searchedCountries;
};

export default getCountrySearch;
