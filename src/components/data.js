import {
  getRandomIntWithMax,
  getRandomBool,
  getRandomArrayValues,
  getRandomSeveralDaysFromDate,
} from './utils.js';

const getRepeatingDays = () => {
  let repeatingDays = [];
  let days = new Set([`Mo`, `Tu`, `We`, `Th`, `Fr`, `Sa`, `Su`]);
  for (let day of Array.from(days)) {
    repeatingDays[day] = getRandomBool();
  }
  return repeatingDays;
};

const getColors = () => {
  return [`black`, `yellow`, `blue`, `green`, `pink`];
};


const taskData = () => ({
  description: [
    `Изучить теорию`,
    `Сделать домашку`,
    `Пройти интенсив на соточку`][getRandomIntWithMax(2)],
  dueDate: getRandomSeveralDaysFromDate(Date.now(), 7),
  tags: getRandomArrayValues(Array.from(
      new Set([`homework`, `theory`, `practice`, `intensive`, `keks`])), 3),
  repeatingDays: getRepeatingDays(),
  colors: getColors(),
  currentColor: getColors()[getRandomIntWithMax(4)],
  isFavorite: getRandomBool(),
  isArchive: getRandomBool(),
});

const filtersData = tasksList => {
  return [
    {title: `all`, count: 12},
    {title: `overdue`, count: 12},
    {title: `today`, count: 12},
    {title: `favorites`, count: 12},
    {title: `repeating`, count: 12},
    {title: `tags`, count: 12},
    {title: `archive`, count: 12},
  ];
};

export {taskData, filtersData};
