import { pad } from '../../styles/utilities.css';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '@cutting/component-library';

export function DSTestimonial(): JSX.Element {
  return (
    <div className={pad}>
      <Testimonial
        from="Paul Kearney (Consulting Lead Product Manager Disclosure Scotland Apr. 2017 - Feb. 2020)"
        url="https://www.mygov.scot/about-disclosure-scotland"
      >
        <Text component="p">
          Frontend DX were part of a challenging transformation programme. They were able to adapt and deliver under
          ever changing circumstances as the team grew and the complexity of the business and technical solution
          increased.
        </Text>{' '}
        <Text component="p">
          {' '}
          <strong>
            Frontend DX&apos;s involvement laid the foundations that helped develop a significant public-facing digital
            offering.
          </strong>
        </Text>{' '}
        <Text component="p">
          <strong>Their experience took the risk away from the frontend</strong>, and contributed to building a robust
          software platform.
        </Text>
      </Testimonial>
    </div>
  );
}
