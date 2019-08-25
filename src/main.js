import {menuTemplate} from './components/templates/menu-template.js';
import {searchTemplate} from './components/templates/search-template.js';
import {filtersTemplate} from './components/templates/filters-template.js';
import {boardTemplate} from './components/templates/board-template.js';
import {taskData, filtersData} from './components/data.js';
import {TASK_COUNT} from './components/constans.js';

const initTasksList = Array.from(new Array(TASK_COUNT)).map(() => taskData());
const filtersList = filtersData(initTasksList);
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

const massRenderElements = () => {
  return `${searchTemplate()}
          ${filtersTemplate(filtersList)}
          ${boardTemplate(initTasksList, false)}`;
};

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

render(headerElement, menuTemplate(), `beforeend`);
render(mainElement, massRenderElements(), `beforeend`);

const onLoadMoreClickHandler = (actualTasksList) => {
  const additionalTasks = Array.from(new Array(TASK_COUNT)).map(() => taskData());
  const actualFiltersList = filtersData([...actualTasksList, ...additionalTasks]);
  let boardTasksElement = mainElement.querySelector(`.board`);
  let filterElement = mainElement.querySelector(`.filter`);

  const updateElements = () => {
    return `${filtersTemplate(actualFiltersList)}
          ${boardTemplate([...actualTasksList, ...additionalTasks], true)}`;
  };

  boardTasksElement.remove();
  filterElement.remove();
  render(mainElement, updateElements(), `beforeend`);
};

let loadMoreButton = mainElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  onLoadMoreClickHandler(initTasksList);
});


