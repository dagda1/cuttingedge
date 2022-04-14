"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = exports.Tooltip = exports.Outline = void 0;
const lit_element_1 = require("lit-element");
const style_map_1 = require("lit-html/directives/style-map");
const utils_1 = require("./utils");
exports.Outline = ({ node, selected = false, computedThickness, onClick, }) => {
    const { x, y, width, height } = node.absoluteBoundingBox;
    const radius = "cornerRadius" in node && node.cornerRadius
        ? {
            topLeft: node.cornerRadius,
            topRight: node.cornerRadius,
            bottomRight: node.cornerRadius,
            bottomLeft: node.cornerRadius,
        }
        : "rectangleCornerRadii" in node && node.rectangleCornerRadii
            ? {
                topLeft: node.rectangleCornerRadii[0],
                topRight: node.rectangleCornerRadii[1],
                bottomRight: node.rectangleCornerRadii[2],
                bottomLeft: node.rectangleCornerRadii[3],
            }
            : {
                topLeft: 0,
                topRight: 0,
                bottomRight: 0,
                bottomLeft: 0,
            };
    // Since SVG can't control where to draw borders (I mean you can't draw inset borders), we need to
    // shift each drawing points by the half of the border width.
    const shift = computedThickness / 2;
    // https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/d
    // [M] ... Move to
    // [L] ... Line to
    // [A] ... Arc to
    // [Z] ... Close path
    const moveTo = (x, y) => `M${x},${y}`;
    const lineTo = (x, y) => `L${x},${y}`;
    const arcTo = (r, x, y) => `A${r},${r} 0 0 1 ${x},${y}`;
    const boxPath = [
        moveTo(radius.topLeft + shift, shift),
        lineTo(width - radius.topRight, shift),
        arcTo(radius.topRight - shift, width - shift, radius.topRight),
        lineTo(width - shift, height - radius.bottomRight),
        arcTo(radius.bottomRight - shift, width - radius.bottomRight, height - shift),
        lineTo(radius.bottomLeft, height - shift),
        arcTo(radius.bottomLeft - shift, shift, height - radius.bottomLeft),
        lineTo(shift, radius.topLeft),
        arcTo(radius.topLeft - shift, radius.topLeft, shift),
        "Z",
    ].join(" ");
    return lit_element_1.svg `
    <path
      class="guide"
      d=${boxPath}
      shape-rendering="geometricPrecision"
      fill="none"
      transform="translate(${x}, ${y})"
      ?data-selected=${selected}
      @click=${onClick}
    />
  `;
};
exports.Tooltip = ({ nodeSize: { x, y, width, height }, offsetX, offsetY, reverseScale, }) => {
    const tooltipStyle = {
        top: `${offsetY + y + height}px`,
        left: `${offsetX + x + width / 2}px`,
        transform: `translateX(-50%) scale(${reverseScale}) translateY(0.25em)`,
    };
    return lit_element_1.html `
    <div class="tooltip" style="${style_map_1.styleMap(tooltipStyle)}">
      ${utils_1.round(width)} x ${utils_1.round(height)}
    </div>
  `;
};
exports.styles = lit_element_1.css `
  .guide {
    /*
     * SVGs cannot be pixel perfect, especially floating values.
     * Since many platform renders them visually incorrectly (probably they
     * are following the spec), it's safe to set overflow to visible.
     * Cropped borders are hard to visible and ugly.
     */
    overflow: visible;

    pointer-events: all;

    opacity: 0;
  }
  .guide:hover {
    opacity: 1;
  }
  .guide[data-selected] {
    opacity: 1;
    stroke: var(--guide-selected-color);
  }

  .tooltip {
    position: absolute;
    padding: 0.25em 0.5em;
    font-size: var(--guide-tooltip-font-size);

    color: var(--guide-selected-tooltip-fg);
    background-color: var(--guide-selected-tooltip-bg);
    border-radius: 2px;
    pointer-events: none;
    z-index: calc(var(--z-index) + 1);

    transform-origin: top center;
  }
`;
