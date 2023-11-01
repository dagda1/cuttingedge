import type { AnchorHTMLAttributes, ComponentType, ForwardRefRenderFunction, Ref } from 'react';
import { forwardRef, useContext, createContext } from 'react';
import HeadingContext from '../Heading/HeadingContext';
import { TextContext } from '../Text/TextContext';
import * as styles from './TextLink.css';
import * as typographyStyles from '../../../style/typography/typography.css';
import cs from 'classnames';
import type { Atoms } from '~/style/atoms/atoms';
import { atoms } from '~/style/atoms/atoms';
import dedent from 'dedent';
import { assert } from 'assert-ts';
import { virtualTouchable } from '../touchable/virtualTouchable';

export interface TextLinkStyles {
  weight?: 'regular' | 'weak';
  showVisited?: boolean;
  hitArea?: 'standard' | 'large';
  external?: boolean;
  ariaLabel?: string;
  ariaLabelledBy?: string;
  underline?: boolean;
  blank?: boolean;
}

export interface LinkComponentProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export interface TextLinkProps extends TextLinkStyles, Omit<LinkComponentProps, 'className' | 'style'> {}

export type LinkComponent = ReturnType<typeof makeLinkComponent> | ComponentType<LinkComponentProps>;

export const makeLinkComponent = (render: ForwardRefRenderFunction<HTMLAnchorElement, LinkComponentProps>) =>
  ({ __forwardRef__: forwardRef(render) }) as const;

// eslint-disable-next-line jsx-a11y/anchor-has-content
const DefaultLinkComponent = makeLinkComponent((props, ref) => <a ref={ref} {...props} />);

const LinkComponentContext = createContext<LinkComponent>(DefaultLinkComponent);

export const useLinkComponent = (
  ref: Ref<HTMLAnchorElement>,
):
  | React.ForwardRefExoticComponent<LinkComponentProps & React.RefAttributes<HTMLAnchorElement>>
  | ComponentType<LinkComponentProps> => {
  const linkComponent = useContext(LinkComponentContext);

  assert(
    !ref || '__forwardRef__' in linkComponent,
    dedent`
      You're passing a ref to a cutting link, but your app is providing a custom link component to 'cuttingProvider' that doesn't appear to support refs.

      To fix this, you need to use cutting's 'makeLinkComponent' helper function when creating your custom link component. This ensures that refs are forwarded correctly, and allows us to silence this error message.
    `,
  );

  if ('__forwardRef__' in linkComponent) {
    return linkComponent.__forwardRef__;
  }

  return linkComponent;
};

export const useLinkStyles = ({
  reset = 'a',
  weight,
  hitArea = 'standard',
  underline,
  showVisited = false,
}: Pick<TextLinkProps, 'weight' | 'showVisited' | 'hitArea' | 'underline'> & {
  reset?: Atoms['reset'] | false;
}): string => {
  const textContext = useContext(TextContext);
  const headingContext = useContext(HeadingContext);

  // Links nested inside Text components that use coloured tones
  // are automatically converted to `weak` weight.
  const isWeakDueToTextTone = !headingContext && textContext?.tone !== 'neutral' && textContext?.tone !== 'secondary';

  const linkStyles = weight === 'weak' || isWeakDueToTextTone ? styles.weakLink : undefined;

  return cs(
    styles.base,
    linkStyles,
    weight !== 'weak' ? typographyStyles.fontWeight.medium : undefined,
    showVisited ? styles.visited : undefined,
    reset !== false
      ? atoms({
          reset: typeof reset === 'string' ? reset : 'a',
        })
      : null,
    atoms({
      cursor: 'pointer',
    }),
    hitArea === 'large' && virtualTouchable(),
    { [styles.underline]: underline },
  );
};

export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
  (
    {
      weight,
      showVisited,
      hitArea,
      ariaLabel,
      ariaLabelledBy,
      underline = true,
      external = false,
      blank = false,
      children,
      ...restProps
    },
    ref,
  ) => {
    const LinkComponent = useLinkComponent(ref);

    const classes = useLinkStyles({
      weight,
      showVisited,
      hitArea,
      underline,
    });

    return (
      <LinkComponent
        aria-label={ariaLabel}
        aria-labelledby={ariaLabelledBy}
        rel={external ? 'noopener noreferrer' : undefined}
        ref={ref}
        target={external && blank ? '_blank' : ''}
        {...restProps}
        className={classes}
      >
        {children}
      </LinkComponent>
    );
  },
);

TextLink.displayName = 'TextLink';
