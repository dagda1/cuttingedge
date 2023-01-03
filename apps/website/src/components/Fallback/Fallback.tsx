export function Fallback(): JSX.Element {
  return (
    <div
      style={{
        background: '#000000',
        color: '#ffffff',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '1000%',
      }}
    >
      loading....
    </div>
  );
}
