const legos = {

};

const createLego = async (modelName, ...options) => {
  return legos[modelName](...options);
};

export default createLego;
