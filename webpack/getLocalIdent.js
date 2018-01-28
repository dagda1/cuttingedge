const path = require('path');

const decamelize = str => str.replace(/([a-z\d])([A-Z])/g, '$1_$2').toLowerCase();

const dasherize = str => decamelize(str).replace(/[ _]/g, '-');

module.exports = (loaderContext, localIdentName, localName, options) => {
  if (!options.context)
    options.context =
      loaderContext.options && typeof loaderContext.options.context === 'string'
        ? loaderContext.options.context
        : loaderContext.context;

  if (path.basename(loaderContext.resourcePath) === '_grid.scss') {
    return localName;
  }

  const request = path.relative(options.context, loaderContext.resourcePath);
  const prefix = dasherize(path.parse(request).name);

  return `${prefix}__${localName}`;
};
