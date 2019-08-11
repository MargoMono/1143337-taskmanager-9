import boardTaskEditTemplate from './boardTaskEditTemplate.js';
import boardTasksList from './boardTasksList.js';
import boardButtonTemplate from './boardButtonTemplate.js';

const boardTemplate = () => {
  return `<section class="board container">
        <div class="board__filter-list">
          <a href="#" class="board__filter">SORT BY DEFAULT</a>
          <a href="#" class="board__filter">SORT BY DATE up</a>
          <a href="#" class="board__filter">SORT BY DATE down</a>
        </div>

        <div class="board__tasks">
            ${boardTaskEditTemplate}
            ${boardTasksList}
        </div>
            ${boardButtonTemplate}
      </section>`;
};

export default boardTemplate();
