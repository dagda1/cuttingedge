"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.runWithListeningChildProcesses = exports.runWithChildProcesses = exports.execAndThrowErrors = exports.exec = void 0;
const assert_1 = __importDefault(require("assert"));
const child_process_1 = require("child_process");
const net_1 = require("net");
const DEFAULT_CRASH_RECOVERY_MAX_OLD_SPACE_SIZE = 4096;
/** Run a command and return the error, stdout, and stderr. (Never throws.) */
function exec(cmd, cwd) {
    return new Promise(resolve => {
        // Fix "stdout maxBuffer exceeded" error
        // See https://github.com/DefinitelyTyped/DefinitelyTyped/pull/26545#issuecomment-402274021
        const maxBuffer = 1024 * 1024 * 1; // Max = 1 MiB, default is 200 KiB
        (0, child_process_1.exec)(cmd, { encoding: "utf8", cwd, maxBuffer }, (error, stdout, stderr) => {
            resolve({ error: error === null ? undefined : error, stdout: stdout.trim(), stderr: stderr.trim() });
        });
    });
}
exports.exec = exec;
/** Run a command and return the stdout, or if there was an error, throw. */
async function execAndThrowErrors(cmd, cwd) {
    const { error, stdout, stderr } = await exec(cmd, cwd);
    if (error) {
        throw new Error(`${error.stack}\n${stderr}`);
    }
    return stdout + stderr;
}
exports.execAndThrowErrors = execAndThrowErrors;
function runWithChildProcesses({ inputs, commandLineArgs, workerFile, nProcesses, handleOutput }) {
    return new Promise(async (resolve, reject) => {
        const nPerProcess = Math.floor(inputs.length / nProcesses);
        let processesLeft = nProcesses;
        let rejected = false;
        const allChildren = [];
        for (let i = 0; i < nProcesses; i++) {
            const lo = nPerProcess * i;
            const hi = i === nProcesses - 1 ? inputs.length : lo + nPerProcess;
            let outputsLeft = hi - lo; // Expect one output per input
            if (outputsLeft === 0) {
                // No work for this process to do, so don't launch it
                processesLeft--;
                continue;
            }
            const child = (0, child_process_1.fork)(workerFile, commandLineArgs, {
                execArgv: await getChildProcessExecArgv(i)
            });
            allChildren.push(child);
            child.send(inputs.slice(lo, hi));
            child.on("message", outputMessage => {
                handleOutput(outputMessage);
                (0, assert_1.default)(outputsLeft > 0);
                outputsLeft--;
                if (outputsLeft === 0) {
                    (0, assert_1.default)(processesLeft > 0);
                    processesLeft--;
                    if (processesLeft === 0) {
                        resolve();
                    }
                    child.kill();
                }
            });
            child.on("disconnect", () => {
                if (outputsLeft !== 0) {
                    fail(new Error(`disconnect with ${outputsLeft} outputs left`));
                }
            });
            child.on("close", () => {
                (0, assert_1.default)(rejected || outputsLeft === 0);
            });
            child.on("error", fail);
        }
        function fail(e) {
            rejected = true;
            for (const child of allChildren) {
                child.kill();
            }
            reject(e);
        }
    });
}
exports.runWithChildProcesses = runWithChildProcesses;
function runWithListeningChildProcesses({ inputs, commandLineArgs, workerFile, nProcesses, cwd, handleOutput, crashRecovery, crashRecoveryMaxOldSpaceSize = DEFAULT_CRASH_RECOVERY_MAX_OLD_SPACE_SIZE, handleStart, handleCrash, softTimeoutMs = Infinity }) {
    return new Promise(async (resolve, reject) => {
        let inputIndex = 0;
        let processesLeft = nProcesses;
        let rejected = false;
        const runningChildren = new Set();
        const maxOldSpaceSize = getMaxOldSpaceSize(process.execArgv) || 0;
        const startTime = Date.now();
        for (let i = 0; i < nProcesses; i++) {
            if (inputIndex === inputs.length) {
                processesLeft--;
                continue;
            }
            const processIndex = nProcesses > 1 ? i + 1 : undefined;
            let child;
            let crashRecoveryState = 0 /* Normal */;
            let currentInput;
            const onMessage = (outputMessage) => {
                try {
                    const oldCrashRecoveryState = crashRecoveryState;
                    crashRecoveryState = 0 /* Normal */;
                    handleOutput(outputMessage, processIndex);
                    if (inputIndex === inputs.length || Date.now() - startTime > softTimeoutMs) {
                        stopChild(/*done*/ true);
                    }
                    else {
                        if (oldCrashRecoveryState !== 0 /* Normal */) {
                            // retry attempt succeeded, restart the child for further tests.
                            console.log(`${processIndex}> Restarting...`);
                            restartChild(nextTask, process.execArgv);
                        }
                        else {
                            nextTask();
                        }
                    }
                }
                catch (e) {
                    onError(e);
                }
            };
            const onClose = async () => {
                if (rejected || !runningChildren.has(child)) {
                    return;
                }
                try {
                    // treat any unhandled closures of the child as a crash
                    if (crashRecovery) {
                        switch (crashRecoveryState) {
                            case 0 /* Normal */:
                                crashRecoveryState = 1 /* Retry */;
                                break;
                            case 1 /* Retry */:
                                // skip crash recovery if we're already passing a value for --max_old_space_size that
                                // is >= crashRecoveryMaxOldSpaceSize
                                crashRecoveryState =
                                    maxOldSpaceSize < crashRecoveryMaxOldSpaceSize
                                        ? 2 /* RetryWithMoreMemory */
                                        : (crashRecoveryState = 3 /* Crashed */);
                                break;
                            default:
                                crashRecoveryState = 3 /* Crashed */;
                        }
                    }
                    else {
                        crashRecoveryState = 3 /* Crashed */;
                    }
                    if (handleCrash) {
                        handleCrash(currentInput, crashRecoveryState, processIndex);
                    }
                    switch (crashRecoveryState) {
                        case 1 /* Retry */:
                            await restartChild(resumeTask, process.execArgv);
                            break;
                        case 2 /* RetryWithMoreMemory */:
                            await restartChild(resumeTask, [
                                ...getExecArgvWithoutMaxOldSpaceSize(),
                                `--max_old_space_size=${crashRecoveryMaxOldSpaceSize}`
                            ]);
                            break;
                        case 3 /* Crashed */:
                            crashRecoveryState = 0 /* Normal */;
                            if (inputIndex === inputs.length || Date.now() - startTime > softTimeoutMs) {
                                stopChild(/*done*/ true);
                            }
                            else {
                                await restartChild(nextTask, process.execArgv);
                            }
                            break;
                        default:
                            assert_1.default.fail(`${processIndex}> Unexpected crashRecoveryState: ${crashRecoveryState}`);
                    }
                }
                catch (e) {
                    onError(e);
                }
            };
            const onError = (err) => {
                child.removeAllListeners();
                runningChildren.delete(child);
                fail(err);
            };
            const startChild = async (taskAction, execArgv) => {
                try {
                    child = (0, child_process_1.fork)(workerFile, commandLineArgs, { cwd, execArgv: await getChildProcessExecArgv(i, execArgv) });
                    runningChildren.add(child);
                }
                catch (e) {
                    fail(e);
                    return;
                }
                try {
                    let closed = false;
                    const thisChild = child;
                    const onChildClosed = () => {
                        // Don't invoke `onClose` more than once for a single child.
                        if (!closed && child === thisChild) {
                            closed = true;
                            onClose();
                        }
                    };
                    const onChildDisconnectedOrExited = () => {
                        if (!closed && thisChild === child) {
                            // Invoke `onClose` after enough time has elapsed to allow `close` to be triggered.
                            // This is to ensure our `onClose` logic gets called in some conditions
                            const timeout = 1000;
                            setTimeout(onChildClosed, timeout);
                        }
                    };
                    child.on("message", onMessage);
                    child.on("close", onChildClosed);
                    child.on("disconnect", onChildDisconnectedOrExited);
                    child.on("exit", onChildDisconnectedOrExited);
                    child.on("error", onError);
                    taskAction();
                }
                catch (e) {
                    onError(e);
                }
            };
            const stopChild = (done) => {
                try {
                    (0, assert_1.default)(runningChildren.has(child), `${processIndex}> Child not running`);
                    if (done) {
                        processesLeft--;
                        if (processesLeft === 0) {
                            resolve();
                        }
                    }
                    runningChildren.delete(child);
                    child.removeAllListeners();
                    child.kill();
                }
                catch (e) {
                    onError(e);
                }
            };
            const restartChild = async (taskAction, execArgv) => {
                try {
                    (0, assert_1.default)(runningChildren.has(child), `${processIndex}> Child not running`);
                    console.log(`${processIndex}> Restarting...`);
                    stopChild(/*done*/ false);
                    await startChild(taskAction, execArgv);
                }
                catch (e) {
                    onError(e);
                }
            };
            const resumeTask = () => {
                try {
                    (0, assert_1.default)(runningChildren.has(child), `${processIndex}> Child not running`);
                    child.send(currentInput);
                }
                catch (e) {
                    onError(e);
                }
            };
            const nextTask = () => {
                try {
                    (0, assert_1.default)(runningChildren.has(child), `${processIndex}> Child not running`);
                    currentInput = inputs[inputIndex];
                    inputIndex++;
                    if (handleStart) {
                        handleStart(currentInput, processIndex);
                    }
                    child.send(currentInput);
                }
                catch (e) {
                    onError(e);
                }
            };
            await startChild(nextTask, process.execArgv);
        }
        function fail(err) {
            if (!rejected) {
                rejected = true;
                for (const child of runningChildren) {
                    try {
                        child.removeAllListeners();
                        child.kill();
                    }
                    catch (_a) {
                        // do nothing
                    }
                }
                const message = err ? `: ${err.message}` : "";
                reject(new Error(`Something went wrong in ${runWithListeningChildProcesses.name}${message}`));
            }
        }
    });
}
exports.runWithListeningChildProcesses = runWithListeningChildProcesses;
const maxOldSpaceSizeRegExp = /^--max[-_]old[-_]space[-_]size(?:$|=(\d+))/;
function getMaxOldSpaceSizeArg(argv) {
    for (let index = 0; index < argv.length; index++) {
        const match = maxOldSpaceSizeRegExp.exec(argv[index]);
        if (match) {
            const value = match[1] ? parseInt(match[1], 10) : argv[index + 1] ? parseInt(argv[index + 1], 10) : undefined;
            const size = match[1] ? 1 : 2; // tslint:disable-line:no-magic-numbers
            return { index, size, value };
        }
    }
    return undefined;
}
function getMaxOldSpaceSize(argv) {
    const arg = getMaxOldSpaceSizeArg(argv);
    return arg && arg.value;
}
let execArgvWithoutMaxOldSpaceSize;
function getExecArgvWithoutMaxOldSpaceSize() {
    if (!execArgvWithoutMaxOldSpaceSize) {
        // remove --max_old_space_size from execArgv
        const execArgv = process.execArgv.slice();
        let maxOldSpaceSizeArg = getMaxOldSpaceSizeArg(execArgv);
        while (maxOldSpaceSizeArg) {
            execArgv.splice(maxOldSpaceSizeArg.index, maxOldSpaceSizeArg.size);
            maxOldSpaceSizeArg = getMaxOldSpaceSizeArg(execArgv);
        }
        execArgvWithoutMaxOldSpaceSize = execArgv;
    }
    return execArgvWithoutMaxOldSpaceSize;
}
async function getChildProcessExecArgv(portOffset = 0, execArgv = process.execArgv) {
    const debugArg = execArgv.findIndex(arg => arg === "--inspect" || arg === "--inspect-brk" || arg.startsWith("--inspect="));
    if (debugArg < 0)
        return execArgv;
    const port = parseInt(execArgv[debugArg].split("=")[1], 10) || 9229;
    return [
        ...execArgv.slice(0, debugArg),
        `--inspect=${await findFreePort(port + 1 + portOffset, 100, 1000)}`,
        ...execArgv.slice(debugArg + 1)
    ];
}
// From VS Code: https://github.com/microsoft/vscode/blob/7d57a8f6f546b5e30027e7cfa87bd834eb5c7bbb/src/vs/base/node/ports.ts
function findFreePort(startPort, giveUpAfter, timeout) {
    let done = false;
    return new Promise(resolve => {
        const timeoutHandle = setTimeout(() => {
            if (!done) {
                done = true;
                return resolve(0);
            }
        }, timeout);
        doFindFreePort(startPort, giveUpAfter, port => {
            if (!done) {
                done = true;
                clearTimeout(timeoutHandle);
                return resolve(port);
            }
        });
    });
}
function doFindFreePort(startPort, giveUpAfter, clb) {
    if (giveUpAfter === 0) {
        return clb(0);
    }
    const client = new net_1.Socket();
    // If we can connect to the port it means the port is already taken so we continue searching
    client.once("connect", () => {
        dispose(client);
        return doFindFreePort(startPort + 1, giveUpAfter - 1, clb);
    });
    client.once("data", () => {
        // this listener is required since node.js 8.x
    });
    client.once("error", (err) => {
        dispose(client);
        // If we receive any non ECONNREFUSED error, it means the port is used but we cannot connect
        if (err.code !== "ECONNREFUSED") {
            return doFindFreePort(startPort + 1, giveUpAfter - 1, clb);
        }
        // Otherwise it means the port is free to use!
        return clb(startPort);
    });
    client.connect(startPort, "127.0.0.1");
    function dispose(socket) {
        try {
            socket.removeAllListeners("connect");
            socket.removeAllListeners("error");
            socket.end();
            socket.destroy();
            socket.unref();
        }
        catch (error) {
            console.error(error); // otherwise this error would get lost in the callback chain
        }
    }
}
//# sourceMappingURL=process.js.map