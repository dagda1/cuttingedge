import type { FC } from 'react';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';

import styles from './ContactMe.module.scss';

export const ContactMe: FC = () => (
  <ApplicationLayout heading="Let me know how I can help" className={styles.container} showFooter={false}>
    <script type="text/javascript" src="https://www.formlets.com/static/js/iframeResizer.min.js"></script>
    <iframe
      title="let me know how I can help"
      className="formlets-iframe"
      src="https://www.formlets.com/forms/GjSjbg7O4bR8tOoE/?iframe=true&amp;nofocus=y"
      frameBorder="0"
      width="100%"
    ></iframe>
    <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
  </ApplicationLayout>
);
