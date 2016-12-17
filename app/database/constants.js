import firebase from 'firebase';

const CONFIG = {
  apiKey: "AIzaSyCtvH9it5FRg6o4Jc24EN0Dv3nwoq1h3Os",
  authDomain: "scheme-6713a.firebaseapp.com",
  databaseURL: "https://scheme-6713a.firebaseio.com",
  storageBucket: "scheme-6713a.appspot.com",
  messagingSenderId: "310615495590"
};
firebase.initializeApp(CONFIG);
const db = firebase.database();
export const ref = db.ref();

export const MOCK_DATA = {
  PharmaCare: {
    uid: '123',
    title: 'Introduction to PharmaCare'
  },
  PharmaCareChapters: [
    {id: '9c45cefb-168107db', index: '0', title: 'Introduction to the BC PharmaCare Program'},
    {id: '0da6b773-d15ac16e', index: '1', title: 'Provider Enrollment in PharmaCare'},
    {id: 'cbe044b6-3e868043', index: '2', title: 'Claims Submission'},
    {id: '2435da30-1c594c9a', index: '3', title: 'Offline (Manual) Claims'},
    {id: 'f2879898-85e5f249', index: '4', title: 'Pricing Policies & Product Reimbursement'},
    {id: '0e2bb7f3-5288f2ff', index: '5', title: 'Understanding PharmaCare Benefit Status'},
    {id: 'a5e93908-b7586b89', index: '6', title: 'Coverage Plans'},
    {id: '5c76f0c1-8e5ec5bb', index: '7', title: 'Pharmacy Fees & Subsidies & Provider Payments'},
    {id: 'ccf173bb-4d89f137', index: '8', title: 'Privacy'},
    {id: '2bcd6401-80e55116', index: '9', title: 'Audit'},
    {id: '292a81c0-c816eb5a', index: '10', title: 'Contacts for Practitioners & Providers'},
    {id: '0599c8a6-843a079e', index: '11', title: 'Appendices'}
  ],
  PharmaCareContent: [
    {
      id: '9c45cefb-168107db',
      title: 'Introduction to the BC PharmaCare Program',
      text: '## Hallo this is john\n\n### Hello World!\n\nThis is a wonderful day.',
      references: [
        {id: '9c45cefb-168107db', uid: '324', value: 'reference1'},
        {id: '9c45cefb-168107db', uid: '342', value: 'reference2'},
        {id: '9c45cefb-168107db', uid: '656', value: 'reference3'}
      ]
    },
    {
      id: '0da6b773-d15ac16e',
      title: 'Provider Enrollment in PharmaCare',
      text: '## Hallo this is 2\n\n### Hello World 2 !\n\nThis is a wonderful day2222.',
      references: [
        {id: '0da6b773-d15ac16e', uid: '434', value: 'reference1'},
        {id: '0da6b773-d15ac16e', uid: '622', value: 'reference2'},
        {id: '0da6b773-d15ac16e', uid: '276', value: 'reference3'}
      ]
    },
    {
      id: 'cbe044b6-3e868043',
      title: 'Claims Submission',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    },
    {
      id: '2435da30-1c594c9a',
      title: 'Offline (Manual) Claims',
      text: '## Hallo this is john\n\n### Hello World!\n\nThis is a wonderful day.',
      references: [
        {id: '9c45cefb-168107db', uid: '324', value: 'reference1'},
        {id: '9c45cefb-168107db', uid: '342', value: 'reference2'},
        {id: '9c45cefb-168107db', uid: '656', value: 'reference3'}
      ]
    },
    {
      id: 'f2879898-85e5f249',
      title: 'Pricing Policies & Product Reimbursement',
      text: '## Hallo this is 2\n\n### Hello World 2 !\n\nThis is a wonderful day2222.',
      references: [
        {id: '0da6b773-d15ac16e', uid: '434', value: 'reference1'},
        {id: '0da6b773-d15ac16e', uid: '622', value: 'reference2'},
        {id: '0da6b773-d15ac16e', uid: '276', value: 'reference3'}
      ]
    },
    {
      id: '0e2bb7f3-5288f2ff',
      title: 'Understanding PharmaCare Benefit Status',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    },
    {
      id: 'a5e93908-b7586b89',
      title: 'Coverage Plans',
      text: '## Hallo this is john\n\n### Hello World!\n\nThis is a wonderful day.',
      references: [
        {id: '9c45cefb-168107db', uid: '324', value: 'reference1'},
        {id: '9c45cefb-168107db', uid: '342', value: 'reference2'},
        {id: '9c45cefb-168107db', uid: '656', value: 'reference3'}
      ]
    },
    {
      id: '5c76f0c1-8e5ec5bb',
      title: 'Pharmacy Fees & Subsidies & Provider Payments',
      text: '## Hallo this is 2\n\n### Hello World 2 !\n\nThis is a wonderful day2222.',
      references: [
        {id: '0da6b773-d15ac16e', uid: '434', value: 'reference1'},
        {id: '0da6b773-d15ac16e', uid: '622', value: 'reference2'},
        {id: '0da6b773-d15ac16e', uid: '276', value: 'reference3'}
      ]
    },
    {
      id: 'ccf173bb-4d89f137',
      title: 'Privacy',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    },
    {
      id: '2bcd6401-80e55116',
      title: 'Audit',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    },
    {
      id: '292a81c0-c816eb5a',
      title: 'Contacts for Practitioners & Providers',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    },
    {
      id: '0599c8a6-843a079e',
      title: 'Appendices',
      text: '## Hallo this 333\n\n### Hello World3333!\n\nThis is a wonderful day3333.',
      references: [
        {id: 'cbe044b6-3e868043', uid: '05b84817', value: 'reference1'},
        {id: 'cbe044b6-3e868043', uid: '16519d3a', value: 'reference2'},
        {id: 'cbe044b6-3e868043', uid: 'a94a40cc', value: 'reference3'}
      ]
    }
  ]
};