import { Box, Card, Heading, PageBlock, Tiles } from '@cutting/component-library';

export function Services(): JSX.Element {
  return (
    <Box height="screen" className="green" marginTop="xxxlarge">
      <PageBlock>
        <Heading center level="2">
          Work with us
        </Heading>
        <Tiles columns={{ mobile: 1, tablet: 2 }} space="large">
          <Card rounded height="full" tone="promote">
            <Heading level="2">Project</Heading>
          </Card>
          <Card height="full" tone="formAccent">
            <Heading level="2">Strategy Consultation</Heading>
          </Card>
        </Tiles>
      </PageBlock>
    </Box>
  );
}
