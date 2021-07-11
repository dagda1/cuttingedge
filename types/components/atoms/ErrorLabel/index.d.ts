import type { FC, HTMLAttributes } from 'react';
import { StandardProps } from '../../../types';
export declare type ErrorProps = StandardProps<HTMLAttributes<HTMLUListElement>> & {
    errorMessage: string;
    dataSelector?: string;
    className?: string;
};
export declare const Error: FC<ErrorProps>;
export declare const ErrorLabel: FC<ErrorProps>;
//# sourceMappingURL=index.d.ts.map