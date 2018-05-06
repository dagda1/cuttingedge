import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { StaticLayout } from '../../layouts/StaticLayout';

const markdown = require('../../markdown/privacy.md');

export const PrivacyPolicy: React.SFC = () => (
  <StaticLayout heading="Privacy Policy">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </StaticLayout>
);

export default pageMaker({ Comp: PrivacyPolicy });
