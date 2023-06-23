import { isProduction } from '@cutting/util';
import { CDN } from '../constants';

export const getImageSrc = (src: string): string => (isProduction ? `${CDN}${src}` : src);
