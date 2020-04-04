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
import * as Urls from 'src/urls';
import { NavLink } from 'react-router-dom';

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
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useParentSize(ref, {
    initialDimensions: { width: 200, height: 200 },
  });

  const aspect = width / height;

  const adjustedHeight = Math.min(Math.round(width / aspect), 700);

  const numberOfItems = width > 600 ? 8 : 4;

  return (
    <ApplicationLayout>
      <div className={styles.container} ref={ref}>
        {!data ? (
          <div>loading.....</div>
        ) : (
          <>
            <ul className={styles.links}>
              {[
                {
                  url: Urls.Covid19,
                  text: 'Rate of change',
                },
                { url: Urls.Deaths, text: 'Total deaths' },
                {
                  url: Urls.IncreaseInDeaths,
                  text: 'Daily increase in deaths',
                },
              ].map(u => (
                <li key={u.url}>
                  <NavLink
                    activeClassName={styles.active}
                    to={u.url}
                    exact={true}
                  >
                    {u.text}
                  </NavLink>
                </li>
              ))}
            </ul>
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
                label={`${yAxisLabel} up until ${dayjs()
                  .subtract(1, 'day')
                  .format('DD/MM/YYYY')}`}
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
                label={`${xAxisLabel} up until ${dayjs()
                  .subtract(1, 'day')
                  .format('DD/MM/YYYY')}`}
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
                    labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
                    data={country.data}
                  >
                    <VictoryLine />
                    <VictoryScatter
                      size={() => {
                        return k === Countries.GB ? 5 : 3;
                      }}
                    />
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
