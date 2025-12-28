import Skeleton from 'react-loading-skeleton';

export function HomeSkeleton(): JSX.Element {
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
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        zIndex: 9999,
      }}
    >
      <div style={{ maxWidth: '900px', width: '100%', textAlign: 'center' }}>
        <Skeleton
          baseColor="#1a2332"
          highlightColor="#2a3442"
          height={60}
          count={2}
          style={{ marginBottom: '1.5rem' }}
        />
        <Skeleton
          baseColor="#1a2332"
          highlightColor="#2a3442"
          height={30}
          count={2}
          style={{ marginBottom: '2.5rem' }}
        />
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={50} width={200} borderRadius={8} />
      </div>
    </div>
  );
}
