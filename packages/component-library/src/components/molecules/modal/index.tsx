import React from 'react';
import { Button } from '../../atoms/Button';
import cs from 'classnames';
import { Heading } from '../..';

const styles = require('./Modal.scss');

export interface ModalProps {
  heading: string;
  description: string;
  footer?: string;
  open?: boolean;
  openHandler: (open: boolean) => void;
}

export class Modal extends React.Component<ModalProps> {
  static defaultProps = {
    open: false
  };

  closeModal = (e: Event) => this.props.openHandler(false);

  render() {
    const { description, heading, footer, open, children } = this.props;

    return (
      <div
        className={cs(styles.dialog, { [styles.open]: open })}
        role="dialog"
        aria-labelledby="dialog-title"
        aria-describedby="dialog-description"
      >
        <div className={styles.header} />
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
