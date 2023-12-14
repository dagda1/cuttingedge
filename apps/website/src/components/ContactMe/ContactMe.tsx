import { ApplicationLayout } from '~/layouts/ApplicationLayout';

import * as styles from './ContactMe.css.js';
import { PageBlock } from '@cutting/component-library';

export function ContactMe(): JSX.Element {
  return (
    <ApplicationLayout heading="Let me know how I can help" showFooter={false}>
      <PageBlock>
        <div className={styles.container}>
          <script type="text/javascript" src="https://www.formlets.com/static/js/iframeResizer.min.js"></script>
          <iframe
            title="let me know how I can help"
            className="formlets-iframe"
            src="https://www.formlets.com/forms/GjSjbg7O4bR8tOoE/?iframe=true&amp;nofocus=y"
            frameBorder="0"
            width="100%"
          ></iframe>
          <script type="text/javascript" src="https://www.formlets.com/static/js/iframe.js"></script>
        </div>
      </PageBlock>
    </ApplicationLayout>
  );
}
