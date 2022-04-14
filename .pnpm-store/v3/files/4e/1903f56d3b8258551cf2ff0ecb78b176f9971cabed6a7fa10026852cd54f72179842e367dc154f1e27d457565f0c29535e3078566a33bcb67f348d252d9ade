import { CSSProperties, FC } from 'react';
import * as config from './config';
export interface BlocksCommonProps {
    className?: string;
    style?: CSSProperties;
    height?: string | number;
    collapsable?: boolean;
    defaultCollapsed?: boolean;
    placeholder?: string;
    showLink?: boolean;
}
export declare const DocBlockBase: FC<BlocksCommonProps>;
export declare const Figma: FC<Omit<config.FigmaConfig, 'type'> & BlocksCommonProps>;
export declare const Figspec: FC<Omit<config.FigspecConfig, 'type'> & BlocksCommonProps>;
export declare const IFrame: FC<Omit<config.IFrameConfig, 'type'> & BlocksCommonProps>;
export declare const Image: FC<Omit<config.ImageConfig, 'type'> & BlocksCommonProps>;
export interface DesignProps {
    storyId: string;
}
export declare const Design: FC<DesignProps & Omit<BlocksCommonProps, 'showLink'>>;
