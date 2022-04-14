import { LitElement } from "lit-element";
import * as Figma from "figma-js";
declare type SizedNode = Extract<Figma.Node, {
    absoluteBoundingBox: any;
}>;
export declare class FigmaViewerGuide extends LitElement {
    node: SizedNode | null;
    level: number;
    offsetX: number;
    offsetY: number;
    selected: boolean;
    distanceTo: SizedNode | null;
    scale: number;
    static get styles(): import("lit-element").CSSResult[];
    render(): import("lit-element").TemplateResult;
}
export {};
