import { Box, Heading, Stack, Text, Tiles } from '@cutting/component-library';
import { Service } from './Service';
import { background } from './Service.css';
import { ContactButtons } from '@cutting/react-hook-form-components';

export function Services(): JSX.Element {
  return (
    <Box marginBottom="xxxlarge">
      <Box className={background}></Box>
      <Stack space="small" align="center">
        <Heading level="1">Services</Heading>
        <Tiles columns={{ mobile: 1, tablet: 1, desktop: 2 }} space="medium">
          <Service heading="Rescue Package" actionText="It's time to call in the cavalry." link="/services/rescue">
            <Text tone="info">Are you grappling with a seemingly impossible frontend feature?</Text>
            <Text tone="info">Facing a looming deadline while frontend development is at a standstill?</Text>
          </Service>
          <Service heading="Mentoring" actionText="Expert Guidance for Frontend Mastery" link="/services/mentoring">
            <Text tone="info">Are your development projects hindered by gaps in frontend knowledge?</Text>
            <Text tone="info">Are your developers eager to learn but unsure where to start?</Text>
          </Service>
          <Service
            heading="Consulting"
            actionText={
              <Stack space="none" align="center">
                <Box>Save time and money by letting us help.</Box>
                <Box>We will do it and upskill your team in the process.</Box>
              </Stack>
            }
            link="/services/consultancy"
          >
            <Text tone="info">Not sure how to architect something?</Text>
            <Text tone="info">Want to ask an expert for assistance?</Text>
          </Service>
          <Service
            heading="Critical bug fix"
            actionText="We can do that within the next 24 hours!"
            buttonText="Book an emergency call"
            link="/services/critical"
          >
            <Text tone="info">Need an urgent bug fix?</Text>
            <Text tone="info">Need answers now?</Text>
          </Service>
        </Tiles>
        <Text component="p" tone="info">
          Or simply email or book a call.
        </Text>
        <Box zIndex="sticky">
          <ContactButtons justify="center" callType="chat" />
        </Box>
      </Stack>
    </Box>
  );
}
