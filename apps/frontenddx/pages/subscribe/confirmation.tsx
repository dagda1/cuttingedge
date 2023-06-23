import { Alert } from '@cutting/component-library';
import { FullPageLayout } from '../../components/Layouts/FullPageLayout';

export default function SubscriptionConfirmation(): JSX.Element {
  return (
    <FullPageLayout heading="Welcome aboard!">
      <Alert type="success">You have been subscribed!</Alert>
    </FullPageLayout>
  );
}
