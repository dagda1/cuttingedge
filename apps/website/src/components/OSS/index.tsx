import { ExternalLink } from '@cutting/component-library';
import { ApplicationLayout } from '../../layouts/ApplicationLayout';
import type { Repo } from './repos';
import { repos } from './repos';

import * as styles from './OSS.css';
import { Github } from '../Svg/Github';

export function OSS(): JSX.Element {
  return (
    <ApplicationLayout heading="Open Source Contributions">
      <div className={styles.container}>
        <h2>Prominent opens source pull requests</h2>
        <ul className={styles.communityList}>
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
        <h2>My Work</h2>
        <div className={styles.repos}>
          {repos.map((repo: Repo, i: number) => (
            <div className={styles.repo} key={i}>
              <ExternalLink href={repo.link}>
                <div className={styles.icon}>
                  <Github />
                </div>
                <div>
                  <h2>{repo.name}</h2>
                </div>
                <div>{repo.description}</div>
              </ExternalLink>
            </div>
          ))}
        </div>
        <div>
          <h2>
            For full list of github repos <ExternalLink href="https://github.com/dagda1">click here</ExternalLink>
          </h2>
        </div>
      </div>
    </ApplicationLayout>
  );
}

export default OSS;
