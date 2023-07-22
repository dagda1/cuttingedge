import { Heading, Stack, Text, List } from '@cutting/component-library';

export default function Critical(): JSX.Element {
  return (
    <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
      <Heading level="2">24 Hour emergency fix turnaround</Heading>
      <List>
        <Text size="large" tone="primary">
          A 60-minute consultation call with an industry expert.
        </Text>
        <Text size="large" tone="primary">
          A solution document within 12 hours with bulleted action items to achieve the desired result.
        </Text>
        <Text size="large" tone="primary">
          Two weeks of email support
        </Text>
      </List>
      <Text component="p" size="large" tone="info" align="center">
        Break the emergency glass and speak to us. We have the experience and the expertise to turn this around.
      </Text>
    </Stack>
  );
}
