import {ADD_TASK, REMOVE_TASK, COMPLETE_TASK} from '../constants';


const TASKS = {};

TASKS.tasks = [
  {
    id: 1,
    text: 'Learn ReactJS',
    isCompleted: true,
  },
  {
    id: 2,
    text: 'Learn Angular 7',
    isCompleted: false,
  },
  {
    id: 3,
    text: 'Learn Vuejs',
    isCompleted: false,
  }
];

const tasks = (state = TASKS.tasks, {id, text, isCompleted, type}) => {
  switch (type) {
    case ADD_TASK :
      return [
        ...state, {
          id,
          text,
          isCompleted,
        }
      ];

    case REMOVE_TASK:
      return [...state].filter(task => task.id !== id);

    case COMPLETE_TASK:
      return [...state].map(task => {
        if (task.id === id) {
          task.isCompleted = !task.isCompleted;
        }
        return task;
      });
    default:
      return state;
  }
};

export default tasks;