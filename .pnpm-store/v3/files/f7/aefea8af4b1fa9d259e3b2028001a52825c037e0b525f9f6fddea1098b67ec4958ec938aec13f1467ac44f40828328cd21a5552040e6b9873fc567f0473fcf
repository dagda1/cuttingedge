"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _selectFirstPage, _handlePageChange;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FigspecFileViewer = void 0;
const lit_element_1 = require("lit-element");
const ErrorMessage = require("./ErrorMessage");
const ViewerMixin_1 = require("./ViewerMixin");
const utils_1 = require("./utils");
// TODO: Move docs for props in mixins (waiting for support at web-component-analyzer)
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
class FigspecFileViewer extends ViewerMixin_1.ViewerMixin(lit_element_1.LitElement) {
    constructor() {
        super(...arguments);
        /**
         * A response of "GET file nodes" API.
         * https://www.figma.com/developers/api#get-file-nodes-endpoint
         */
        this.documentNode = null;
        /**
         * A record of rendered images, where key is an ID of the node,
         * value is an URI of the image.
         * https://www.figma.com/developers/api#get-images-endpoint
         */
        this.renderedImages = null;
        /**
         * Current selected page (node whose type is "CANVAS").
         */
        this.selectedPage = null;
        _selectFirstPage.set(this, () => {
            var _a;
            if (!this.documentNode) {
                this.selectedPage = null;
                return;
            }
            this.selectedPage = (_a = this.documentNode.document.children.filter((c) => c.type === "CANVAS")[0]) !== null && _a !== void 0 ? _a : null;
        });
        _handlePageChange.set(this, (ev) => {
            var _a, _b;
            const target = ev.currentTarget;
            this.selectedPage = (_b = (_a = this.documentNode) === null || _a === void 0 ? void 0 : _a.document.children.find((c) => c.id === target.value)) !== null && _b !== void 0 ? _b : null;
            if (this.selectedPage) {
                this.__updateTree(this.selectedPage);
                this.resetZoom();
                this.__updateEffectMargins();
                this.panX = 0;
                this.panY = 0;
            }
        });
    }
    /** @private */
    get isMovable() {
        return !!(this.renderedImages && this.documentNode);
    }
    /** @private */
    get __images() {
        return this.renderedImages || {};
    }
    /** @private */
    get error() {
        if (!this.documentNode || !this.renderedImages) {
            return ErrorMessage.ErrorMessage({
                title: "Parameter error",
                children: lit_element_1.html `<span>
          Both <code>document-node</code> and <code>rendered-images</code> are
          required.
        </span>`,
            });
        }
        if (super.error) {
            return super.error;
        }
    }
    static get styles() {
        return utils_1.extendStyles(super.styles, [
            lit_element_1.css `
        :host {
          --figspec-control-bg-default: #fcfcfc;
          --figspec-control-fg-default: #333;

          --control-bg: var(
            --figspec-control-bg,
            var(--figspec-control-bg-default)
          );
          --control-fg: var(
            --figspec-control-bg,
            var(--figspec-control-fg-default)
          );
          --control-shadow: var(
            --figspec-control-shadow,
            0 2px 4px rgba(0, 0, 0, 0.3)
          );
          --padding: var(--figspec-control-padding, 8px 16px);

          display: flex;
          flex-direction: column;
        }

        @media (prefers-color-scheme: dark) {
          :host {
            --figspec-control-bg-default: #222;
            --figspec-control-fg-default: #fff;
          }
        }

        .controls {
          flex-shrink: 0;
          padding: var(--padding);

          background-color: var(--control-bg);
          box-shadow: var(--control-shadow);
          color: var(--control-fg);
          z-index: 1;
        }

        .view {
          position: relative;
          flex-grow: 1;
          flex-shrink: 1;
        }
      `,
        ]);
    }
    render() {
        var _a;
        return lit_element_1.html `
      <div class="controls">
        <select @change=${__classPrivateFieldGet(this, _handlePageChange)}>
          ${(_a = this.documentNode) === null || _a === void 0 ? void 0 : _a.document.children.map((c) => lit_element_1.html `<option value=${c.id}>${c.name}</option>`)}
        </select>
      </div>

      <div class="view">${super.render()}</div>
    `;
    }
    getMetadata() {
        return {
            fileName: this.documentNode.name,
            timestamp: this.documentNode.lastModified,
            link: this.link,
        };
    }
    connectedCallback() {
        super.connectedCallback();
        if (this.documentNode) {
            __classPrivateFieldGet(this, _selectFirstPage).call(this);
            if (this.selectedPage) {
                this.__updateTree(this.selectedPage);
                this.resetZoom();
            }
        }
    }
    updated(changedProperties) {
        super.updated(changedProperties);
        if (changedProperties.has("documentNode")) {
            __classPrivateFieldGet(this, _selectFirstPage).call(this);
            if (this.selectedPage) {
                this.__updateTree(this.selectedPage);
                this.resetZoom();
            }
        }
        if (changedProperties.has("renderedImages")) {
            this.__updateEffectMargins();
        }
    }
}
_selectFirstPage = new WeakMap(), _handlePageChange = new WeakMap();
__decorate([
    lit_element_1.property({
        type: Object,
        attribute: "document-node",
    })
], FigspecFileViewer.prototype, "documentNode", void 0);
__decorate([
    lit_element_1.property({
        type: Object,
        attribute: "rendered-images",
    })
], FigspecFileViewer.prototype, "renderedImages", void 0);
exports.FigspecFileViewer = FigspecFileViewer;
