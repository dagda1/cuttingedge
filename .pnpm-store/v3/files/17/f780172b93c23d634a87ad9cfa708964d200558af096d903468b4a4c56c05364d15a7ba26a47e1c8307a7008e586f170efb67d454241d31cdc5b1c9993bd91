/// <reference types="node" />
import { Serializable } from "child_process";
/** Run a command and return the error, stdout, and stderr. (Never throws.) */
export declare function exec(cmd: string, cwd?: string): Promise<{
    error: Error | undefined;
    stdout: string;
    stderr: string;
}>;
/** Run a command and return the stdout, or if there was an error, throw. */
export declare function execAndThrowErrors(cmd: string, cwd?: string): Promise<string>;
export interface RunWithChildProcessesOptions<In> {
    readonly inputs: readonly In[];
    readonly commandLineArgs: string[];
    readonly workerFile: string;
    readonly nProcesses: number;
    handleOutput(output: unknown): void;
}
export declare function runWithChildProcesses<In>({ inputs, commandLineArgs, workerFile, nProcesses, handleOutput }: RunWithChildProcessesOptions<In>): Promise<void>;
export declare const enum CrashRecoveryState {
    Normal = 0,
    Retry = 1,
    RetryWithMoreMemory = 2,
    Crashed = 3
}
interface RunWithListeningChildProcessesOptions<In> {
    readonly inputs: readonly In[];
    readonly commandLineArgs: string[];
    readonly workerFile: string;
    readonly nProcesses: number;
    readonly cwd: string;
    readonly crashRecovery?: boolean;
    readonly crashRecoveryMaxOldSpaceSize?: number;
    readonly softTimeoutMs?: number;
    handleOutput(output: unknown, processIndex: number | undefined): void;
    handleStart?(input: In, processIndex: number | undefined): void;
    handleCrash?(input: In, state: CrashRecoveryState, processIndex: number | undefined): void;
}
export declare function runWithListeningChildProcesses<In extends Serializable>({ inputs, commandLineArgs, workerFile, nProcesses, cwd, handleOutput, crashRecovery, crashRecoveryMaxOldSpaceSize, handleStart, handleCrash, softTimeoutMs }: RunWithListeningChildProcessesOptions<In>): Promise<void>;
export {};
