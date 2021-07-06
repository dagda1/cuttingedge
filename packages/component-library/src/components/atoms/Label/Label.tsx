import type { FC } from 'react';
import cs from 'classnames';
// import { atoms } from '../../../style/atoms/sprinkles.css';
import * as styles from './Label.css';
import { FontWeight } from '../../../style/themes/make-theme';

export interface LabelProps {
  id?: string;
  htmlFor?: string;
  invalid?: boolean;
  required?: boolean;
  className?: string;
  fontWeight?: FontWeight;
  dataSelector?: string;
}

console.log(styles.invalid);

export const Label: FC<LabelProps> = ({
  id,
  htmlFor,
  // invalid,
  required,
  // className,
  children,
  dataSelector,
  // fontWeight,
}) => (
  <label
    htmlFor={htmlFor}
    id={id}
    className={cs(
      styles.base,
      // className,
      // atoms({
      //   typeSize: {
      //     mobile: '1x',
      //     tablet: '2x',
      //     desktop: '5x',
      //   },
      //   marginBottom: {
      //     mobile: '1x',
      //     tablet: '2x',
      //   },
      // }),
      { [styles.required]: required },
    )}
    data-selector={dataSelector}
  >
    {children}
  </label>
);

Label.displayName = 'Label';
