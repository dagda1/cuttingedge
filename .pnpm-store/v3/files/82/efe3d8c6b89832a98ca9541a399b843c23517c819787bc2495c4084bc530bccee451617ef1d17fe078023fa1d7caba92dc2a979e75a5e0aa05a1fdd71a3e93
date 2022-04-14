import { css, svg } from "lit-element";
import { styleMap } from "lit-html/directives/style-map";
export const DistanceGuide = ({ guide, reverseScale }) => {
    return svg `
    <line
      x1=${guide.points[0].x}
      y1=${guide.points[0].y}
      x2=${guide.points[1].x}
      y2=${guide.points[1].y}
      shape-rendering="geometricPrecision"
    />

    ${guide.bisector &&
        svg `
        <line
          x1=${guide.bisector[0].x}
          y1=${guide.bisector[0].y}
          x2=${guide.bisector[1].x}
          y2=${guide.bisector[1].y}
          style=${styleMap({
            strokeDasharray: `${4 * reverseScale}`,
        })}
          shape-rendering="geometricPrecision"
        />
      `}
  `;
};
export const styles = css ``;
