import { atoms, palette, responsiveStyle } from '@cutting/component-library';
import { style } from '@vanilla-extract/css';

export const ctaButton = style([
  {
    border: `2px solid ${palette.white}`,
    fontWeight: 'bold',
    ...responsiveStyle({
      mobile: {
        fontSize: '1.5rem',
      },
      tablet: {
        fontSize: '2.5rem',
        lineHeight: '3rem',
      },
    }),
  },
  atoms({
    display: 'inlineBlock',
    borderRadius: 'full',
    paddingY: 'medium',
    paddingX: {
      mobile: 'small',
      desktop: 'medium',
      wide: 'large',
    },
  }),
]);
