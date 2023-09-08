import { Text, List } from '@cutting/component-library';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useDismiss,
  useRole,
  useClick,
  useInteractions,
  FloatingFocusManager,
} from '@floating-ui/react';
import { useState } from 'react';
import { TextNavLink } from '../TextNavLink/TextNavLink';
import cs from 'classnames';
import * as styles from './VizPopover.css';
import * as navStyles from './Nav.css';

export function Popover(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

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
        <Text>VIZ</Text>
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            className={cs(styles.popover, 'Popover')}
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <List type="none">
              <TextNavLink onClick={() => setIsOpen(false)} className={navStyles.submenu} to="/viz">
                SINE
              </TextNavLink>
              <TextNavLink onClick={() => setIsOpen(false)} className={navStyles.submenu} to="/viz/function-plot">
                FUNCTIONS
              </TextNavLink>
              <TextNavLink onClick={() => setIsOpen(false)} className={navStyles.submenu} to="/viz/sine2">
                MORE SINE
              </TextNavLink>
              <TextNavLink onClick={() => setIsOpen(false)} className={navStyles.submenu} to="/viz/tan">
                TAN
              </TextNavLink>
            </List>
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
