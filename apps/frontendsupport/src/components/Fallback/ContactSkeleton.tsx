import Skeleton from 'react-loading-skeleton';

export function ContactSkeleton(): JSX.Element {
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
        padding: '8rem 2rem 2rem',
        overflow: 'auto',
        zIndex: 9999,
      }}
    >
      <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={50} style={{ marginBottom: '1rem' }} />
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={30} style={{ marginBottom: '3rem' }} />
        <Skeleton
          baseColor="#1a2332"
          highlightColor="#2a3442"
          height={50}
          count={4}
          style={{ marginBottom: '1.5rem' }}
        />
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={50} width={150} borderRadius={8} />
      </div>
    </div>
  );
}
