const FIREBASE_SCHEMA = {
  updateIds: {
    pharmaCare: 'uid'
  },
  pharmaCare: {
    ['uid']: {
      uid: '',
      title: '',
      chapters: {
        ['id']: {
          id: '',
          index: '',
          title: ''
        }
      },
      contents: {
        ['id']: {
          id: '',
          title: '',
          text: ''
        }
      },
      references: {
        ['id']: {
          id: '',
          uid: '',
          value: ''
        }
      }
    }
  }
};

const REALM_SCHEMA = {
  pharmaCare: {
    uid: '123',
    title: 'Introduction to PharmaCare'
  },
  pharmaCareChapters: [
    {id: '9c45cefb-168107db', index: '0', title: 'Introduction to PharmaCare'},
    {id: '0da6b773-d15ac16e', index: '1', title: 'Coverage Basics'},
    {id: 'cbe044b6-3e868043', index: '2', title: 'Reimbursement Fees'}
  ],
  pharmaCareContent: [
    {
      id: '9c45cefb-168107db',
      title: 'Chapter 1',
      text: '## Hallo this is john\n\n### Hello World!\n\nThis is a wonderful day.',
      references: [
        {id: '9c45cefb-168107db', uid: '324', value: 'reference1'},
        {id: '9c45cefb-168107db', uid: '342', value: 'reference2'},
        {id: '9c45cefb-168107db', uid: '656', value: 'reference3'}
      ]
    },
    {
      id: '0da6b773-d15ac16e',
      title: 'Chapter 2',
      text: '## Hallo this is 2\n\n### Hello World 2 !\n\nThis is a wonderful day2222.',
      references: [
        {id: '0da6b773-d15ac16e', uid: '434', value: 'reference1'},
        {id: '0da6b773-d15ac16e', uid: '622', value: 'reference2'},
        {id: '0da6b773-d15ac16e', uid: '276', value: 'reference3'}
      ]
    },
    {
      id: 'cbe044b6-3e868043',
      title: 'Chapter 3',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    }
  ]
};