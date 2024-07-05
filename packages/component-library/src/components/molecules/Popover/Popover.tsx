import {
  autoUpdate,
  flip,
  FloatingFocusManager,
  offset,
  shift,
  useClick,
  useDismiss,
  useFloating,
  useInteractions,
  useRole,
} from '@floating-ui/react';
import cs from 'classnames';
import type { ReactNode } from 'react';

import { Text } from '~/components/atoms/Text/Text';

import * as styles from './Popover.css';

interface PopoverProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  heading: ReactNode;
  children: ReactNode;
}

export function Popover({ isOpen, setIsOpen, heading, children }: PopoverProps): JSX.Element {
  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip({ fallbackAxisSideDirection: 'end' }), shift()],
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([click, dismiss, role]);

  return (
    <>
      <button className={styles.popoverButton} ref={refs.setReference} {...getReferenceProps()}>
        <Text>{heading}</Text>
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={cs(styles.popover, 'Popover')}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {children}
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
