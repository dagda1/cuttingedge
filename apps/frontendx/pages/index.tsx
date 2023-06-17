import { US } from '../components/US/US';
import { Problems } from '../components/Problems/Problems';
import { Services } from '../components/Services/Services';
import { Intro } from '../components/Intro/Intro';
import { Clients } from '../components/Clients/Clients';
import { C2Testimonial } from '../components/Testimonials/C2';
import { DSTestimonial } from '../components/Testimonials/DS';

export default function Articles(): JSX.Element {
  return (
    <>
      <Intro />
      <Problems />
      <DSTestimonial />
      <US />
      <C2Testimonial />
      <Clients />
      <Services />
    </>
  );
}
