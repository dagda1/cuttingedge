import type * as Figma from "figma-js";
import { LitElement, TemplateResult } from "lit-element";
declare type SizedNode = Extract<Figma.Node, {
    absoluteBoundingBox: any;
}>;
/**
 * @element figspec-viewer
 */
export declare class FigspecViewer extends LitElement {
    #private;
    /**
     * A response of "GET file nodes" API.
     * https://www.figma.com/developers/api#get-file-nodes-endpoint
     */
    nodes: Figma.FileNodesResponse | null;
    /**
     * An image rendered by "GET image" API.
     * https://www.figma.com/developers/api#get-images-endpoint
     */
    renderedImage: string | null;
    /**
     * Current selected node.
     */
    selectedNode: SizedNode | null;
    /**
     * Current zoom level, where 1.0 = 100%.
     */
    scale: number;
    /**
     * Current pan offset in px for X axis.
     * This is a "before the scale" value.
     */
    panX: number;
    /**
     * Current pan offset in px for Y axis.
     * This is a "before the scale" value.
     */
    panY: number;
    /**
     * How fast zooming when do ctrl+scroll / pinch gestures.
     * Available values: 1 ~ 1000
     */
    zoomSpeed: number;
    /**
     * How fast panning when scroll vertically or horizontally.
     * This does not affect to dragging with middle button pressed.
     * Available values: 1 ~ 1000.
     */
    panSpeed: number;
    constructor();
    static get styles(): import("lit-element").CSSResult;
    get documentNode(): SizedNode | null;
    get parameterError(): TemplateResult | null;
    render(): TemplateResult;
}
export {};
