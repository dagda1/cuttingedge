/* eslint-disable no-console */
// eslint:disable
import React, { useRef } from 'react';
import { useParentSize } from '@cutting/hooks';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryLegend,
  VictoryAxis,
} from 'victory';
import dayjs from 'dayjs';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { ResponsiveSVG } from '@cutting/component-library';
import {
  Countries,
  countryData,
  AxisColor,
  CovidGraphData,
} from '../Graphs/types';

const styles = require('./Graph.module.scss');

export interface GraphProps {
  data: CovidGraphData;
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
}

export const Graph: React.FC<GraphProps> = ({
  data,
  xAxisLabel,
  yAxisLabel,
  title,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useParentSize(ref, {
    initialDimensions: { width: 200, height: 200 },
  });

  const aspect = width / height;

  const adjustedHeight = Math.min(Math.round(width / aspect), 700);

  const numberOfItems = width > 600 ? 8 : 4;

  return (
    <ApplicationLayout
      heading={`Covid-19 - ${title} - data gathered ${dayjs()
        .subtract(1, 'day')
        .format('DD/MM/YYYY')}`}
    >
      <div className={styles.container} ref={ref}>
        {!data ? (
          <div>loading.....</div>
        ) : (
          <>
            <div className={styles.legend}>
              <ResponsiveSVG width={width * 1.2} height={200}>
                <VictoryLegend
                  x={0}
                  y={0}
                  centerTitle
                  standalone={false}
                  orientation="horizontal"
                  itemsPerRow={numberOfItems}
                  gutter={20}
                  style={{
                    labels: {
                      fill: AxisColor,
                    },
                  }}
                  data={[
                    {
                      name: countryData[Countries.GB].longName,
                      symbol: { fill: countryData[Countries.GB].color },
                    },
                    {
                      name: countryData[Countries.Ireland].longName,
                      symbol: { fill: countryData[Countries.Ireland].color },
                    },
                    {
                      name: countryData[Countries.IT].longName,
                      symbol: { fill: countryData[Countries.IT].longName },
                    },
                    {
                      name: countryData[Countries.Spain].longName,
                      symbol: { fill: countryData[Countries.Spain].color },
                    },
                    {
                      name: countryData[Countries.China].longName,
                      symbol: { fill: countryData[Countries.China].color },
                    },
                    {
                      name: countryData[Countries.USA].longName,
                      symbol: { fill: countryData[Countries.USA].color },
                    },
                  ]}
                />
              </ResponsiveSVG>
            </div>
            <VictoryChart
              height={adjustedHeight - 40}
              width={width}
              containerComponent={<VictoryVoronoiContainer />}
              theme={{
                axis: {
                  style: {
                    axis: { stroke: AxisColor },
                    tickLabels: { color: AxisColor, fill: AxisColor },
                    grid: { stroke: '#fff', strokeOpacity: 0.2 },
                  },
                },
              }}
            >
              <VictoryAxis
                dependentAxis
                label={yAxisLabel}
                orientation="left"
                standalone={false}
                style={{
                  axisLabel: {
                    fill: AxisColor,
                    fillOpacity: 0.5,
                  },
                }}
              />
              <VictoryAxis
                orientation={'bottom'}
                label={xAxisLabel}
                standalone={false}
                style={{
                  axisLabel: {
                    fill: AxisColor,
                    fillOpacity: 0.5,
                  },
                }}
              />
              {Object.keys(data).map(k => {
                const country = data[k];
                return (
                  <VictoryGroup
                    key={k}
                    color={country.color}
                    labels={({ datum }) =>
                      `${country.name} ${datum.date}\n day ${datum.x}\n deaths = ${datum.y}\n delta from day before = ${datum.delta}`
                    }
                    labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
                    data={country.data}
                  >
                    <VictoryLine />
                    <VictoryScatter size={() => (k === Countries.GB ? 8 : 3)} />
                  </VictoryGroup>
                );
              })}
            </VictoryChart>
          </>
        )}
      </div>
    </ApplicationLayout>
  );
};

export default Graph;
