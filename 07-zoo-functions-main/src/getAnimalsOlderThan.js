const data = require('../data/zoo_data');

const { species } = data;

const getAnimalsOlderThan = (animal, age) => {
  const getName = species.filter((element) => element.name === animal);
  const getResidents = getName.map((element) => element.residents);
  return getResidents.every((residents) => residents.every((resident) => {
    if (resident.age >= age) {
      return true;
    }
    return false;
  }));
};

module.exports = getAnimalsOlderThan;
