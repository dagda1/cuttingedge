import React from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

const markdown = require('../../markdown/terms-of-service.md');

export const TermsOfService: React.FC = () => (
  <ApplicationLayout heading="Terms of Service">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </ApplicationLayout>
);
