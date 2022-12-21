const prdList = [
  {
    id: 1,
    name: 'Root',
    children: [
      { id: 2, name: 'Child #1' },
      { id: 3, name: 'Child #2' },
      {
        id: 4,
        name: 'Child #3',
        children: [
          { id: 5, name: 'Grandchild #1' },
          { id: 6, name: 'Grandchild #2' },
        ],
      },
    ],
  },
  {
    id: 7,
    name: 'Root 2',
    children: [
      { id: 8, name: 'Child #3' },
      { id: 9, name: 'Child #4' },
      {
        id: 10,
        name: 'Child #5',
        children: [
          { id: 11, name: 'Grandchild #3' },
          { id: 12, name: 'Grandchild #4' },
        ],
      },
    ],
  },
  {
    id: 13,
    name: 'Root 2',
    children: [
      { id: 14, name: 'Child #6' },
      {
        id: 15,
        name: 'Child #7',
        children: [
          { id: 16, name: 'Grandchild #5' },
          { id: 17, name: 'Grandchild #6' },
        ],
      },
    ],
  },
  {
    id: 18,
    name: 'Root 2',
    children: [
      { id: 19, name: 'Child #3' },
      { id: 20, name: 'Child #4' }
    ],
  }
];

export default prdList;
