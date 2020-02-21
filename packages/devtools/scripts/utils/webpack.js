const dasherize = require('./string').dasherize;
const path = require('path');

const getLocalIdent = (loaderContext, localIdentName, localName, options) => {
  if (!options.context)
    options.context =
      loaderContext.options && typeof loaderContext.options.context === 'string'
        ? loaderContext.options.context
        : loaderContext.context;
  var request = path.relative(options.context, loaderContext.resourcePath);
  const prefix = dasherize(path.parse(request).name);

  return `${prefix}__${localName}`;
};

module.exports = {
  getLocalIdent
};
