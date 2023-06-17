import { Call } from '../components/Call/Call';
import { useRouter } from 'next/router';
import type { CallType } from '../components/Call/types';

export default function BookACall(): JSX.Element {
  const router = useRouter();

  const { calltype } = router.query;

  return <Call callType={calltype as CallType} />;
}
