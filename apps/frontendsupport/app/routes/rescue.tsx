import { Box, Heading, PageBlock } from '@cutting/component-library';

export default function Rescue(): JSX.Element {
  return (
    <Box
      marginTop="xxxlarge"
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="full"
      height="full"
      style={{ marginTop: '6rem' }}
    >
      <PageBlock>
        <Heading level="1">Taking Your Frontend from Distress to Success</Heading>
      </PageBlock>
    </Box>
  );
}
