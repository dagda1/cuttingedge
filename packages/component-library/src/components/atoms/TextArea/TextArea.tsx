import cs from 'classnames';
import type { Ref, TextareaHTMLAttributes } from 'react';

import { invalid as elmentInvalid, root } from '~/components/atoms/Input/Input.css';

import * as styles from './TextArea.css';

export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  invalid?: boolean;
  innerRef?: Ref<HTMLTextAreaElement>;
}

export function TextArea({ required, className, invalid, innerRef, ...rest }: TextAreaProps): JSX.Element {
  return (
    <textarea
      required={required}
      aria-required={required}
      className={cs(root, styles.root, className, {
        [elmentInvalid]: invalid,
      })}
      ref={innerRef}
      {...rest}
    />
  );
}

TextArea.displayName = 'TextArea';
