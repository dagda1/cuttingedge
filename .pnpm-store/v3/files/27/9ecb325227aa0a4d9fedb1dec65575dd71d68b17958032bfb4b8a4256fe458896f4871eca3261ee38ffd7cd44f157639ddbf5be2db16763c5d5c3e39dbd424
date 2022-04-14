import * as Figma from "figma-js";
import { StyleInfo } from "lit-html/directives/style-map";
export interface OutlineProps {
    node: Extract<Figma.Node, {
        absoluteBoundingBox: any;
    }>;
    computedThickness: number;
    style?: StyleInfo;
}
export declare const Outline: ({ node, computedThickness, style, }: OutlineProps) => import("lit-element").SVGTemplateResult;
export declare const styles: import("lit-element").CSSResult;
