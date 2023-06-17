import '../styles/globals.css';
import '../css/prism.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components/Layouts/Layout';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'jarallax/dist/jarallax.css';
import type { GlobalState } from 'little-state-machine';
import { StateMachineProvider, createStore } from 'little-state-machine';
import type { FormValues } from '../types';
import CookieConsent, { getCookieConsentValue } from 'react-cookie-consent';
import { buttonWrapper, cookieContainer, cookieContent } from '../styles/globals.css';
import { useEffect } from 'react';
import Script from 'next/script';
import { GTM_ID } from '../constants';
import { useRouter } from 'next/router';
import { pageview } from '../util/gtm';

declare module 'little-state-machine' {
  interface GlobalState {
    healthcheck: FormValues;
  }
}

const intitalState: GlobalState = {
  healthcheck: {},
};

const isProduction = process.env.NODE_ENV === 'production';

createStore(intitalState, {
  name: 'state',
  middleWares: [],
});

function App({ Component, pageProps }: AppProps): JSX.Element {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);
    return () => {
      router.events.off('routeChangeComplete', pageview);
    };
  }, [router.events]);

  const grantConsent = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
        ad_storage: 'granted',
      });
    }
  };

  const revokeConsent = () => {
    if (!isProduction) {
      return;
    }

    if (typeof window.gtag !== 'undefined') {
      window.gtag('consent', 'update', {
        analytics_storage: 'denied',
        ad_storage: 'denied',
      });
    }
  };

  useEffect(() => {
    if (!isProduction) {
      return;
    }

    if (getCookieConsentValue() === 'true') {
      console.log('granting analytics');
      grantConsent();
      return;
    } else {
      console.log('revoking analytics');
      revokeConsent();
    }
  }, []);

  return (
    <>
      <StateMachineProvider>
        <ParallaxProvider>
          <Layout>
            <Component {...pageProps} />
            <CookieConsent
              location="bottom"
              buttonText="Accept"
              declineButtonText="Reject"
              enableDeclineButton
              expires={365}
              onAccept={grantConsent}
              onDecline={revokeConsent}
              containerClasses={cookieContainer}
              contentClasses={cookieContent}
              buttonWrapperClasses={buttonWrapper}
            >
              This website uses cookies for analytics.
            </CookieConsent>
          </Layout>
        </ParallaxProvider>
      </StateMachineProvider>
      {/* Google Tag Manager - Global base code */}
      {isProduction && (
        <>
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
            }}
          />
          {/* <Script
            id="zoho-script"
            async
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `var $zoho= $zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode:"f7a13f7a60b4e054e1677e19c48aacb2cf30ef500adc6b8ad8df46090c5cbc6d6a75cf27eb2889553692fd91bae654ac78c2f1a3e171bcbe56852aa72bf403e0", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript"; s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zoho.eu/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);d.write("<div id='zsiqwidget'></div>");`,
            }}
          /> */}
        </>
      )}
    </>
  );
}

export default App;
