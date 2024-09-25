const data = require('../data/zoo_data');

const countEntrants = (entrants) => {
  let getChild = 0;
  let getAdult = 0;
  let getSenior = 0;
  const separateByAge = {};
  entrants.forEach((element) => {
    if (element.age < 18) {
      getChild += 1;
    } else if (element.age >= 18 && element.age < 50) {
      getAdult += 1;
    } else if (element.age >= 50) {
      getSenior += 1;
    }
  });
  separateByAge.child = getChild;
  separateByAge.adult = getAdult;
  separateByAge.senior = getSenior;
  return separateByAge;
};

const calculateEntry = (entrants) => {
  if (entrants === undefined || entrants.length === 0) {
    return 0;
  }
  if (Object.keys(entrants).length === 0) {
    return 0;
  }
  const separateByAge = countEntrants(entrants);
  const peopleTotal = (separateByAge.child * data.prices.child)
   + (separateByAge.adult * data.prices.adult)
   + (separateByAge.senior * data.prices.senior);
  return parseFloat(peopleTotal.toFixed(2));
};

module.exports = { calculateEntry, countEntrants };
