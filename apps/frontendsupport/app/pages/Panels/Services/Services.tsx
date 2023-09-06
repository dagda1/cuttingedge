import { Box, Heading, Stack, Text, Tiles } from '@cutting/component-library';
import { Service } from './Service';
import { background } from './Service.css';
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
  copy: ['You need answers right now'],
  buttonText: 'Book an emergency call',
};

const services: Service[] = [Rescue, Critical];

export function Services(): JSX.Element {
  return (
    <Box marginBottom="xxxlarge">
      <Box className={background}></Box>
      <Stack space="small" align="center">
        <Heading level="1">Services</Heading>
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
        <Heading level="2">For anything else, simply email or book a call.</Heading>
        <Box zIndex="sticky">
          <ContactButtons justify="center" callType="chat" />
        </Box>
      </Stack>
    </Box>
  );
}
