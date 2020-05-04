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
import { ResponsiveSVG, LoadingOverlay } from '@cutting/component-library';
import {
  Countries,
  countryData,
  AxisColor,
  CountryStats,
} from '../Graphs/types';
import * as Urls from 'src/urls';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { AsyncState } from 'react-async';
import { assert } from '@cutting/util';

const styles = require('./Graph.module.scss');

export type GraphProps = {
  result: AsyncState<CountryStats>;
  xAxisLabel: string;
  yAxisLabel: string;
  labels?: (data: any) => string;
  xTickFormat?: (...args: any[]) => any;
  yTickFormat?: (...args: any[]) => any;
  heading: string;
};

export const Graph: React.FC<GraphProps> = ({
  result,
  yAxisLabel,
  labels,
  heading,
  xTickFormat: tickFormat = (label: string, i: number) =>
    i % 3 === 0 ? `-   ${dayjs(label).format('DD/MM')}` : '',
  yTickFormat = t => t,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useParentSize(ref, {
    initialDimensions: { width: 200, height: 200 },
  });
  const largeScreen = width > 600;

  const location = useLocation();

  if (result.isSettled === false || width < 200 || height < 450) {
    return (
      <div className={styles.container} ref={ref}>
        <LoadingOverlay busy={true} darkMode />
      </div>
    );
  }

  assert(!!result.data, 'No data has been supplied');

  return (
    <ApplicationLayout heading={heading}>
      <div className={styles.container} ref={ref}>
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
              x={0}
              y={0}
              centerTitle={largeScreen}
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
          height={largeScreen ? height - 180 : height - 120}
          width={width}
          theme={{
            axis: {
              style: {
                axis: { stroke: AxisColor },
                tickLabels: {
                  color: AxisColor,
                  fill: AxisColor,
                },
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
            tickFormat={yTickFormat}
          />
          <VictoryAxis
            orientation={'bottom'}
            standalone={false}
            style={{
              tickLabels: {
                angle: largeScreen ? 45 : 90,
                verticalAnchor: 'middle',
                textAnchor: 'start',
              },
            }}
            tickFormat={tickFormat}
          />
          {Object.keys(result.data).map(k => {
            assert(result.data?.[k], `No country data ${k}`);

            const country = result.data[k];
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
      </div>
    </ApplicationLayout>
  );
};

export default Graph;
