import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import MDX from '@next/mdx';

const withMDX = MDX({
  extension: /\.mdx?$/
});

const CDN = 'https://d966n3f4vz4e1.cloudfront.net';
const CRM = 'https://crm.zoho.eu/crm/WebToLeadForm';
const NEWSLETTER = 'https://maillist-manage.eu/weboptin.zc';
const TRACKING = 'https://salesiq.zoho.eu';
const ESM = 'https://esm.sh';

const isProduction = process.env.NODE_ENV === 'production';

function createContentSecurityPolicy() {
  return [
    `base-uri 'self' ${CDN} ${ESM}`,
    `default-src 'none'`,
    `script-src 'self' ${CDN} ${TRACKING} 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com`,
    `style-src 'self' ${CDN} ${ESM} https://fonts.googleapis.com https://fonts.googleapis.com 'unsafe-inline' data:`,
    `img-src 'self' ${CDN} https://www.google-analytics.com https://assets.calendly.com data: blob:`,
    `font-src 'self' https://fonts.googleapis.com`,
    `frame-src 'self' https://www.googletagmanager.com https://calendly.com`,
    `media-src 'self' ${CDN} https://cdn.plyr.io`,
    `prefetch-src 'self' ${CDN} ${ESM}`,
    `connect-src 'self' ${CRM} ${NEWSLETTER} ${CDN} ${TRACKING} ${ESM} https://cdn.plyr.io https://www.google-analytics.com`,
    `frame-ancestors 'self' https://www.googletagmanager.com`,
    `form-action 'self' ${NEWSLETTER} ${CRM} ${CDN};`
  ].join(';');
}

const securityHeaders = [
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'Content-Security-Policy',
    value: createContentSecurityPolicy()
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin'
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY'
  }
];

const withVanillaExtract = createVanillaExtractPlugin();

/** @type {import('next').NextConfig}*/
const nextConfig = {
  async headers() {
    return isProduction
      ? [
          {
            source: '/(.*)',
            headers: securityHeaders
          }
        ]
      : [];
  },
  images: {
    minimumCacheTTL: 31536000
  },
  assetPrefix: isProduction ? CDN : undefined,
  poweredByHeader: false,
  compress: false
};

export default withVanillaExtract(withMDX(nextConfig));
