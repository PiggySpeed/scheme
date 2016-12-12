import Realm from 'realm';

const ContentIds = {
  name: 'ContentIds',
  primaryKey: 'appId',
  properties: {
    appId: {type: 'string'},
    pharmaCare: {type: 'string'}
  }
};
const Reference = {
  name: 'Reference',
  primaryKey: 'uid',
  properties: {
    uid: {type: 'string'},
    id: {type: 'string'},
    value: {type: 'string'}
  }
};
const PharmaCare = {
  name: 'PharmaCare',
  primaryKey: 'uid',
  properties: {
    uid: {type: 'string'},
    title: {type: 'string'}
  }
};
const PharmaCareChapters = {
  name: 'PharmaCareChapters',
  primaryKey: 'id',
  properties: {
    id: {type: 'string'},
    index: {type: 'string'},
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
  schema: [ContentIds, PharmaCare, PharmaCareChapters, PharmaCareContent, Reference],
  schemaVersion: 6
});

const wipeRealm = () => {
  //realm.write(() => {
  //  realm.deleteAll();
  //});
  console.log('everything deleted');
};

// Methods
export const updateIds = (data) => {
  const isEmpty = data.pharmaCare === '';
  //const exists = realm.objects('ContentIds')[0].pharmaCare;

  if(isEmpty){
    return
  }
  realm.write(() => {
    realm.create('ContentIds', {
      appId: '182254',
      pharmaCare: data.pharmaCare
    }, true)
  });
};

export const retrieveIds = () => {
  return realm.objects('ContentIds')[0]
};

export const storePharmaCare = (data) => {
  console.log('data is ', data);
  realm.write(() => {
    realm.create('PharmaCare', {
      uid: data.uid,
      title: data.title
    }, true);

    // will have to save data in separate lists here

    //realm.create('PharmaCareContent', {
    //  uid: data.uid,
    //  title: data.title,
    //  chapters: data.chapters,
    //  contents: data.content
    //}, true);
  });
};

export const retrievePharmaCareChapters = () => {
  const chapters = [];
  const formatData = item => {
    chapters.push({
      id: item.id,
      index: item.index,
      title: item.title
    })
  };
  realm.objects('PharmaCareChapters').map( item => formatData(item));

  return chapters;
};

export const retrievePharmaCareContent = (chapterId) => {
  const tree = realm.objects('PharmaCareContent').map( item => item);
  console.log('ids is ', tree);

  const {id, title, text, references} = realm.objects('PharmaCareContent').find( item => item.id === chapterId );
  const cleanedReferences = references.map( item => item.value );
  console.log( id, title, text, references);
  return {id, title, text, references: cleanedReferences}
};

//const updatePharmaCare = (data) => {
//  const incomingData = schema();
//
//  realm.write(() => {
//    realm.create('Dog', {name: 'Rex'});
//  });
//};