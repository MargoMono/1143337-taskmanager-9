import {menuTemplate} from './components/templates/menu-template.js';
import {searchTemplate} from './components/templates/search-template.js';
import {filtersTemplate} from './components/templates/filters-template.js';
import {boardTemplate, boardTasksList} from './components/templates/board-template.js';
import {taskData, filtersData} from './components/data.js';
import {TASK_COUNT, TASK_LOAD} from './components/constans.js';

const initTasksList = Array.from(new Array(TASK_COUNT)).map(() => taskData());
const filtersList = filtersData(initTasksList);
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

const massRenderElements = () => {
  return `${searchTemplate()}
          ${filtersTemplate(filtersList)}
          ${boardTemplate(initTasksList.splice(0, TASK_LOAD))}`;
};

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

render(headerElement, menuTemplate(), `beforeend`);
render(mainElement, massRenderElements(), `beforeend`);

const onLoadMoreClickHandler = (actualTasksList) => {
  let boardTasks = mainElement.querySelector(`.board__tasks`);
  let loadMoreButton = mainElement.querySelector(`.load-more`);

  const addTasks = () => {
    return `${boardTasksList(actualTasksList)}`;
  };

  loadMoreButton.remove();
  render(boardTasks, addTasks(), `beforeend`);
};

let loadMoreButton = mainElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, () => {
  onLoadMoreClickHandler(initTasksList);
});


