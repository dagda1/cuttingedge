import { Consult } from '../components/Consult/Consult';
import { FullPageLayout } from '../components/Layouts/FullPageLayout';

function ConsultService(): JSX.Element {
  return (
    <FullPageLayout>
      <Consult />
    </FullPageLayout>
  );
}

export default ConsultService;
