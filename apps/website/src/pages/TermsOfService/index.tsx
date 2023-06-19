import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import Markdown from '~/markdown/terms-of-service.mdx';

export function TermsOfService(): JSX.Element {
  return (
    <ApplicationLayout heading="Terms of Service">
      <Markdown />
    </ApplicationLayout>
  );
}

export default TermsOfService;
