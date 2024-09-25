const data = require('../data/zoo_data');

const getEmployeeByName = (employeeName) => {
  if (employeeName === undefined) {
    return {};
  }
  const getName = data.employees
    .find((element) => element.firstName === employeeName || element.lastName === employeeName);
  return getName;
};

module.exports = getEmployeeByName;
