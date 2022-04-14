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
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewerMixin = void 0;
const lit_element_1 = require("lit-element");
const style_map_1 = require("lit-html/directives/style-map");
const utils_1 = require("./utils");
const NodeSelectableMixin_1 = require("./NodeSelectableMixin");
const PositionedMixin_1 = require("./PositionedMixin");
const DistanceGuide = require("./DistanceGuide");
const InspectorView = require("./InspectorView/InspectorView");
const ErrorMessage = require("./ErrorMessage");
const Node = require("./Node");
const FigmaFooter = require("./Footer/Footer");
exports.ViewerMixin = (superClass) => {
    var _canvasSize, _effectMargins, _flattenedNodes, _handleNodeClick, _getNodeById;
    class Viewer extends NodeSelectableMixin_1.NodeSelectableMixin(PositionedMixin_1.PositionedMixin(superClass)) {
        constructor(...args) {
            super(...args);
            this.zoomMargin = 50;
            this.link = "";
            // Cached values
            _canvasSize.set(this, void 0);
            _effectMargins.set(this, void 0);
            _flattenedNodes.set(this, void 0);
            _handleNodeClick.set(this, (node) => (ev) => {
                ev.preventDefault();
                ev.stopPropagation();
                this.selectedNode = node;
            });
            _getNodeById.set(this, (id) => {
                var _a, _b;
                return (_b = (_a = __classPrivateFieldGet(this, _flattenedNodes)) === null || _a === void 0 ? void 0 : _a.find((n) => n.id === id)) !== null && _b !== void 0 ? _b : null;
            });
        }
        static get styles() {
            // @ts-ignore
            const styles = super.styles;
            return utils_1.extendStyles(styles, [
                lit_element_1.css `
          :host {
            --default-error-bg: #fff;
            --default-error-fg: #333;

            --bg: var(--figspec-viewer-bg, #e5e5e5);
            --z-index: var(--figspec-viewer-z-index, 0);
            --error-bg: var(--figspec-viewer-error-bg, var(--default-error-bg));
            --error-fg: var(--figspec-viewer-error-fg, var(--default-error-fg));
            --error-color: var(--figspec-viewer-error-color, tomato);

            --guide-thickness: var(--figspec-viewer-guide-thickness, 1.5px);
            --guide-color: var(--figspec-viewer-guide-color, tomato);
            --guide-selected-color: var(
              --figspec-viewer-guide-selected-color,
              dodgerblue
            );
            --guide-tooltip-fg: var(--figspec-viewer-guide-tooltip-fg, white);
            --guide-selected-tooltip-fg: var(
              --figspec-viewer-guide-selected-tooltip-fg,
              white
            );
            --guide-tooltip-bg: var(
              --figspec-viewer-guide-tooltip-bg,
              var(--guide-color)
            );
            --guide-selected-tooltip-bg: var(
              --figspec-viewer-guide-selected-tooltip-bg,
              var(--guide-selected-color)
            );
            --guide-tooltip-font-size: var(
              --figspec-viewer-guide-tooltip-font-size,
              12px
            );

            position: relative;
            display: block;

            background-color: var(--bg);
            user-select: none;
            overflow: hidden;
            z-index: var(--z-index);
          }

          @media (prefers-color-scheme: dark) {
            :host {
              --default-error-bg: #222;
              --default-error-fg: #fff;
            }
          }

          .spec-canvas-wrapper {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column-reverse;
          }

          .canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            flex: 1;
          }

          .rendered-image {
            position: absolute;
            top: 0;
            left: 0;
          }

          .guides {
            position: absolute;

            overflow: visible;
            stroke: var(--guide-color);
            fill: var(--guide-color);
            pointer-events: none;
            z-index: calc(var(--z-index) + 2);
          }
        `,
                Node.styles,
                ErrorMessage.styles,
                DistanceGuide.styles,
                InspectorView.styles,
                FigmaFooter.styles,
            ]);
        }
        get __images() {
            return {};
        }
        deselectNode() {
            this.selectedNode = null;
        }
        get error() {
            if (!__classPrivateFieldGet(this, _canvasSize) || !__classPrivateFieldGet(this, _flattenedNodes)) {
                return ErrorMessage.ErrorMessage({
                    title: "Error",
                    children: "Please call `__updateTree/1` method with a valid parameter.",
                });
            }
            return null;
        }
        render() {
            if (this.error) {
                if (this.error instanceof Error) {
                    return ErrorMessage.ErrorMessage({
                        title: this.error.name || "Error",
                        children: this.error.message,
                    });
                }
                if (typeof this.error === "string") {
                    return ErrorMessage.ErrorMessage({
                        title: "Error",
                        children: this.error,
                    });
                }
                return this.error;
            }
            const canvasSize = __classPrivateFieldGet(this, _canvasSize);
            const reverseScale = 1 / this.scale;
            const guideThickness = `calc(var(--guide-thickness) * ${reverseScale})`;
            const computedGuideThickness = parseFloat(getComputedStyle(this).getPropertyValue("--guide-thickness"));
            const computedGuideTooltipFontSize = parseFloat(getComputedStyle(this).getPropertyValue("--guide-tooltip-font-size"));
            return lit_element_1.html `
        <div class="spec-canvas-wrapper" @click=${this.deselectNode}>
          <div
            class="canvas"
            style="
          width: ${canvasSize.width}px;
          height: ${canvasSize.height}px;

          transform: translate(-50%, -50%) ${this.canvasTransform.join(" ")}
        "
          >
            ${Object.entries(this.__images).map(([nodeId, uri]) => {
                var _a;
                const node = __classPrivateFieldGet(this, _getNodeById).call(this, nodeId);
                if (!node ||
                    !("absoluteBoundingBox" in node) ||
                    !((_a = __classPrivateFieldGet(this, _effectMargins)) === null || _a === void 0 ? void 0 : _a[node.id])) {
                    return null;
                }
                const margin = __classPrivateFieldGet(this, _effectMargins)[node.id];
                return lit_element_1.html `
                <img class="rendered-image" src="${uri}"
                style=${style_map_1.styleMap({
                    top: `${node.absoluteBoundingBox.y - canvasSize.y}px`,
                    left: `${node.absoluteBoundingBox.x - canvasSize.x}px`,
                    marginTop: `${-margin.top}px`,
                    marginLeft: `${-margin.left}px`,
                    width: node.absoluteBoundingBox.width +
                        margin.left +
                        margin.right +
                        "px",
                    height: node.absoluteBoundingBox.height +
                        margin.top +
                        margin.bottom +
                        "px",
                })}"
                " />
              `;
            })}
            ${this.selectedNode &&
                Node.Tooltip({
                    nodeSize: this.selectedNode.absoluteBoundingBox,
                    offsetX: -canvasSize.x,
                    offsetY: -canvasSize.y,
                    reverseScale,
                })}
            ${lit_element_1.svg `
            <svg
              class="guides"
              viewBox="0 0 5 5"
              width="5"
              height="5"
              style=${style_map_1.styleMap({
                left: `${-canvasSize.x}px`,
                top: `${-canvasSize.y}px`,
                strokeWidth: guideThickness,
            })}
            >
              ${this.selectedNode &&
                Node.Outline({
                    node: this.selectedNode,
                    selected: true,
                    computedThickness: computedGuideThickness * reverseScale,
                })}

              ${__classPrivateFieldGet(this, _flattenedNodes).map((node) => {
                var _a;
                if (node.id === ((_a = this.selectedNode) === null || _a === void 0 ? void 0 : _a.id)) {
                    return null;
                }
                return lit_element_1.svg `
                  <g>
                    ${Node.Outline({
                    node,
                    computedThickness: computedGuideThickness * reverseScale,
                    onClick: __classPrivateFieldGet(this, _handleNodeClick).call(this, node),
                })}
                    ${this.selectedNode &&
                    DistanceGuide.Guides({
                        node,
                        distanceTo: this.selectedNode,
                        reverseScale,
                        fontSize: computedGuideTooltipFontSize,
                    })}
                  </g>
                `;
            })}
            </svg>
          `}
          </div>
          ${InspectorView.View({
                node: this.selectedNode,
                onClose: this.deselectNode,
            })}
          ${FigmaFooter.Footer(this.getMetadata())}
        </div>
      `;
        }
        // implemented in FileViewer/FrameViewer
        getMetadata() {
            return undefined;
        }
        connectedCallback() {
            super.connectedCallback();
            this.resetZoom();
        }
        updated(changedProperties) {
            super.updated(changedProperties);
        }
        __updateTree(node) {
            if (!(node.type === "CANVAS" ||
                node.type === "FRAME" ||
                node.type === "COMPONENT" ||
                //@ts-ignore NOTE: figma-js does not implement COMPONENT_SET type (yet?)
                node.type === "COMPONENT_SET")) {
                throw new Error("Cannot update node tree: Top level node MUST be one of CANVAS, FRAME, COMPONENT, or COMPONENT_SET");
            }
            __classPrivateFieldSet(this, _canvasSize, node.type === "CANVAS" ? getCanvasSize(node) : node.absoluteBoundingBox);
            __classPrivateFieldSet(this, _flattenedNodes, flattenNode(node));
            // Since above properties aren't "attribute", their changes does not
            // trigger an update. We need to manually request an update.
            this.requestUpdate();
        }
        __updateEffectMargins() {
            if (!this.__images) {
                return;
            }
            const containers = Object.keys(this.__images)
                .map(__classPrivateFieldGet(this, _getNodeById))
                .filter((n) => !!n);
            __classPrivateFieldSet(this, _effectMargins, containers.reduce((margin, node) => {
                if (!("absoluteBoundingBox" in node)) {
                    return margin;
                }
                return Object.assign(Object.assign({}, margin), { [node.id]: getEffectMargin(node, flattenNode(node)) });
            }, {}));
            this.requestUpdate();
        }
        resetZoom() {
            if (__classPrivateFieldGet(this, _canvasSize)) {
                // Set initial zoom level based on element size
                const { width, height } = __classPrivateFieldGet(this, _canvasSize);
                const { width: elementWidth, height: elementHeight, } = this.getBoundingClientRect();
                const wDiff = elementWidth / (width + this.zoomMargin * 2);
                const hDiff = elementHeight / (height + this.zoomMargin * 2);
                this.scale = Math.min(wDiff, hDiff, 1);
            }
        }
    }
    _canvasSize = new WeakMap(), _effectMargins = new WeakMap(), _flattenedNodes = new WeakMap(), _handleNodeClick = new WeakMap(), _getNodeById = new WeakMap();
    __decorate([
        lit_element_1.property({
            type: Number,
            attribute: "zoom-margin",
        })
    ], Viewer.prototype, "zoomMargin", void 0);
    __decorate([
        lit_element_1.property({
            type: String,
            attribute: "link",
        })
    ], Viewer.prototype, "link", void 0);
    return Viewer;
};
function getCanvasSize(node) {
    const left = [];
    const right = [];
    const top = [];
    const bottom = [];
    for (const child of node.children) {
        if (child.type !== "FRAME" && child.type !== "COMPONENT") {
            continue;
        }
        const { x, y, width, height } = child.absoluteBoundingBox;
        left.push(x);
        right.push(x + width);
        top.push(y);
        bottom.push(y + height);
    }
    const minX = Math.min(...left);
    const minY = Math.min(...top);
    return {
        x: minX,
        y: minY,
        width: Math.abs(Math.max(...right) - minX),
        height: Math.abs(Math.min(...bottom) - minY),
    };
}
function getEffectMargin(container, nodes) {
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
        top: container.absoluteBoundingBox.y - bounds.top,
        right: bounds.right -
            container.absoluteBoundingBox.x -
            container.absoluteBoundingBox.width,
        bottom: bounds.bottom -
            container.absoluteBoundingBox.y -
            container.absoluteBoundingBox.height,
        left: container.absoluteBoundingBox.x - bounds.left,
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
