import {menuTemplate} from './templates/menuTemplate.js';
import {searchTemplate} from './templates/searchTemplate.js';
import {filtersTemplate} from './templates/filtersTemplate.js';
import {boardTemplate} from './templates/boardTemplate.js';

const massRenderElements = () => {
  return `${searchTemplate()}
          ${filtersTemplate()}
          ${boardTemplate()}`;
};
const mainElement = document.querySelector(`.main`);
const headerElement = mainElement.querySelector(`.main__control`);

const render = (element, template, place) => {
  element.insertAdjacentHTML(place, template);
};

render(headerElement, menuTemplate(), `beforeend`);
render(mainElement, massRenderElements(), `beforeend`);

