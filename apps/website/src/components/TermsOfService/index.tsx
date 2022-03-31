import { ApplicationLayout } from '../../layouts/ApplicationLayout';

import markdown from '../../markdown/terms-of-service.md';

export function TermsOfService(): JSX.Element {
  return (
    <ApplicationLayout heading="Terms of Service">
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </ApplicationLayout>
  );
}

export default TermsOfService;
