var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, property } from "lit-element";
import * as ErrorMessage from "./ErrorMessage";
import { ViewerMixin } from "./ViewerMixin";
// TODO: Move docs for props in mixins (waiting for support at web-component-analyzer)
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
export class FigspecFrameViewer extends ViewerMixin(LitElement) {
    constructor() {
        super(...arguments);
        /**
         * A response of "GET file nodes" API.
         * https://www.figma.com/developers/api#get-file-nodes-endpoint
         */
        this.nodes = null;
        /**
         * An image rendered by "GET image" API.
         * https://www.figma.com/developers/api#get-images-endpoint
         */
        this.renderedImage = null;
    }
    /** @private */
    get isMovable() {
        return !!(this.nodes && this.renderedImage && this.documentNode);
    }
    /**
     * Readonly. Document node (= root drawable node).
     * @readonly
     */
    get documentNode() {
        if (!this.nodes) {
            return null;
        }
        const documentNode = Object.values(this.nodes.nodes)[0];
        if (!documentNode || !("absoluteBoundingBox" in documentNode.document)) {
            return null;
        }
        return documentNode.document;
    }
    /** @private */
    get __images() {
        if (!this.documentNode || !this.renderedImage) {
            return {};
        }
        return {
            [this.documentNode.id]: this.renderedImage,
        };
    }
    /** @private */
    get error() {
        if (!this.nodes || !this.renderedImage) {
            return ErrorMessage.ErrorMessage({
                title: "Parameter error",
                children: html `<span>
          Both <code>nodes</code> and <code>rendered-image</code> are required.
        </span>`,
            });
        }
        if (!this.documentNode) {
            return ErrorMessage.ErrorMessage({
                title: "Parameter Error",
                children: html `
          <span> Document node is empty or does not have size. </span>
        `,
            });
        }
        if (super.error) {
            return super.error;
        }
    }
    getMetadata() {
        return {
            fileName: this.nodes.name,
            timestamp: this.nodes.lastModified,
            link: this.link,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.documentNode) {
            this.__updateTree(this.documentNode);
            this.__updateEffectMargins();
            this.resetZoom();
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("nodes")) {
            if (!this.documentNode)
                return;
            this.__updateTree(this.documentNode);
            this.resetZoom();
        }
        if (changedProperties.has("renderedImage")) {
            this.__updateEffectMargins();
        }
    }
}
__decorate([
    property({
        type: Object,
    })
], FigspecFrameViewer.prototype, "nodes", void 0);
__decorate([
    property({
        type: String,
        attribute: "rendered-image",
    })
], FigspecFrameViewer.prototype, "renderedImage", void 0);
