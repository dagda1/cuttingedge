import { useContext } from 'react';
import { Breakpoint } from 'src/style/breakpoints';

import { breakpointContext } from './breakpoints-provider';

export const useBreakpoint = (): Breakpoint | null => useContext(breakpointContext);
