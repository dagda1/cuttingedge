import * as Figma from "figma-js";
export interface OutlineProps {
    node: Extract<Figma.Node, {
        absoluteBoundingBox: any;
    }>;
    computedThickness: number;
    selected?: boolean;
    onClick?(ev: MouseEvent): void;
}
export declare const Outline: ({ node, selected, computedThickness, onClick, }: OutlineProps) => import("lit-element").SVGTemplateResult;
export interface TooltipProps {
    nodeSize: Figma.Rect;
    offsetX: number;
    offsetY: number;
    reverseScale: number;
}
export declare const Tooltip: ({ nodeSize: { x, y, width, height }, offsetX, offsetY, reverseScale, }: TooltipProps) => import("lit-element").TemplateResult;
export declare const styles: import("lit-element").CSSResult;
