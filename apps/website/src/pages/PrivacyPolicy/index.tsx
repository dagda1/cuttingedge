import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import Markdown from '~/markdown/privacy.mdx';

export function PrivacyPolicy(): JSX.Element {
  return (
    <ApplicationLayout heading="Privacy Policy">
      <Markdown />
    </ApplicationLayout>
  );
}

export default PrivacyPolicy;
