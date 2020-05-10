/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';
import { useAbortable } from '../src/useAbortable';
import { AbortableStates, Fn } from '../src/types';
import cs from 'classnames';
import { FormInput, Button, ButtonStyle } from '@cutting/component-library';

import './App.css';
import { AbortError } from '../src/AbortError';

type Expected = { message: string };

const requests = Array.from({ length: 10 }, (_, i) => i + 1);

const makeFetchRequest = (fetchDelay: number, name: string): Promise<Expected> => {
  return fetch(`https://slowmo.glitch.me/${fetchDelay}`)
    .then((r) => r.json())
    .then((r) => ({ message: `received ${name}` }));
};

export const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [delay, setDelay] = useState(700);

  const processResult = useCallback((e: Expected) => {
    setProgress((n) => (n += 1));
    setMessages((m) => {
      m.push(`received ${e.message}`);
      return m;
    });
  }, []);

  const onAbort = useCallback(() => {
    setMessages(['We have aborted', ...messages]);
  }, [messages]);

  const { run, state, abortController, reset, counter, ...rest } = useAbortable<Expected, void, Expected>(
    function* () {
      const outsideLoop = yield makeFetchRequest(delay, 'outside');

      processResult(outsideLoop);

      try {
        for (const request of requests) {
          const result = yield makeFetchRequest(delay, `${request.toString()}`);

          processResult(result);
        }
      } catch (err) {
        if (err instanceof AbortError) {
          setMessages(['Aborted']);
          return;
        }
        setMessages(['oh no we received an error', err.message]);
      }
    },
    { onAbort },
  );

  console.log({ counter });

  return (
    <div className="container">
      <div>
        <h1>generator shenanigans</h1>
        <p>Open the network tab to check the requests are getting cancelled</p>
        <div>
          <div>
            <div className="form-group">
              <FormInput
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDelay(Number(e.target.value))}
                label="API response delay(ms)"
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
                {state.toUpperCase()}
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
          <Button
            buttonStyle={ButtonStyle.Primary}
            disabled={state !== AbortableStates.Idle}
            onClick={() => {
              setMessages([]);
              setProgress(0);
              run();
            }}
          >
            DO SHENANIGANS
          </Button>
          <Button
            disabled={state !== AbortableStates.Loading}
            onClick={() => abortController.abort()}
            buttonStyle={ButtonStyle.Secondary}
          >
            CANCEL
          </Button>
          <Button
            disabled={state !== AbortableStates.Aborted}
            onClick={() => {
              reset();
              setMessages([]);
              setProgress(0);
            }}
            buttonStyle={ButtonStyle.Inverse}
          >
            Reset
          </Button>
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
