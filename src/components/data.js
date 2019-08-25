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
  tags: getRandomArrayValues(Array.from(new Set([`homework`, `theory`, `practice`, `intensive`, `keks`])), 3),
  repeatingDays: getRepeatingDays(),
  colors: getColors(),
  currentColor: getColors()[getRandomIntWithMax(4)],
  isFavorite: getRandomBool(),
  isArchive: getRandomBool(),
});

const filtersData = (tasksList) => {

  const allTasksListCount = tasksList.length;

  let todayTasksListCount = 0;
  let overdueTasksListCount = 0;
  let favoritesTasksListCount = 0;
  let repeatingTasksListCount = 0;
  let tagsTasksListCount = 0;
  let archiveTasksListCount = 0;

  tasksList.forEach((task) => {
    if (task.dueDate < Date.now()) {
      overdueTasksListCount++;
    }
    if (task.dueDate === Date.now()) {
      todayTasksListCount++;
    }
    if (Object.keys(task.repeatingDays).some((day) => day)) {
      repeatingTasksListCount++;
    }
    if (task.tags.length !== 0) {
      tagsTasksListCount++;
    }
    if (task.isArchive) {
      archiveTasksListCount++;
    }
    if (task.isFavorite) {
      favoritesTasksListCount++;
    }
  });

  return [
    {title: `all`, count: allTasksListCount},
    {title: `overdue`, count: overdueTasksListCount},
    {title: `today`, count: todayTasksListCount},
    {title: `favorites`, count: favoritesTasksListCount},
    {title: `repeating`, count: repeatingTasksListCount},
    {title: `tags`, count: tagsTasksListCount},
    {title: `archive`, count: archiveTasksListCount},
  ];
};

export {taskData, filtersData};
