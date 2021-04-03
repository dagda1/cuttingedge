import React, { useState, useCallback, useMemo } from 'react';
import { useAbort } from '../src';
import cs from 'classnames';
import './App.css';
import { AbortError } from '../src/AbortError';
import { range } from '@cutting/util';
import { FetchRequest, FetchJob } from '../src/types';
import { Runnable } from '../src/types';
import { v4 } from 'uuid';

type Expected = { message: string };

const requests = Array.from({ length: 10 }, (_, i) => i + 1);

const makeFetchRequest = (fetchDelay: number, name: string): FetchRequest<Expected> => ({
  request: `https://slowmo.glitch.me/${fetchDelay}`,
  onSuccess: () => console.log({ message: `received ${name}` }),
});

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

  const onAbort = useCallback(() => {
    setMessages(['We have aborted']);
  }, []);

  // function* generator() {
  //   try {
  //     for (const request of requests) {
  //       const result = yield makeFetchRequest(delay, `${request.toString()}`);

  //       processResult(result);
  //     }
  //   } catch (err) {
  //     if (err instanceof AbortError) {
  //       setMessages(['We have Aborted']);
  //       return;
  //     }
  //     setMessages(['oh no we received an error', err.message]);
  //   }
  // }

  const { run, state, abortController, reset } = useAbort<Expected>(
    (fetchClient) => {
      for (const i of range(0, 10)) {
        fetchClient.addFetchRequest(`https://slowmo.glitch.me/${delay}`, {
          onSuccess: (d) => console.log(`received number ${i} with ${JSON.stringify(d)}`),
          onAbort: () => console.log(`aborted on ${i}`),
        });
      }

      return fetchClient;
    },
    {
      onSuccess: (d) => console.log(`global success with ${d}`),
      onAbort: () => console.log('global abort handler'),
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
          <button className="btn-danger" disabled={state !== 'LOADING'} onClick={() => abortController.abort()}>
            CANCEL
          </button>
          <button
            className="btn-secondary"
            disabled={['IDLE', 'LOADING'].includes(state as AbortableStates)}
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
