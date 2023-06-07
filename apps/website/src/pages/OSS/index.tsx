import { ContentBlock, ExternalLink, List, Tiles, Stack, Text, Card, Box } from '@cutting/component-library';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import type { Repo } from './repos';
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
          <List type="none" space="small">
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
          </List>
          <Heading level="2">My Work</Heading>
          <Tiles space="large" columns={{ mobile: 1, tablet: 2 }}>
            {repos.map((repo: Repo, i: number) => (
              <Card height="full" key={i}>
                <Box width="full" className={styles.repo}>
                  <ExternalLink href={repo.link}>
                    <Stack space="large">
                      <div className={styles.icon}>
                        <Github />
                      </div>
                      <Heading level="2">{repo.name}</Heading>
                      <Text>{repo.description}</Text>
                    </Stack>
                  </ExternalLink>
                </Box>
              </Card>
            ))}
          </Tiles>
          <div>
            <Heading level="2">
              For full list of github repos <ExternalLink href="https://github.com/dagda1">click here</ExternalLink>
            </Heading>
          </div>
        </Stack>
      </ContentBlock>
    </ApplicationLayout>
  );
}

export default OSS;
