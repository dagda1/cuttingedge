import { SlideDown } from 'react-slidedown';
import type { ReactNode } from 'react';
import { ContactButtons } from '../Intro/ContactButtons';
import { Heading } from '@cutting/component-library';

export interface VideoSlideDownProps {
  children: ReactNode;
  open?: boolean;
}

export function VideoSlideDown({ children, open }: VideoSlideDownProps): JSX.Element {
  return (
    <SlideDown>
      {open && (
        <div>
          {children ? <div>{children}</div> : <Heading level="2">CONTENT COMING SOON</Heading>}
          <ContactButtons callType="chat" />
        </div>
      )}
    </SlideDown>
  );
}
