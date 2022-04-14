export declare enum ErrorKind {
    /** Declaration is marked as npm in header and has no matching npm package. */
    NoMatchingNpmPackage = "NoMatchingNpmPackage",
    /** Declaration has no npm package matching specified version. */
    NoMatchingNpmVersion = "NoMatchingNpmVersion",
    /** Declaration is not for an npm package, but has a name that conflicts with an existing npm package. */
    NonNpmHasMatchingPackage = "NonNpmHasMatchingPackage",
    /** Declaration needs to use `export =` to match the JavaScript module's behavior. */
    NeedsExportEquals = "NeedsExportEquals",
    /** Declaration has a default export, but JavaScript module does not have a default export. */
    NoDefaultExport = "NoDefaultExport",
    /** JavaScript exports property not found in declaration exports. */
    JsPropertyNotInDts = "JsPropertyNotInDts",
    /** Declaration exports property not found in JavaScript exports. */
    DtsPropertyNotInJs = "DtsPropertyNotInJs",
    /** JavaScript module has signatures, but declaration module does not. */
    JsSignatureNotInDts = "JsSignatureNotInDts",
    /** Declaration module has signatures, but JavaScript module does not. */
    DtsSignatureNotInJs = "DtsSignatureNotInJs"
}
export declare enum Mode {
    /** Checks based only on the package name and on the declaration's DefinitelyTyped header. */
    NameOnly = "name-only",
    /** Checks based on the source JavaScript code, in addition to the checks performed in name-only mode. */
    Code = "code"
}
export declare function parseMode(mode: string): Mode | undefined;
export declare type CheckOptions = NameOnlyOptions | CodeOptions;
export interface NameOnlyOptions {
    mode: Mode.NameOnly;
}
export interface CodeOptions {
    mode: Mode.Code;
    errors: Map<ExportErrorKind, boolean>;
}
export declare type ExportErrorKind = ExportError["kind"];
export declare function dtsCritic(dtsPath: string, sourcePath?: string, options?: CheckOptions, debug?: boolean): CriticError[];
export declare const defaultErrors: ExportErrorKind[];
export declare function getNpmInfo(name: string): NpmInfo;
/**
 * If dtsName is 'index' (as with DT) then look to the parent directory for the name.
 */
export declare function findDtsName(dtsPath: string): string;
export declare function checkSource(name: string, dtsPath: string, srcPath: string, enabledErrors: Map<ExportErrorKind, boolean>, debug: boolean): ExportError[];
/**
 * Converts a package name from the name used in DT repository to the name used in npm.
 * @param baseName DT name of a package
 */
export declare function dtToNpmName(baseName: string): string;
/**
 * @param error case-insensitive name of the error
 */
export declare function parseExportErrorKind(error: string): ExportErrorKind | undefined;
export interface CriticError {
    kind: ErrorKind;
    message: string;
    position?: Position;
}
interface ExportEqualsError extends CriticError {
    kind: ErrorKind.NeedsExportEquals;
}
interface DefaultExportError extends CriticError {
    kind: ErrorKind.NoDefaultExport;
    position: Position;
}
interface MissingExport extends CriticError {
    kind: ErrorKind.JsPropertyNotInDts | ErrorKind.DtsPropertyNotInJs | ErrorKind.JsSignatureNotInDts | ErrorKind.DtsSignatureNotInJs;
}
interface Position {
    start: number;
    length: number;
}
declare type ExportError = ExportEqualsError | DefaultExportError | MissingExport;
declare type NpmInfo = NonNpm | Npm;
interface NonNpm {
    isNpm: false;
}
interface Npm {
    isNpm: true;
    versions: string[];
    tags: {
        [tag: string]: string | undefined;
    };
}
export {};
