import pm = require("parsimmon");
import { AllTypeScriptVersion, TypeScriptVersion } from "@definitelytyped/typescript-versions";
export interface Header {
    readonly nonNpm: boolean;
    readonly libraryName: string;
    readonly libraryMajorVersion: number;
    readonly libraryMinorVersion: number;
    readonly typeScriptVersion: AllTypeScriptVersion;
    readonly projects: readonly string[];
    readonly contributors: readonly Author[];
}
export interface Author {
    readonly name: string;
    readonly url: string;
    readonly githubUsername: string | undefined;
}
export interface ParseError {
    readonly index: number;
    readonly line: number;
    readonly column: number;
    readonly expected: readonly string[];
}
export declare function makeTypesVersionsForPackageJson(typesVersions: readonly TypeScriptVersion[]): unknown;
export declare function parseHeaderOrFail(mainFileContent: string): Header;
export declare function validate(mainFileContent: string): ParseError | undefined;
export declare function renderExpected(expected: readonly string[]): string;
export declare function parseTypeScriptVersionLine(line: string): AllTypeScriptVersion;
declare module "parsimmon" {
    type Pr<T> = pm.Parser<T>;
    function seqMap<T, U, V, W, X, Y, Z, A, B, C>(p1: Pr<T>, p2: Pr<U>, p3: Pr<V>, p4: Pr<W>, p5: Pr<X>, p6: Pr<Y>, p7: Pr<Z>, p8: Pr<A>, p9: Pr<B>, cb: (a1: T, a2: U, a3: V, a4: W, a5: X, a6: Y, a7: Z, a8: A, a9: B) => C): Pr<C>;
}
