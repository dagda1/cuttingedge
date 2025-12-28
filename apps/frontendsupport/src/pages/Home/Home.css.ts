import { style } from '@vanilla-extract/css';

export const home = style({
  minHeight: '100vh',
  fontFamily: "'Helvetica Now Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
});

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
});

export const hero = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  background: '#0E151D',
  color: '#fff',
});

export const heroTitle = style({
  fontSize: '3.5rem',
  fontWeight: 700,
  lineHeight: 1.2,
  marginBottom: '1.5rem',
  maxWidth: '900px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '2.5rem',
    },
  },
});

export const heroSubtitle = style({
  fontSize: '1.5rem',
  lineHeight: 1.6,
  color: '#A9ADC1',
  marginBottom: '2.5rem',
  maxWidth: '800px',
  marginLeft: 'auto',
  marginRight: 'auto',
  '@media': {
    '(max-width: 768px)': {
      fontSize: '1.25rem',
    },
  },
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

export const services = style({
  padding: '6rem 0',
  background: '#fff',
});

export const sectionTitle = style({
  fontSize: '2.5rem',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '4rem',
  color: '#1F2937',
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
});

export const serviceCardTitle = style({
  fontSize: '1.5rem',
  fontWeight: 600,
  marginBottom: '1rem',
  color: '#1F2937',
});

export const serviceCardText = style({
  fontSize: '1.125rem',
  lineHeight: 1.6,
  color: '#6B7280',
});

export const ctaSection = style({
  padding: '6rem 0',
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
