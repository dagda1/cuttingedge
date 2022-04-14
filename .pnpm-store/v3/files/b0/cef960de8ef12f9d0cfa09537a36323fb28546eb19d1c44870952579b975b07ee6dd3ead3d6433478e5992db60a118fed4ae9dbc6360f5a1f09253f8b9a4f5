import type * as Figma from "figma-js";
import { LitElement } from "lit-element";
import { SizedNode } from "./utils";
declare const FigspecFrameViewer_base: typeof LitElement & import("./utils").Constructor<import("./ViewerMixin").IViewer & import("./NodeSelectableMixin").INodeSelectable & import("./PositionedMixin").Positioned>;
/**
 * A Figma spec viewer. Displays a rendered image alongside sizing guides.
 * @element figspec-frame-viewer
 *
 * @property {number} [panX=0]
 * Current pan offset in px for X axis.
 * This is a "before the scale" value.
 *
 * @property {number} [panY=0]
 * Current pan offset in px for Y axis.
 * This is a "before the scale" value.
 *
 * @property {number} [scale=1]
 * Current zoom level, where 1.0 = 100%.
 *
 * @property {number} [zoomSpeed=500]
 * How fast zooming when do ctrl+scroll / pinch gestures.
 * Available values: 1 ~ 1000
 * @attr [zoom-speed=500] See docs for `zoomSpeed` property.
 *
 * @property {number} [panSpeed=500]
 * How fast panning when scroll vertically or horizontally.
 * This does not affect to dragging with middle button pressed.
 * Available values: 1 ~ 1000.
 * @attr [pan-speed=500] See docs for `panSpeed` property.
 *
 * @property {Figma.Node | null} [selectedNode=null]
 * Current selected node.
 *
 * @property {string} [link=null]
 * Figma link for the given project/node. If passed, figspec will present a footer with metadata and a link to figma.
 *
 * @property {number} [zoomMargin=50]
 * The minimum margin for the preview canvas in px. Will be used when the preview
 * setting a default zooming scale for the canvas.
 * @attr [zoom-margin=50] See docs for `zoomMargin` property.
 *
 * @fires scalechange When a user zoom-in or zoom-out the preview.
 * @fires positionchange When a user panned the preview.
 * @fires nodeselect When a user selected / unselected a node.
 */
export declare class FigspecFrameViewer extends FigspecFrameViewer_base {
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
    /** @private */
    get isMovable(): boolean;
    /**
     * Readonly. Document node (= root drawable node).
     * @readonly
     */
    get documentNode(): SizedNode | null;
    /** @private */
    get __images(): {
        [x: string]: string;
    };
    /** @private */
    get error(): string | Error | import("lit-element").TemplateResult | undefined;
    getMetadata(): {
        fileName: string;
        timestamp: string;
        link: string;
    };
    connectedCallback(): void;
    updated(changedProperties: Parameters<LitElement["updated"]>[0]): void;
}
export {};
