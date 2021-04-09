# use-simple-query

## For crying out loud, why have you created yet another `react-query` or `use-query` or `use-fetch` clone? Are you serious?

Yes, because I am frustrated with what is out there.  - Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) and [swr](https://github.com/vercel/swr) are excellent but they are so ridiculously complicated when all I want to do is to call an endpoint.  I need to spend time to get know these packages when all I want to do is to give a function a url and I am good to go.

Here are my reasons.

- Because there is still way too much setup and config in any `useQueryXXX` query thningy that I have tried.

- Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) and [swr](https://github.com/vercel/swr) are excellent, but I still have to provide the code to use `axios` or `fetch` or whatever.  There is a lot to learn and configure for something that should be simple.  It is also becoming bloated and I do not know what half of what it does.

- I want to run more than one query.

- I want `abort` to be a first-class citizen and not left up to me to get my hands dirty with `AbortControllers`.

## Getting started

```bash
# npm
npm install @cutting/use-simple-query

# yarn
yarn add @cutting/use-simple-query -S
```

So far, I have resisted the urge to use the react context in favour of simplicity.

Here is the simplest form of using `use-simple-query`:

```ts
const { data } = useSimpleQuery(`https://slowmo.glitch.me/10000`);
```

There are no contradictory `isLoading`, `isSucceeded`, `isError` boolean variables and instead, a `state` string union is returned from `useSimpleQuery` that has the following mutually exclusive values:`

```ts
const { data, state } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

// type State = 'IDLE' | 'LOADING' | 'SUCCEEDED' | 'ERROR' | 'ABORTED';
```

`state` can only be one thing, and you can query it to find the current state of play.

```ts
const { state, data } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

if (state === 'SUCCEEDED') {
  console.log(data);
}
```

## Examples

### One hit wonder

Give me a URL and, I will do the rest.  I am personally sick of endless configuration when all I want to do is this:

```ts
const { data } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

if (typeof data !== 'undefined') {
  console.log(data);
}
```

or if you want to invoke the query in a button click handler, then you can do something like this:

```ts
const { run, state, abort, reset } = useSimpleQuery(`https://slowmo.glitch.me/10000`, { executeOnload: false });

...
  <button
    disabled={state !== 'IDLE'}
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
    onQuerySuccess: (d) => console.log('optional handler that gets called when a single query has completed successfully'),
    initialData: [],
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

## API