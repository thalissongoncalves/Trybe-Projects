const data = require('../data/zoo_data');

const isManager = (id) => {
  const getEmployee = data.employees.filter((element) => element.id === id);
  if (getEmployee[0].managers.length > 1) {
    return false;
  }
  return true;
};

const getRelatedEmployees = (managerId) => {
  const getEmployee = data.employees.filter((element) => element.id === managerId);
  if (getEmployee[0].managers.length > 1) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const getManagers = data.employees.filter((element) => element.managers.includes(managerId));
  const getFullNames = getManagers.map((element) => `${element.firstName} ${element.lastName}`);
  return getFullNames;
};

module.exports = { isManager, getRelatedEmployees };
