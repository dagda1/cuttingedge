import { Alert } from '@cutting/component-library';
import { FullPageLayout } from '../../components/Layouts/FullPageLayout';

export default function ContactFormConfirmation(): JSX.Element {
  return (
    <FullPageLayout heading="Welcome to Frontend DX">
      <Alert type="success">
        <p>
          You have successfully subscribed to our organization. We have sent a confirmation link to your email address.
        </p>
        <p>
          Please confirm your subscription via the same to start receiving our latest newsletters and other updates.
        </p>
      </Alert>
    </FullPageLayout>
  );
}
