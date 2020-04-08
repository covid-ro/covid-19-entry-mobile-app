const countiesSearch = (data, value) => {
  console.log(data);
  let searchedCounties = [];
  for (let index = 0; index < data.length; index++) {
    if (data[index].nume.includes(value)) {
      searchedCounties.push(data[index]);
    }
  }
  return searchedCounties;
};
export default countiesSearch;
