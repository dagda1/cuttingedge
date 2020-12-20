import { MouseEvent, useCallback } from 'react';
import type { FC } from 'react';
import { Button } from '../../atoms/Button';
import cs from 'classnames';
import { Heading } from '../../atoms/Heading';

import styles from './Modal.module.scss';

export interface ModalProps {
  heading: string;
  description: string;
  footer?: string;
  open?: boolean;
  openHandler: (open: boolean) => void;
}

export const Modal: FC<ModalProps> = ({ description, heading, footer, open = false, openHandler, children }) => {
  const closeModal = useCallback(
    (e: MouseEvent): void => {
      e.stopPropagation();
      openHandler(false);
    },
    [openHandler],
  );

  return (
    <div
      className={cs(styles.dialog, { [styles.open]: open })}
      role="dialog"
      aria-labelledby="dialog-title"
      aria-describedby="dialog-description"
    >
      <div className={styles.heading}>
        <Heading level={2}>{heading}</Heading>
        <Button onClick={closeModal}>
          <div>x</div>
        </Button>
      </div>
      <p className={styles.description}>{description}</p>
      <div className={styles.body}>{children}</div>
      <div className={styles.footer}>
        <Heading level={2}>{footer}</Heading>
      </div>
    </div>
  );
};
