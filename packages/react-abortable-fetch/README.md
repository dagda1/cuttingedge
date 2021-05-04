# @cutting/react-abortable-fetch

## Quick Start
<details><summary><h3<b>Show instructions</b></h3></summary>

Here is the simplest form of using `react-abortable-fetch`:

```sh
# npm
npm install @cutting/react-abortable-fetch

# yarn
yarn add @cutting/react-abortable-fetch
```

```ts
import { useFetch } from '@cutting/react-abortable-fetch';

const { data, error, state } = useFetch(`/api/users/1`);

if (state === 'LOADING') {
  return <div>loading...</div>
}

if (error) {
  return <div>Houston, we have a problem</dov>
}

return <SomeComponent data={data}/>
```

Here is a [codesandbox](https://codesandbox.io/s/lucid-sun-fke9y?file=/src/App.tsx) with a more complex example.

</details>

## codesandboxes

- [Simple example](https://codesandbox.io/s/react-abortable-fetch-forked-i55r6?file=/src/App.tsx)
- [Simple example with click handler](https://codesandbox.io/s/react-abortable-fetch-forked-28i4e?file=/src/App.tsx)
- [multi-query and abortable example](https://codesandbox.io/s/react-abortable-fetch-forked-zbxcn?file=/src/App.tsx)
- [multi-query and accumulation example](https://codesandbox.io/s/react-abortable-fetch-forked-rs2y9?file=/src/App.tsx)

## Table of contents

- [In the Name of Oden, Why?](#Why)
- [Examples](#Examples)
  - [Basic](#Simple-but-nice)
  - [Multi Queries](#Multi-Queries)
  - [Builder Syntax](#Builder-Syntax)
- [Accumulation](#Accumulation)
  - [Default Accumulation](#Default-accumulation)
  - [Custom Accumulator Function](#Custom-accumlator-function)
- [Retries](#Retries)
- [Timeout](#Timeout)
- [API](#API)
- [Typescript](#Typescript)
- [codesandboxes](#codesandboxes)
  - [Type inference](#Type-inference)
- [TODO](#TODO)

## Why

> For crying out loud, why have you created yet another `react-query` or `use-query` or `use-fetch` clone? Are you serious?

Yes, because I am frustrated with what is out there.  

Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) are excellent, but they are becoming quite bloated and complicated when all I want to do is to call an endpoint.  I need to spend time learning how to configure a custom React context and a whole bunch of other stuff when all I want to do is give a function a URL and, I am good to go.

Here are some other annoyances:

- I want to be productive ASAP. I don't want to have to read a lot of documentation or have to join a discord channel to learn how to use the package.

- Give me intelligent defaults. I think there is still way too much setup and config in any `useQueryXXX` or `useFetchXXX` thingy that I have tried.  JavaScript/Typescript has descended into a sea of endless configuration which means I have to understand everything intimately to use it.

- Packages like [react-query](https://github.com/tannerlinsley/react-query/blob/master/examples/basic/src/index.js#L41) are excellent, but I still have to provide the code to use `axios` or `fetch` or whatever, surely the whole point of using a package like this is to abstract all that stuff away.  This package uses [cross-fetch](https://www.npmjs.com/package/cross-fetch) and you cannot change this.  I am predicting that you do not need to.

- I want `abort` to be a first-class citizen and not left up to me to get my hands dirty with `AbortControllers`.

- I want an adjustable timeout, queries should not be allowed to run forever. I don't want to have to roll my own logic.

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

- I needed json and jsonp

I could go on, but I will leave it there for now....

## Examples

### Simple but nice


Give me a URL and the framework will do the rest.  I am personally weary of endless configuration when all I want to do is this:

[codesandbox](https://codesandbox.io/s/react-abortable-fetch-forked-i55r6?file=/src/App.tsx)

```ts
const { data, error } = useFetch(`/api/users/1`);

if (typeof data !== 'undefined') {
  console.log(data);
}
```

or if you want to invoke the query in a button click handler, then you can do this:

[codesandbox](https://codesandbox.io/s/react-abortable-fetch-forked-28i4e?file=/src/App.tsx)

```ts
const { run, state } = useFetch(`/api/users/1`, { executeOnMount: false });

// or use a combination of Request and RequestInfo
// const { run, state } = useFetch({url: `/api/users/1`, method: 'POST'}, { executeOnMount: false });

return (
  <button
    disabled={state !== 'READY'}
    onClick={() => {
      run();
    }}
  >
    DO IT
  </button>
);
```

or 

### Multi Queries

[codesandbox](https://codesandbox.io/s/react-abortable-fetch-forked-zbxcn?file=/src/App.tsx)

I wrote this package because I could not find anything that did multi-queries and had first class abort functionality. 

There are a couple of ways of executing multi queries.

Just load up the URLs into an array and optionally use some of the handlers:

```ts
  const { run, data, state, abort, reset } = useFetch<Result[], Product>(
    [
      "https://reqres.in/api/products/1?delay=1",
      "https://reqres.in/api/products/2?delay=1",
      "https://reqres.in/api/products/3?delay=1",
      "https://reqres.in/api/products/4?delay=1",
      "https://reqres.in/api/products/5?delay=1",
      "https://reqres.in/api/products/6?delay=1",
      "https://reqres.in/api/products/7?delay=1",
      "https://reqres.in/api/products/8?delay=1",
      "https://reqres.in/api/products/9?delay=1",
      "https://reqres.in/api/products/10?delay=1"
    ],
    // or use a combination of Request and RequestInfo
    // const { run, data, state, abort, reset } = useFetch<Result[], Product>(
    // [
    //  {url: "https://reqres.in/api/products/1?delay=1", method: 'POST'}
    //  {url: "https://reqres.in/api/products/1?delay=2", method: 'POST'}
    //  etc.
    {
      initialState: [],
      executeOnMount: false,
      accumulator(acc, current) {
        acc.push({
          id: current.data.id,
          name: current.data.name,
          year: current.data.year
        });
        return acc;
      },
      onQuerySuccess(product) {
        assert(!!product, `no product in onQuerySuccess`);

        setProgress((n) => (n += 1));
        setMessages((m) => {
          m.push(`received product ${product.data.name}`);
          return m;
        });
      },
      onSuccess: (result) => {
        console.log(result);
        console.log(`Downloaded ${result?.length} products`);
      },
      onAbort: () => {
        setMessages(["We have aborted"]);
      },
      onError: (e) => {
        console.log("in global error handler");
        console.error(e.message);
      }
    }
  );

---
// Now we really need abort
<button onClick={() => abort()}>
  CANCEL
</button>
```

## Builder Syntax

Alternatively, `useFetch` can take a builder function that provides a `fetchClient` object with an `addFetchRequest` function.

```ts
const { state, abort, data } = useFetch(
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

### Accumulation

When executing multiple queries, think of `useFetch` like a [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce) or a [fold](https://wiki.haskell.org/Fold) function.


### Default accumulation

If the `initialState` field is an array, then `useFetch` will append the result of each async fetch onto the `initialState`.

```ts
const { data } = useFetch(
  [ '/add/1/1', '/add/2/2', '/add/3/3' ],
  {
    initialState: []
  },
);

if (typeof data !== 'undefined') {
  console.log(data); // [2, 4, 6];
}
```

### Custom accumlator function

- [codesandbox](https://codesandbox.io/s/react-abortable-fetch-forked-rs2y9?file=/src/App.tsx)

You can supply an `accumulator` function that executes each time a remote query resolves.  You can build up the final result in this accumulator function.


```ts
const { data } = useFetch(
  [ '/add/1/1', '/add/2/2', '/add/3/3' ],
  {
    initialState: 0,
    accumulator: (acc, current) => acc + current.answer,
  },
);

if( typeof data !== 'undefined') {
  console.log(`the grand total is ${data}`),  // the grand total is 12
}
```

WARNING! The operations should be [commutative](https://www.mathsisfun.com/associative-commutative-distributive.html) because there is no guarantee when the async functions will return. 


## Retries

By default `react-abortable-fetch` will retry any request that returns a non 2xx range response 3 times with a 500ms delay.

The `retryAttempts` and `retryDelay` properties can configure this differently:

```ts
const { data, error } = useFetch(`/flaky-connection`, {
  retryAttempts: 5,
  retryDelay: 1000,
});
```

## Timeout

By default each fetch request has a generous default `timeout` property of `180000ms` to complete before timing out.

## API

### *useFetch(string url or array of string urls, or [builder](#Builder-Syntax), [options])*


<details><summary><h3<b>Example</b></h3></summary>

```ts
const { state, abort, reset, run } = useFetch(
  [ '/add/1/1', '/add/2/2', '/add/3/3' ],
  {
    initialState: 0,
    accumulator: (acc, current) => acc + current.answer,
    retryAttempts: 5,
    retryDelay: 100,
    timeout: 500000,
    method: 'POST',
    fetchTye: 'jsonp',
    executeOnMount: false,
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
```

</details>

| Prop        | Description | Default
| ----------- | ----------- |-----------|
| initialState | The initial value.  Can be important for accumulation and multiple queries.  THe initial state can be built up or accumulated as each query resolves. | undefined
| accumulator | function that can be used to transform the result of every query.   | [default-accumulator.ts](./src/default-accumulator.ts)
| method | http verb, GET, POST, PUT or DELETE etc. | GET |
| executeOnMount | whether or not the remote fetch executes after the DOM paint event | a controversial `true` |
| fetchType | which fetch to call.  The default `fetch` will use [cross-fetch](https://www.npmjs.com/package/cross-fetch) or [fetch-jsonp](https://www.npmjs.com/package/fetch-jsonp). | fetch |
| retryAttempts | how many times a fetch operation will be retried | 3 |
| retryDelay | the time in `ms` between each retry in the event of a fail | 500 |
| timeout | The length of time each request is allowed to run without a response before aborting | 5000ms |
| onSuccess | callback that is called with the either the result of a single value or if running multiple queries then the accumulated result | no op
| onError | callback that is called with the error in the event of a failed query |
| onQuerySuccess | everytime a query resolves, this function is called with the result of the fetch query. | no op|
| onQueryError | handler for individual query errors | no op|

## Typescript

The `useFetch` function signature looks like this:

```ts
export function useFetch<R, T = undefined>(url: string, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = undefined>(urls: string[], options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = undefined>(
  fetchRequestInfo: FetchRequestInfo,
  options?: UseFetchOptions<R, T>,
): QueryResult<R>;
export function useFetch<R, T = undefined>(
  fetchRequestInfo: FetchRequestInfo[],
  options?: UseFetchOptions<R, T>,
): QueryResult<R>;
export function useFetch<R, T = undefined>(builder: Builder<R, T>, options?: UseFetchOptions<R, T>): QueryResult<R>;
export function useFetch<R, T = undefined>(
  builderOrRequestInfos: string | string[] | FetchRequestInfo | FetchRequestInfo[] | Builder<R, T>,
  options: UseFetchOptions<R, T> = {},
): QueryResult<R> {
```

- `A` is the type for the data that is returned from a fetcg request.  

- `R` is the type for the end result of a `useFetch` operation. `R` will default to `A` if it is not explicitly set.
  Consider the example below where the data returned from of an individual fetch is `{ answer: number }` but the end result of applying the accumlator function to all the requests is a `number` type.

  ```ts
  const { data } = useFetch<{ answer: number }, number>(
    ['http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3'],
    {
      initialState: 0,
      accumulator: (acc, current) => acc + current.answer,  // current is type { answer: number }
    }

    if ( data ) {
      console.log(typeof data); // number
    }
  ```

### Type inference

`useFetch` will infer the `A` type from the `initialState` field if this property has been set

```ts
const { data } = useFetch(
  ['http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3'],
  {
    initialState: 0, 
  }


  if ( data ) {
    console.log(typeof data); // number
  }
```

If `initialState` is an empty array then adding a simple type assertion will type the data type `A`

```ts
const { data } = useFetch(
  ['http://localhost:3000/add/1/1', 'http://localhost:3000/add/2/2', 'http://localhost:3000/add/3/3'],
  {
    initialState: [] as { answer: number }[], 
  }


  if ( data ) {
    for (const question of data) {  // data is typed as array of { answer: number }
      console.log(question.answer);
    }
  }
```


## TODO

- progress
- fetch client outside of react
- pagination
- load more
- graphql
- allow processing of results in order if required
- global configuration via context (still do not want to do this)