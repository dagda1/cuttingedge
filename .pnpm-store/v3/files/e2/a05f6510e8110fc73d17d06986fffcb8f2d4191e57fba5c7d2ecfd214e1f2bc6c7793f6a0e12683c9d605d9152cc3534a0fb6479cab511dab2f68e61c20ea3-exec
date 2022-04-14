# Installation
> `npm install --save @types/xml`

# Summary
This package contains type definitions for xml (https://github.com/dylang/node-xml).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xml.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/xml/index.d.ts)
````ts
// Type definitions for xml 1.0
// Project: https://github.com/dylang/node-xml
// Definitions by: Jianrong Yu <https://github.com/YuJianrong>
//                 Semyon Fomin <https://github.com/semyonf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace xml {
    interface Option {
        /**
         * String used for tab, defaults to no tabs (compressed)
         */
        indent?: string | undefined;
        /**
         * Return the result as a `stream` (default false)
         */
        stream?: boolean | undefined;
        /**
         * Add default xml declaration (default false)
         */
        declaration?:
            | boolean
            | {
                  encoding?: string | undefined;
                  standalone?: string | undefined;
              } | undefined;
    }

    interface XmlAttrs {
        [attr: string]: XmlAtom;
    }
    interface XmlDescArray {
        [index: number]: { _attr: XmlAttrs } | XmlObject;
    }
    interface ElementObject {
        push(xmlObject: XmlObject): void;
        close(xmlObject?: XmlObject): void;
    }

    type XmlAtom = string | number | boolean | null;
    type XmlDesc =
        | { _attr: XmlAttrs }
        | { _cdata: string }
        | { _attr: XmlAttrs; _cdata: string }
        | XmlAtom
        | XmlAtom[]
        | XmlDescArray;
    type XmlObject = { [tag: string]: ElementObject | XmlDesc } | XmlDesc;

    function element(...xmlObjects: XmlObject[]): ElementObject;
    function Element(...xmlObjects: XmlObject[]): ElementObject;
}

declare function xml(
    xmlObject: xml.XmlObject | xml.XmlObject[],
    options: { stream: true } & xml.Option,
): NodeJS.ReadableStream;
declare function xml(xmlObject?: xml.XmlObject | xml.XmlObject[], options?: boolean | string | xml.Option): string;

export = xml;

````

### Additional Details
 * Last updated: Tue, 18 Jan 2022 20:31:26 GMT
 * Dependencies: [@types/node](https://npmjs.com/package/@types/node)
 * Global values: none

# Credits
These definitions were written by [Jianrong Yu](https://github.com/YuJianrong), and [Semyon Fomin](https://github.com/semyonf).
