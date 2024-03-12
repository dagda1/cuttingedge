import { assert } from '@cutting/assert';
import { useParentSize } from '@cutting/use-get-parent-size';
import { useMemo, useRef } from 'react';
import { ApplicationLayout } from '~/layouts/ApplicationLayout';
import { getScales } from './get-scales';
import { Box, Label } from '@cutting/component-library';
import { Group, ResponsiveSVG } from '@cutting/svg';
import { AxisBottom, AxisLeft } from '@visx/axis';
import { SVGMathJax } from '@cutting/use-mathjax';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

interface TrigonometricTransformsProps {}

export function TrigonometricTransforms(_props: TrigonometricTransformsProps): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize(containerRef, { initialValues: { width: 0, height: 0 } });

  assert(typeof width === 'number');
  assert(typeof height === 'number');

  const { xScale, yScale } = useMemo(() => getScales({ width, height }), [width, height]);

  return (
    <ApplicationLayout centerHeading heading="Trigonometric Transforms" showFooter={false}>
      <Box component="section" ref={containerRef} position="relative">
        <Box width="eighth" position="absolute">
          <Box marginBottom="xsmall">
            <Label>A=1</Label>
            <Slider />
          </Box>
          <Box marginBottom="xsmall">
            <Label>B=1</Label>
          </Box>
          <Slider />
          <Box marginBottom="xsmall">
            <Label>C=0</Label>
            <Slider />
          </Box>
          <Box marginBottom="xsmall">
            <Label>D=0</Label>
            <Slider />
          </Box>
        </Box>
        <ResponsiveSVG width={width} height={height}>
          <Group transform={`translate(0, ${yScale('0')})`}>
            <AxisBottom
              scale={xScale}
              stroke="#ffffff"
              tickStroke="#ffffff"
              hideZero
              tickComponent={(props) => (
                <Group transform={`translate(${props.x - 15}, ${props.y - 5})`}>
                  <SVGMathJax>{props.formattedValue}</SVGMathJax>
                </Group>
              )}
            />
          </Group>
          <Group transform={`translate(${xScale('$0$')}, 0)`}>
            <AxisLeft
              scale={yScale}
              stroke="#ffffff"
              tickStroke="#ffffff"
              hideZero
              tickComponent={(props) => (
                <Group transform={`translate(${props.x - 10}, ${props.y - 10})`}>
                  <SVGMathJax>{props.formattedValue}</SVGMathJax>
                </Group>
              )}
            />
          </Group>
        </ResponsiveSVG>
      </Box>
    </ApplicationLayout>
  );
}

export default TrigonometricTransforms;
