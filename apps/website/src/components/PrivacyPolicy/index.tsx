import { ApplicationLayout } from '../../layouts/ApplicationLayout';

import markdown from '../../markdown/privacy.md';

export function PrivacyPolicy(): JSX.Element {
  return (
    <ApplicationLayout heading="Privacy Policy">
      <div dangerouslySetInnerHTML={{ __html: markdown }} />
    </ApplicationLayout>
  );
}

export default PrivacyPolicy;
