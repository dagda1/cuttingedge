import { Box, Card, Heading, List, Stack, Text, Tiles } from '@cutting/component-library';
import { NavLink } from '@remix-run/react';
import { TextNavLink } from '~/components/TextNavLink/TextNavLink';

export function Services(): JSX.Element {
  return (
    <Box
      height="screen"
      className="green"
      marginTop="xxxlarge"
      style={{ border: '10px solid yellow', marginTop: '80px' }}
    >
      <Heading center level="2">
        Work with us
      </Heading>
      <Tiles columns={{ mobile: 1, tablet: 1, desktop: 2 }} space="xxlarge">
        <Card rounded height="full" tone="formAccent">
          <Stack space="xlarge">
            <Heading center level="2">
              Rescue Package
            </Heading>
            <List type="bullet" size="large">
              <Text tone="info">Are you grappling with a difficult frontend software development feature?</Text>
              <Text tone="info">Is your team lacking the frontend knowhow?</Text>
              <Text tone="info">Facing a looming deadline while frontend development is at a standstill?</Text>
              <Text tone="info" component="p" size="large">
                Does it feel like frontend development is sinking your project?
              </Text>
            </List>

            <Text tone="info" component="p" size="large">
              It's time to call in the cavalry.
            </Text>

            <Box height="full" style={{ border: '2px solid white' }}>
              <NavLink to="rescue">
                <Text tone="info" size="large">
                  Let's talk about it
                </Text>
              </NavLink>
            </Box>
          </Stack>
        </Card>
        <Card height="full" tone="promote">
          <Heading level="2">Support and bug fixing</Heading>
        </Card>
        <Card height="full" tone="formAccent">
          <Heading level="2">Mentoring</Heading>
        </Card>
        <Card height="full" tone="formAccent">
          <Heading level="2">Strategy Consultation</Heading>
        </Card>
      </Tiles>
    </Box>
  );
}
