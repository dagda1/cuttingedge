/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useCallback } from 'react';
import { useAbortable } from '../src/useAbortable';
import { AbortableStates, Fn } from '../src/types';
import cs from 'classnames';
import { FormInput, Button, ButtonStyle } from '@cutting/component-library';

import './App.css';

type Expected = { message: string };

const makeFetchRequest = (fetchDelay: number, name: string): Promise<Expected> => {
  return fetch(`https://slowmo.glitch.me/${fetchDelay}`)
    .then((r) => r.json())
    .then((r) => ({ message: `received ${name}` }));
};

export const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [counter, setCounter] = useState(0);
  const [delay, setDelay] = useState(700);
  const onNext = useCallback((e: Expected) => {
    setCounter((n) => (n += 1));
    setMessages((m) => {
      m.push(`received ${e.message}`);
      return m;
    });
  }, []);

  const onAbort = useCallback(() => {
    setMessages(['We have aborted', ...messages]);
  }, [messages]);

  const onError = useCallback((err: any) => {
    setMessages(['oh no we received an error', JSON.stringify(err)]);
  }, []);

  const { run, state, abortController, reset, ...rest } = useAbortable<Expected, void, Expected>(
    function* () {
      yield makeFetchRequest(delay, 'one');
      yield makeFetchRequest(delay, 'two');
      yield makeFetchRequest(delay, 'three');
      yield makeFetchRequest(delay, 'four');
      yield makeFetchRequest(delay, 'five');
      yield makeFetchRequest(delay, 'six');
      yield makeFetchRequest(delay, 'seven');
      yield makeFetchRequest(delay, 'eight');
      yield makeFetchRequest(delay, 'nine');
      yield makeFetchRequest(delay, 'ten');
    },
    { onAbort, onNext, onError },
  );

  return (
    <div id="app">
      <div className="row flex-center">
        <div className="col-12 col">
          <h1>generator shenanigans</h1>
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
              <div id="progress" className={cs('bar secondary striped text-primary', `w-${counter * 10}`)}>
                {counter * 10}%
              </div>
            </div>
          </div>

          <div className="button__container">
            <Button
              buttonStyle={ButtonStyle.Primary}
              onClick={() => {
                if (messages.length > 0) {
                  setMessages([]);
                  setCounter(0);
                }
                run();
              }}
              disabled={state === AbortableStates.Loading}
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
                setTimeout(() => {
                  reset();
                  setMessages([]);
                  setCounter(0);
                }, 500);
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
    </div>
  );
};
