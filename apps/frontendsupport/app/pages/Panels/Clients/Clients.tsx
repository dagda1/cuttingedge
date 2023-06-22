import cs from 'classnames';
import { Panel } from '~/components/Panel/Panel';
import * as panelStyles from '../Panels.css';
import lloyds from '~/images/lloyds_bank_logo.jpeg';
import waitrose from '~/images/waitrose.svg';
import volvo from '~/images/volvo.png';

export function Clients(): JSX.Element {
  return (
    <Panel className="green">
      <div className={cs(panelStyles.tripleImages, 'clients')}>
        <figure>
          <img alt="Lloyds Bank" src={lloyds} />
        </figure>
        <figure className="parallax">
          <img alt="Waitrosse" src={waitrose} />
        </figure>
        <figure className="parallax">
          <img alt="volvo ocean race" src={volvo} />
        </figure>
      </div>
    </Panel>
  );
}
