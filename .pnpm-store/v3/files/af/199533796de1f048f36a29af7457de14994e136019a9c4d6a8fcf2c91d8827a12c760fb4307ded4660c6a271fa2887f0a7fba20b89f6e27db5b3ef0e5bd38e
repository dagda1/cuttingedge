import * as Figma from "figma-js";
import { CSSResultArray, LitElement } from "lit-element";
export declare type SizedNode = Extract<Figma.Node, {
    absoluteBoundingBox: any;
}>;
export interface Point2D {
    x: number;
    y: number;
}
export declare type DistanceGuide = {
    /**
     * Solid line
     */
    points: [Point2D, Point2D];
    /**
     * Dashed line
     */
    bisector?: [Point2D, Point2D];
};
export declare function getDistanceGuides(selected: Figma.Rect, compared: Figma.Rect): readonly DistanceGuide[];
/**
 * x.xxxxx... -> x.xx
 */
export declare function round(n: number): number;
/**
 * Utility type for creating constructor type from an interface.
 * @example
 * function FooMixin<T extends Constructor<LitElement>>(Base: T): T & Constructor<MixinInterface> {
 *  // ...
 * }
 */
export declare type Constructor<T> = new (...args: any[]) => T;
export declare function extendStyles(left: typeof LitElement.styles, right: typeof LitElement.styles): CSSResultArray;
