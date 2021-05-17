import type { FC } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

import markdown from '../../markdown/terms-of-service.md';

export const TermsOfService: FC = () => (
  <ApplicationLayout heading="Terms of Service">
    <div dangerouslySetInnerHTML={{ __html: markdown }} />
  </ApplicationLayout>
);

export default TermsOfService;
