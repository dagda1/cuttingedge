# @cutting/react-fetcher

## Getting started

```bash
npm install @cutting/react-fetcher
```
Here is the simplest form of using `react-fetcher`:

```ts
import { useFetcher } from '@cutting/react-fetcher';

const { data, error } = useFetcher(`/api/users/1`);

if (typeof data !== 'undefined') {
  console.log(data);
}
```

## For crying out loud, why have you created yet another `react-query` or `use-query` or `use-fetch` clone? Are you serious?

Yes, because I am frustrated with what is out there.  

Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) are excellent, but they are becoming quite bloated and complicated when all I want to do is to call an endpoint.  I need to spend time learning how to configure a custom React context and a whole bunch of other stuff when all I want to do is give a function a URL and, I am good to go.

Here are some other annoyances:

- I want to be productive ASAP. I don't want to have to read a lot of documentation or have to join a discord channel to learn how to use the package.

- Give me intelligent defaults. I think there is still way too much setup and config in any `useQueryXXX` or `useFetchXXX` thingy that I have tried.  JavaScript/Typescript has descended into a sea of endless configuration which means I have to understand everything intimately to use it.

- Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) are excellent, but I still have to provide the code to use `axios` or `fetch` or whatever, surely the whole point of using a package like this is to abstract all that stuff away.  This package uses [cross-fetch](https://www.npmjs.com/package/cross-fetch) and you cannot change this.  I am hoping that you do not need to.

- I want `abort` to be a first-class citizen and not left up to me to get my hands dirty with `AbortControllers`.

- I want to run more than one query.

- I don't want to deal with cache keys.  The framework should handle this.

  I really, really, really do NOT want to do stuff like this:

  ```ts
  useOverlyComplicatedFetch(['/api/users', id], (url, id) => query(url, { id }))
  ```

- I don't want to configure a react context to execute a single query.  The context should be optional.

- I really, really, really do not want a set of conflicting and contradictory boolean flags like `isLoading`, `isError` etc.  I want a mutually exclusive `state` string union that can only ever be one value?

```ts
type State = 'READY' | 'LOADING' | 'SUCCEEDED' | 'ERROR' | 'ABORTED';
```

I could go on, but I will leave it there for now....

## Examples

### One hit wonder

Give me a URL the framework will do the rest.  I am personally weary of endless configuration when all I want to do is this:

```ts
const { data } = useFetcher(`/api/users/1`);

if (typeof data !== 'undefined') {
  console.log(data);
}
```

or if you want to invoke the query in a button click handler, then you can do this:

```ts
const { run, state, abort, reset } = useFetcher(`/api/users/1`, { executeOnMount: false });

...
  <button
    disabled={state !== 'READY'}
    onClick={() => {
      run();
    }}
  >
    DO IT
  </button>

  // Aborting is a first class citizen!!!!!
  <button onClick={() => abort()}>
    CANCEL
  </button>
```

### Multi Queries

I wrote this package because I could not find anything that did multi-queries and had first class abort functionality. 

There are a couple of ways of executing multi queries.

Just load up the URLs into an array and optionally use some of the handlers:

```ts
const { state, abort, reset } = useFetcher(
  [
    `/api/users/1`,
    `/api/users/2`,
    `/api/users/3`,
    `/api/users/3`,
    `/api/users/4`,
    `/api/users/5`,
    `/api/users/6`,
    `/api/users/7`,
    `/api/users/8`,
    `/api/users/9`,
    `/api/users/10`,
  ],
  {
    initialState: [],
    onQuerySuccess: (d) => console.log('optional handler that gets called when a single query has completed successfully'),
    onSuccess: () => {
      console.log(`optional overall onSuccess handler`);
    },
    onAbort: () => {
      console.log('optional onAbort' )
    },
    onError: (e) => {
      console.log('optional onError handler');
      console.error(e.message);
    },
  },
);

---
// Now we really need abort
<button onClick={() => abort()}>
  CANCEL
</button>
```

Alternatively, `useFetcher` can take a builder function that provides a `fetchClient` object with an `addFetchRequest` function.

```ts
const { state, abort, data } = useFetcher(
  (fetchClient) => {
    for (const i of [...Array.from({ length: 10 }).keys()]) {
      fetchClient.addFetchRequest(`/api/users/${i + 1}`, {
        onQuerySuccess: (d) => console.log('you can add a different handler for each query'),
        onQueryError(e) {
          console.log(`scoped error handler`);
          console.error(e);
        },
      });
    }

    return fetchClient;
  },
  {
    onQuerySuccess: (d) => console.log('optional handler that gets called when a query has completed successfully'),
    initialState: [],
    onSuccess: () => {
      console.log(`optional onSuccess handler`);
    },
    onAbort: () => {
      console.log('optional onAbort' )
    },
    onError: (e) => {
      console.log('optional onError handler');
      console.error(e.message);
    },
  },
);
```

## Accumulation

When executing multiple queries, think of `useFetcher` like a [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) or a [fold](https://wiki.haskell.org/Fold) function.


### Default accumulation

If the `initialState` field is an array, then `useFetcher` will append the result of each async fetch onto the `initialState`.

```ts
const { data } = useFetcher(
  [ 'http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3' ],
  {
    initialState: []
  },
);

if (typeof data !== 'undefined') {
  console.log(data); // [2, 4, 6];
}
```

### Custom accumlator function

You can supply an `accumulator` function that executes each time a remote query resolves.  You can build up the final result in this accumulator function.


```ts
const { data } = useFetcher(
  [ 'http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3' ],
  {
    initialState: 0,
    accumulator: (acc, current) => acc + current.answer,
  },
);

if( typeof data !== 'undefined') {
  console.log(`the grand total is ${result}`),  // the grand total is 12
}
```

WARNING! The operations should be [commutative](https://www.mathsisfun.com/associative-commutative-distributive.html) because there is no guarantee when the async functions will return. 

## TODO

- retry logic
- graphql
- allow processing of results in order if required
- global configuration via context