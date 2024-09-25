const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...args) => {
  if (args.length === 0) {
    return [];
  }
  if (args.length === 1) {
    return species.filter((element) => element.id === args[0]);
  }
  return species.filter((element, index) => args[index] === element.id);
};

module.exports = getSpeciesByIds;
