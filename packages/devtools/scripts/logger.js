'use strict';

const chalk = require('chalk');

const logTypes = {
  warn: {
    bg: 'bgYellow',
    msg: ' WARNING ',
    text: 'yellow',
  },
  debug: {
    bg: 'bgMagenta',
    msg: ' DEBUG ',
    text: 'magenta',
  },
  info: {
    bg: 'bgCyan',
    msg: ' INFO ',
    text: 'cyan',
  },
  error: {
    bg: 'bgRed',
    msg: ' ERROR ',
    text: 'red',
  },
  start: {
    bg: 'bgBlue',
    msg: ' WAIT ',
    text: 'blue',
  },
  done: {
    bg: 'bgGreen',
    msg: ' DONE ',
    text: 'green',
  },
};

const write = (type, text, verbose) => {
  let textToLog = '';
  let logObject = false;

  const logType = logTypes[type];

  textToLog +=
    chalk[logType.bg].black(logType.msg) + ' ' + chalk[logType.text](text);

  if (verbose) {
    if (typeof verbose === 'object') {
      logObject = true;
    } else {
      textToLog += `\n\n${verbose}`;
    }
  }

  console.log(textToLog);
  if (['start', 'done', 'error'].indexOf(type) > -1) {
    console.log();
  }

  if (logObject) console.dir(verbose, { depth: 15 });
};

const log = (text = '') => console.log(text);

const start = text => {
  write('start', text);
};

const done = text => {
  write('done', text);
};

const info = text => {
  write('info', text);
};

const debug = (text, data) => {
  write('debug', text, data);
};

const warn = (text, data) => {
  write('warn', text, data);
};

const error = (text, err) => {
  write('error', text, err);
};

module.exports = {
  log,
  info,
  debug,
  warn,
  error,
  start,
  done,
};