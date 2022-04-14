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
var _handleNodeClick;
import { LitElement, css, html, property } from "lit-element";
/**
 * @element figspec-viewer
 */
export class FigspecViewer extends LitElement {
    constructor() {
        super();
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
        /**
         * Current selected node.
         */
        this.selectedNode = null;
        /**
         * Current zoom level, where 1.0 = 100%.
         */
        this.scale = 1;
        /**
         * Current pan offset in px for X axis.
         * This is a "before the scale" value.
         */
        this.panX = 0;
        /**
         * Current pan offset in px for Y axis.
         * This is a "before the scale" value.
         */
        this.panY = 0;
        /**
         * How fast zooming when do ctrl+scroll / pinch gestures.
         * Available values: 1 ~ 1000
         */
        this.zoomSpeed = 500;
        /**
         * How fast panning when scroll vertically or horizontally.
         * This does not affect to dragging with middle button pressed.
         * Available values: 1 ~ 1000.
         */
        this.panSpeed = 500;
        _handleNodeClick.set(this, (node) => (ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            this.selectedNode = node;
        });
        this.addEventListener("click", () => {
            this.selectedNode = null;
        });
        this.addEventListener("wheel", (ev) => {
            if (this.parameterError)
                return;
            ev.preventDefault();
            if (ev.ctrlKey) {
                // Performs zoom when ctrl key is pressed.
                let { deltaY } = ev;
                if (ev.deltaMode === 1) {
                    // Firefox quirk
                    deltaY *= 15;
                }
                const prevScale = this.scale;
                this.scale *= 1 - deltaY / ((1000 - this.zoomSpeed) * 0.5);
                // Performs pan to archive "zoom at the point" behavior (I don't know how to call it).
                const offsetX = ev.offsetX - this.offsetWidth / 2;
                const offsetY = ev.offsetY - this.offsetHeight / 2;
                this.panX += offsetX / this.scale - offsetX / prevScale;
                this.panY += offsetY / this.scale - offsetY / prevScale;
            }
            else {
                // Performs pan otherwise (to be close to native behavior)
                // Adjusting panSpeed in order to make panSpeed=500 to match to the Figma's one.
                const speed = this.panSpeed * 0.002;
                this.panX -= (ev.deltaX * speed) / this.scale;
                this.panY -= (ev.deltaY * speed) / this.scale;
            }
        }, 
        // This component prevents every native wheel behavior on it.
        { passive: false });
        this.addEventListener("pointermove", (ev) => {
            // Performs pan only when middle buttons is pressed.
            //
            // 4 ... Auxiliary button (usually the mouse wheel button or middle button)
            // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/buttons
            if (!(ev.buttons & 4))
                return;
            ev.preventDefault();
            // Moving amount of middle button+pointer move panning should matches to the actual
            // pointer travel distance. Since translate goes after scaling, we need to scale
            // delta too.
            this.panX += ev.movementX / this.scale / window.devicePixelRatio;
            this.panY += ev.movementY / this.scale / window.devicePixelRatio;
        });
    }
    static get styles() {
        return css `
      :host {
        --bg: var(--figma-viewer-bg, #666);
        --z-index: var(--figma-viewer-z-index, 0);
        --error-bg: var(--figma-viewer-error-bg, #870909);
        --error-fg: var(--figma-viewer-error-fg, white);

        position: relative;
        display: block;

        background-color: var(--bg);
        user-select: none;
        overflow: hidden;
        z-index: var(--z-index);
      }

      .canvas {
        position: absolute;
        top: 50%;
        left: 50%;
      }

      .rendered-image {
        position: absolute;
        top: 0;
        left: 0;
      }

      .error {
        position: absolute;
        top: 50%;
        left: 50%;
        max-width: 80%;
        padding: 0.75em 1em;

        background-color: var(--error-bg);
        border-radius: 4px;
        color: var(--error-fg);

        transform: translate(-50%, -50%);
      }

      .error-title {
        display: block;
        font-size: 0.8em;

        font-weight: bold;
        text-transform: capitalize;
      }

      .error-description {
        display: block;
        margin-block-start: 0.5em;
      }
    `;
    }
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
    get parameterError() {
        if (!this.nodes || !this.renderedImage) {
            return html `Both <code>nodes</code> and <code>rendered-image</code> are
        required.`;
        }
        if (!this.documentNode) {
            return html `Document node is empty or does not have size.`;
        }
        return null;
    }
    render() {
        if (this.parameterError) {
            return html `
        <p class="error">
          <span class="error-title">Parameter error</span>
          <span class="error-description">${this.parameterError}</span>
        </p>
      `;
        }
        const documentNode = this.documentNode;
        const nodes = flattenNode(documentNode);
        const margin = getCanvasMargin(documentNode, nodes);
        const canvasSize = documentNode.absoluteBoundingBox;
        const { scale, panX, panY } = this;
        return html `
      <div
        class="canvas"
        style="
          width: ${canvasSize.width}px;
          height: ${canvasSize.height}px;

          transform: translate(-50%, -50%) scale(${scale}) translate(${panX}px, ${panY}px);
        "
      >
        <img
          class="rendered-image"
          src="${this.renderedImage}"
          style="
            margin-top: ${-margin.top}px;
            margin-left: ${-margin.left}px;
            width: ${canvasSize.width + margin.left + margin.right}px;
            height: ${canvasSize.height + margin.top + margin.bottom}px;
          "
        />
        ${nodes.map((node) => {
            var _a, _b;
            return html `
            <figma-viewer-guide
              .node=${node}
              .distanceTo=${node.id !== ((_a = this.selectedNode) === null || _a === void 0 ? void 0 : _a.id)
                ? this.selectedNode
                : null}
              offset-x="${-canvasSize.x}"
              offset-y="${-canvasSize.y}"
              level="${node.depth}"
              scale="${this.scale}"
              ?selected=${node.id === ((_b = this.selectedNode) === null || _b === void 0 ? void 0 : _b.id)}
              @click=${__classPrivateFieldGet(this, _handleNodeClick).call(this, node)}
            >
            </figma-viewer-guide>
          `;
        })}
      </div>
    `;
    }
}
_handleNodeClick = new WeakMap();
__decorate([
    property({
        type: Object,
    })
], FigspecViewer.prototype, "nodes", void 0);
__decorate([
    property({
        type: String,
        attribute: "rendered-image",
    })
], FigspecViewer.prototype, "renderedImage", void 0);
__decorate([
    property({
        attribute: false,
    })
], FigspecViewer.prototype, "selectedNode", void 0);
__decorate([
    property({
        attribute: false,
    })
], FigspecViewer.prototype, "scale", void 0);
__decorate([
    property({
        attribute: false,
    })
], FigspecViewer.prototype, "panX", void 0);
__decorate([
    property({
        attribute: false,
    })
], FigspecViewer.prototype, "panY", void 0);
__decorate([
    property({
        type: Number,
        attribute: "zoom-speed",
    })
], FigspecViewer.prototype, "zoomSpeed", void 0);
__decorate([
    property({
        type: Number,
        attribute: "pan-speed",
    })
], FigspecViewer.prototype, "panSpeed", void 0);
function getCanvasMargin(documentNode, nodes) {
    const points = nodes.map((node) => {
        if (!("effects" in node)) {
            return {
                top: node.absoluteBoundingBox.y,
                right: node.absoluteBoundingBox.x + node.absoluteBoundingBox.width,
                bottom: node.absoluteBoundingBox.y + node.absoluteBoundingBox.height,
                left: node.absoluteBoundingBox.x,
            };
        }
        const blurRadiuses = node.effects
            .filter((effect) => effect.visible && effect.type === "LAYER_BLUR")
            .map((effect) => effect.radius);
        const shadowMargins = node.effects
            .filter((effect) => effect.visible && effect.type === "DROP_SHADOW" && !!effect.offset)
            .map((effect) => {
            return {
                left: effect.radius - effect.offset.x,
                top: effect.radius - effect.offset.y,
                right: effect.radius + effect.offset.x,
                bottom: effect.radius + effect.offset.y,
            };
        });
        const margin = {
            top: Math.max(0, ...blurRadiuses, ...shadowMargins.map((margin) => margin.top)),
            right: Math.max(0, ...blurRadiuses, ...shadowMargins.map((margin) => margin.right)),
            bottom: Math.max(0, ...blurRadiuses, ...shadowMargins.map((margin) => margin.bottom)),
            left: Math.max(0, ...blurRadiuses, ...shadowMargins.map((margin) => margin.left)),
        };
        return {
            top: node.absoluteBoundingBox.y - margin.top,
            right: node.absoluteBoundingBox.x +
                node.absoluteBoundingBox.width +
                margin.right,
            bottom: node.absoluteBoundingBox.y +
                node.absoluteBoundingBox.height +
                margin.bottom,
            left: node.absoluteBoundingBox.x - margin.left,
        };
    });
    const bounds = {
        top: Math.min(...points.map((p) => p.top)),
        right: Math.max(...points.map((p) => p.right)),
        bottom: Math.max(...points.map((p) => p.bottom)),
        left: Math.min(...points.map((p) => p.left)),
    };
    return {
        top: documentNode.absoluteBoundingBox.y - bounds.top,
        right: bounds.right -
            documentNode.absoluteBoundingBox.x -
            documentNode.absoluteBoundingBox.width,
        bottom: bounds.bottom -
            documentNode.absoluteBoundingBox.y -
            documentNode.absoluteBoundingBox.height,
        left: documentNode.absoluteBoundingBox.x - bounds.left,
    };
}
function flattenNode(node, depth = 0) {
    if (!("absoluteBoundingBox" in node)) {
        return node.children.map((child) => flattenNode(child, depth + 1)).flat();
    }
    if (!("children" in node) || node.children.length === 0) {
        return [Object.assign(Object.assign({}, node), { depth })];
    }
    return [
        Object.assign(Object.assign({}, node), { depth }),
        ...node.children.map((child) => flattenNode(child, depth + 1)).flat(),
    ];
}
