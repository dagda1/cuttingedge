export interface FontMetrics {
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
    capHeight: number;
}
export declare type ComputedValues = {
    fontSize: string;
    lineHeight: string;
    capHeightTrim: string;
    baselineTrim: string;
};
declare type NotComputedValues = {
    [V in keyof ComputedValues]?: never;
};
declare type CapHeightWithLeading = {
    capHeight: number;
    leading?: number;
    fontMetrics: FontMetrics;
} & NotComputedValues;
declare type CapHeightWithLineGap = {
    capHeight: number;
    lineGap: number;
    fontMetrics: FontMetrics;
} & NotComputedValues;
declare type FontSizeWithLeading = {
    fontSize: number;
    leading?: number;
    fontMetrics: FontMetrics;
} & Omit<NotComputedValues, 'fontSize'>;
declare type FontSizeWithLineGap = {
    fontSize: number;
    lineGap: number;
    fontMetrics: FontMetrics;
} & Omit<NotComputedValues, 'fontSize'>;
export declare type CapsizeOptions = CapHeightWithLineGap | CapHeightWithLeading | FontSizeWithLineGap | FontSizeWithLeading;
export {};
