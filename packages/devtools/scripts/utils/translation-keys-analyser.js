const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const _glob = require('glob');
const { translationKeys, visitor } = require('./translation-keys-visitor');
const Papa = require('papaparse');
const logger = require('logger');

const glob = (pattern) => new Promise((resolve, reject) => _glob(pattern, (err, result) => (err ? reject(err) : resolve(result))));

const readFile = (path) =>
  new Promise((resolve, reject) => fs.readFile(path, 'utf8', (err, result) => (err ? reject(err) : resolve(result))));

const diff = (a, b) => Array.from(a).filter((value) => !b.has(value));

const getAvailableKeys = (dir) =>
  readFile(path.join(dir, 'en-GB.csv')).then((csv) => {
    const parsed = Papa.parse(csv);
    parsed.data.shift();
    return new Set(parsed.data.map((row) => row[0]));
  });

const getJsFiles = (dir) => glob(path.join(dir, '**/*.js'));

const processFile = (sourceDir, filePath) =>
  readFile(filePath)
    .then((source) => {
      const sourceFileName = path.relative(sourceDir, filePath);

      traverse(
        parser.parse(source, {
          sourceType: 'module',
          sourceFileName,
          plugins: ['jsx', 'flow', 'objectRestSpread', 'classProperties', 'exportExtensions'],
        }),
        visitor,
        null,
        { file: { opts: { sourceFileName } } },
      );
    })
    .catch((err) => {
      logger.error(`Error in ${filePath} (${err.loc.line}:${err.loc.column}): ${err.message}`);
    });

const getKeysInUse = (dir) => getJsFiles(dir).then((files) => Promise.all(files.map((filePath) => processFile(dir, filePath))));

const analyse = (sourceDir, translationsDir) =>
  getKeysInUse(sourceDir)
    .then(() => getAvailableKeys(translationsDir))
    .then((availableKeys) => {
      const missingKeys = diff(translationKeys, availableKeys);
      const unusedKeys = diff(availableKeys, translationKeys);

      return missingKeys.length || unusedKeys.length ? { missingKeys, unusedKeys } : null;
    });

const printKeys = (keys) => keys.forEach(logger.error);

const report = (result) => {
  if (result) {
    if (result.missingKeys.length) {
      logger.error('\nThese keys are missing and should be added to the translation file:');
      printKeys(result.missingKeys);
    }

    if (result.unusedKeys.length) {
      logger.warn('\nThese keys are not referenced explicitly:');
      printKeys(result.unusedKeys);
    }

    return result.missingKeys.length === 0;
  } else {
    logger.log('Translations are fine');
    return true;
  }
};

module.exports.analyse = analyse;
module.exports.report = report;
