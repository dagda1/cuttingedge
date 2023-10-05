import { Box, Heading, Stack, Text, Tiles } from '@cutting/component-library';
import { Service } from './Service';
import { ContactButtons } from '@cutting/react-hook-form-components';

type Service = {
  heading: string;
  link: `/services/${string}`;
  actionText: string;
  copy: [string, string?, string?];
  buttonText?: string;
};

const Rescue: Service = {
  heading: 'Rescue Package',
  link: '/services/rescue',
  actionText: 'Money back guarantee if not satisfied',
  copy: [
    'Are you grappling with a seemingly impossible frontend feature?',
    'Facing a looming deadline while frontend development is at a standstill?',
  ],
};

const Critical: Service = {
  heading: 'Critical bug fix in 24 hours',
  link: '/services/critical',
  actionText: 'Money back guarantee if not satisfied',
  copy: ['You need an answer in the next 24 hours'],
  buttonText: 'Book an emergency call',
};

const services: Service[] = [Rescue, Critical];

export function Services(): JSX.Element {
  return (
    <Box marginBottom="xxxlarge">
      <Stack space="small" align="center">
        <Box marginBottom="medium">
          <Heading level="1">Need help now?</Heading>
        </Box>
        <Tiles columns={{ mobile: 1, tablet: 1, desktop: 2 }} space="medium">
          {services.map(({ copy, ...props }) => (
            <Service key={props.heading} {...props}>
              {copy.map((text, i) => (
                <Text key={i} tone="info">
                  {text}
                </Text>
              ))}
            </Service>
          ))}
        </Tiles>
        <Box marginY="medium">
          <Heading level="2">For any other type of work, please email or book a call.</Heading>
        </Box>
        <Box zIndex="sticky">
          <ContactButtons justify="center" callType="chat" />
        </Box>
      </Stack>
    </Box>
  );
}
