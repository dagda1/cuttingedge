import { supportTheme } from '@cutting/component-library';
import { FormContextProvider } from '@cutting/react-hook-form-components';
import cs from 'classnames';
import { StrictMode } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';

import { Header } from './components/Header/Header';
import { contactFormProps } from './constants';
import * as styles from './root.css';
import Home from './routes/_index';
import About from './routes/about';
import Contact from './routes/contact';
import EmailConfirmation from './routes/email.confirmation';
import Posts from './routes/posts';
import PostsIndex from './routes/posts._index';
import PostSlug from './routes/posts.$slug';
import Services from './routes/services';
import ServicesConsultancy from './routes/services.consultancy';
import ServicesCritical from './routes/services.critical';
import ServicesHome from './routes/services.home';
import ServicesMentoring from './routes/services.mentoring';
import ServicesRescue from './routes/services.rescue';
import Testimonials from './routes/testimonials';

export function MainRoutes(): React.JSX.Element {
  return (
    <div className={cs(supportTheme, styles.body)}>
      <div id="portal" />
      <Header />
      <main>
        <FormContextProvider {...contactFormProps}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/email/confirmation" element={<EmailConfirmation />} />
            <Route path="/posts" element={<Posts />}>
              <Route index element={<PostsIndex />} />
              <Route path=":slug" element={<PostSlug />} />
            </Route>
            <Route path="/services" element={<Services />}>
              <Route index element={<ServicesHome />} />
              <Route path="consultancy" element={<ServicesConsultancy />} />
              <Route path="critical" element={<ServicesCritical />} />
              <Route path="mentoring" element={<ServicesMentoring />} />
              <Route path="rescue" element={<ServicesRescue />} />
            </Route>
            <Route path="/testimonials" element={<Testimonials />} />
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
