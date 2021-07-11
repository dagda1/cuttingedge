import type { RouteProps } from 'react-router';
import { EmptyObject } from './object';
export declare type Page<P = EmptyObject> = RouteProps & {
    heading: string;
    path: string;
    footerPage?: boolean;
    className?: string;
} & P;
//# sourceMappingURL=routes.d.ts.map