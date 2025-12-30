import { responsiveStyle, vars } from '@cutting/component-library';
import { keyframes, style } from '@vanilla-extract/css';

const fadeIn = keyframes({
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
});

export const home = style({
  fontFamily: "'Helvetica Now Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  animation: `${fadeIn} 0.5s ease-in`,
  ...responsiveStyle({
    mobile: {
      marginLeft: vars.space.medium,
      marginRight: vars.space.medium,
    },
    desktop: {
      marginLeft: 0,
      marginRight: 0,
    },
  }),
});

export const ctaButton = style({
  display: 'inline-block',
  padding: '1rem 2.5rem',
  fontSize: '1.125rem',
  fontWeight: 600,
  color: '#fff',
  background: '#3B82F6',
  borderRadius: '0.5rem',
  textDecoration: 'none',
  transition: 'background 0.2s',
  ':hover': {
    background: '#2563EB',
  },
});

export const sectionTitle = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '4rem',
  color: '#fff',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2rem',
    },
  },
});

export const servicesGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '2rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
    },
  },
});

export const serviceCard = style({
  padding: '2rem',
  background: '#1a2332',
  borderRadius: '0.5rem',
  border: '1px solid #2a3442',
});

export const serviceCardTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '1rem',
  color: '#fff',
});

export const serviceCardText = style({
  fontSize: '1.125rem',
  lineHeight: 1.6,
  color: '#A9ADC1',
});

export const ctaSection = style({
  background: '#0E151D',
  color: '#fff',
  textAlign: 'center',
});

export const ctaTitle = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: '1rem',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2rem',
    },
  },
});

export const ctaSubtitle = style({
  fontSize: '1.25rem',
  color: '#A9ADC1',
  marginBottom: '2.5rem',
});
