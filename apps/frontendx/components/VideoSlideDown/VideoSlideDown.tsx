import { SlideDown } from 'react-slidedown';
import type { ReactNode } from 'react';
import { ContactButtons } from '../Intro/ContactButtons';

export interface VideoSlideDownProps {
  children: ReactNode;
  open?: boolean;
}

export function VideoSlideDown({ children, open }: VideoSlideDownProps): JSX.Element {
  return (
    <SlideDown>
      {open && (
        <div>
          {children ? <div>{children}</div> : <h2>CONTENT COMING SOON</h2>}
          <ContactButtons callType="chat" />
        </div>
      )}
    </SlideDown>
  );
}
