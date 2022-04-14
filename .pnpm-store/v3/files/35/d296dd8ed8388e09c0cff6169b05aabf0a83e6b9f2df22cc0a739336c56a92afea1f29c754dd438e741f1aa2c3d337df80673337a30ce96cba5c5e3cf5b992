"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRpc = void 0;
const process = __importStar(require("process"));
const rpc_error_1 = require("./rpc-error");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function wrapRpc(childProcess) {
    return ((...args) => __awaiter(this, void 0, void 0, function* () {
        if (!childProcess.send) {
            throw new Error(`Process ${childProcess.pid} doesn't have IPC channels`);
        }
        else if (!childProcess.connected) {
            throw new Error(`Process ${childProcess.pid} doesn't have open IPC channels`);
        }
        const id = uuid();
        const resultPromise = new Promise((resolve, reject) => {
            const handleMessage = (message) => {
                if (message.id === id) {
                    if (message.type === 'resolve') {
                        resolve(message.value);
                        unsubscribe();
                    }
                    else if (message.type === 'reject') {
                        reject(message.error);
                        unsubscribe();
                    }
                }
            };
            const handleClose = (code, signal) => {
                reject(new rpc_error_1.RpcExitError(code
                    ? `Process ${process.pid} exited with code "${code}" [${signal}]`
                    : `Process ${process.pid} exited [${signal}].`, code, signal));
                unsubscribe();
            };
            const subscribe = () => {
                childProcess.on('message', handleMessage);
                childProcess.on('close', handleClose);
            };
            const unsubscribe = () => {
                childProcess.off('message', handleMessage);
                childProcess.off('exit', handleClose);
            };
            subscribe();
        });
        yield new Promise((resolve, reject) => {
            childProcess.send({
                type: 'call',
                id,
                args,
            }, (error) => {
                if (error) {
                    reject(error);
                }
                else {
                    resolve(undefined);
                }
            });
        });
        return resultPromise;
    }));
}
exports.wrapRpc = wrapRpc;
function uuid() {
    return new Array(4)
        .fill(0)
        .map(() => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER).toString(16))
        .join('-');
}
