import * as React from 'react';

const styles = require('./MobileNavButton.scss');

export interface MobileNavButtonProps {
  onClick: React.MouseEventHandler<any>;
  isActive?: boolean;
}

export const MobileNavButton: React.SFC<MobileNavButtonProps> = ({ onClick, isActive }) => (
  <button className={isActive ? styles.MobileNavButtonActive : styles.MobileNavButton} onClick={onClick}>
    <svg className={styles.MobileNavButtonIcon} viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" className={styles.MobileNavButtonIconPath} />
    </svg>
  </button>
);
