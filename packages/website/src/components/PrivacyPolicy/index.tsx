import React from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

const markdown = require('../../markdown/privacy.md');

export const PrivacyPolicy: React.FC = () => (
  <ApplicationLayout heading="Privacy Policy">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </ApplicationLayout>
);
