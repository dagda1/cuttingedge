import React from 'react';
import { LinkWrapper } from '../LinkWrapper/LinkWrapper';
import { useRouter } from 'next/router';
import * as styles from './Navigator.css';
import { Button } from '@cutting/component-library';

interface NavigatorProps {
  steps: number;
}

export function Navigator({}: NavigatorProps): JSX.Element {
  const router = useRouter();
  const step = Number(router.query.step);

  const previousLink = step <= 1 ? 1 : step - 1;

  return (
    <div className={styles.buttonContainer}>
      <LinkWrapper
        linkType="button"
        href="/productivity-test/[step]"
        as={step - 1 === 0 ? '/productivity-test/1' : `/productivity-test/${previousLink}`}
        buttonStyle={step - 1 === 0 ? 'warning' : 'secondary'}
      >
        Previous
      </LinkWrapper>
      <Button type="submit" buttonStyle="primary">
        NEXT
      </Button>
    </div>
  );
}
