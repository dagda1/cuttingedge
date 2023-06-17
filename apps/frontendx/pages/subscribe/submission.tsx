import { Alert } from '@cutting/component-library';
import { FullPageLayout } from '../../components/Layouts/FullPageLayout';
import { Text } from '@cutting/component-library';

export default function ContactFormConfirmation(): JSX.Element {
  return (
    <FullPageLayout heading="Welcome to Frontend DX">
      <Alert type="success">
        <Text component="p">
          You have successfully subscribed to our organization. We have sent a confirmation link to your email address.
        </Text>
        <Text component="p">
          Please confirm your subscription via the same to start receiving our latest newsletters and other updates.
        </Text>
      </Alert>
    </FullPageLayout>
  );
}
