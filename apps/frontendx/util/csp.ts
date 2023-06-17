import { createHash } from 'crypto';
import { CDN, CRM, ESM } from '../constants';

export const getHashOf = (text: string): string => {
  const hash = createHash('sha256');
  hash.update(text);
  return `'sha256-${hash.digest('base64')}'`;
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function createContentSecurityPolicy(_nonce: string): string {
  return [
    `base-uri 'self'`,
    `form-action 'self' ${CRM}`,
    `default-src 'self'`,
    // TODO: fix nonce business
    // `script-src 'self' ${
    //   isProduction ? `'nonce-${nonce}' ${CDN}` : " 'unsafe-inline' 'unsafe-eval'"
    // } https://www.googletagmanager.com https://www.google-analytics.com`,
    // `style-src 'self' https://fonts.googleapis.com https://fonts.googleapis.com ${
    //   isProduction ? `'nonce-${nonce}' ${CDN}` : " 'unsafe-inline'"
    // } data:`,
    `script-src 'self' ${CDN} 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com`,
    `style-src 'self' ${ESM} ${CDN} https://fonts.googleapis.com https://fonts.googleapis.com 'unsafe-inline' data:`,
    `img-src 'self' ${CDN} https://www.google-analytics.com https://assets.calendly.com data: blob:`,
    `font-src 'self' https://fonts.googleapis.com`,
    `frame-src 'self' https://www.googletagmanager.com https://calendly.com`,
    `media-src 'self' ${CDN} https://cdn.plyr.io`,
    `prefetch-src 'self' ${CDN}`,
    `connect-src 'self' ${CRM} ${CDN} https://cdn.plyr.io https://www.google-analytics.com`,
  ].join('; ');
}
