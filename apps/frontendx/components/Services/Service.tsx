import type { ReactNode } from 'react';
import * as styles from './Service.css';
import type { CallType } from '../Call/types';
import { ContactButtons } from '../Intro/ContactButtons';

export interface Service {
  heading: string;
  children: ReactNode;
  callType: CallType;
  contactButtons?: boolean;
}
export function Service({ heading, callType, contactButtons = true, children }: Service): JSX.Element {
  return (
    <div className={styles.main}>
      <h1>{heading}</h1>
      <div className={styles.children}>{children}</div>
      {contactButtons && (
        <>
          <p>
            To find out more, either <strong>BOOK A CALL</strong> or <strong>send us an email</strong> using the buttons
            below.
          </p>
          <ContactButtons buttonStyle="primary" callType={callType} />
        </>
      )}
    </div>
  );
}
