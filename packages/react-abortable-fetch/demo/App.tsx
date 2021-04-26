import React, { useState } from 'react';
import { useFetch } from '../src';
import cs from 'classnames';
import './App.css';
import { FetchStates } from '../src/types';
import { assert } from 'assert-ts';

interface Product {
  data: {
    id: string;
    name: string;
    year: number;
    color: string;
    pantone_value: string;
    support: {
      url: string;
      text: string;
    };
  };
}

type Result = Pick<Product['data'], 'id' | 'name' | 'year'>;

export const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // simple
  // const { run, state, abort, reset } = useFetch(`https://slowmo.glitch.me/10000`);
  const { run, state, abort, reset } = useFetch<Result[], Product>(
    [
      'https://reqres.in/api/products/1?delay=1',
      'https://reqres.in/api/products/2?delay=1',
      'https://reqres.in/api/products/3?delay=1',
      'https://reqres.in/api/products/4?delay=1',
      'https://reqres.in/api/products/5?delay=1',
      'https://reqres.in/api/products/6?delay=1',
      'https://reqres.in/api/products/7?delay=1',
      'https://reqres.in/api/products/8?delay=1',
      'https://reqres.in/api/products/9?delay=1',
      'https://reqres.in/api/products/10?delay=1',
    ],
    {
      initialState: [],
      executeOnMount: false,
      accumulator(acc, current) {
        acc.push({ id: current.data.id, name: current.data.name, year: current.data.year });
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
        setMessages(['We have aborted']);
      },
      onError: (e) => {
        console.log('in global error handler');
        console.error(e.message);
      },
    },
  );

  return (
    <div className="container">
      <div>
        <h1>Multi request fetch with abort (and much more)</h1>
        <h2>
          Checkout the{' '}
          <a
            href="https://github.com/dagda1/cuttingedge/tree/main/packages/react-abortable-fetch"
            target="_blank"
            rel="noreferrer"
          >
            repo
          </a>
          .
        </h2>
        <p>Open the network tab and press cancel to check the requests are getting cancelled</p>
        <div>
          <p>
            Fetch request status:
            <strong>
              <span id="fetch-status" className="text-warning">
                {(state as string).toUpperCase()}
              </span>
            </strong>
          </p>
          <div className="progress margin-bottom">
            <div id="progress" className={cs('bar secondary striped text-primary', `w-${progress * 10}`)}>
              {progress * 10}%
            </div>
          </div>
        </div>

        <div className="button__container">
          <button
            className="btn-primary"
            disabled={state !== 'READY'}
            onClick={() => {
              setMessages([]);
              setProgress(0);
              run();
            }}
          >
            START
          </button>
          <button className="btn-danger" disabled={state !== 'LOADING'} onClick={() => abort()}>
            CANCEL
          </button>
          <button
            className="btn-secondary"
            disabled={['READY', 'LOADING'].includes(state as FetchStates)}
            onClick={() => {
              reset();
              setMessages([]);
              setProgress(0);
            }}
          >
            Reset
          </button>
        </div>
        <ul>
          {messages.map((m, i) => (
            <li key={i}>
              <strong>{m}</strong>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
