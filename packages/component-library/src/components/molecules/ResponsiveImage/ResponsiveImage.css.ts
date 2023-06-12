import { createVar, style } from '@vanilla-extract/css';
import { responsiveStyle } from '~/style';

export const mobileWidth = createVar();
export const mobileHeight = createVar();

export const tabletWidth = createVar();
export const tabletHeight = createVar();

export const imageDimensions = style({
  ...responsiveStyle({
    mobile: {
      width: mobileWidth,
      height: mobileHeight,
    },
    tablet: {
      width: tabletWidth,
      height: tabletHeight,
    },
  }),
});
