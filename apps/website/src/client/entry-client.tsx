import { createRoot, hydrateRoot } from "react-dom/client";
import { App } from '../containers/App';
import { assert } from 'assert-ts'

const container = document.getElementById("root");

assert(!!container, `no container at #root`)

if (import.meta.hot || !container?.innerText) {
  const root = createRoot(container);
  root.render(<App />);
} else {
  hydrateRoot(container!, <App />);
}