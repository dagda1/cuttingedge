import * as React from 'react';
import { App } from '../components/App/App';
import { pageWithStyles } from '../components/pageWithStyles/pageWithStyles';

export interface IndexProps {}

const Index: React.StatelessComponent<IndexProps> = () => <App />;

export default pageWithStyles(Index);
