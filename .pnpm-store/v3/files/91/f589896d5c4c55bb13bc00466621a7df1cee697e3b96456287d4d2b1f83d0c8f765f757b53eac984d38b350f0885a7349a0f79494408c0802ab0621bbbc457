import chalk from 'chalk';
import figures from 'figures';
import log from 'log-update';
import * as path from 'path';
import webpack from 'webpack';

class CompactLogger {
    constructor(options) {
        this.options = options;
    }
    apply(compiler) {
        let startTime = new Date();
        let previousStep = 0;
        const absoluteProjectPath = `${path.resolve('.').toString()}`;
        return new webpack.ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            const logLines = [];
            if (previousStep === 0) {
                log(this.options.name);
                startTime = new Date();
            }
            logLines.push(chalk.white('Webpack: Starting ...\n'));
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                previousStep = 1;
                logLines.push(chalk.white(`  ${figures.pointer} Compile modules`));
            }
            else if (progress >= 0.1) {
                logLines.push(chalk.green(`  ${figures.tick} Compile modules`));
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                previousStep = 2;
                const subProgress = Math.round(((progress - 0.1) * 10000) / 60);
                logLines.push(chalk.white(`  ${figures.pointer} Build modules (${subProgress}%)`));
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
                    logLines.push(chalk.grey(`    ${figures.arrowRight} ${moduleDetails}`));
                }
            }
            else if (progress > 0.7) {
                logLines.push(chalk.green(`  ${figures.tick} Build modules`));
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                previousStep = 3;
                const subProgress = Math.round(((progress - 0.71) * 10000) / 23);
                logLines.push(chalk.white(`  ${figures.pointer} Optimize modules (${subProgress}%)`));
                const formattedMessage = `${message[0].toUpperCase()}${message.slice(1)}`;
                const formattedMessageExtra = progress === 0.91 ? ' -- may take a while' : '';
                logLines.push(chalk.grey(`    ${figures.arrowRight} ${formattedMessage}${formattedMessageExtra} ...`));
            }
            else if (progress >= 0.95) {
                logLines.push(chalk.green(`  ${figures.tick} Optimize modules`));
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                previousStep = 4;
                logLines.push(chalk.white(`  ${figures.pointer} Emit files`));
            }
            else if (progress === 1) {
                logLines.push(chalk.green(`  ${figures.tick} Emit files`));
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                logLines.push(chalk.white(`\nFinished after ${processTime} seconds.\n`));
            }
            log(logLines.join('\n'));
            if (progress === 1) {
                log.done();
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
        const absoluteProjectPath = `${path.resolve('.').toString()}`;
        return new webpack.ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            if (previousStep === 0) {
                console.log(chalk.white(this.options.name));
                startTime = new Date();
            }
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                else if (previousStep < 1) {
                    console.log(chalk.white(`\n  ${figures.pointer} Compile modules`));
                }
                previousStep = 1;
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                else if (previousStep < 2) {
                    console.log(chalk.white(`\n  ${figures.pointer} Build modules`));
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
                    console.log(chalk.grey(`    ${figures.arrowRight} [${roundedSubProgress}%] ${moduleDetails}`));
                }
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                else if (previousStep < 3) {
                    console.log(chalk.white(`\n  ${figures.pointer} Optimize modules`));
                }
                previousStep = 3;
                const subProgress = Math.round(((progress - 0.71) * 10000) / 23);
                const formattedMessage = `${message[0].toUpperCase()}${message.slice(1)}`;
                const formattedMessageExtra = progress === 0.91 ? ' -- may take a while' : '';
                console.log(chalk.grey(`    ${figures.arrowRight} [${subProgress}%] ${formattedMessage}${formattedMessageExtra} ...`));
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                else if (previousStep < 4) {
                    console.log(chalk.white(`\n  ${figures.pointer} Emit files`));
                }
                previousStep = 4;
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                console.log(chalk.white(`\nFinished after ${processTime} seconds.\n`));
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
        const absoluteProjectPath = `${path.resolve('.').toString()}`;
        return new webpack.ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
            let logLine = this.options.name;
            if (previousStep === 0) {
                log(logLine);
                startTime = new Date();
            }
            logLine = chalk.yellow(`[${Math.round(progress * 100)}%] `);
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                previousStep = 1;
                logLine += chalk.white('Compile modules ...');
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                previousStep = 2;
                logLine += chalk.white('Build modules ...');
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
                    logLine += chalk.grey(` (${moduleDetails})`);
                }
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                previousStep = 3;
                logLine += chalk.white('Optimize modules ...');
                const formattedMessageExtra = progress === 0.91 ? ' -- may take a while' : '';
                logLine += chalk.grey(` (${message}${formattedMessageExtra})`);
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                previousStep = 4;
                logLine += chalk.white('Emit files ...');
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                logLine = chalk.white(`Finished after ${processTime} seconds.\n`);
            }
            log(logLine);
            if (progress === 1) {
                log.done();
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
        return new webpack.ProgressPlugin((progress) => {
            if (previousStep === 0) {
                console.log(chalk.white(this.options.name));
                startTime = new Date();
            }
            if (progress >= 0 && progress < 0.1) {
                if (previousStep > 1) {
                    return;
                }
                else if (previousStep < 1) {
                    console.log(chalk.white(`\n  ${figures.pointer} Compile modules`));
                }
                previousStep = 1;
            }
            if (progress >= 0.1 && progress <= 0.7) {
                if (previousStep > 2) {
                    return;
                }
                else if (previousStep < 2) {
                    console.log(chalk.white(`  ${figures.pointer} Build modules`));
                }
                previousStep = 2;
            }
            if (progress > 0.7 && progress < 0.95) {
                if (previousStep > 3) {
                    return;
                }
                else if (previousStep < 3) {
                    console.log(chalk.white(`  ${figures.pointer} Optimize modules`));
                }
                previousStep = 3;
            }
            if (progress >= 0.95 && progress < 1) {
                if (previousStep > 4) {
                    return;
                }
                else if (previousStep < 4) {
                    console.log(chalk.white(`  ${figures.pointer} Emit files`));
                }
                previousStep = 4;
            }
            if (progress === 1) {
                previousStep = 0;
                const finishTime = new Date();
                const processTime = ((finishTime.getTime() - startTime.getTime()) / 1000).toFixed(3);
                console.log(chalk.white(`\nFinished after ${processTime} seconds.\n`));
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
        return new webpack.ProgressPlugin((progress, message, moduleProgress, activeModules, moduleName) => {
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
            chalk.supportsColor = false;
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

export default SimpleProgressWebpackPlugin;
//# sourceMappingURL=index.js.map
