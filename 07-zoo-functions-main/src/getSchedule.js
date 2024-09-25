const data = require('../data/zoo_data');

const schedule = {
  Monday: { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' },
  Tuesday: {
    exhibition: data.species.filter((element) => element.availability
      .includes('Tuesday'))
      .map((element) => element.name),
    officeHour: `Open from ${data.hours.Tuesday.open}am until ${data.hours.Tuesday.close}pm`,
  },
  Wednesday: {
    exhibition: data.species.filter((element) => element.availability
      .includes('Wednesday'))
      .map((element) => element.name),
    officeHour: `Open from ${data.hours.Wednesday.open}am until ${data.hours.Wednesday.close}pm`,
  },
  Thursday: {
    exhibition: data.species.filter((element) => element.availability
      .includes('Thursday'))
      .map((element) => element.name),
    officeHour: `Open from ${data.hours.Thursday.open}am until ${data.hours.Thursday.close}pm`,
  },
  Friday: {
    exhibition: data.species.filter((element) => element.availability
      .includes('Friday'))
      .map((element) => element.name),
    officeHour: `Open from ${data.hours.Friday.open}am until ${data.hours.Friday.close}pm`,
  },
  Saturday: {
    exhibition: data.species.filter((element) => element.availability
      .includes('Saturday'))
      .map((element) => element.name),
    officeHour: `Open from ${data.hours.Saturday.open}am until ${data.hours.Saturday.close}pm`,
  },
  Sunday: {
    exhibition: data.species.filter((element) => element.availability
      .includes('Sunday'))
      .map((element) => element.name),
    officeHour: `Open from ${data.hours.Sunday.open}am until ${data.hours.Sunday.close}pm`,
  },
};

const getSchedule = (scheduleTarget) => {
  const day = schedule[scheduleTarget];
  if (day) return { [Object.keys(schedule).filter((element) => element === scheduleTarget)]: day };

  const species = data.species.find((element) => element.name === scheduleTarget);
  if (species) return species.availability;

  return schedule;
};

module.exports = getSchedule;
