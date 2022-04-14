import type * as Figma from "figma-js";
import { LitElement } from "lit-element";
declare const FigspecFileViewer_base: typeof LitElement & import("./utils").Constructor<import("./ViewerMixin").IViewer & import("./NodeSelectableMixin").INodeSelectable & import("./PositionedMixin").Positioned>;
/**
 * A Figma spec viewer. Displays a rendered image alongside sizing guides.
 * @element figspec-file-viewer
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
export declare class FigspecFileViewer extends FigspecFileViewer_base {
    #private;
    /**
     * A response of "GET file nodes" API.
     * https://www.figma.com/developers/api#get-file-nodes-endpoint
     */
    documentNode: Figma.FileResponse | null;
    /**
     * A record of rendered images, where key is an ID of the node,
     * value is an URI of the image.
     * https://www.figma.com/developers/api#get-images-endpoint
     */
    renderedImages: Record<string, string> | null;
    /**
     * Current selected page (node whose type is "CANVAS").
     */
    selectedPage: Figma.Canvas | null;
    /** @private */
    get isMovable(): boolean;
    /** @private */
    get __images(): Record<string, string>;
    /** @private */
    get error(): string | Error | import("lit-element").TemplateResult | undefined;
    static get styles(): import("lit-element").CSSResultArray;
    render(): import("lit-element").TemplateResult;
    getMetadata(): {
        fileName: string;
        timestamp: string;
        link: string;
    };
    connectedCallback(): void;
    updated(changedProperties: Parameters<LitElement["updated"]>[0]): void;
}
export {};
