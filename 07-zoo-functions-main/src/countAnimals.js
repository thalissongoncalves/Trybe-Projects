const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const getNames = species.map((element) => element.name);
    const getAmountResidents = species.map((element) => element.residents.length);
    const speciesResidents = {};
    for (let index = 0; index < getNames.length; index += 1) {
      speciesResidents[getNames[index]] = getAmountResidents[index];
    }
    return speciesResidents;
  }
  const speciesData = species.find((element) => element.name === animal.species);
  if (!speciesData) return undefined;

  if (!animal.sex) return speciesData.residents.length;

  const speciesSexData = speciesData.residents.filter((element) => element.sex === animal.sex);
  return speciesSexData.length;
};

module.exports = countAnimals;
