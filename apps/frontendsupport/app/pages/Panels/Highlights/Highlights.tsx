import { Box, Heading, Stack, TextLink } from '@cutting/component-library';
import { Panel } from '~/components/Panel/Panel';
import { Image } from '@unpic/react';

export function Highlights(): JSX.Element {
  return (
    <Panel>
      <Box display="flex" justifyContent="spaceAround" alignItems="center" flexDirection="column" height="full">
        <Stack space="large" align="center">
          <Heading center level="2">
            <TextLink
              href="https://www.linkedin.com/posts/paul-cowan-19bb1116_backstage-activity-7043616692878401537-EQbh?utm_source=share&utm_medium=member_desktop"
              external
            >
              Backstage contributor of the month
            </TextLink>
          </Heading>
          <Image
            className="parallax"
            alt="Backstage contributor of the month"
            src="https://res.cloudinary.com/ddospxsc8/image/upload/v1690811801/contributor_uadhgd.png"
            width={200}
            height={148}
          />
          <Heading level="2">
            <TextLink href="https://blog.logrocket.com/author/paulcowan/" external>
              Professional writer for logrocket and others.
            </TextLink>
          </Heading>
          <Image
            className="parallax"
            alt="Backstage contributor of the month"
            src="https://res.cloudinary.com/ddospxsc8/image/upload/v1690811903/logrocket_iuq8ju.png"
            width={200}
            height={128}
          />
        </Stack>
      </Box>
      {/* <ParallaxPanel topImages={topImages} bottomImages={bottomImages}>
        <Box display="flex" alignItems="center" flexDirection="column" justifyContent="center">
          <List>
            <Text size="large" tone="primary">
              Contributor of the month for Spotify Backstage.
            </Text>
            <Text size="large" tone="primary">
              Professional writing for logrocket.
            </Text>
          </List>
        </Box>
      </ParallaxPanel> */}
    </Panel>
  );
}
