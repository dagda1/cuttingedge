/** Parseable but unsupported TypeScript versions. */
export declare type UnsupportedTypeScriptVersion = "2.0" | "2.1" | "2.2" | "2.3" | "2.4" | "2.5" | "2.6" | "2.7" | "2.8" | "2.9" | "3.0" | "3.1" | "3.2" | "3.3" | "3.4" | "3.5" | "3.6" | "3.7" | "3.8";
/**
 * Parseable and supported TypeScript versions.
 * Only add to this list if we will support this version on DefinitelyTyped.
 */
export declare type TypeScriptVersion = "3.9" | "4.0" | "4.1" | "4.2" | "4.3" | "4.4" | "4.5" | "4.6" | "4.7";
export declare type AllTypeScriptVersion = UnsupportedTypeScriptVersion | TypeScriptVersion;
export declare namespace TypeScriptVersion {
    /** Add to this list when a version actually ships.  */
    const shipped: readonly TypeScriptVersion[];
    /** Add to this list when a version is available as typescript@next */
    const supported: readonly TypeScriptVersion[];
    /** Add to this list when it will no longer be supported on Definitely Typed */
    const unsupported: readonly UnsupportedTypeScriptVersion[];
    const all: readonly AllTypeScriptVersion[];
    const lowest: TypeScriptVersion;
    /** Latest version that may be specified in a `// TypeScript Version:` header. */
    const latest: TypeScriptVersion;
    function isSupported(v: AllTypeScriptVersion): v is TypeScriptVersion;
    function range(min: TypeScriptVersion): readonly TypeScriptVersion[];
    /** List of NPM tags that should be changed to point to the latest version. */
    function tagsToUpdate(v: TypeScriptVersion): readonly string[];
    function previous(v: TypeScriptVersion): TypeScriptVersion | undefined;
    function isRedirectable(v: TypeScriptVersion): boolean;
    function isTypeScriptVersion(str: string): str is TypeScriptVersion;
}
