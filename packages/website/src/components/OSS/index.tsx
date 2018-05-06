import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { repos, Repo } from './repos';
import { Heading, ExternalLink, Github } from '@cutting/component-library';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

const styles = require('./OSS.scss');

export const OSS: React.SFC = () => (
  <Wrap className={styles.container}>
    <Heading level={1}>Open Source Software</Heading>
    <Layout>
      {repos.map((repo: Repo, i: number) => (
        <GelItem m="1/2" l="1/4" className={styles.repo} key={i}>
          <ExternalLink href={repo.link}>
            <div className={styles.icon}>
              <Github />
            </div>
            <div>
              <Heading level={2}>{repo.name}</Heading>
            </div>
            <div>{repo.description}</div>
          </ExternalLink>
        </GelItem>
      ))}
    </Layout>
    <Layout>
      <GelItem>
        <Heading level={2} className={styles.heading__repos}>
          For full list of github repos <ExternalLink href="https://github.com/dagda1">click here</ExternalLink>
        </Heading>
      </GelItem>
    </Layout>
  </Wrap>
);

export default pageMaker({ Comp: OSS });
