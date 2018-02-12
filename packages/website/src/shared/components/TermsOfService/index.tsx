import * as React from 'react';
import { pageMaker } from '../PageMaker';

const markdown = require('../../../markdown/terms-of-service.md');

export const TermsOfService: React.StatelessComponent = () => (
  <>
    <div>
      <h1>Terms Of Service</h1>
    </div>
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </>
);

export default pageMaker({ Comp: TermsOfService });
