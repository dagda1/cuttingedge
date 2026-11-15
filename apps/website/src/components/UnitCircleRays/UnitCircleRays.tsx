import { Group, Line } from '@cutting/svg';
import { SVGMathJax } from '@cutting/use-mathjax';
import { Fragment } from 'react';

interface UnitCircleRay {
  cosX: number;
  sinY: number;
  offsetX: number;
  offsetY: number;
  label: string;
}

interface UnitCircleRaysProps {
  rays: UnitCircleRay[];
  rayClassName: string;
}

export function UnitCircleRays({ rays, rayClassName }: UnitCircleRaysProps): JSX.Element {
  return (
    <>
      {rays.map(({ cosX, sinY, label, offsetX, offsetY }) => (
        <Fragment key={label}>
          <Group transform={`translate(${offsetX}, ${offsetY})`}>
            <SVGMathJax>{label}</SVGMathJax>
          </Group>
          <Line className={rayClassName} from={{ x: 0, y: 0 }} to={{ x: cosX, y: sinY }} />
        </Fragment>
      ))}
    </>
  );
}
