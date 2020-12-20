import type { ReactNode, MouseEvent } from 'react';
import { Component } from 'react';
import { Button } from '../../atoms/Button';
import cs from 'classnames';
import { Heading } from '../..';

import styles from './Modal.module.scss';

export interface ModalProps {
  heading: string;
  description: string;
  footer?: string;
  open?: boolean;
  openHandler: (open: boolean) => void;
}

export class Modal extends Component<ModalProps> {
  public static defaultProps = {
    open: false,
  };

  closeModal = (e: MouseEvent): void => {
    e.stopPropagation();
    this.props.openHandler(false);
  };

  render(): ReactNode {
    const { description, heading, footer, open, children } = this.props;

    return (
      <div
        className={cs(styles.dialog, { [styles.open]: open })}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div className={styles.heading}>
          <Heading level={2}>{heading}</Heading>
          <Button onClick={this.closeModal}>
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
  }
}
