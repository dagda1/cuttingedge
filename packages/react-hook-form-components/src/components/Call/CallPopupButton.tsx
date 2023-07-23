import { PopupModal } from 'react-calendly';
import type { CallProps } from './types';
import { Button } from '@cutting/component-library';
import type { ReactNode } from 'react';
import { useState } from 'react';

export const CallPopupButton = ({
  callType,
  children = 'BOOK A CALL',
  rootElementId,
}: CallProps & { children?: ReactNode }): JSX.Element => {
  const [open, setOpen] = useState(false);

  const rootElement = rootElementId
    ? (global?.document?.getElementById(rootElementId) as HTMLElement)
    : (global?.document?.querySelector('main') as HTMLElement);

  return (
    <>
      <PopupModal
        url={`https://calendly.com/dagda1/${callType}`}
        open={open}
        onModalClose={() => setOpen(false)}
        rootElement={rootElement}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideGdprBanner: false,
          hideLandingPageDetails: true,
          primaryColor: '00a2ff',
          textColor: '4d5055',
        }}
      />

      <Button buttonStyle="primary" onClick={() => setOpen(true)}>
        {children}
      </Button>
    </>
  );
};
