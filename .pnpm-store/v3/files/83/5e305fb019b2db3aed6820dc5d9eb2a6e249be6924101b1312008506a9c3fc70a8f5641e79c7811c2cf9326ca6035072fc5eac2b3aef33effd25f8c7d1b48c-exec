# Installation
> `npm install --save @types/validate-npm-package-name`

# Summary
This package contains type definitions for validate-npm-package-name (https://github.com/npm/validate-npm-package-name).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/validate-npm-package-name.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/validate-npm-package-name/index.d.ts)
````ts
// Type definitions for validate-npm-package-name 3.0
// Project: https://github.com/npm/validate-npm-package-name
// Definitions by: Florian Keller <https://github.com/ffflorian>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace validate {
    let scopedPackagePattern: RegExp;

    interface Results {
        validForNewPackages: boolean;
        validForOldPackages: boolean;
        errors?: string[] | undefined;
        warnings?: string[] | undefined;
    }

    interface ValidNames extends Results {
        validForNewPackages: true;
        validForOldPackages: true;
    }

    interface InvalidNames extends Results {
        validForNewPackages: false;
        validForOldPackages: false;
        errors: string[];
    }

    interface LegacyNames extends Results {
        validForNewPackages: false;
        validForOldPackages: true;
        warnings: string[];
    }
}

declare function validate(name: string): validate.ValidNames | validate.InvalidNames | validate.LegacyNames;

export = validate;

````

### Additional Details
 * Last updated: Fri, 02 Jul 2021 18:04:56 GMT
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by [Florian Keller](https://github.com/ffflorian), and [Piotr Błażejewicz](https://github.com/peterblazejewicz).
