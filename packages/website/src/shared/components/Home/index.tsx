import * as React from 'react';

export interface HomeProps {}

export const Home: React.StatelessComponent<HomeProps> = () => (
  <div>
    <h1>We are SSR Rendering</h1>
  </div>
);
