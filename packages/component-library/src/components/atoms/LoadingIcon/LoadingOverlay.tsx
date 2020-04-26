import React from 'react';
import LoadingIcon from './LoadingIcon';
import cs from 'classnames';

const styles = require('./LoadingIcon.module.scss');
export interface LoadingOverlayProps {
  busy: boolean;
  text?: string;
  darkMode?: boolean;
}

export const LoadingOverlay = ({ busy, text, darkMode }: LoadingOverlayProps) =>
  busy ? (
    <div
      className={cs(styles['spinner-overlay'], { [styles.dark]: darkMode })}
      data-selector="spinner"
    >
      <div className={styles.spinner}>
        <LoadingIcon darkMode={darkMode} />
        {text && <h2>{text}</h2>}
      </div>
    </div>
  ) : null;

export default LoadingOverlay;
