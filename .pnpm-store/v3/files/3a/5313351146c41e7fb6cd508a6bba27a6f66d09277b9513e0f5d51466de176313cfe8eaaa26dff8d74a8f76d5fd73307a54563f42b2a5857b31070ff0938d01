import * as Figma from "figma-js";
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
