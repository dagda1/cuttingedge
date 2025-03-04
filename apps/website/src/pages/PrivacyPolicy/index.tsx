import { ApplicationLayout } from '~/layouts/ApplicationLayout';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Markdown from '~/markdown/privacy.mdx';

export function PrivacyPolicy(): JSX.Element {
  return (
    <ApplicationLayout heading="Privacy Policy">
      <Markdown />
    </ApplicationLayout>
  );
}

export default PrivacyPolicy;
