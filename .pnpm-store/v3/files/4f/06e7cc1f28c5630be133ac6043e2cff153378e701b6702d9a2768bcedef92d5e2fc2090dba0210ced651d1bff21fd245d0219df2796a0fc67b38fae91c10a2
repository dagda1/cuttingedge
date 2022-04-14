var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, css, html, svg, property } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";
import * as DistanceGuide from "./DistanceGuide";
import * as Outline from "./Outline";
import { getDistanceGuides, round } from "./utils";
export class FigmaViewerGuide extends LitElement {
    constructor() {
        super(...arguments);
        this.node = null;
        this.level = 0;
        this.offsetX = 0;
        this.offsetY = 0;
        this.selected = false;
        this.distanceTo = null;
        this.scale = 1;
    }
    static get styles() {
        return [
            css `
        :host {
          --thickness: var(--figma-viewer-guide-border-thickness, 1.5px);
          --color: var(--figma-viewer-guide-color, tomato);
          --selected-color: var(
            --figma-viewer-guide-selected-color,
            dodgerblue
          );
          --fg: var(--figma-viewer-guide-font-color, white);
          --z-index: var(--figma-viewer-z-index, 1);
          --tooltip-z-index: var(--figma-viewer-tooltip-z-index, 9999);
          --tooltip-font-size: var(--figma-viewer-tooltip-font-size, 12px);
        }

        .tooltip {
          display: none;
          position: absolute;
          padding: 0.25em 0.5em;
          font-size: var(--tooltip-font-size);

          color: var(--fg);
          background-color: var(--selected-color);
          border-radius: 2px;
          pointer-events: none;
          z-index: var(--tooltip-z-index);

          transform-origin: top center;
        }
        :host([selected]) > .tooltip {
          display: block;
        }

        .distance-guide-container {
          position: absolute;

          overflow: visible;
          stroke: none;
        }
        .guide:hover ~ .distance-guide-container {
          stroke: var(--color);
        }
        .guide:hover ~ .distance-guide-container ~ .tooltip {
          display: block;
        }

        .distance-tooltip {
          background-color: var(--color);
          z-index: calc(var(--tooltip-z-index) + 1);
        }
      `,
            Outline.styles,
            DistanceGuide.styles,
        ];
    }
    render() {
        if (!this.node) {
            return html ``;
        }
        const { x, y, width, height } = this.node.absoluteBoundingBox;
        const reverseScale = 1 / this.scale;
        const thickness = `calc(var(--thickness) * ${reverseScale})`;
        const distanceGuides = this.distanceTo
            ? getDistanceGuides(this.distanceTo.absoluteBoundingBox, this.node.absoluteBoundingBox)
            : [];
        const tooltipStyle = {
            top: `${this.offsetY + y + height}px`,
            left: `${this.offsetX + x + width / 2}px`,
            transform: `translateX(-50%) scale(${reverseScale}) translateY(0.25em)`,
        };
        return html `
      ${Outline.Outline({
            node: this.node,
            computedThickness: parseFloat(getComputedStyle(this).getPropertyValue("--thickness")) *
                reverseScale,
            style: {
                left: `${x + this.offsetX}px`,
                top: `${y + this.offsetY}px`,
                zIndex: `calc(var(--z-index) + ${this.level})`,
                strokeWidth: thickness,
            },
        })}

      <div class="tooltip" style="${styleMap(tooltipStyle)}">
        ${round(width)} x ${round(height)}
      </div>

      ${svg `
          <svg
            class="distance-guide-container"
            viewBox="0 0 5 5"
            width="5"
            height="5"
            style=${styleMap({
            left: `${this.offsetX}px`,
            top: `${this.offsetY}px`,
            strokeWidth: thickness,
        })}
          >
            ${distanceGuides.map((guide) => DistanceGuide.DistanceGuide({
            guide,
            reverseScale,
        }))}
          </svg>
       `}
      ${distanceGuides.map((guide) => {
            const xLength = Math.abs(guide.points[0].x - guide.points[1].x);
            const yLength = Math.abs(guide.points[0].y - guide.points[1].y);
            const style = xLength > yLength
                ? {
                    top: `${guide.points[0].y + this.offsetY}px`,
                    left: `${(guide.points[0].x + guide.points[1].x) / 2 + this.offsetX}px`,
                    transform: `translateX(-50%) scale(${reverseScale}) translateY(0.3em)`,
                }
                : {
                    top: `${(guide.points[0].y + guide.points[1].y) / 2 + this.offsetY}px`,
                    left: `${guide.points[0].x + this.offsetX}px`,
                    transform: `translateY(-50%) scale(${reverseScale}) translateX(0.3em)`,
                    transformOrigin: "center left",
                };
            return html `
          <div class="tooltip distance-tooltip" style=${styleMap(style)}>
            ${round(Math.max(xLength, yLength))}
          </div>
        `;
        })}
    `;
    }
}
__decorate([
    property({
        type: Object,
    })
], FigmaViewerGuide.prototype, "node", void 0);
__decorate([
    property({
        type: Number,
    })
], FigmaViewerGuide.prototype, "level", void 0);
__decorate([
    property({
        attribute: "offset-x",
        type: Number,
    })
], FigmaViewerGuide.prototype, "offsetX", void 0);
__decorate([
    property({
        attribute: "offset-y",
        type: Number,
    })
], FigmaViewerGuide.prototype, "offsetY", void 0);
__decorate([
    property({
        type: Boolean,
    })
], FigmaViewerGuide.prototype, "selected", void 0);
__decorate([
    property({
        attribute: "distance-to",
        type: Object,
    })
], FigmaViewerGuide.prototype, "distanceTo", void 0);
__decorate([
    property({
        type: Number,
    })
], FigmaViewerGuide.prototype, "scale", void 0);
