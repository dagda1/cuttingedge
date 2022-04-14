# Installation
> `npm install --save @types/serve-favicon`

# Summary
This package contains type definitions for serve-favicon (https://github.com/expressjs/serve-favicon).

# Details
Files were exported from https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/serve-favicon.
## [index.d.ts](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/serve-favicon/index.d.ts)
````ts
// Type definitions for serve-favicon 2.5
// Project: https://github.com/expressjs/serve-favicon
// Definitions by: Uros Smolnik <https://github.com/urossmolnik>
//                 Piotr Błażejewicz <https://github.com/peterblazejewicz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import serveFavicon = require('serve-favicon');
    app.use(serveFavicon(__dirname + '/public/favicon.ico'));

 =============================================== */

import express = require('express');

/**
 * Node.js middleware for serving a favicon.
 */
declare function serveFavicon(
    path: string | Buffer,
    options?: serveFavicon.Options
): express.RequestHandler;

declare namespace serveFavicon {
    interface Options {
        /**
         * The cache-control max-age directive in ms, defaulting to 1 day.
         * This can also be a string accepted by the `ms` module.
         */
        maxAge?: number | string | undefined;
    }
}

export = serveFavicon;

````

### Additional Details
 * Last updated: Tue, 06 Jul 2021 16:34:37 GMT
 * Dependencies: [@types/express](https://npmjs.com/package/@types/express)
 * Global values: none

# Credits
These definitions were written by [Uros Smolnik](https://github.com/urossmolnik), and [Piotr Błażejewicz](https://github.com/peterblazejewicz).
