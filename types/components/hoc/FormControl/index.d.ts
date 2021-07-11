import { FC, ReactNode, InputHTMLAttributes } from 'react';
export declare type Layout = 'vertical' | 'horizontal';
export declare type FormControlProps<E> = {
    additionalLabel?: ReactNode;
    className?: string;
    errorDataSelector?: string;
    errorMessage?: string;
    highlight?: boolean;
    invalid?: boolean;
    label: string;
    required?: boolean;
    strong?: boolean;
    layout?: Layout;
    dataSelector?: string;
} & InputHTMLAttributes<E>;
export declare function FormControl<P, E extends HTMLElement>(Comp: FC<P>): FC<FormControlProps<E> & P>;
//# sourceMappingURL=index.d.ts.map