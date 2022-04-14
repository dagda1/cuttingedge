import type * as Figma from "figma-js";
import { LitElement, TemplateResult } from "lit-element";
declare type SizedNode = Extract<Figma.Node, {
    absoluteBoundingBox: any;
}>;
/**
 * A Figma spec viewer. Displays a rendered image alongside sizing guides.
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
    /**
     * The minimum margin for the preview canvas. Will be used when the preview
     * setting a default zooming scale for the canvas.
     */
    zoomMargin: number;
    constructor();
    movePanel(shiftX: number, shiftY: number): void;
    static get styles(): import("lit-element").CSSResult[];
    /**
     * Readonly. Document node (= root drawable node).
     * @readonly
     */
    get documentNode(): SizedNode | null;
    /**
     * @private
     */
    get parameterError(): TemplateResult | null;
    render(): TemplateResult;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: Parameters<LitElement["updated"]>[0]): void;
}
export {};
