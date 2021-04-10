import React, { useState } from 'react';
import { useSimpleQuery } from '../src';
import cs from 'classnames';
import './App.css';

export const App: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const processResult = ({ delay }) => {
    setProgress((n) => (n += 1));
    setMessages((m) => {
      m.push(`received message ${delay}`);
      return m;
    });
  };

  // one hit wonder
  // const { run, state, abort, reset } = useSimpleQuery(`https://slowmo.glitch.me/10000`);

  const { run, state, abort, reset } = useSimpleQuery(
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
      executeOnMount: false,
      onQuerySuccess: processResult,
      onSuccess: (d) => {
        console.log(d);
        console.log(`We did it`);
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

  // const { run, state, abort, reset } = useSimpleQuery(
  //   (fetchClient) => {
  //     for (const i of [...Array.from({ length: 10 }).keys()]) {
  //       fetchClient.addFetchRequest(`https://slowmo.glitch.me/${(i + 1) * 100}`, {
  //         onQuerySuccess: processResult,
  //         onQueryError(e) {
  //           console.log(`scoped error`);
  //           console.error(e);
  //         },
  //       });
  //     }

  //     return fetchClient;
  //   },
  //   {
  //     executeOnMount: false,
  //     initialData: [],
  //     onSuccess: () => {
  //       console.log(`We did it`);
  //     },
  //     onAbort: () => {
  //       setMessages(['We have aborted']);
  //     },
  //     onError: (e) => {
  //       console.log('in global error handler');
  //       console.error(e.message);
  //     },
  //   },
  // );

  return (
    <div className="container">
      <div>
        <h1>use-simple-query</h1>
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
            DO IT
          </button>
          <button className="btn-danger" disabled={state !== 'LOADING'} onClick={() => abort()}>
            CANCEL
          </button>
          <button
            className="btn-secondary"
            disabled={['READY', 'LOADING'].includes(state as MultiQueryStates)}
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
