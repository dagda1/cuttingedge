import { Modal } from 'flowbite-react';
import * as styles from './ContactButtons.css';
import { ContactForm } from '../ContactForm/ContactForm';
import { CallPopupButton } from '../Call/CallPopupButton';
import type { CallType } from '../Call/types';
import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button, Text } from '@cutting/component-library';
import { useCallback, useState } from 'react';

type ContactButtonsProps = {
  callType: CallType;
  rootElementId?: string;
  buttonStyle?: ButtonStyle;
  justify?: 'flexStart' | 'center' | 'flexEnd';
};

export function ContactButtons({
  callType,
  rootElementId = 'portal',
  justify = 'flexStart',
  buttonStyle = 'warning',
}: ContactButtonsProps): JSX.Element {
  const [openModal, setOpenModal] = useState<string | undefined>();

  const close = useCallback(() => setOpenModal(undefined), []);

  return (
    <Box justifyContent={justify} width="full" display="flex" className={styles.callButton}>
      <CallPopupButton callType={callType} rootElementId={rootElementId} />
      <Button buttonStyle={buttonStyle} onClick={() => setOpenModal('default')}>
        CONTACT BY EMAIL
      </Button>
      <Modal show={openModal === 'default'} onClose={close} dismissible>
        <Modal.Header>{''}</Modal.Header>
        <Modal.Body>
          <Box display="flex" justifyContent="center" width="full">
            <Text size="large" tone="info">
              CONTACT FORM
            </Text>
          </Box>
          <Box
            className={styles.modal}
            width="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box className={styles.content}>
              <ContactForm />
            </Box>
          </Box>
        </Modal.Body>
      </Modal>
    </Box>
  );
}
