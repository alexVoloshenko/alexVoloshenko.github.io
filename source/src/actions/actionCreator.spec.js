import * as actions from './actionCreator';

describe('todo actions', () => {
  it('addTask should create ADD_TASK action', () => {
    expect(actions.addTask(23,'Use Redux', true)).toEqual({
      type: 'ADD_TASK',
      id: 23,
      text: 'Use Redux',
      isCompleted: true
    })
  });

  it('completeTask should create COMPLETE_TASK action', () => {
    expect(actions.completeTask(1)).toEqual({
      type: 'COMPLETE_TASK',
      id: 1
    })
  });

  it('removeTask should create REMOVE_TASK action', () => {
    expect(actions.removeTask(2)).toEqual({
      type: 'REMOVE_TASK',
      id: 2
    })
  })
});
