import {boardButtonTemplate} from './board-button-template.js';
import {boardTaskEditTemplate} from '../templates/board-task-edit-template.js';
import {boardTaskTemplate} from './board-task-template';

const boardTasksList = (taskListData) => {
  return taskListData.
      map((data) => boardTaskTemplate(data)).
      join(``);
};

const boardTemplate = (tasksList, isLoaded) => {
  return `<section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>

        <div class="board__tasks">
            ${boardTaskEditTemplate(tasksList[0])}
            ${boardTasksList(tasksList)}
        </div>
            ${isLoaded ? `` : boardButtonTemplate()}
      </section>`;
};

export {boardTemplate};
