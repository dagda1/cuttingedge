import { getCookieConsentValue } from 'react-cookie-consent';

const isProduction = process.env.NODE_ENV === 'production';

export const pageview = (url: string): void => {
  if (!isProduction && getCookieConsentValue() !== 'true') {
    return;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (typeof (window as any).dataLayer !== 'undefined') {
    console.log(`logging page view ${url}`);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).dataLayer.push({
      event: 'pageview',
      page: url,
    });
  }
};
