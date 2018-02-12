import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { StaticLayout } from '../../../layouts/StaticLayout';

const markdown = require('../../../markdown/terms-of-service.md');

export const TermsOfService: React.StatelessComponent = () => (
  <StaticLayout heading="Terms of Service">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </StaticLayout>
);

export default pageMaker({ Comp: TermsOfService });
