import type { ReactNode } from 'react';
import type { CallType } from '../Call/types';
import { ContactButtons } from '../Intro/ContactButtons';
import * as styles from './Services.css';

export interface ServiceLinkProps {
  title: string;
  callType: CallType;
  children: ReactNode;
}

export function ServiceLink({ title, callType, children }: ServiceLinkProps): JSX.Element {
  return (
    <div className={styles.service}>
      <h2>{title}</h2>
      {children}
      <div>
        <ContactButtons callType={callType} />
      </div>
    </div>
  );
}
