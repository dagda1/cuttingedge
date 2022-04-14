"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.styles = exports.Guides = void 0;
const lit_element_1 = require("lit-element");
const style_map_1 = require("lit-html/directives/style-map");
const utils_1 = require("./utils");
const Line = ({ guide, reverseScale }) => {
    const xLength = Math.abs(guide.points[0].x - guide.points[1].x);
    const yLength = Math.abs(guide.points[0].y - guide.points[1].y);
    if (xLength === 0 && yLength === 0) {
        return null;
    }
    return lit_element_1.svg `
    <line
      class="distance-line"
      x1=${guide.points[0].x}
      y1=${guide.points[0].y}
      x2=${guide.points[1].x}
      y2=${guide.points[1].y}
    />

    ${guide.bisector &&
        lit_element_1.svg `
        <line
          class="distance-line"
          x1=${guide.bisector[0].x}
          y1=${guide.bisector[0].y}
          x2=${guide.bisector[1].x}
          y2=${guide.bisector[1].y}
          style=${style_map_1.styleMap({
            strokeDasharray: `${4 * reverseScale}`,
        })}
          shape-rendering="geometricPrecision"
          fill="none"
        />
      `}
  `;
};
const Tooltip = ({ guide, reverseScale, fontSize }) => {
    const xLength = Math.abs(guide.points[0].x - guide.points[1].x);
    const yLength = Math.abs(guide.points[0].y - guide.points[1].y);
    if (xLength === 0 && yLength === 0) {
        return null;
    }
    const text = utils_1.round(Math.max(xLength, yLength)).toString(10);
    // Decreases font width because every text is a number (narrow).
    // We can measure the correct width with getComputedTextLength method on
    // <text> element, but it needs access to DOM or creating an element each
    // render cycle, both have performance costs.
    const width = text.length * fontSize * 0.5;
    const startMargin = fontSize * 0.25;
    const vPadding = fontSize * 0.25;
    const hPadding = fontSize * 0.5;
    const x = xLength > yLength
        ? (guide.points[0].x + guide.points[1].x) / 2 - width / 2
        : guide.points[0].x;
    const y = xLength > yLength
        ? guide.points[0].y
        : (guide.points[0].y + guide.points[1].y) / 2 - fontSize / 2;
    const transform = [
        `scale(${reverseScale})`,
        xLength > yLength
            ? `translate(0, ${startMargin + vPadding})`
            : `translate(${startMargin + hPadding}, 0)`,
    ].join(" ");
    const cx = x + width / 2;
    const cy = y + fontSize / 2;
    const transformOrigin = xLength > yLength ? `${cx} ${y}` : `${x} ${cy}`;
    return lit_element_1.svg `
    <g class="distance-tooltip">
      <rect
        x=${x - hPadding}
        y=${y - vPadding}
        rx="2"
        width=${width + hPadding * 2}
        height=${fontSize + vPadding * 2}
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
      />

      <text
        x=${cx}
        y=${y + fontSize - vPadding / 2}
        text-anchor="middle"
        transform=${transform}
        transform-origin=${transformOrigin}
        stroke="none"
        fill="white"
        style="font-size: ${fontSize}px"
      >
        ${text}
      </text>
    </g>
  `;
};
const guidesCache = new Map();
exports.Guides = ({ node, distanceTo, reverseScale, fontSize, }) => {
    const combinedId = node.id + "\n" + distanceTo.id;
    let guides = guidesCache.get(combinedId);
    if (!guides) {
        guides = utils_1.getDistanceGuides(node.absoluteBoundingBox, distanceTo.absoluteBoundingBox);
        guidesCache.set(combinedId, guides);
    }
    return [
        ...guides.map((guide) => Line({ guide, reverseScale })),
        ...guides.map((guide) => Tooltip({ guide, reverseScale, fontSize })),
    ];
};
exports.styles = lit_element_1.css `
  .distance-line {
    shape-rendering: geometricPrecision;
    fill: none;
    opacity: 0;
  }

  .distance-tooltip {
    opacity: 0;
  }

  .guide:hover ~ .distance-line,
  .guide:hover ~ .distance-tooltip {
    opacity: 1;
  }
`;
