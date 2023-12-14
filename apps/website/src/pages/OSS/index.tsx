import { TextLink, Tiles, Stack, Text, Box, Inline, PageBlock } from '@cutting/component-library';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { repos } from './repos';
import { Heading } from '@cutting/component-library';
import * as styles from './OSS.css.js';
import github from '~/assets/images/github-medium.png';

export function OSS(): JSX.Element {
  return (
    <ApplicationLayout heading="Open Source Contributions">
      <PageBlock>
        <Stack space="large">
          <Heading level="2">Merged pull requests to public repositories</Heading>
          <Stack space="small">
            <TextLink
              external
              href="https://github.com/backstage/backstage/pulls?q=is%3Apr+is%3Amerged+author%3Adagda1"
            >
              <Text>Very active in Backstage</Text>
            </TextLink>
            <TextLink href="https://github.com/thefrontside/effection/pulls?q=is%3Apr+author%3Adagda1">
              <Text>Active in Effection</Text>
            </TextLink>
            <TextLink
              external
              href="https://github.com/thefrontside/simulacrum/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1"
            >
              <Text>Very active in Simulacrum</Text>
            </TextLink>
            <TextLink
              external
              href="https://github.com/jaredpalmer/after.js/pulls?q=is%3Apr+author%3Adagda1+is%3Aclosed"
            >
              <Text>Numerous commits to afterjs</Text>
            </TextLink>
            <TextLink external href="https://github.com/hshoff/vx/pull/355">
              <Text>vx polygon component</Text>
            </TextLink>
            <TextLink external href="https://github.com/emberjs/ember.js/pull/2938">
              <Text>Emberjs - keyhandler test helper</Text>
            </TextLink>
            <TextLink external href="https://github.com/bvaughn/react-window/pull/1">
              <Text>react-window</Text>
            </TextLink>
            <TextLink external href="https://github.com/airbnb/enzyme/pull/1408">
              <Text>enzyme</Text>
            </TextLink>
            <TextLink external href="https://github.com/pulls?q=is%3Apr+author%3Adagda1+is%3Apublic+is%3Amerged">
              <Text>And many, many, many others....</Text>
            </TextLink>
          </Stack>
          <Heading level="2">My Work</Heading>
          <Tiles space="small" columns={{ mobile: 1, tablet: 2, wide: 4 }}>
            {repos.map((repo, i) => (
              <Box width="full" className={styles.repo} key={i}>
                <TextLink external href={repo.link}>
                  <Stack space="medium">
                    <div className={styles.icon}>
                      <img src={github} alt="github" />
                    </div>
                    <Heading level="2">{repo.name}</Heading>
                    <Text>{repo.description}</Text>
                  </Stack>
                </TextLink>
              </Box>
            ))}
          </Tiles>
          <Inline space="small">
            <Heading level="2">For a full list of github repos</Heading>
            <TextLink external href="https://github.com/dagda1">
              <Text size="large">click here</Text>
            </TextLink>
          </Inline>
        </Stack>
      </PageBlock>
    </ApplicationLayout>
  );
}

export default OSS;
