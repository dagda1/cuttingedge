const path = require('path');

const decamelize = str => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

const dasherize = str => decamelize(str).replace(/[ _]/g, '-');

module.exports = (loaderContext, localIdentName, localName, options) => {
  if (!options.context)
    options.context =
      loaderContext.options && typeof loaderContext.options.context === 'string'
        ? loaderContext.options.context
        : loaderContext.context;

  const request = path.relative(options.context, loaderContext.resourcePath);
  const prefix = dasherize(path.parse(request).name);
  /* 
  console.log('-----------------------');
  console.log(prefix);
  console.log(localName);
  console.log(`${prefix}__${localName}`);
  console.log('-----------------------'); */

  return `${prefix}__${localName}`;
};
