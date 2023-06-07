import { ContentBlock, ExternalLink, List, Tiles, Stack, Text, Card, Box, Inline } from '@cutting/component-library';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { repos } from './repos';
import { Heading } from '@cutting/component-library';
import * as styles from './OSS.css';
import { Github } from '~/components/Svg/Github';

export function OSS(): JSX.Element {
  return (
    <ApplicationLayout heading="Open Source Contributions">
      <ContentBlock width="large">
        <Stack space="large">
          <Heading level="2">Merged pull requests to public repositories</Heading>
          <Stack space="small">
            <ExternalLink href="https://github.com/backstage/backstage/pulls?q=is%3Apr+is%3Amerged+author%3Adagda1">
              Very active in Backstage
            </ExternalLink>
            <ExternalLink href="https://github.com/thefrontside/simulacrum/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1">
              Very active in Simulacrum
            </ExternalLink>
            <ExternalLink href="https://github.com/jaredpalmer/after.js/pulls?q=is%3Apr+author%3Adagda1+is%3Aclosed">
              Numerous commits to afterjs
            </ExternalLink>
            <ExternalLink href="https://github.com/hshoff/vx/pull/355">vx polygon component</ExternalLink>
            <ExternalLink href="https://github.com/emberjs/ember.js/pull/2938">
              Emberjs - keyhandler test helper
            </ExternalLink>
            <ExternalLink href="https://github.com/bvaughn/react-window/pull/1">react-window</ExternalLink>
            <ExternalLink href="https://github.com/airbnb/enzyme/pull/1408">enzyme</ExternalLink>
            <ExternalLink href="https://github.com/pulls?q=is%3Apr+author%3Adagda1+is%3Apublic+is%3Amerged">
              And many, many, many others....
            </ExternalLink>
          </Stack>
          <Heading level="2">My Work</Heading>
          <Tiles space="small" columns={{ mobile: 1, tablet: 2, extraWide: 4 }}>
            {repos.map((repo, i) => (
              <Box width="full" className={styles.repo} key={i}>
                <ExternalLink href={repo.link}>
                  <Stack space="medium">
                    <div className={styles.icon}>
                      <Github />
                    </div>
                    <Heading level="2">{repo.name}</Heading>
                    <Text>{repo.description}</Text>
                  </Stack>
                </ExternalLink>
              </Box>
            ))}
          </Tiles>
          <Stack space="small">
            <Heading level="2">For a full list of github repos</Heading>
            <ExternalLink href="https://github.com/dagda1">
              <Text size="large">click here</Text>
            </ExternalLink>
          </Stack>
        </Stack>
      </ContentBlock>
    </ApplicationLayout>
  );
}

export default OSS;
