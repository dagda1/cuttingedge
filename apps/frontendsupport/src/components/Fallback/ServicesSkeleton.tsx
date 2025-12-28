import Skeleton from 'react-loading-skeleton';

export function ServicesSkeleton(): JSX.Element {
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
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={50} style={{ marginBottom: '3rem' }} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          {[1, 2, 3].map((i) => (
            <div key={i}>
              <Skeleton baseColor="#1a2332" highlightColor="#2a3442" height={200} borderRadius={8} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
