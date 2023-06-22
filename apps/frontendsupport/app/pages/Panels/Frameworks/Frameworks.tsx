import cs from 'classnames';
import { Panel } from '~/components/Panel/Panel';
import typescript from '~/images/typescript.png';
import graphql from '~/images/graphql3.svg';
import react from '~/images/react.svg';
import * as panelStyles from '../Panels.css';
import * as styles from './Frameworks.css';
import { TextLink } from '@cutting/component-library';
import { Caption } from '~/components/Caption/Caption';
import { ImageHolder } from '~/components/ImageHolder/ImageHolder';

export function Frameworks(): JSX.Element {
  return (
    <Panel>
      <ImageHolder>
        <div className={cs(panelStyles.tripleImages, 'frameworks')}>
          <figure className={styles.typescript}>
            <img alt="typescript" src={typescript} />
          </figure>
          <figure className="parallax">
            <img alt="graphql" src={graphql} />
          </figure>
          <figure className="parallax">
            <img alt="react" src={react} />
          </figure>
        </div>
        <Caption>
          <h2>
            <TextLink external href="https://cutting.scot/oss">
              With 350+ merged pull requests into....
            </TextLink>
          </h2>
        </Caption>
      </ImageHolder>
    </Panel>
  );
}
