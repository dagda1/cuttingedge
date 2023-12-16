import cs from 'classnames';
import { type AllHTMLAttributes, type ElementType, createElement, forwardRef, useEffect } from 'react';
import dedent from 'dedent';
import type { Atoms } from '../../../style/atoms/atoms.js';
import { atoms } from '../../../style/atoms/atoms.js';
import { sprinkles } from '../../../style/atoms/sprinkles.css.js';
import { base as baseReset } from '../../../style/reset/reset.css.js';

export interface BoxBaseProps extends Omit<Atoms, 'reset' | 'background'> {
  className?: string;
}

export interface BoxProps extends BoxBaseProps, Omit<AllHTMLAttributes<HTMLElement>, 'width' | 'height' | 'className'> {
  component?: ElementType;
  dataTestid?: string;
}

export const Box = forwardRef<HTMLElement, BoxProps>(
  ({ component = 'div', dataTestid, className, ...restProps }, ref) => {
    const atomProps: Record<string, unknown> = {};
    const nativeProps: Record<string, unknown> = {};

    for (const key in restProps) {
      if (sprinkles.properties.has(key as keyof Omit<Atoms, 'reset'>)) {
        atomProps[key] = restProps[key as keyof typeof restProps];
      } else {
        nativeProps[key] = restProps[key as keyof typeof restProps];
      }
    }

    const userClasses = cs(className);

    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      useEffect(() => {
        if (userClasses.includes(baseReset)) {
          throw new Error(
            dedent`
              Reset class has been applied more than once. This is normally caused when asking for an explicit reset on the \`atoms\` function. This can be removed as Box automatically adds reset classes.

              atoms({
                reset: '...' // <-- Remove this
              })
            `,
          );
        }
      }, [userClasses]);
    }

    const atomicClasses = atoms({
      reset: typeof component === 'string' ? component : 'div',
      ...atomProps,
    });

    const combinedClasses = `${atomicClasses}${userClasses ? ` ${userClasses}` : ''}`;

    return createElement(component, {
      className: combinedClasses,
      ...nativeProps,
      ...(dataTestid ? { ['data-testid']: dataTestid } : {}),
      ref,
    });
  },
);

Box.displayName = 'Box';
