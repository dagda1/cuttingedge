export declare type Config = IFrameConfig | FigmaConfig | FigspecConfig | ImageConfig | LinkConfig;
export interface ConfigBase {
    name?: string;
    offscreen?: boolean;
}
export interface IFrameConfigBase extends ConfigBase {
    url: string;
    allowFullscreen?: boolean;
}
export interface IFrameConfig extends IFrameConfigBase {
    type: 'iframe';
}
export interface FigmaConfig extends IFrameConfigBase {
    type: 'figma';
    embedHost?: string;
}
export interface FigspecConfig extends ConfigBase {
    type: 'figspec' | 'experimental-figspec';
    url: string;
    accessToken: string;
}
export interface TransformableConfigBase extends ConfigBase {
    scale?: number;
    offset?: [number, number];
}
export interface ImageConfig extends TransformableConfigBase {
    type: 'image';
    url: string;
}
export interface LinkConfig extends ConfigBase {
    type: 'link';
    url: string;
    label?: string;
    showArrow?: boolean;
    target?: string;
    rel?: string;
}
