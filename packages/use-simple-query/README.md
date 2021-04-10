# use-simple-query
## Getting started

```bash
npm install @cutting/use-simple-query
```
Here is the simplest form of using `use-simple-query`:

```ts
import { useSimpleQuery } from '@cutting/use-simple-query';

const { data } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

if (typeof data !== 'undefined') {
  console.log(data);
}
```

Now for the why....

## For crying out loud, why have you created yet another `react-query` or `use-query` or `use-fetch` clone? Are you serious?

Yes, because I am frustrated with what is out there.  

Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) and [swr](https://github.com/vercel/swr) are excellent but they are so ridiculously complicated when all I want to do is to call an endpoint.  I need to spend time learning how to configure their react context config objects and a whole bunch of other stuff when all I want to do is to give a function a url and I am good to go.

Here are some other annoyances.

- Give me smart defaults, there is still way too much setup and config in any `useQueryXXX` or `useFetchXXX` thningy that I have tried.  JavaScript/Typescript has descended into a sea of endless configuration meaning I have to understand everything intimately in order to use it.

- Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) and [swr](https://github.com/vercel/swr) are excellent, but I still have to provide the code to use `axios` or `fetch` or whatever.  Surely the whole point of using a package like this is to abstract all that stuff away.

- I want `abort` to be a first-class citizen and not left up to me to get my hands dirty with `AbortControllers`.

- I want to run more than one query.

- I don't want to deal with cache keys.  The framework should handle this.

- I don't want to configure a react context to execute a single query.  The context should be optional.

- I really, really, really do not want a set of conflicting and contradictory boolean flags `isLoading`, `isError` etc.  I want a discriminated union `state` string uninon instead.  It can only ever be one value......kapiche

```ts
type State = 'READY' | 'LOADING' | 'SUCCEEDED' | 'ERROR' | 'ABORTED';
```

This is the perfect andtedote for this type of thing, that I found in a very popular codebase:

```ts
  let isActive

  if (inactive === false || (active && !inactive)) {
    isActive = true
  } else if (active === false || (inactive && !active)) {
    isActive = false
  }
```

I could go on but I will leave it there for now....

There are no contradictory `isLoading`, `isSucceeded`, `isError` boolean variables and instead, a `state` string union is returned from `useSimpleQuery` that has the following mutually exclusive values:`

```ts
const { data, state } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

// type State = 'READY' | 'LOADING' | 'SUCCEEDED' | 'ERROR' | 'ABORTED';
```

`state` can only be one thing, and you can query it to find the current state of play.

You might not actually need the state flag and can use the existence of the data field.

```ts
const { state, data } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

if (state === 'SUCCEEDED') {  // if you really, really need it
  console.log(data);
}

if (typeof data !== 'undefined') {  // same, same
  console.log(data)
}
```

## Examples

### One hit wonder

Give me a URL and I will do the rest.  I am personally sick of endless configuration when all I want to do is this:

```ts
const { data } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

if (typeof data !== 'undefined') {
  console.log(data);
}
```

or if you want to invoke the query in a button click handler, then you can do something like this:

```ts
const { run, state, abort, reset } = useSimpleQuery(`https://slowmo.glitch.me/10000`, { executeOnMount: false });

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

I wrote this package because I could not find anything that did multi-queries and had abort functionality. 

There are a couple of ways of executing multi queries.

Just load up the URLs into an array and optionally use some of the handlers:

```ts
const { state, abort, reset } = useSimpleQuery(
  [
    `https://slowmo.glitch.me/100`,
    `https://slowmo.glitch.me/200`,
    `https://slowmo.glitch.me/300`,
    `https://slowmo.glitch.me/300`,
    `https://slowmo.glitch.me/400`,
    `https://slowmo.glitch.me/500`,
    `https://slowmo.glitch.me/600`,
    `https://slowmo.glitch.me/700`,
    `https://slowmo.glitch.me/800`,
    `https://slowmo.glitch.me/900`,
    `https://slowmo.glitch.me/1000`,
  ],
  {
    initialData: [],
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

Alternatively, `userMultiQuery` can take a builder function where you add jobs to the `fetchClient`.

```ts
const { state, abort, data } = useSimpleQuery(
  (fetchClient) => {
    for (const i of [...Array.from({ length: 10 }).keys()]) {
      fetchClient.addFetchRequest(`https://slowmo.glitch.me/${(i + 1) * 100}`, {
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
    initialData: [],
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

When executing multiple queries, think of `useSimpleFetch` like a [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) or a [fold](https://wiki.haskell.org/Fold) function.

You can supply an `accumulator` function that executes each time a remote query resolves.  You can build up the final result in this accumulator function.

```ts
const { data } = useSimpleQuery(
  [ 'http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3' ],
  {
    initialData: 0,
    accumulator: (acc, current) => acc + current.answer,
  },
);

if( typeof data !== 'undefined') {
  console.log(`the grand total is ${result}`),  // the grand total is 12
}
```

WARNING! The operations should be [commutative](https://www.mathsisfun.com/associative-commutative-distributive.html) because there is no guarantee when the async functions will return.  

## API

## TODO

- retry logic
- add a compare function when checking