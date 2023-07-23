import Popup from 'reactjs-popup';
import * as styles from './ContactButtons.css';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import { ContactForm } from '../ContactForm/ContactForm';
import { CallPopupButton } from '../Call/CallPopupButton';
import type { CallType } from '../Call/types';
import type { ButtonStyle } from '@cutting/component-library';
import { ApplicationLayout, Box, Button, Heading } from '@cutting/component-library';

// eslint-disable-next-line react/display-name
export const ButtonWrapper = forwardRef<
  HTMLButtonElement,
  { buttonStyle: ButtonStyle; children: ReactNode; type: 'button' | 'submit' }
>((props, ref): JSX.Element => <Button ref={ref} {...props} />);

// eslint-disable-next-line react/display-name
const closer = (buttonStyle: ButtonStyle) => (close: () => void) =>
  (
    <ApplicationLayout theme="salesTheme">
      <div className={styles.modal}>
        <button className={styles.close} onClick={close}>
          &times;
        </button>
        <Box marginTop="small" width="full" display="flex" justifyContent="center" alignItems="center">
          <Heading level="2">CONTACT FORM</Heading>
        </Box>
        <div className={styles.content}>
          <ContactForm buttonStyle={buttonStyle} />
        </div>
      </div>
    </ApplicationLayout>
  );

const isClient = typeof window !== 'undefined';

export function ContactButtons({
  callType,
  buttonStyle = 'secondary',
  rootElementId = 'root',
  justify = 'flexStart',
}: {
  callType: CallType;
  rootElementId?: string;
  buttonStyle?: ButtonStyle;
  justify?: 'flexStart' | 'center' | 'flexEnd';
}): JSX.Element {
  return (
    <Box justifyContent={justify} className={styles.callButton}>
      <CallPopupButton callType={callType} rootElementId={rootElementId} />
      {isClient && (
        <Popup
          trigger={
            <ButtonWrapper type="button" buttonStyle="primary">
              CONTACT BY EMAIL
            </ButtonWrapper>
          }
          modal
          nested
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {closer(buttonStyle) as any}
        </Popup>
      )}
    </Box>
  );
}
