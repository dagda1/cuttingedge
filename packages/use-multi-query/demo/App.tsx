import React, { useCallback, useState } from 'react';
import { useMultiQuery } from '../src';
import cs from 'classnames';
import './App.css';
import { range } from '@cutting/util';
import { MultiQueryStates } from '../src/types';

type Expected = { message: string };

export const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [delay, setDelay] = useState(100);

  const processResult = useCallback((e: Expected) => {
    setProgress((n) => (n += 1));
    setMessages((m) => {
      m.push(`received ${e.message}`);
      return m;
    });
  }, []);

  const { run, state, abort, reset } = useMultiQuery<Expected>(
    (fetchClient) => {
      for (const i of range(0, 9)) {
        fetchClient.addFetchRequest(`https://slowmo.glitch.me/${delay}`, {
          onSuccess: () => {
            processResult({ message: `we have received ${i}` });
          },
          onError(e) {
            console.log(`scoped error`);
            console.error(e);
          },
        });
      }

      return fetchClient;
    },
    {
      initialData: [],
      onSuccess: (d) => {
        console.log(`global success`);
        console.log({ d });
      },
      onAbort: (e) => {
        console.log(e);
        setMessages(['We have aborted']);
      },
      onError: (e) => {
        console.log('in global error handler');
        console.error(e);
        console.log(e.message);
      },
    },
  );

  return (
    <div className="container">
      <div>
        <h1>generator shenanigans</h1>
        <p>Open the network tab to check the requests are getting cancelled</p>
        <div>
          <div>
            <div className="form-group">
              <label htmlFor="delay">
                <small>API response delay(ms)</small>
              </label>
              <input
                id="delay"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDelay(Number(e.target.value))}
                placeholder="Fetch Delay"
                type="number"
                step="300"
                min="0"
                max="60000"
                value={delay}
              />
            </div>
          </div>
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
            disabled={state !== 'IDLE'}
            onClick={() => {
              setMessages([]);
              setProgress(0);
              run();
            }}
          >
            DO SHENANIGANS
          </button>
          <button className="btn-danger" disabled={state !== 'LOADING'} onClick={() => abort()}>
            CANCEL
          </button>
          <button
            className="btn-secondary"
            disabled={['IDLE', 'LOADING'].includes(state as MultiQueryStates)}
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
