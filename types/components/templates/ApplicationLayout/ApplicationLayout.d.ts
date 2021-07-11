import type { FC, ReactElement, RefObject } from 'react';
export interface ApplicationLayoutProps {
    heading?: string | JSX.Element;
    italicise?: boolean;
    center?: boolean;
    className?: string;
    Footer?: ReactElement;
    Header?: ReactElement;
    innerRef?: RefObject<HTMLElement>;
}
export declare const ApplicationLayout: FC<ApplicationLayoutProps>;
export declare const ApplicationLayoutWithRouterScroll: FC<Omit<ApplicationLayoutProps, 'innerRef'>>;
//# sourceMappingURL=ApplicationLayout.d.ts.map