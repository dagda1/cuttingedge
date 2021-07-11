import type { FC, InputHTMLAttributes, RefObject } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    invalid?: boolean;
    innerRef?: RefObject<HTMLInputElement>;
}
export declare const Input: FC<InputProps>;
//# sourceMappingURL=index.d.ts.map