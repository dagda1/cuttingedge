import type { FC } from 'react';
import { useRef } from 'react';
import { useParentSize } from '@cutting/hooks';
import {
  VictoryChart,
  VictoryGroup,
  VictoryLegend,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
  VictoryAxis,
} from 'victory';
import dayjs from 'dayjs';
import { ApplicationLayout } from 'src/layouts/ApplicationLayout';
import { LoadingOverlay } from '@cutting/component-library';
import { ResponsiveSVG } from '@cutting/svg';
import { AxisColor, Countries, DayData, countryData, CountriesResult } from '../Graphs/types';
import * as Urls from 'src/urls';
import { NavLink, useLocation } from 'react-router-dom';
import { assert } from 'assert-ts';

import styles from './Graph.module.scss';

export type GraphProps = {
  result: { data?: CountriesResult };
  xAxisLabel: string;
  yAxisLabel: string;
  xTickFormat?: (label: string, i: number, a: unknown[]) => string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yTickFormat?: (tick: any, index: number, ticks: any[]) => string | number;
  heading: string;
  labels?: ({ datum }: { datum: DayData }) => string;
};

export const Graph: FC<GraphProps> = ({
  result,
  yAxisLabel,
  labels,
  heading,
  xTickFormat = (label: string, i: number, a: unknown[]) =>
    i % 2 === 0 || i === a.length - 1 ? `${dayjs(label).format('DD/MM')}` : '',
  yTickFormat = (t) => t,
}) => {
  const location = useLocation();
  const legendRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null);

  const largeScreen = typeof window !== 'undefined' && window.screen.availWidth > 500;

  const { width: legendWdith, height: legendHeight } = useParentSize(legendRef, { debounceDelay: 50 });

  const { width: chartWidth, height: chartHeight } = useParentSize(chartRef, { debounceDelay: 50 });

  return (
    <ApplicationLayout heading={heading} showFooter={true}>
      <div className={styles.container}>
        <ul className={styles.links}>
          {[
            {
              url: Urls.Covid19,
              text: 'Daily increase in deaths (Scotland)',
            },
            {
              url: Urls.IncreaseInDeaths,
              text: 'Daily increase in deaths (World)',
            },
            // {
            //   url: Urls.RateOfChange,
            //   text: 'Rate of change',
            // },
            // { url: Urls.Deaths, text: 'Total deaths' },
          ].map((u) => {
            if (location.pathname === u.url) {
              return <li key={u.url}>{u.text}</li>;
            }

            return (
              <li key={u.url}>
                <NavLink activeClassName={styles.active} to={u.url} exact={true}>
                  {u.text}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <div className={styles.legend} ref={legendRef}>
          <ResponsiveSVG height={legendHeight} width={legendWdith}>
            <VictoryLegend
              x={0}
              y={0}
              height={legendHeight}
              width={legendWdith}
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
              data={Object.keys(countryData)
                .filter((k) => {
                  if (location.pathname !== Urls.Covid19) {
                    return true;
                  }
                  return ['SCO'].includes(k);
                })
                .map((k) => ({
                  name: countryData[k as Countries].longName,
                  symbol: { fill: countryData[k as Countries].color },
                }))}
            />
          </ResponsiveSVG>
        </div>

        <div className={styles.chart} ref={chartRef}>
          {typeof result?.data === 'undefined' ? (
            <LoadingOverlay busy={true} darkMode />
          ) : (
            <ResponsiveSVG width={chartWidth} height={chartHeight}>
              <VictoryChart
                width={chartWidth}
                height={chartHeight}
                standalone={false}
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
                  label={`${yAxisLabel} up until ${dayjs().subtract(1, 'day').format('DD/MM/YYYY')}`}
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
                  tickFormat={xTickFormat}
                />
                {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                {Object.keys(result.data as any).map((k) => {
                  assert(result.data?.[k as Countries], `No country data ${k}`);

                  const country = result.data?.[k as Countries];
                  return (
                    <VictoryGroup
                      key={k}
                      color={country?.color}
                      standalone={false}
                      labels={labels}
                      labelComponent={
                        <VictoryTooltip
                          style={{ fontSize: 15, paddingRight: 4 }}
                          renderInPortal={false}
                          constrainToVisibleArea={true}
                          flyoutWidth={200}
                        />
                      }
                      data={country?.data}
                    >
                      <VictoryLine
                        interpolation="natural"
                        style={{
                          data: { strokeWidth: ['SCO'].includes(k) ? 7 : 2 },
                        }}
                        standalone={false}
                      />
                      <VictoryScatter standalone={false} size={() => (['SCO'].includes(k) ? 7 : 3)} />
                    </VictoryGroup>
                  );
                })}
              </VictoryChart>
            </ResponsiveSVG>
          )}
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Graph;
