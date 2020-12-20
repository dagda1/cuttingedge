import type { FC } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

import markdown from '../../markdown/privacy.md';

export const PrivacyPolicy: FC = () => (
  <ApplicationLayout heading="Privacy Policy">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </ApplicationLayout>
);

export default PrivacyPolicy;
