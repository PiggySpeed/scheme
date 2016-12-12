import { ref, MOCK_DATA } from './constants';
import { generateIdShort } from '../utils/generateid';

export const buildSchema = () => {
  // Setting Ids
  const pharmaCareId = ref.child('pharmaCare').push().key;
  ref.child(`updateIds`).set({
    pharmaCare: pharmaCareId
  });
  console.log('ADDED PHARMACARE UID');

  // Setting PharmaCare
  ref.child(`pharmaCare/${pharmaCareId}`).set({
    uid: pharmaCareId,
    title: 'PharmaCare Policies'
  });
  console.log('ADDED UID AND TITLE');

  // Adding Chapters to PharmaCare
  const chapterIds = [];
  MOCK_DATA.pharmaCareChapters.forEach( item => {
    //const chapterId = ref.child(`pharmaCare/${pharmaCareId}/chapters`).push().key;
    chapterIds.push({id: item.id});
    ref.child(`pharmaCare/${pharmaCareId}/chapters/${item.id}`).set({
      id: item.id,
      index: item.index,
      title: item.title
    });
  });
  console.log('ADDED CHAPTERS');

  // Adding Content to PharmaCare
  chapterIds.forEach( item => {
    const content = MOCK_DATA.pharmaCareContent.find( con => con.id === item.id );
    ref.child(`pharmaCare/${pharmaCareId}/content/${item.id}`).set({
      id: item.id,
      title: content.title,
      text:content.text
    });
  });
  console.log('ADDED CONTENT');

  // Adding References to PharmaCare
  chapterIds.forEach( (item, id) => {
    const references = MOCK_DATA.pharmaCareContent.find( con => con.id === item.id).references;
    references.forEach( reference => {
      ref.child(`pharmaCare/${pharmaCareId}/references/${item.id}`).set({
        id: item.id,
        uid: generateIdShort(),
        value: reference.value
      });
    });
  });
  console.log('ADDED CHAPTER REFERENCES');
};