/* eslint-disable no-console */
// eslint:disable
import React, { useRef } from 'react';
import { useParentSize } from '@cutting/hooks';
import {
  VictoryChart,
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
import { useLocation } from 'react-router';

const styles = require('./Graph.module.scss');

export type GraphProps = {
  data: CovidGraphData;
  title: string;
  xAxisLabel: string;
  yAxisLabel: string;
  labels: (data: any) => string;
  tickFormat?: (t: any) => any;
};

export const Graph: React.FC<GraphProps> = ({
  data,
  yAxisLabel,
  labels,
  title,
  tickFormat = t => `-   ${dayjs(t).format('DD/MM')}`,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useParentSize(ref, {
    initialDimensions: { width: 200, height: 200 },
  });

  const largeScreen = width > 600;

  const location = useLocation();
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
              ].map(u => {
                if (location.pathname === u.url) {
                  return <li key={u.url}>{u.text}</li>;
                }

                return (
                  <li key={u.url}>
                    <NavLink
                      activeClassName={styles.active}
                      to={u.url}
                      exact={true}
                    >
                      {u.text}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
            <div className={styles.legend}>
              <ResponsiveSVG width={width} height={height}>
                <VictoryLegend
                  title={title}
                  x={0}
                  y={0}
                  centerTitle
                  standalone={false}
                  orientation="horizontal"
                  itemsPerRow={largeScreen ? 8 : 4}
                  gutter={20}
                  style={{
                    labels: {
                      fill: AxisColor,
                    },
                    title: {
                      fill: '#fff',
                    },
                  }}
                  data={Object.keys(countryData).map(k => ({
                    name: countryData[k].longName,
                    symbol: { fill: countryData[k].color },
                  }))}
                />
              </ResponsiveSVG>
            </div>
            <VictoryChart
              height={height - 50}
              width={width}
              containerComponent={
                <ResponsiveSVG width={width} height={height} />
              }
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
                standalone={false}
                style={{
                  tickLabels: {
                    angle: largeScreen ? 45 : 90,
                    verticalAnchor: 'middle',
                    textAnchor: 'start',
                    fontSize: largeScreen ? '12px' : '8px',
                  },
                }}
                tickFormat={tickFormat}
              />
              {Object.keys(data).map(k => {
                const country = data[k];
                return (
                  <VictoryGroup
                    key={k}
                    color={country.color}
                    labels={labels}
                    labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
                    data={country.data}
                  >
                    <VictoryLine
                      style={{
                        data: { strokeWidth: k === Countries.GB ? 3 : 1 },
                      }}
                    />
                    <VictoryScatter size={() => (k === Countries.GB ? 5 : 3)} />
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
