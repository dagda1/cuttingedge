import type { FC, MouseEventHandler } from 'react';
import styles from './MobileNavButton.module.scss';

export interface MobileNavButtonProps {
  onClick: MouseEventHandler;
  isActive?: boolean;
}

export const MobileNavButton: FC<MobileNavButtonProps> = ({ onClick, isActive }) => (
  <button
    id="mobile-nav"
    aria-label="Open menu button"
    className={isActive ? styles.MobileNavButtonActive : styles.MobileNavButton}
    onClick={onClick}
  >
    <svg
      height="24"
      className="octicon octicon-three-bars notification-indicator"
      viewBox="0 0 12 16"
      version="1.1"
      width="18"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        // eslint:disable-next-line
        d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"
      />
    </svg>
  </button>
);
