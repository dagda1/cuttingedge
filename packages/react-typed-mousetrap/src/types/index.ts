import { FunctionComponent, ComponentClass } from 'react';
import { UseShortcuts } from '@cutting/use-shortcuts';

export interface ShortcutsProps<
  TScopedWrapperComponentType = React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>
> extends Omit<UseShortcuts, 'ref'> {
  tabIndex?: number;
  className?: string;
  dataSelector?: string;
  scoped?: boolean;

  ScopedWrapperComponentType?:
    | FunctionComponent<TScopedWrapperComponentType>
    | ComponentClass<TScopedWrapperComponentType>
    | string;
}
