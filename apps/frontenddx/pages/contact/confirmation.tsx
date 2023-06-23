import { Alert } from '@cutting/component-library';
import { FullPageLayout } from '../../components/Layouts/FullPageLayout';

export default function ContactFormConfirmation(): JSX.Element {
  return (
    <FullPageLayout heading="Your message has been sent!">
      <Alert type="success">Thank you for your enquiry, we will reply to you very soon.</Alert>
    </FullPageLayout>
  );
}
