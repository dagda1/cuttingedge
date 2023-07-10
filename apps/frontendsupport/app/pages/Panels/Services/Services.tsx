import { Box, Heading, Stack, Text, Tiles } from '@cutting/component-library';
import { Service } from './Service';

export function Services(): JSX.Element {
  return (
    <Box className="green">
      <Stack space="large">
        <Heading center level="2">
          Work with us
        </Heading>
        <Tiles columns={{ mobile: 1, tablet: 1, desktop: 2 }} space="xxlarge">
          <Service heading="Rescue Package" actionText="It's time to call in the cavalry." link="rescue">
            <Text tone="info">Are you grappling with a seemingly impossible frontend feature?</Text>
            <Text tone="info">Is your team lacking the frontend knowhow?</Text>
            <Text tone="info">Facing a looming deadline while frontend development is at a standstill?</Text>
          </Service>
          <Service heading="Mentoring" actionText="Expert Guidance for Frontend Mastery" link="mentoring">
            <Text tone="info">Are your development projects hindered by gaps in frontend knowledge?</Text>
            <Text tone="info">Are your developers eager to learn but unsure where to start?</Text>
            <Text tone="info">Interested in results based learning?</Text>
          </Service>
          <Service
            heading="Consulting"
            actionText={
              <Stack space="none" align="center">
                <div>Save time and money by letting us help.</div>
                <div>We will do it and upskill your team in the process.</div>
              </Stack>
            }
            link="mentoring"
          >
            <Text tone="info">Not sure how to architect something?</Text>
            <Text tone="info">Want to ask an expert for assistance?</Text>
          </Service>
          <Service
            heading="Support and bug fixing"
            actionText="We can do that within the next 24 hours!"
            buttonText="Book an emergency call"
            link="mentoring"
          >
            <Text tone="info">Need an urgent bug fix?</Text>
            <Text tone="info">Need answers now?</Text>
          </Service>
        </Tiles>
      </Stack>
    </Box>
  );
}
