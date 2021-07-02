import { useEffect, useState, createContext, ReactNode, FC } from 'react';
import { breakpoints } from '../../breakpoints';

export type Breakpoint = 'mobile' | 'tablet' | 'desktop';

const minWidthQuery = (breakpoint: number) => window.matchMedia(`(min-width: ${breakpoint}px)`);

const getCurrentBreakpoint = (tabletQuery: MediaQueryList, desktopQuery: MediaQueryList) => {
  if (desktopQuery.matches) {
    return 'desktop';
  }
  if (tabletQuery.matches) {
    return 'tablet';
  }
  return 'mobile';
};

export const breakpointContext = createContext<Breakpoint | null>(null);

interface BreakpointProviderProps {
  children: ReactNode;
}
export const BreakpointProvider: FC<BreakpointProviderProps> = ({ children }) => {
  const { tablet, desktop } = breakpoints;

  const [state, setState] = useState<Breakpoint | null>(null);

  useEffect(() => {
    let mounted = true;
    const tabletQuery = minWidthQuery(tablet);
    const desktopQuery = minWidthQuery(desktop);

    const onChange = () => {
      if (!mounted) {
        return;
      }

      const newBreakPoint = getCurrentBreakpoint(tabletQuery, desktopQuery);

      if (newBreakPoint !== state) {
        setState(newBreakPoint);
      }
    };

    tabletQuery.addListener(onChange);
    desktopQuery.addListener(onChange);

    onChange();

    return () => {
      mounted = false;
      tabletQuery.removeListener(onChange);
      desktopQuery.removeListener(onChange);
    };
  }, [tablet, desktop, state]);

  return <breakpointContext.Provider value={state}>{children}</breakpointContext.Provider>;
};
