import type { ReactNode } from 'react';
import type { CallType } from '../Call/types';
import { ContactButtons } from '../Intro/ContactButtons';
import * as styles from './Services.css';
import { Heading } from '@cutting/component-library';

export interface ServiceLinkProps {
  title: string;
  callType: CallType;
  children: ReactNode;
}

export function ServiceLink({ title, callType, children }: ServiceLinkProps): JSX.Element {
  return (
    <div className={styles.service}>
      <Heading level="2">{title}</Heading>
      {children}
      <div>
        <ContactButtons callType={callType} />
      </div>
    </div>
  );
}
