import * as styles from './ContactButtons.css';
import { CallPopupButton } from '../Call/CallPopupButton';
import type { CallType } from '../Call/types';
import type { ButtonStyle } from '@cutting/component-library';
import { Box, Button, Text } from '@cutting/component-library';
import { useCallback, useState } from 'react';
import { Modal } from '../Modal/Modal';
import { Contact } from '../Contact/Contact';

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
          <Box
            className={styles.modal}
            width="full"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Box className={styles.content}>
              <Contact />
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
