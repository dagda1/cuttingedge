/** Version of a package published to NPM. */
export declare class Semver {
    readonly major: number;
    readonly minor: number;
    readonly patch: number;
    static parse(semver: string, coerce?: boolean): Semver;
    static fromRaw({ major, minor, patch }: {
        major: number;
        minor: number;
        patch: number;
    }): Semver;
    /**
     * Returns 0 if equal, 1 if x > y, -1 if x < y
     */
    static compare(x: Semver, y: Semver): 0 | 1 | -1;
    /**
     * Per the semver spec <http://semver.org/#spec-item-2>:
     *
     *   A normal version number MUST take the form X.Y.Z where X, Y, and Z are non-negative integers, and MUST NOT contain leading zeroes.
     *
     * @note This must parse the output of `versionString`.
     *
     * @param semver The version string.
     * @param coerce Without this optional parameter the version MUST follow the above semver spec. However, when set to `true` components after the
     *               major version may be omitted. I.e. `1` equals `1.0` and `1.0.0`.
     */
    static tryParse(semver: string, coerce?: boolean): Semver | undefined;
    constructor(major: number, minor: number, patch: number);
    get versionString(): string;
    equals(other: Semver): boolean;
    greaterThan(other: Semver): boolean;
}
