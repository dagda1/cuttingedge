"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("./index");
function suite(description, tests) {
    describe(description, () => {
        for (const k in tests) {
            test(k, tests[k], 10 * 1000);
        }
    });
}
suite("findDtsName", {
    absolutePath() {
        expect(index_1.findDtsName("~/dt/types/jquery/index.d.ts")).toBe("jquery");
    },
    relativePath() {
        expect(index_1.findDtsName("jquery/index.d.ts")).toBe("jquery");
    },
    currentDirectory() {
        expect(index_1.findDtsName("index.d.ts")).toBe("dts-critic");
    },
    relativeCurrentDirectory() {
        expect(index_1.findDtsName("./index.d.ts")).toBe("dts-critic");
    },
    emptyDirectory() {
        expect(index_1.findDtsName("")).toBe("dts-critic");
    },
});
suite("getNpmInfo", {
    nonNpm() {
        expect(index_1.getNpmInfo("parseltongue")).toEqual({ isNpm: false });
    },
    npm() {
        expect(index_1.getNpmInfo("typescript")).toEqual({
            isNpm: true,
            versions: expect.arrayContaining(["3.7.5"]),
            tags: expect.objectContaining({ latest: expect.stringContaining("") }),
        });
    },
});
suite("dtToNpmName", {
    nonScoped() {
        expect(index_1.dtToNpmName("content-type")).toBe("content-type");
    },
    scoped() {
        expect(index_1.dtToNpmName("babel__core")).toBe("@babel/core");
    },
});
suite("parseExportErrorKind", {
    existent() {
        expect(index_1.parseExportErrorKind("NoDefaultExport")).toBe(index_1.ErrorKind.NoDefaultExport);
    },
    existentDifferentCase() {
        expect(index_1.parseExportErrorKind("JspropertyNotinDTS")).toBe(index_1.ErrorKind.JsPropertyNotInDts);
    },
    nonexistent() {
        expect(index_1.parseExportErrorKind("FakeError")).toBe(undefined);
    }
});
const allErrors = new Map([
    [index_1.ErrorKind.NeedsExportEquals, true],
    [index_1.ErrorKind.NoDefaultExport, true],
    [index_1.ErrorKind.JsSignatureNotInDts, true],
    [index_1.ErrorKind.DtsSignatureNotInJs, true],
    [index_1.ErrorKind.DtsPropertyNotInJs, true],
    [index_1.ErrorKind.JsPropertyNotInDts, true],
]);
suite("checkSource", {
    noErrors() {
        expect(index_1.checkSource("noErrors", "testsource/noErrors.d.ts", "testsource/noErrors.js", allErrors, false)).toEqual([]);
    },
    missingJsProperty() {
        expect(index_1.checkSource("missingJsProperty", "testsource/missingJsProperty.d.ts", "testsource/missingJsProperty.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.JsPropertyNotInDts,
                message: `The declaration doesn't match the JavaScript module 'missingJsProperty'. Reason:
The JavaScript module exports a property named 'foo', which is missing from the declaration module.`
            }
        ]));
    },
    noMissingWebpackProperty() {
        expect(index_1.checkSource("missingJsProperty", "testsource/webpackPropertyNames.d.ts", "testsource/webpackPropertyNames.js", allErrors, false)).toHaveLength(0);
    },
    missingDtsProperty() {
        expect(index_1.checkSource("missingDtsProperty", "testsource/missingDtsProperty.d.ts", "testsource/missingDtsProperty.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.DtsPropertyNotInJs,
                message: `The declaration doesn't match the JavaScript module 'missingDtsProperty'. Reason:
The declaration module exports a property named 'foo', which is missing from the JavaScript module.`,
                position: {
                    start: 67,
                    length: 11,
                },
            }
        ]));
    },
    missingDefaultExport() {
        expect(index_1.checkSource("missingDefault", "testsource/missingDefault.d.ts", "testsource/missingDefault.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.NoDefaultExport,
                message: `The declaration doesn't match the JavaScript module 'missingDefault'. Reason:
The declaration specifies 'export default' but the JavaScript source does not mention 'default' anywhere.

The most common way to resolve this error is to use 'export =' syntax instead of 'export default'.
To learn more about 'export =' syntax, see https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require.`,
                position: {
                    start: 0,
                    length: 32,
                },
            }
        ]));
    },
    missingJsSignatureExportEquals() {
        expect(index_1.checkSource("missingJsSignatureExportEquals", "testsource/missingJsSignatureExportEquals.d.ts", "testsource/missingJsSignatureExportEquals.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.JsSignatureNotInDts,
                message: `The declaration doesn't match the JavaScript module 'missingJsSignatureExportEquals'. Reason:
The JavaScript module can be called or constructed, but the declaration module cannot.`,
            }
        ]));
    },
    missingJsSignatureNoExportEquals() {
        expect(index_1.checkSource("missingJsSignatureNoExportEquals", "testsource/missingJsSignatureNoExportEquals.d.ts", "testsource/missingJsSignatureNoExportEquals.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.JsSignatureNotInDts,
                message: `The declaration doesn't match the JavaScript module 'missingJsSignatureNoExportEquals'. Reason:
The JavaScript module can be called or constructed, but the declaration module cannot.

The most common way to resolve this error is to use 'export =' syntax.
To learn more about 'export =' syntax, see https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require.`,
            }
        ]));
    },
    missingDtsSignature() {
        expect(index_1.checkSource("missingDtsSignature", "testsource/missingDtsSignature.d.ts", "testsource/missingDtsSignature.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.DtsSignatureNotInJs,
                message: `The declaration doesn't match the JavaScript module 'missingDtsSignature'. Reason:
The declaration module can be called or constructed, but the JavaScript module cannot.`,
            }
        ]));
    },
    missingExportEquals() {
        expect(index_1.checkSource("missingExportEquals", "testsource/missingExportEquals.d.ts", "testsource/missingExportEquals.js", allErrors, false)).toEqual(expect.arrayContaining([
            {
                kind: index_1.ErrorKind.NeedsExportEquals,
                message: `The declaration doesn't match the JavaScript module 'missingExportEquals'. Reason:
The declaration should use 'export =' syntax because the JavaScript source uses 'module.exports =' syntax and 'module.exports' can be called or constructed.

To learn more about 'export =' syntax, see https://www.typescriptlang.org/docs/handbook/modules.html#export--and-import--require.`,
            }
        ]));
    },
});
suite("dtsCritic", {
    noErrors() {
        expect(index_1.dtsCritic("testsource/dts-critic.d.ts", "testsource/dts-critic.js")).toEqual([]);
    },
    noMatchingNpmPackage() {
        expect(index_1.dtsCritic("testsource/parseltongue.d.ts")).toEqual([
            {
                kind: index_1.ErrorKind.NoMatchingNpmPackage,
                message: `Declaration file must have a matching npm package.
To resolve this error, either:
1. Change the name to match an npm package.
2. Add a Definitely Typed header with the first line


// Type definitions for non-npm package parseltongue-browser

Add -browser to the end of your name to make sure it doesn't conflict with existing npm packages.`,
            },
        ]);
    },
    noMatchingNpmVersion() {
        expect(index_1.dtsCritic("testsource/typescript.d.ts")).toEqual([
            {
                kind: index_1.ErrorKind.NoMatchingNpmVersion,
                message: expect.stringContaining(`The types for 'typescript' must match a version that exists on npm.
You should copy the major and minor version from the package on npm.`),
            },
        ]);
    },
    nonNpmHasMatchingPackage() {
        expect(index_1.dtsCritic("testsource/tslib.d.ts")).toEqual([
            {
                kind: index_1.ErrorKind.NonNpmHasMatchingPackage,
                message: `The non-npm package 'tslib' conflicts with the existing npm package 'tslib'.
Try adding -browser to the end of the name to get

    tslib-browser
`,
            },
        ]);
    }
});
//# sourceMappingURL=index.test.js.map