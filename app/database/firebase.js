export const getIds = () => {
  // All downloaded content will store their version ids here.
  // When the application opens, it will check with FB if the ids are up-to-date
  // If not, it will request the user to update its content
  return {
    pharmaCare: '123'
  }
};

export const getPharmaCare = () => {
  const pharmaCare = () => {
    return {
      pharmaCare: {
        uid: '123',
        title: 'Introduction to PharmaCare'
      },
      pharmaCareChapters: [
        {id: '0', title: 'Chapter 1'},
        {id: '1', title: 'Chapter 2'},
        {id: '2', title: 'Chapter 3'}
      ],
      pharmaCareContent: [
        {
          id: '0',
          title: 'Chapter 1',
          text: '## Hallo this is john\n### Hello World!\nThis is a wonderful day.',
          references: [{value: 'reference1'}, {value: 'reference2'}, {value: 'reference3'}]
        },
        {
          id: '1',
          title: 'Chapter 2',
          text: '## Hallo this is 2\n### Hello World 2 !\nThis is a wonderful day2222.',
          references: [{value: 'reference2'} , {value: 'reference213'}, {value: 'reference343'}]
        },
        {
          id: '2',
          title: 'Chapter 3',
          text: '## Hallo this 333\n### Hello World3333!\nThis is a wonderful day3333.',
          references: [{value: 'reference1242141'}, {value: 'reference2342342'}, {value: 'refere3434'}]
        }
      ]
    }
  };
  return pharmaCare();
};