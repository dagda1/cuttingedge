import type { HTMLAttributes } from 'react';
import type { StandardProps } from '~/types/index.js';
import { visuallyHidden } from '~/style/accessibility.css.js';
import { Text } from '~/components/atoms/Text/Text.js';

export type ErrorProps = StandardProps<HTMLAttributes<HTMLUListElement>> & {
  errorMessage: string;
  dataSelector?: string;
};

export function ErrorMessage({ id = 'error', dataSelector = 'form-error', errorMessage }: ErrorProps): JSX.Element {
  return (
    <Text tone="critical" id={id} dataTestid={dataSelector}>
      <span className={visuallyHidden}>Error:</span>
      {errorMessage}
    </Text>
  );
}
