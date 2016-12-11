import Realm from 'realm';

const Reference = {
  name: 'Reference',
  properties: {
    value: 'string'
  }
};
const PharmaCare = {
  name: 'PharmaCare',
  primaryKey: 'uid',
  properties: {
    uid: {type: 'string'},
    title: {type: 'string'},
    chapters: {type: 'list', objectType: 'PharmaCareChapters'},
    contents: {type: 'list', objectType: 'PharmaCareContent'}
  }
};
const PharmaCareChapters = {
  name: 'PharmaCareChapters',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    title: {type: 'string'}
  }
};
const PharmaCareContent = {
  name: 'PharmaCareContent',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    title: {type: 'string'},
    text: {type: 'string'},
    references: {type: 'list', objectType: 'Reference'}
  }
};
const realm = new Realm({
  schema: [PharmaCare, PharmaCareChapters, PharmaCareContent, Reference],
  schemaVersion: 1
});

// Methods
export const storePharmaCare = (data) => {
  let { pharmaCare, pharmaCareChapters, pharmaCareContent } = data;
  realm.write(() => {
    realm.create('PharmaCare', {
      uid: pharmaCare.uid,
      title: pharmaCare.title,
      chapters: pharmaCareChapters,
      contents: pharmaCareContent
    }, true)
  });
};

export const retrievePharmaCareChapters = () => {
  const chapters = [];
  const formatData = item => {
    chapters.push({
      id: item.id,
      title: item.title
    })
  };
  realm.objects('PharmaCareChapters').map( item => formatData(item));

  return chapters;
};

export const retrievePharmaCareContent = (chapterId) => {
  const {id, title, text, references} = realm.objects('PharmaCareContent').find( object => object.id === chapterId );
  const cleanedReferences = references.map( item => item.value );

  return {id, title, text, references: cleanedReferences}
};


export const wipePharmaCare = () => {
  //realm.write(() => {
  //  realm.deleteAll();
  //});
  console.log('everything deleted');
};

//const updatePharmaCare = (data) => {
//  const incomingData = schema();
//
//  realm.write(() => {
//    realm.create('Dog', {name: 'Rex'});
//  });
//};