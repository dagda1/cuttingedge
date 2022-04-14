"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Semver = void 0;
/** Version of a package published to NPM. */
class Semver {
    constructor(major, minor, patch) {
        this.major = major;
        this.minor = minor;
        this.patch = patch;
    }
    static parse(semver, coerce) {
        const result = Semver.tryParse(semver, coerce);
        if (!result) {
            throw new Error(`Unexpected semver: ${semver}`);
        }
        return result;
    }
    static fromRaw({ major, minor, patch }) {
        return new Semver(major, minor, patch);
    }
    /**
     * Returns 0 if equal, 1 if x > y, -1 if x < y
     */
    static compare(x, y) {
        const versions = [
            [x.major, y.major],
            [x.minor, y.minor],
            [x.patch, y.patch]
        ];
        for (const [componentX, componentY] of versions) {
            if (componentX > componentY) {
                return 1;
            }
            if (componentX < componentY) {
                return -1;
            }
        }
        return 0;
    }
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
    static tryParse(semver, coerce) {
        const rgx = /^(\d+)(\.(\d+))?(\.(\d+))?$/;
        const match = rgx.exec(semver);
        if (match) {
            const { 1: major, 3: minor, 5: patch } = match;
            if ((minor !== undefined && patch !== undefined) || coerce) {
                // tslint:disable-line:strict-type-predicates
                return new Semver(intOfString(major), intOfString(minor || "0"), intOfString(patch || "0"));
            }
        }
        return undefined;
    }
    get versionString() {
        const { major, minor, patch } = this;
        return `${major}.${minor}.${patch}`;
    }
    equals(other) {
        return Semver.compare(this, other) === 0;
    }
    greaterThan(other) {
        return Semver.compare(this, other) === 1;
    }
}
exports.Semver = Semver;
function intOfString(str) {
    const n = Number.parseInt(str, 10);
    if (Number.isNaN(n)) {
        throw new Error(`Error in parseInt(${JSON.stringify(str)})`);
    }
    return n;
}
//# sourceMappingURL=semver.js.map