import Skeleton from 'react-loading-skeleton';

export function AboutSkeleton(): JSX.Element {
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
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={50} style={{ marginBottom: '2rem' }} />
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={20} count={5} style={{ marginBottom: '1rem' }} />
      </div>
    </div>
  );
}
