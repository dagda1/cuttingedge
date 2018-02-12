import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { StaticLayout } from '../../../layouts/StaticLayout';

export const Home: React.StatelessComponent = () => <StaticLayout heading="Home" />;

export default pageMaker({ Comp: Home });
