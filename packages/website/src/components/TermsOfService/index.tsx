import React from 'react';
import { StaticLayout } from '../../layouts/StaticLayout';

const markdown = require('../../markdown/terms-of-service.md');

export const TermsOfService: React.FunctionComponent = () => (
  <StaticLayout heading="Terms of Service">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </StaticLayout>
);
