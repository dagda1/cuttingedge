import cs from 'classnames';

import { Heading } from '../../atoms/Heading/Heading';
import { LoadingIcon } from './LoadingIcon';
import * as styles from './LoadingIcon.css';

export interface LoadingOverlayProps {
  busy: boolean;
  text?: string;
  darkMode?: boolean;
}

export const LoadingOverlay = ({ busy, text, darkMode }: LoadingOverlayProps): JSX.Element | null =>
  busy ? (
    <div className={cs(styles.spinnerOverlay, { [styles.dark]: darkMode })} data-testid="spinner">
      <div className={styles.spinner}>
        <LoadingIcon darkMode={darkMode} />
        {text && <Heading level="2">{text}</Heading>}
      </div>
    </div>
  ) : null;

export default LoadingOverlay;
