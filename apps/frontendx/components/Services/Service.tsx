import type { ReactNode } from 'react';
import * as styles from './Service.css';
import type { CallType } from '../Call/types';
import { ContactButtons } from '../Intro/ContactButtons';
import { Heading, Text } from '@cutting/component-library';

export interface Service {
  heading: string;
  children: ReactNode;
  callType: CallType;
  contactButtons?: boolean;
}
export function Service({ heading, callType, contactButtons = true, children }: Service): JSX.Element {
  return (
    <div className={styles.main}>
      <Heading level="2">{heading}</Heading>
      <div className={styles.children}>{children}</div>
      {contactButtons && (
        <>
          <Text component="p">
            To find out more, either <strong>BOOK A CALL</strong> or <strong>send us an email</strong> using the buttons
            below.
          </Text>
          <ContactButtons buttonStyle="primary" callType={callType} />
        </>
      )}
    </div>
  );
}
