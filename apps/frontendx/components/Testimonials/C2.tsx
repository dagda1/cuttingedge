import { pad } from '../../styles/utilities.css';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '@cutting/component-library';

export function C2Testimonial(): JSX.Element {
  return (
    <div className={pad}>
      <Testimonial from="Richard McGlave (Continuity2)" url="http://continuity2.com">
        <Text component="p">
          Frontend DX <strong>eradicated the manual steps in our development pipeline</strong> that stopped our
          developers from working on features.
        </Text>{' '}
        <Text component="p">
          Thanks to their help, we were able to{' '}
          <strong>refactor our application to use modern frontend techniques</strong>.
        </Text>
        <Text component="p"> This has allowed us to scale our business and gain competitive advantage.</Text>
      </Testimonial>
    </div>
  );
}
