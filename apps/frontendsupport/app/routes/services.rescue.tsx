import { Box, Heading, List, Redhatestimonial, Stack, Text, TextLink } from '@cutting/component-library';
import { ContactButtons } from '~/components/ContactButtons';

export default function Rescue(): JSX.Element {
  return (
    <Box marginBottom="large">
      <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
        <Heading level="1">Do you have a frontend development problem that is blocking your team?</Heading>
        <Text component="p" size="large" tone="info">
          With over{' '}
          <TextLink external href="https://cutting.scot/oss">
            250+ merged pull requests
          </TextLink>{' '}
          into many public open-source repositories, we can provide the precise answers you need quicker than anyone
          else.
        </Text>
        <Redhatestimonial />
        <Heading level="2">How it works</Heading>
        <List>
          <Text>
            Step one is an online initial consultation with all the relevant stakeholders to get to the heart of the
            problem. The talk is a fact-finding mission, and there will be no premature solutionising.
          </Text>
          <Text>
            We will compile a step-by-step plan to get your project back on track or how to implement the feature you
            are struggling with. The plan is played back to your team to reach an initial agreement without too much{' '}
            <TextLink external href="https://en.wikipedia.org/wiki/Big_design_up_front">
              big design up front
            </TextLink>
            .
          </Text>
          <Text>
            We develop the solution with regular feedback from you and your team to ensure the goals are being reached.
            Pair programming between us and your existing team is available to increase{' '}
            <TextLink external href="https://www.agilealliance.org/glossary/collective-ownership/">
              code ownership
            </TextLink>{' '}
            and decrease handover.
          </Text>
          <Text>
            Once the solution is in place, we can help with support and maintenance, including any training your staff
            requires.
          </Text>
        </List>
        <ContactButtons callType="rescue" />
      </Stack>
    </Box>
  );
}
