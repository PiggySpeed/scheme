import { ref } from './constants';

export const getIds = () => {
  // All downloaded content will store their version ids here.
  // When the application opens, it will check with FB if the ids are up-to-date
  // If not, it will request the user to update its content
  return ref.child(`updateIds`).once('value')
    .then( snap => snap.val() )
    .catch( err => console.warn(`firebase/getIds(): ${err}`));
};

export const getPharmaCare = (pharmaCareId) => {

  const formatData = snap => {
    const chapters = [];
    const contents = [];
    const references = [];
    snap.child('chapters').forEach( item => {chapters.push(item.val()); return(false)} );
    snap.child('content').forEach( item => {contents.push(item.val()); return(false)} );
    snap.child('references').forEach( item => {references.push(item.val()); return(false)} );

    contents.forEach( con => {
      con.references = references.filter( item => item.id === con.id );
    });

    return {
      uid: snap.val().uid,
      title: snap.val().title,
      chapters: chapters,
      contents: contents
    };
  };

  return ref.child(`pharmaCare/${pharmaCareId}`).once('value')
    .then( snap => formatData(snap) )
    .catch( err => console.warn(`firebase/getIds(): ${err}`));

};

