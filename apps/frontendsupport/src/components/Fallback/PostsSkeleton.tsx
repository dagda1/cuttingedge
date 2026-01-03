import { range } from '@cutting/util';
import Skeleton from 'react-loading-skeleton';

export function PostsSkeleton(): JSX.Element {
  return (
    <div
      style={{
        background: '#0E151D',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        padding: '6rem 2rem',
        overflow: 'auto',
        zIndex: 9999,
      }}
    >
      <div style={{ maxWidth: '882px', margin: '0 auto' }}>
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={43} style={{ marginBottom: '1rem' }} />
        {[...range(5)].map((i) => (
          <div key={i} style={{ marginTop: '1.5rem' }}>
            <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={105} style={{ marginBottom: '0.5rem' }} />
          </div>
        ))}
      </div>
    </div>
  );
}
