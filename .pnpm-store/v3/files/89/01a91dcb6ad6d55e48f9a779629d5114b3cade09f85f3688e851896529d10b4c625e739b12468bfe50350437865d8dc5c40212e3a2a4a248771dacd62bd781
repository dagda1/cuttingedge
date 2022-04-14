import * as Figma from "figma-js";
declare type ElementColor = Figma.Color;
declare type GradientStop = {
    color: ElementColor;
    position: number;
};
declare type GradientHandlePosition = {
    x: number;
    y: number;
};
declare type ElementGradientColor = {
    gradientHandlePositions: GradientHandlePosition[];
    gradientStops: GradientStop[];
};
export declare type FigmaNode = Figma.Node & {
    name: string;
    characters: string;
    background: {
        color: ElementColor;
    }[];
    backgroundColor: ElementColor;
    fills: {
        color: ElementColor;
    }[];
    absoluteBoundingBox: {
        height: number;
        width: number;
    };
    cornerRadius?: number;
    rectangleCornerRadii?: number[];
    horizontalPadding: number;
    verticalPadding: number;
    style?: {
        fontFamily: string;
        fontPostScriptName: string;
        fontSize: number;
        fontWeight: number;
        lineHeightPx: number;
        textAlignHorizontal: string;
        textAlignVertical: string;
    };
    type: "TEXT" | "INSTANCE" | "FRAME" | "VECTOR" | "RECTANGLE";
};
export declare type CSSRule = {
    property: string;
    value: string;
    color?: string;
};
export declare class Gradient {
    colors: GradientStop[];
    colorObjects: string[];
    angle: number;
    gradientHandles: {
        start: GradientHandlePosition;
        end: GradientHandlePosition;
    };
    constructor(data: ElementGradientColor);
    get cssGradientArray(): string[];
    get cssColor(): string;
    private createColorObjects;
    private floatToPercent;
    private calculateAngle;
    private calculateGradient;
    private radToDeg;
}
export declare class NodeStyles {
    background: string | undefined;
    backgroundImage: string | undefined;
    border: string | undefined;
    borderColor: string | undefined;
    borderRadius: string | undefined;
    boxShadow: string | undefined;
    boxShadowColor: string | undefined;
    color: string | undefined;
    fontFamily: string | undefined;
    fontPostScriptName: string | undefined;
    fontSize: string | undefined;
    fontWeight: number | undefined;
    height: string;
    horizontalPadding: string | undefined;
    lineHeight: string | undefined;
    verticalPadding: string | undefined;
    width: string;
    hasPadding: boolean;
    constructor(node: FigmaNode);
    getStyles(): CSSRule[];
    getStyleSheet(): string;
}
export declare const getStyleRule: ({ property, value }: CSSRule) => string;
export {};
