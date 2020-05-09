import * as React from 'react';
import { useCancellable, FetchStates } from '../src/useCancellable';

require('./App.module.scss');

const makeFetchRequest = (fetchDelay: number, name: string) => {
  return fetch(`https://slowmo.glitch.me/${fetchDelay}`)
    .then((r) => r.json())
    .then((response) => {
      console.log(`call ${name} completed successly with response ${JSON.stringify(response)}`);

      return response;
    })
    .catch((err) => {
      console.error('Error in fetching!', err);
    });
};

const delay = 1000;

export const App: React.FC = () => {
  const { run, cancel, state } = useCancellable(function* () {
    yield makeFetchRequest(delay, 'one');
    yield makeFetchRequest(delay, 'two');
    yield makeFetchRequest(delay, 'three');
    yield makeFetchRequest(delay, 'four');
    yield makeFetchRequest(delay, 'five');
    yield makeFetchRequest(delay, 'six');
    yield makeFetchRequest(delay, 'seven');
  });

  console.log(state);
  return (
    <div id="app">
      <div className="row flex-center">
        <div className="col-12 col">
          <h1>generator shenanigans</h1>
          <div>
            <div>
              <div className="form-group">
                <label htmlFor="delay">
                  <small>API response delay(ms)</small>
                </label>
                <input id="delay" type="number" placeholder="Fetch delay" step="500" min="0" max="60000" />
              </div>
            </div>
            <p>
              <small>
                Fetch request status:
                <b>
                  <span id="fetch-status" className="text-warning">
                    Idle
                  </span>
                </b>
              </small>
            </p>
            <div className="progress margin-bottom">
              <div id="progress" className="bar secondary striped w-0 text-primary">
                0%
              </div>
            </div>
          </div>

          <div>
            <button onClick={run} disabled={state === FetchStates.Loading} className="btn-secondary btn-small">
              DO SHENANIGANS
            </button>
            <button onClick={() => cancel.resolve('cancelling mofo')} className="btn-danger btn-small">
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
