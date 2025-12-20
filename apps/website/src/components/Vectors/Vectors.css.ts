import { style } from '@vanilla-extract/css';

export const canvasContainer = style({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const canvas = style({
  display: 'block',
  outline: 'none',
});

export const infoPanel = style({
  width: '320px',
  padding: '1.5rem',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  color: '#fff',
  overflowY: 'auto',
  fontFamily: 'system-ui, -apple-system, sans-serif',
});

export const section = style({
  marginBottom: '1.5rem',
});

export const angleDisplay = style({
  fontSize: '3rem',
  fontWeight: 'bold',
  textAlign: 'center',
  color: '#fff',
  marginBottom: '0.5rem',
});

export const sectionTitle = style({
  fontSize: '0.875rem',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
  color: '#aaa',
  marginBottom: '0.5rem',
  margin: 0,
});

export const vectorInfo = style({
  fontSize: '1rem',
  marginBottom: '0.25rem',
  fontFamily: 'monospace',
});

export const formula = style({
  fontSize: '1rem',
  marginBottom: '0.25rem',
  fontFamily: 'monospace',
});

export const vectorA = style({
  color: '#ff0000',
  fontWeight: 'bold',
  fontStyle: 'italic',
});

export const vectorB = style({
  color: '#4da6ff',
  fontWeight: 'bold',
  fontStyle: 'italic',
});

export const vectorProj = style({
  color: '#00ff00',
  fontWeight: 'bold',
  fontStyle: 'italic',
});

export const legend = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
});

export const legendItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  fontSize: '0.875rem',
});

const colorDot = style({
  width: '12px',
  height: '12px',
  borderRadius: '50%',
  display: 'inline-block',
});

export const colorDotA = style([colorDot, { backgroundColor: '#ff0000' }]);

export const colorDotB = style([colorDot, { backgroundColor: '#4da6ff' }]);

export const colorDotProj = style([colorDot, { backgroundColor: '#00ff00' }]);

export const colorDotPerp = style([colorDot, { backgroundColor: '#ffff00' }]);
