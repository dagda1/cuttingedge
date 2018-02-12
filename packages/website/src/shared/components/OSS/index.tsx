import * as React from 'react';
import { pageMaker } from '../PageMaker';
import { repos, Repo } from './repos';
import { Heading, ExternalLink, Github } from '@cutting/component-library';
import { Wrap, Layout, GelItem } from '@cutting/react-gel';

const styles = require('./OSS.scss');

export const OSS: React.StatelessComponent = () => (
  <Wrap className={styles.container}>
    <h1>Open Source Software</h1>
    <Layout>
      <GelItem>
        <ExternalLink href="https://github.com/dagda1">
          <Heading level={2}>Github Repose</Heading>
        </ExternalLink>
      </GelItem>
    </Layout>
    <Layout>
      {repos.map((repo: Repo, i: number) => (
        <GelItem m="1/2" l="1/4" className={styles.repo}>
          <ExternalLink href={repo.link} key={i}>
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
  </Wrap>
);

export default pageMaker({ Comp: OSS });
