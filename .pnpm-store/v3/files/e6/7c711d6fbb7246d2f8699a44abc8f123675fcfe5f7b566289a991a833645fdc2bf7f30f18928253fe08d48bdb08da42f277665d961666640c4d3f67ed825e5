'use strict';

var chalk = require('chalk');
var figures = require('figures');
var log = require('log-update');
var path = require('path');
var webpack = require('webpack');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () {
            return e[k];
          }
        });
      }
    });
  }
  n['default'] = e;
  return Object.freeze(n);
}

var chalk__default = /*#__PURE__*/_interopDefaultLegacy(chalk);
var figures__default = /*#__PURE__*/_interopDefaultLegacy(figures);
var log__default = /*#__PURE__*/_interopDefaultLegacy(log);
var path__namespace = /*#__PURE__*/_interopNamespace(path);
var webpack__default = /*#__PURE__*/_interopDefaultLegacy(webpack);

class CompactLogger {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        let startTime = new Date();
        let previousStep = 0;
        const absoluteProjectPath = `${path__namespace.resolve('.').toString()}`;
        return new webpack__default['default'].ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            const logLines = [];
            if (previousStep === 0) {
                log__default['default'](this.options.name);
                startTime = new Date();
            }
            logLines.push(chalk__default['default'].white('Webpack: Starting ...\n'));
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                previousStep = 1;
                logLines.push(chalk__default['default'].white(`  ${figures__default['default'].pointer} Compile modules`));
            }
            else if (progress >= 0.1) {
                logLines.push(chalk__default['default'].green(`  ${figures__default['default'].tick} Compile modules`));
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                previousStep = 2;
                const subProgress = Math.round(((progress - 0.1) * 10000) / 60);
                logLines.push(chalk__default['default'].white(`  ${figures__default['default'].pointer} Build modules (${subProgress}%)`));
                if (moduleName !== undefined) {
                    let betterModuleName = moduleName;
                    if (betterModuleName.indexOf('!') !== -1) {
                        const splitModuleName = betterModuleName.split('!');
                        betterModuleName = splitModuleName[splitModuleName.length - 1];
                    }
                    if (betterModuleName.indexOf(absoluteProjectPath) !== -1) {
                        betterModuleName = betterModuleName
                            .split(`${absoluteProjectPath}`)[1]
                            .substring(1);
                    }
                    betterModuleName = betterModuleName.replace(/\\/g, '/').replace('./', '').replace('multi ', '');
                    if (betterModuleName.startsWith('node_modules')) {
                        betterModuleName = `${betterModuleName} ~ external`;
                    }
                    if (betterModuleName.startsWith('src')) {
                        betterModuleName = `${betterModuleName} ~ internal`;
                    }
                    const [betterModulesDone, betterAllModules] = moduleProgress.split('/');
                    const moduleDetails = `${betterModulesDone} of ${betterAllModules} :: ${betterModuleName}`;
                    logLines.push(chalk__default['default'].grey(`    ${figures__default['default'].arrowRight} ${moduleDetails}`));
                }
            }
            else if (progress > 0.7) {
                logLines.push(chalk__default['default'].green(`  ${figures__default['default'].tick} Build modules`));
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                previousStep = 3;
                const subProgress = Math.round(((progress - 0.71) * 10000) / 23);
                logLines.push(chalk__default['default'].white(`  ${figures__default['default'].pointer} Optimize modules (${subProgress}%)`));
                const formattedMessage = `${message[0].toUpperCase()}${message.slice(1)}`;
                const formattedMessageExtra = progress === 0.91 ? ' -- may take a while' : '';
                logLines.push(chalk__default['default'].grey(`    ${figures__default['default'].arrowRight} ${formattedMessage}${formattedMessageExtra} ...`));
            }
            else if (progress >= 0.95) {
                logLines.push(chalk__default['default'].green(`  ${figures__default['default'].tick} Optimize modules`));
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                previousStep = 4;
                logLines.push(chalk__default['default'].white(`  ${figures__default['default'].pointer} Emit files`));
            }
            else if (progress === 1) {
                logLines.push(chalk__default['default'].green(`  ${figures__default['default'].tick} Emit files`));
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                logLines.push(chalk__default['default'].white(`\nFinished after ${processTime} seconds.\n`));
            }
            log__default['default'](logLines.join('\n'));
            if (progress === 1) {
                log__default['default'].done();
            }
        }).apply(compiler);
    }
}

class ExpandedLogger {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        let startTime = new Date();
        let previousStep = 0;
        const absoluteProjectPath = `${path__namespace.resolve('.').toString()}`;
        return new webpack__default['default'].ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            if (previousStep === 0) {
                console.log(chalk__default['default'].white(this.options.name));
                startTime = new Date();
            }
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                else if (previousStep < 1) {
                    console.log(chalk__default['default'].white(`\n  ${figures__default['default'].pointer} Compile modules`));
                }
                previousStep = 1;
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                else if (previousStep < 2) {
                    console.log(chalk__default['default'].white(`\n  ${figures__default['default'].pointer} Build modules`));
                }
                previousStep = 2;
                if (moduleName !== undefined) {
                    const roundedSubProgress = Math.round(((progress - 0.1) * 10000) / 60);
                    let betterModuleName = moduleName;
                    if (betterModuleName.indexOf('!') !== -1) {
                        const splitModuleName = betterModuleName.split('!');
                        betterModuleName = splitModuleName[splitModuleName.length - 1];
                    }
                    if (betterModuleName.indexOf(absoluteProjectPath) !== -1) {
                        betterModuleName = betterModuleName
                            .split(`${absoluteProjectPath}`)[1]
                            .substring(1);
                    }
                    betterModuleName = betterModuleName.replace(/\\/g, '/').replace('./', '').replace('multi ', '');
                    if (betterModuleName.startsWith('node_modules')) {
                        betterModuleName = `${betterModuleName} ~ external`;
                    }
                    if (betterModuleName.startsWith('src')) {
                        betterModuleName = `${betterModuleName} ~ internal`;
                    }
                    const [betterModulesDone, betterAllModules] = moduleProgress.split('/');
                    const moduleDetails = `${betterModulesDone} of ${betterAllModules} :: ${betterModuleName}`;
                    console.log(chalk__default['default'].grey(`    ${figures__default['default'].arrowRight} [${roundedSubProgress}%] ${moduleDetails}`));
                }
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                else if (previousStep < 3) {
                    console.log(chalk__default['default'].white(`\n  ${figures__default['default'].pointer} Optimize modules`));
                }
                previousStep = 3;
                const subProgress = Math.round(((progress - 0.71) * 10000) / 23);
                const formattedMessage = `${message[0].toUpperCase()}${message.slice(1)}`;
                const formattedMessageExtra = progress === 0.91 ? ' -- may take a while' : '';
                console.log(chalk__default['default'].grey(`    ${figures__default['default'].arrowRight} [${subProgress}%] ${formattedMessage}${formattedMessageExtra} ...`));
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                else if (previousStep < 4) {
                    console.log(chalk__default['default'].white(`\n  ${figures__default['default'].pointer} Emit files`));
                }
                previousStep = 4;
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                console.log(chalk__default['default'].white(`\nFinished after ${processTime} seconds.\n`));
            }
        }).apply(compiler);
    }
}

class MinimalLogger {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        let startTime = new Date();
        let previousStep = 0;
        const absoluteProjectPath = `${path__namespace.resolve('.').toString()}`;
        return new webpack__default['default'].ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            let logLine = this.options.name;
            if (previousStep === 0) {
                log__default['default'](logLine);
                startTime = new Date();
            }
            logLine = chalk__default['default'].yellow(`[${Math.round(progress * 100)}%] `);
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                previousStep = 1;
                logLine += chalk__default['default'].white('Compile modules ...');
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                previousStep = 2;
                logLine += chalk__default['default'].white('Build modules ...');
                if (moduleName !== undefined) {
                    let betterModuleName = moduleName;
                    if (betterModuleName.indexOf('!') !== -1) {
                        const splitModuleName = betterModuleName.split('!');
                        betterModuleName = splitModuleName[splitModuleName.length - 1];
                    }
                    if (betterModuleName.indexOf(absoluteProjectPath) !== -1) {
                        betterModuleName = betterModuleName
                            .split(`${absoluteProjectPath}`)[1]
                            .substring(1);
                    }
                    betterModuleName = betterModuleName.replace(/\\/g, '/').replace('./', '').replace('multi ', '');
                    if (betterModuleName.startsWith('node_modules')) {
                        betterModuleName = `${betterModuleName} ~ external`;
                    }
                    if (betterModuleName.startsWith('src')) {
                        betterModuleName = `${betterModuleName} ~ internal`;
                    }
                    const [betterModulesDone, betterAllModules] = moduleProgress.split('/');
                    const moduleDetails = `${betterModulesDone} of ${betterAllModules} :: ${betterModuleName}`;
                    logLine += chalk__default['default'].grey(` (${moduleDetails})`);
                }
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                previousStep = 3;
                logLine += chalk__default['default'].white('Optimize modules ...');
                const formattedMessageExtra = progress === 0.91 ? ' -- may take a while' : '';
                logLine += chalk__default['default'].grey(` (${message}${formattedMessageExtra})`);
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                previousStep = 4;
                logLine += chalk__default['default'].white('Emit files ...');
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                logLine = chalk__default['default'].white(`Finished after ${processTime} seconds.\n`);
            }
            log__default['default'](logLine);
            if (progress === 1) {
                log__default['default'].done();
            }
        }).apply(compiler);
    }
}

class SimpleLogger {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        let startTime = new Date();
        let previousStep = 0;
        return new webpack__default['default'].ProgressPlugin((progress) => {
            if (previousStep === 0) {
                console.log(chalk__default['default'].white(this.options.name));
                startTime = new Date();
            }
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                else if (previousStep < 1) {
                    console.log(chalk__default['default'].white(`\n  ${figures__default['default'].pointer} Compile modules`));
                }
                previousStep = 1;
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                else if (previousStep < 2) {
                    console.log(chalk__default['default'].white(`  ${figures__default['default'].pointer} Build modules`));
                }
                previousStep = 2;
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                else if (previousStep < 3) {
                    console.log(chalk__default['default'].white(`  ${figures__default['default'].pointer} Optimize modules`));
                }
                previousStep = 3;
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                else if (previousStep < 4) {
                    console.log(chalk__default['default'].white(`  ${figures__default['default'].pointer} Emit files`));
                }
                previousStep = 4;
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                console.log(chalk__default['default'].white(`\nFinished after ${processTime} seconds.\n`));
            }
        }).apply(compiler);
    }
}

class VerboseLogger {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        let startTime = new Date();
        let previousStep = 0;
        return new webpack__default['default'].ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            let logLine = this.options.name;
            if (previousStep === 0) {
                console.log(`${this.getTimePrefix()} ${logLine}\n`);
                startTime = new Date();
            }
            if (progress >= 0 && progress < 0.1) {
                logLine = 'Compile modules';
                previousStep = 1;
            }
            if (progress >= 0.1 && progress <= 0.7) {
                logLine = 'Build modules';
                if (moduleName !== undefined) {
                    logLine += ` (${moduleName})`;
                }
                previousStep = 2;
            }
            if (progress > 0.7 && progress < 0.95) {
                logLine = `Optimize modules (${message})`;
                previousStep = 3;
            }
            if (progress >= 0.95 && progress < 1) {
                logLine = 'Emit files';
                previousStep = 4;
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                logLine = `Finished after ${processTime} seconds.\n`;
            }
            if (progress === 1) {
                console.log(`\n${this.getTimePrefix()} ${logLine}`);
            }
            else {
                console.log(`${this.getTimePrefix()} Webpack (${Math.round(progress * 100)}%) - ${logLine}`);
            }
        }).apply(compiler);
    }
    getTimePrefix() {
        const date = new Date();
        const hours = `0${date.getHours()}`.slice(-2);
        const minutes = `0${date.getMinutes()}`.slice(-2);
        const seconds = `0${date.getSeconds()}`.slice(-2);
        return `[${hours}:${minutes}:${seconds}]`;
    }
}

class SimpleProgressWebpackPlugin {
    constructor(options) {
        this.options = Object.assign({ color: true, format: 'compact', name: 'Webpack: Starting ...' }, options);
    }
    apply(compiler) {
        if (this.options.color === false) {
            chalk__default['default'].supportsColor = false;
        }
        const progressPlugin = this.options.format === 'minimal'
            ? new MinimalLogger(this.options)
            : this.options.format === 'simple'
                ? new SimpleLogger(this.options)
                : this.options.format === 'expanded'
                    ? new ExpandedLogger(this.options)
                    : this.options.format === 'verbose'
                        ? new VerboseLogger(this.options)
                        : new CompactLogger(this.options);
        return progressPlugin.apply(compiler);
    }
}

module.exports = SimpleProgressWebpackPlugin;
//# sourceMappingURL=index.cjs.map
