import * as styles from './Modal.css';
import { Box, Button } from '@cutting/component-library';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps): JSX.Element | null {
  if (!isOpen) {
    return null;
  }

  return (
    <Box onClick={onClose} className={styles.container} position="absolute" zIndex="modal">
      <Box className={styles.body} data-testid="modal">
        <Box display="flex" justifyContent="flexEnd">
          <Button type="button" onClick={onClose} className={styles.closeButton}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Button>
        </Box>
        {children}
      </Box>
    </Box>
  );
}
