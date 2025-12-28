import './global.css';
import 'react-loading-skeleton/dist/skeleton.css';

import { ApplicationLayout } from '@cutting/component-library';
import { FormContextProvider } from '@cutting/react-hook-form-components';
import { lazy, StrictMode, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { AboutSkeleton } from './components/Fallback/AboutSkeleton';
import { ContactSkeleton } from './components/Fallback/ContactSkeleton';
import { EmailConfirmationSkeleton } from './components/Fallback/EmailConfirmationSkeleton';
import { PostsSkeleton } from './components/Fallback/PostsSkeleton';
import { ServicesSkeleton } from './components/Fallback/ServicesSkeleton';
import { TestimonialsSkeleton } from './components/Fallback/TestimonialsSkeleton';
import { Header } from './components/Header/Header';
import { contactFormProps } from './constants';
import Home from './routes/_index';

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
    <ApplicationLayout theme="supportTheme" headerAriaLabel="Frontend Rescue" header={<Header />}>
      <FormContextProvider {...contactFormProps}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <Suspense fallback={<AboutSkeleton />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="/contact"
            element={
              <Suspense fallback={<ContactSkeleton />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="/email/confirmation"
            element={
              <Suspense fallback={<EmailConfirmationSkeleton />}>
                <EmailConfirmation />
              </Suspense>
            }
          />
          <Route
            path="/posts"
            element={
              <Suspense fallback={<PostsSkeleton />}>
                <Posts />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<PostsSkeleton />}>
                  <PostsIndex />
                </Suspense>
              }
            />
            <Route
              path=":slug"
              element={
                <Suspense fallback={<PostsSkeleton />}>
                  <PostSlug />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/services"
            element={
              <Suspense fallback={<ServicesSkeleton />}>
                <Services />
              </Suspense>
            }
          >
            <Route
              index
              element={
                <Suspense fallback={<ServicesSkeleton />}>
                  <ServicesHome />
                </Suspense>
              }
            />
            <Route
              path="consultancy"
              element={
                <Suspense fallback={<ServicesSkeleton />}>
                  <ServicesConsultancy />
                </Suspense>
              }
            />
            <Route
              path="critical"
              element={
                <Suspense fallback={<ServicesSkeleton />}>
                  <ServicesCritical />
                </Suspense>
              }
            />
            <Route
              path="mentoring"
              element={
                <Suspense fallback={<ServicesSkeleton />}>
                  <ServicesMentoring />
                </Suspense>
              }
            />
            <Route
              path="rescue"
              element={
                <Suspense fallback={<ServicesSkeleton />}>
                  <ServicesRescue />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="/testimonials"
            element={
              <Suspense fallback={<TestimonialsSkeleton />}>
                <Testimonials />
              </Suspense>
            }
          />
        </Routes>
      </FormContextProvider>
    </ApplicationLayout>
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
