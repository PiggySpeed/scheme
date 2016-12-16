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
  schemaVersion: 8
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
  realm.write(() => {
    realm.create('PharmaCare', {
      uid: data.uid,
      title: data.title
    }, true);

    data.chapters.forEach( item => {
      realm.create('PharmaCareChapters', {
        id: item.id,
        index: item.index,
        title: item.title
      }, true);
    });

    data.contents.forEach( item => {
      realm.create('PharmaCareContent', {
        id: item.id,
        title: item.title,
        text: item.text,
        references: item.references
      }, true);
    });

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
  realm.objects('PharmaCareChapters').forEach( item => formatData(item));
  chapters.sort( (prev, next) => {
    return prev.index - next.index
  });

  return chapters;
};

export const retrievePharmaCareContent = (chapterId) => {
  const {id, title, text, references} = realm.objects('PharmaCareContent').find( item => item.id === chapterId );
  const cleanedReferences = references.map( item => item.value );
  return {id, title, text, references: cleanedReferences}
};