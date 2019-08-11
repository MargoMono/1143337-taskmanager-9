import boardTaskTemplate from './boardTaskTemplate.js'

const boardTasksList = () => {
  let taskCount = 3;
  let boardTasks = '';
  for (let i = 0; i < taskCount; i++) {
    boardTasks += boardTaskTemplate;
  }
  return boardTasks;
};

export default boardTasksList();