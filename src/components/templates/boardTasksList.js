import {taskData} from './data.js';
import {boardTaskTemplate} from './boardTaskTemplate.js';

const boardTasksList = () => {
  return Array.from(new Array(12)).map(() => boardTaskTemplate(taskData())).join(``);
}

export {boardTasksList};
