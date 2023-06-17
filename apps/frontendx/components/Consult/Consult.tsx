// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import ConsultService from '../../content/services/consult.mdx';
import { Service } from '../Services/Service';
import { CallPopupButton } from '../Call/CallPopupButton';
import * as styles from './Consult.css';

export function Consult(): JSX.Element {
  return (
    <Service heading="Frontend Strategy consult" callType="frontend-strategy-consult" contactButtons={false}>
      <ConsultService />
      <div className={styles.callButton}>
        <CallPopupButton callType="frontend-strategy-consult">BOOK A STRATEGY CONSULT</CallPopupButton>
      </div>
      <div className={styles.divider}></div>
    </Service>
  );
}
