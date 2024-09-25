const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const getPeople = data.employees.find((element) => element.id === id);
  const getFirstAnimalID = getPeople.responsibleFor[0];
  const getFirstAnimal = data.species.find((element) => element.id === getFirstAnimalID);
  const getResidentsAnimal = getFirstAnimal.residents.map((element) => element);
  const getOldestAnimal = getResidentsAnimal.reduce((acc, curr) => {
    let updateAcc = acc;
    if (updateAcc < curr.age) {
      updateAcc = curr.age;
    }
    return updateAcc;
  }, 0);
  const getOldestAnimalInformation = getResidentsAnimal
    .filter((element) => element.age === getOldestAnimal);
  return Object.values(getOldestAnimalInformation[0]);
};

console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));

module.exports = getOldestFromFirstSpecies;
