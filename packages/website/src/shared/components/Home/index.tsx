import * as React from 'react';
import { pageMaker } from '../PageMaker';

export const Home: React.StatelessComponent = () => (
  <div>
    <h1>Home</h1>
  </div>
);

export default pageMaker({ Comp: Home });
