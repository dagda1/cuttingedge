import React from 'react';
import { StaticLayout } from '../../layouts/StaticLayout';

const markdown = require('../../markdown/privacy.md');

export const PrivacyPolicy: React.SFC = () => (
  <StaticLayout heading="Privacy Policy">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </StaticLayout>
);
