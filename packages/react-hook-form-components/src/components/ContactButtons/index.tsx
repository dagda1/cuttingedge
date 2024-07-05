import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button, Text } from '@cutting/component-library';
import { useCallback, useState } from 'react';

import { CallPopupButton } from '../Call/CallPopupButton';
import type { CallType } from '../Call/types';
import { ContactForm } from '../ContactForm/ContactForm';
import { Modal } from '../Modal/Modal';
import * as styles from './ContactButtons.css';

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
      <Modal isOpen={openModal === 'default'} onClose={close}>
        <Box>
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
        </Box>
      </Modal>
    </Box>
  );
}
