import tasks from './tasks';

let mockData = [
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

describe('tasks reducer', () => {
  it('should handle initial state', () => {
    expect(
      tasks(undefined, {})
    ).toEqual(mockData)
  });

  it('should handle ADD_TASK', () => {
    expect(
      tasks(undefined, {
        type: 'ADD_TASK',
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      })
    ).toEqual([
      ...mockData,
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }
    ]);

    expect(
      tasks([
        ...mockData,
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 0
        }
      ], {
        type: 'ADD_TASK',
        text: 'Use Redux',
        id: 4,
        isCompleted: true
      })
    ).toEqual([
      ...mockData,
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 0
      }, {
        text: 'Use Redux',
        isCompleted: true,
        id: 4
      }
    ]);

    expect(
      tasks([
        ...mockData,
        {
          text: 'Run the tests',
          isCompleted: false,
          id: 7
        }, {
          text: 'Use Redux',
          isCompleted: false,
          id: 8
        }
      ], {
        type: 'ADD_TASK',
        text: 'Fix the tests',
        id: 9,
        isCompleted: false
      })
    ).toEqual([
      ...mockData,
      {
        text: 'Run the tests',
        isCompleted: false,
        id: 7
      }, {
        text: 'Use Redux',
        isCompleted: false,
        id: 8
      }, {
        text: 'Fix the tests',
        isCompleted: false,
        id: 9
      }
    ])
  });

  it('should handle REMOVE_TASK', () => {
    expect(
      tasks([
        ...mockData], {
          type: 'REMOVE_TASK',
          id: 1
        }
      )
    ).toEqual(
      mockData.splice(1, 2)
    )
  });

  it('should handle COMPLETE_TASK', () => {
    expect(
      tasks([
        ...mockData
      ], {
        type: 'COMPLETE_TASK',
        id: 1
      })
    ).toEqual(
      mockData.splice(0, 1)
    )
  })
});
