import Popup from 'reactjs-popup';
import * as styles from './ContactButtons.css';
import type { ReactNode } from 'react';
import { forwardRef } from 'react';
import type { ContactFormProps } from '../ContactForm/ContactForm';
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

const closer =
  (formProps: ContactFormProps) =>
  // eslint-disable-next-line react/display-name
  (close: () => void) =>
    (
      <ApplicationLayout theme="salesTheme" className={styles.modalContainer}>
        <div className={styles.modal}>
          <button className={styles.close} onClick={close}>
            &times;
          </button>
          <Box marginTop="small" width="full" display="flex" justifyContent="center" alignItems="center">
            <Heading level="2">CONTACT FORM</Heading>
          </Box>
          <div className={styles.content}>
            <ContactForm {...formProps} />
          </div>
        </div>
      </ApplicationLayout>
    );

const isClient = typeof window !== 'undefined';

type ContactButtonsProps = {
  callType: CallType;
  rootElementId?: string;
  buttonStyle?: ButtonStyle;
  justify?: 'flexStart' | 'center' | 'flexEnd';
} & ContactFormProps;

export function ContactButtons({
  callType,
  rootElementId = 'portal',
  justify = 'flexStart',
  buttonStyle = 'warning',
  ...formProps
}: ContactButtonsProps): JSX.Element {
  return (
    <Box justifyContent={justify} width="full" display="flex" className={styles.callButton}>
      <CallPopupButton callType={callType} rootElementId={rootElementId} />
      {isClient && (
        <Popup
          trigger={
            <ButtonWrapper type="button" buttonStyle={buttonStyle}>
              CONTACT BY EMAIL
            </ButtonWrapper>
          }
          modal
          nested
        >
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {closer(formProps) as any}
        </Popup>
      )}
    </Box>
  );
}
