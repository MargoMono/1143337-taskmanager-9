import {menuTemplate} from './components/templates/menu-template.js';
import {searchTemplate} from './components/templates/search-template.js';
import {filtersTemplate} from './components/templates/filters-template.js';
import {boardTemplate} from './components/templates/board-template.js';
import {taskData, filtersData} from './components/data.js';

const TASK_COUNT = 8;
const tasksList = new Array(TASK_COUNT).fill(null).map(() => taskData());
const filtersList = filtersData(tasksList);

const massRenderElements = () => {
  return `${searchTemplate()}
          ${filtersTemplate(filtersList)}
          ${boardTemplate(tasksList)}`;
};
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

const loadMoreTasks = () => {
  render(mainElement, massRenderElements(), `beforeend`);
};

render(headerElement, menuTemplate(), `beforeend`);
render(mainElement, massRenderElements(), `beforeend`);

const loadMoreButton = mainElement.querySelector(`.load-more`);
loadMoreButton.addEventListener('click', loadMoreTasks);

