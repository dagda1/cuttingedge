import { ApplicationLayout } from '~/layouts/ApplicationLayout';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import Markdown from '~/markdown/terms-of-service.mdx';

export function TermsOfService(): JSX.Element {
  return (
    <ApplicationLayout heading="Terms of Service">
      <Markdown />
    </ApplicationLayout>
  );
}

export default TermsOfService;
