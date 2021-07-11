import type { FC, DetailedHTMLProps, ButtonHTMLAttributes, MouseEventHandler } from 'react';
import { StandardProps } from '../../../types';
export declare type ButtonStyle = 'primary' | 'secondary' | 'inverse' | 'warning';
export declare type ButtonProps = StandardProps<DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>> & {
    onClick?: MouseEventHandler;
    buttonStyle?: ButtonStyle;
    ariaLabel?: string;
    ariaLabelledBy?: string;
};
export declare const Button: FC<ButtonProps>;
//# sourceMappingURL=Button.d.ts.map