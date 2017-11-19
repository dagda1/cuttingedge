import * as React from 'react';
import { App } from '../components/App/App';
const pageWithStyles = require('../components/pageWithStyles/pageWithStyles').pageWithStyles;

console.log(pageWithStyles);

export interface IndexProps {}

const Index: React.StatelessComponent<IndexProps> = () => <App />;

export default pageWithStyles(Index);
