import { Box, Heading } from '@cutting/component-library';

export function Services(): JSX.Element {
  return (
    <Box height="full" width="full" className={'breaking-glass'}>
      <Box width="full" marginTop="xxxlarge">
        <Heading level="2">Work with us</Heading>
      </Box>
      <Box height="full" display="flex" width="full" style={{ border: '10px solid yellow' }}>
        <Box style={{ border: '10px solid blue' }}>
          <Heading level="2">Project</Heading>
        </Box>
        <Box style={{ border: '10px solid red' }}>
          <Heading level="2">Strategy Consultation</Heading>
        </Box>
      </Box>
    </Box>
  );
}
