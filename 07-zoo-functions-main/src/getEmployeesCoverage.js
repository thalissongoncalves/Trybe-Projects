const data = require('../data/zoo_data');

const peopleObj = {};

const searchName = (obj) => {
  const containName = data.employees
    .find((element) => element.firstName === obj.name || element.lastName === obj.name);
  if (containName === undefined) {
    throw new Error('Informações inválidas');
  }
  return containName;
};

const searchSpecies = (obj) => {
  const getSpecies = searchName(obj).responsibleFor;
  const getSpeciesLocation = getSpecies.map((element) => data.species
    .filter((element2) => element2.id === element));
  const species = getSpeciesLocation.map((innerArray) => innerArray.map((object) => object.name))
    .reduce((acc, curr) => acc.concat(curr), []);
  return species;
};

const searchLocations = (obj) => {
  const getSpecies = searchName(obj).responsibleFor;
  const getSpeciesLocation = getSpecies.map((element) => data.species
    .filter((element2) => element2.id === element));
  const locations = getSpeciesLocation.map((innerArray) => innerArray
    .map((object) => object.location))
    .reduce((acc, curr) => acc.concat(curr), []);
  return locations;
};

const searchId = (obj) => {
  const containId = data.employees.find((element) => element.id === obj.id);
  if (containId === undefined) {
    throw new Error('Informações inválidas');
  }
  return containId;
};

const searchSpeciesForId = (obj) => {
  const getSpecies = searchId(obj).responsibleFor;
  const getSpeciesLocation = getSpecies.map((element) => data.species
    .filter((element2) => element2.id === element));
  const species = getSpeciesLocation.map((innerArray) => innerArray.map((object) => object.name))
    .reduce((acc, curr) => acc.concat(curr), []);
  return species;
};

const searchLocationsForId = (obj) => {
  const getSpecies = searchId(obj).responsibleFor;
  const getSpeciesLocation = getSpecies.map((element) => data.species
    .filter((element2) => element2.id === element));
  const locations = getSpeciesLocation.map((innerArray) => innerArray
    .map((object) => object.location))
    .reduce((acc, curr) => acc.concat(curr), []);
  return locations;
};

const allFullName = data.employees.map((element) => `${element.firstName}`);

const allPeopleObjAdd = () => {
  const allPeople = [];
  for (let index = 0; index < allFullName.length; index += 1) {
    const iteracao = { name: allFullName[index] };
    const person = {
      id: searchName(iteracao).id,
      fullName: `${searchName(iteracao).firstName} ${searchName(iteracao).lastName}`,
      species: searchSpecies(iteracao),
      locations: searchLocations(iteracao),
    };
    allPeople.push(person);
  }
  return allPeople;
};

const getEmployeesCoverage = (obj) => {
  if (!obj) {
    return allPeopleObjAdd();
  }
  if (obj.name) {
    peopleObj.id = searchName(obj).id;
    peopleObj.fullName = `${searchName(obj).firstName} ${searchName(obj).lastName}`;
    peopleObj.species = searchSpecies(obj);
    peopleObj.locations = searchLocations(obj);
  }
  if (obj.id) {
    peopleObj.id = searchId(obj).id;
    peopleObj.fullName = `${searchId(obj).firstName} ${searchId(obj).lastName}`;
    peopleObj.species = searchSpeciesForId(obj);
    peopleObj.locations = searchLocationsForId(obj);
  }
  return peopleObj;
};

getEmployeesCoverage({ name: 'Nigel' });

module.exports = getEmployeesCoverage;
