import './global.css';

import { supportTheme } from '@cutting/component-library';
import { FormContextProvider } from '@cutting/react-hook-form-components';
import cs from 'classnames';
import { lazy, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Fallback } from './components/Fallback/Fallback';
import { Header } from './components/Header/Header';
import { contactFormProps } from './constants';
import * as styles from './root.css';

const Home = lazy(() => import('./routes/_index'));
const About = lazy(() => import('./routes/about'));
const Contact = lazy(() => import('./routes/contact'));
const EmailConfirmation = lazy(() => import('./routes/email.confirmation'));
const Posts = lazy(() => import('./routes/posts'));
const PostsIndex = lazy(() => import('./routes/posts._index'));
const PostSlug = lazy(() => import('./routes/posts.$slug'));
const Services = lazy(() => import('./routes/services'));
const ServicesConsultancy = lazy(() => import('./routes/services.consultancy'));
const ServicesCritical = lazy(() => import('./routes/services.critical'));
const ServicesHome = lazy(() => import('./routes/services.home'));
const ServicesMentoring = lazy(() => import('./routes/services.mentoring'));
const ServicesRescue = lazy(() => import('./routes/services.rescue'));
const Testimonials = lazy(() => import('./routes/testimonials'));

export function MainRoutes(): React.JSX.Element {
  return (
    <div className={cs(supportTheme, styles.body)}>
      <div id="portal" />
      <Header />
      <main>
        <FormContextProvider {...contactFormProps}>
          <Routes>
            <Route
              path="/"
              element={
                <Suspense fallback={<Fallback />}>
                  <Home />
                </Suspense>
              }
            />
            <Route
              path="/about"
              element={
                <Suspense fallback={<Fallback />}>
                  <About />
                </Suspense>
              }
            />
            <Route
              path="/contact"
              element={
                <Suspense fallback={<Fallback />}>
                  <Contact />
                </Suspense>
              }
            />
            <Route
              path="/email/confirmation"
              element={
                <Suspense fallback={<Fallback />}>
                  <EmailConfirmation />
                </Suspense>
              }
            />
            <Route
              path="/posts"
              element={
                <Suspense fallback={<Fallback />}>
                  <Posts />
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback={<Fallback />}>
                    <PostsIndex />
                  </Suspense>
                }
              />
              <Route
                path=":slug"
                element={
                  <Suspense fallback={<Fallback />}>
                    <PostSlug />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/services"
              element={
                <Suspense fallback={<Fallback />}>
                  <Services />
                </Suspense>
              }
            >
              <Route
                index
                element={
                  <Suspense fallback={<Fallback />}>
                    <ServicesHome />
                  </Suspense>
                }
              />
              <Route
                path="consultancy"
                element={
                  <Suspense fallback={<Fallback />}>
                    <ServicesConsultancy />
                  </Suspense>
                }
              />
              <Route
                path="critical"
                element={
                  <Suspense fallback={<Fallback />}>
                    <ServicesCritical />
                  </Suspense>
                }
              />
              <Route
                path="mentoring"
                element={
                  <Suspense fallback={<Fallback />}>
                    <ServicesMentoring />
                  </Suspense>
                }
              />
              <Route
                path="rescue"
                element={
                  <Suspense fallback={<Fallback />}>
                    <ServicesRescue />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/testimonials"
              element={
                <Suspense fallback={<Fallback />}>
                  <Testimonials />
                </Suspense>
              }
            />
          </Routes>
        </FormContextProvider>
      </main>
    </div>
  );
}

export function App(): React.JSX.Element {
  return (
    <StrictMode>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </StrictMode>
  );
}
