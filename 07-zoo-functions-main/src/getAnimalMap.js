const data = require('../data/zoo_data');

const animalsLocation = () => {
  const locations = {
    NE: data.species.filter((element) => element.location === 'NE')
      .map((element2) => element2.name),
    NW: data.species.filter((element) => element.location === 'NW')
      .map((element2) => element2.name),
    SE: data.species.filter((element) => element.location === 'SE')
      .map((element2) => element2.name),
    SW: data.species.filter((element) => element.location === 'SW')
      .map((element2) => element2.name),
  };
  return locations;
};

const namesForSpecies = {};

const animalsNameNE = () => {
  const locationNEResidents = data.species.filter((element) => element.location === 'NE')
    .map((element2) => element2.residents
      .map((element3) => element3.name));
  const locationNENames = data.species
    .filter((element) => element.location === 'NE')
    .map((element2) => element2.name);
  const mergedDataNE = locationNENames.reduce((acc, curr, index) => {
    acc[curr] = locationNEResidents[index];
    return acc;
  }, {});
  const resultNE = Object.entries(mergedDataNE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NE = resultNE;
  return namesForSpecies;
};

const animalsNameNW = () => {
  const locationNWResidents = data.species.filter((element) => element.location === 'NW')
    .map((element2) => element2.residents
      .map((element3) => element3.name));
  const locationNWNames = data.species
    .filter((element) => element.location === 'NW')
    .map((element2) => element2.name);
  const mergedDataNW = locationNWNames.reduce((acc, curr, index) => {
    acc[curr] = locationNWResidents[index];
    return acc;
  }, {});
  const resultNW = Object.entries(mergedDataNW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NW = resultNW;
  return namesForSpecies;
};

const animalsNameSE = () => {
  const locationSEResidents = data.species.filter((element) => element.location === 'SE')
    .map((element2) => element2.residents
      .map((element3) => element3.name));
  const locationSENames = data.species
    .filter((element) => element.location === 'SE')
    .map((element2) => element2.name);
  const mergedDataSE = locationSENames.reduce((acc, curr, index) => {
    acc[curr] = locationSEResidents[index];
    return acc;
  }, {});
  const resultSE = Object.entries(mergedDataSE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SE = resultSE;
  return namesForSpecies;
};

const animalsNameSW = () => {
  const locationSWResidents = data.species.filter((element) => element.location === 'SW')
    .map((element2) => element2.residents
      .map((element3) => element3.name));
  const locationSWNames = data.species
    .filter((element) => element.location === 'SW')
    .map((element2) => element2.name);
  const mergedDataSW = locationSWNames.reduce((acc, curr, index) => {
    acc[curr] = locationSWResidents[index];
    return acc;
  }, {});
  const resultSW = Object.entries(mergedDataSW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SW = resultSW;
  return namesForSpecies;
};

const animalsName = () => {
  animalsNameNE();
  animalsNameNW();
  animalsNameSE();
  animalsNameSW();
  return namesForSpecies;
};

const animalsNameNESorted = () => {
  const locationNEResidents = data.species.filter((element) => element.location === 'NE')
    .map((element2) => element2.residents
      .map((element3) => element3.name).sort());
  const locationNENames = data.species
    .filter((element) => element.location === 'NE')
    .map((element2) => element2.name);
  const mergedDataNE = locationNENames.reduce((acc, curr, index) => {
    acc[curr] = locationNEResidents[index];
    return acc;
  }, {});
  const resultNE = Object.entries(mergedDataNE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NE = resultNE;
  return namesForSpecies;
};

const animalsNameNWSorted = () => {
  const locationNWResidents = data.species.filter((element) => element.location === 'NW')
    .map((element2) => element2.residents
      .map((element3) => element3.name).sort());
  const locationNWNames = data.species
    .filter((element) => element.location === 'NW')
    .map((element2) => element2.name);
  const mergedDataNW = locationNWNames.reduce((acc, curr, index) => {
    acc[curr] = locationNWResidents[index];
    return acc;
  }, {});
  const resultNW = Object.entries(mergedDataNW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NW = resultNW;
  return namesForSpecies;
};

const animalsNameSESorted = () => {
  const locationSEResidents = data.species.filter((element) => element.location === 'SE')
    .map((element2) => element2.residents
      .map((element3) => element3.name).sort());
  const locationSENames = data.species
    .filter((element) => element.location === 'SE')
    .map((element2) => element2.name);
  const mergedDataSE = locationSENames.reduce((acc, curr, index) => {
    acc[curr] = locationSEResidents[index];
    return acc;
  }, {});
  const resultSE = Object.entries(mergedDataSE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SE = resultSE;
  return namesForSpecies;
};

const animalsNameSWSorted = () => {
  const locationSWResidents = data.species.filter((element) => element.location === 'SW')
    .map((element2) => element2.residents
      .map((element3) => element3.name).sort());
  const locationSWNames = data.species
    .filter((element) => element.location === 'SW')
    .map((element2) => element2.name);
  const mergedDataSW = locationSWNames.reduce((acc, curr, index) => {
    acc[curr] = locationSWResidents[index];
    return acc;
  }, {});
  const resultSW = Object.entries(mergedDataSW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SW = resultSW;
  return namesForSpecies;
};

const animalsNameSorted = () => {
  animalsNameNESorted();
  animalsNameNWSorted();
  animalsNameSESorted();
  animalsNameSWSorted();
  return namesForSpecies;
};

const getAnimalsForSexNE = (options) => {
  const locationNEResidents = data.species.filter((element) => element.location === 'NE')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean));
  const locationNENames = data.species
    .filter((element) => element.location === 'NE')
    .map((element2) => element2.name);
  const mergedDataNE = locationNENames.reduce((acc, curr, index) => {
    acc[curr] = locationNEResidents[index];
    return acc;
  }, {});
  const resultNE = Object.entries(mergedDataNE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NE = resultNE;
  return namesForSpecies;
};

const getAnimalsForSexSW = (options) => {
  const locationSWResidents = data.species.filter((element) => element.location === 'SW')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean));
  const locationSWNames = data.species
    .filter((element) => element.location === 'SW')
    .map((element2) => element2.name);
  const mergedDataSW = locationSWNames.reduce((acc, curr, index) => {
    acc[curr] = locationSWResidents[index];
    return acc;
  }, {});
  const resultSW = Object.entries(mergedDataSW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SW = resultSW;
  return namesForSpecies;
};

const getAnimalsForSexNW = (options) => {
  const locationNWResidents = data.species.filter((element) => element.location === 'NW')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean));
  const locationNWNames = data.species
    .filter((element) => element.location === 'NW')
    .map((element2) => element2.name);
  const mergedDataNW = locationNWNames.reduce((acc, curr, index) => {
    acc[curr] = locationNWResidents[index];
    return acc;
  }, {});
  const resultNW = Object.entries(mergedDataNW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NW = resultNW;
  return namesForSpecies;
};

const getAnimalsForSexSE = (options) => {
  const locationSEResidents = data.species.filter((element) => element.location === 'SE')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean));
  const locationSENames = data.species
    .filter((element) => element.location === 'SE')
    .map((element2) => element2.name);
  const mergedDataSE = locationSENames.reduce((acc, curr, index) => {
    acc[curr] = locationSEResidents[index];
    return acc;
  }, {});
  const resultSE = Object.entries(mergedDataSE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SE = resultSE;
  return namesForSpecies;
};

const getAnimalsForSex = (options) => {
  getAnimalsForSexNE(options);
  getAnimalsForSexNW(options);
  getAnimalsForSexSE(options);
  getAnimalsForSexSW(options);
  return namesForSpecies;
};

const animalsForSexNESorted = (options) => {
  const locationNEResidents = data.species.filter((element) => element.location === 'NE')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean).sort());
  const locationNENames = data.species
    .filter((element) => element.location === 'NE')
    .map((element2) => element2.name);
  const mergedDataNE = locationNENames.reduce((acc, curr, index) => {
    acc[curr] = locationNEResidents[index];
    return acc;
  }, {});
  const resultNE = Object.entries(mergedDataNE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NE = resultNE;
  return namesForSpecies;
};

const animalsForSexNWSorted = (options) => {
  const locationNWResidents = data.species.filter((element) => element.location === 'NW')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean).sort());
  const locationNWNames = data.species
    .filter((element) => element.location === 'NW')
    .map((element2) => element2.name);
  const mergedDataNW = locationNWNames.reduce((acc, curr, index) => {
    acc[curr] = locationNWResidents[index];
    return acc;
  }, {});
  const resultNW = Object.entries(mergedDataNW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.NW = resultNW;
  return namesForSpecies;
};

const animalsForSexSESorted = (options) => {
  const locationSEResidents = data.species.filter((element) => element.location === 'SE')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean).sort());
  const locationSENames = data.species
    .filter((element) => element.location === 'SE')
    .map((element2) => element2.name);
  const mergedDataSE = locationSENames.reduce((acc, curr, index) => {
    acc[curr] = locationSEResidents[index];
    return acc;
  }, {});
  const resultSE = Object.entries(mergedDataSE).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SE = resultSE;
  return namesForSpecies;
};

const animalsForSexSWSorted = (options) => {
  const locationSWResidents = data.species.filter((element) => element.location === 'SW')
    .map((element2) => element2.residents
      .map((element3) => (element3.sex === options.sex ? element3.name : undefined)))
    .map((element4) => element4.filter(Boolean).sort());
  const locationSWNames = data.species
    .filter((element) => element.location === 'SW')
    .map((element2) => element2.name);
  const mergedDataSW = locationSWNames.reduce((acc, curr, index) => {
    acc[curr] = locationSWResidents[index];
    return acc;
  }, {});
  const resultSW = Object.entries(mergedDataSW).map(([key, value]) => ({ [key]: value }));
  namesForSpecies.SW = resultSW;
  return namesForSpecies;
};

const getAnimalsForSexSorted = (options) => {
  animalsForSexNESorted(options);
  animalsForSexNWSorted(options);
  animalsForSexSESorted(options);
  animalsForSexSWSorted(options);
  return namesForSpecies;
};

const verifyAnimalsLocationSmall = (options) => {
  if (!options.includeNames === true && options.sex === 'female' && options.sorted === true) {
    return animalsLocation();
  }
};

const verifyAnimalsLocation = (options) => {
  if (options === undefined) {
    return animalsLocation();
  }
  if (!options.includeNames === true && options.sex === 'female') {
    return animalsLocation();
  }
  if (verifyAnimalsLocationSmall(options)) {
    verifyAnimalsLocationSmall(options);
  }
};

const verifyAnimalsName = (options) => {
  if (options.includeNames === true && !options.sex && !options.sorted === true) {
    return animalsName();
  }
};

const verifyAnimalsNameSorted = (options) => {
  if (options.includeNames === true && options.sorted === true && !options.sex) {
    return animalsNameSorted();
  }
};

const verifyAnimalsForSexSortedSmall = (options) => {
  if (options.includeNames === true && options.sex === 'female' && options.sorted === true) {
    return getAnimalsForSexSorted(options);
  }
};

const verifyAnimalsForSex = (options) => {
  if (options.sex && !options.sorted) {
    return getAnimalsForSex(options);
  }
  if (verifyAnimalsForSexSortedSmall(options)) {
    return verifyAnimalsForSexSortedSmall(options);
  }
};

const getAnimalMap = (options) => {
  if (verifyAnimalsLocation(options)) {
    return verifyAnimalsLocation(options);
  }
  if (verifyAnimalsName(options)) {
    return verifyAnimalsName(options);
  }
  if (verifyAnimalsNameSorted(options)) {
    return verifyAnimalsNameSorted(options);
  }
  if (verifyAnimalsForSex(options)) {
    return verifyAnimalsForSex(options);
  }
};

module.exports = getAnimalMap;
