// From http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript

export const generateId = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4() + '-' + s4() + s4();
};

export const generateIdShort = () => {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };
  return s4() + s4();
};


//for(var i = 0; i<10; i++){
//  console.log(generateId());
//}