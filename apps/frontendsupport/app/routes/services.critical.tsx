import { Box, DSTestimonial, Heading, List, Stack, Text, TextLink } from '@cutting/component-library';
import { ContactButtons } from '@cutting/react-hook-form-components';

export default function Rescue(): JSX.Element {
  return (
    <Box marginBottom="large">
      <Stack space={{ mobile: 'small', desktop: 'large', wide: 'large' }}>
        <Heading level="1">When you need an answer in the next 24 hours</Heading>
        <Text component="p" size="large" tone="info">
          With over{' '}
          <TextLink external href="https://cutting.scot/oss">
            150+ merged pull requests
          </TextLink>{' '}
          into many public open-source repositories, we can provide the precise answers you need quicker than anyone
          else.
        </Text>
        <DSTestimonial />
        <Heading level="2">How it works</Heading>
        <List>
          <Text size="large" tone="primary">
            A 60-minute consultation call with an industry expert.
          </Text>
          <Text size="large" tone="primary">
            A solution document within 12 hours with bulleted action items to achieve the desired result.
          </Text>
          <Text size="large" tone="primary">
            Two weeks of support (slack/email)
          </Text>
        </List>
        <Text component="p" size="large" tone="info">
          Break the emergency glass and speak to us. We have the experience and the expertise to turn this around.
        </Text>
        <ContactButtons callType="rescue" />
      </Stack>
    </Box>
  );
}
