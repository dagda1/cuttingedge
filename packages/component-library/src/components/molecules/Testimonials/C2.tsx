import { Box } from '../Box/Box';
import { Testimonial } from '../Testimonial/Testimonial';
import { Text } from '~/components/atoms/Text/Text';

export function C2Testimonial(): JSX.Element {
  return (
    <Box marginY="medium">
      <Testimonial from="Richard McGlave (Continuity2)" url="http://continuity2.com">
        <Text component="p" tone="secondary">
          Paul eradicated the manual steps in our development pipeline that stopped our developers from working on
          features.
        </Text>
        <Text component="p" tone="secondary">
          Thanks to his help, we were able to refactor our application to use modern frontend techniques.
        </Text>
        <Text component="p" tone="secondary">
          This has allowed us to scale our business and gain competitive advantage.
        </Text>
      </Testimonial>
    </Box>
  );
}
