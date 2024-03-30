import * as styles from './Modal.css';
import { Box, Button } from '@cutting/component-library';
import type { MouseEvent } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ isOpen, onClose, children }: ModalProps): JSX.Element | null {
  if (!isOpen) {
    return null;
  }

  const stopPropagation = (e: MouseEvent) => e.stopPropagation();

  return (
    <Box onClick={onClose} className={styles.container} position="absolute" zIndex="modal">
      <Box onClick={stopPropagation} className={styles.body}>
        {children}
        <Button onClick={onClose}>Close</Button>
      </Box>
    </Box>
  );
}
