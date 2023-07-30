import { Box, Heading, List, Redhatestimonial, Stack, Text, TextLink } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';

export default function Rescue(): JSX.Element {
  return (
    <Box marginBottom="large">
      <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
        <Heading level="1">Do you have a frontend development problem that is blocking your team?</Heading>
        <List>
          <Text>Got a tricky situation stopping you from shipping features to your customers?</Text>
          <Text>Need a quick injection from an industry expert?</Text>
          <Text>Do you want to take the risk out of frontend development?</Text>
          <Text>Do you need help right now?</Text>
        </List>
        <Heading level="2">Let me provide the answers</Heading>
        <Redhatestimonial />
        <Text component="p" size="large" tone="info" align="center">
          With over{' '}
          <TextLink external href="https://cutting.scot/oss">
            150+ merged pull requests
          </TextLink>{' '}
          into many public open-source repositories.
        </Text>
        <Text component="p" size="large" tone="info" align="center">
          I can provide the answers you need and quicker than anyone else out there.
        </Text>
        <ContactButtons justify="center" callType="rescue" />
      </Stack>
    </Box>
  );
}
