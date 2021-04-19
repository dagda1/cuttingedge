import type { FC } from 'react';
import { ExternalLink, Heading } from '@cutting/component-library';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { Repo, repos } from './repos';
import { Github } from '../Svg';

import styles from './OSS.module.scss';

export const OSS: FC = () => (
  <ApplicationLayout heading="Open Source Contributions">
    <div className={styles.container}>
      <Heading level={2}>Prominent opens source pull requests</Heading>
      <ul className={styles.community__list}>
        <li>
          <ExternalLink href="https://github.com/thefrontside/bigtest/pulls?q=is%3Amerged+is%3Apr+author%3Adagda1">
            Very active in Bigtest
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/jaredpalmer/after.js/pulls?q=is%3Apr+author%3Adagda1+is%3Aclosed">
            Numerous commits to afterjs
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/hshoff/vx/pull/355">vx polygon component</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/emberjs/ember.js/pull/2938">
            Emberjs - keyhandler test helper
          </ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/bvaughn/react-window/pull/1">react-window</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/airbnb/enzyme/pull/1408">enzyme</ExternalLink>
        </li>
        <li>
          <ExternalLink href="https://github.com/pulls?q=is%3Apr+author%3Adagda1+is%3Apublic+is%3Amerged">
            And many, many, many others....
          </ExternalLink>
        </li>
      </ul>
      <Heading level={2}>My Work</Heading>
      <div className={styles.repos}>
        {repos.map((repo: Repo, i: number) => (
          <div className={styles.repo} key={i}>
            <ExternalLink href={repo.link}>
              <div className={styles.icon}>
                <Github />
              </div>
              <div>
                <Heading level={2}>{repo.name}</Heading>
              </div>
              <div>{repo.description}</div>
            </ExternalLink>
          </div>
        ))}
      </div>
      <div>
        <Heading level={2} className={styles.heading__repos}>
          For full list of github repos <ExternalLink href="https://github.com/dagda1">click here</ExternalLink>
        </Heading>
      </div>
    </div>
  </ApplicationLayout>
);

export default OSS;
