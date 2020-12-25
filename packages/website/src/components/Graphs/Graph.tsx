import type { FC } from 'react';
import { useRef } from 'react';
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
import { countryData, AxisColor, Countries, DayData } from '../Graphs/types';
import * as Urls from 'src/urls';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router';
import { assert } from 'assert-ts';
import { CountriesStats } from './useCountryCovidData';

import styles from './Graph.module.scss';

export type GraphProps = {
  result: { isSettled: boolean; data?: CountriesStats };
  xAxisLabel: string;
  yAxisLabel: string;
  xTickFormat?: (label: string, i: number) => string;
  yTickFormat?: (label: string, i: number) => string;
  heading: string;
  labels?: ({ datum }: { datum: DayData }) => string;
};

export const Graph: FC<GraphProps> = ({
  result,
  labels,
  heading,
  xTickFormat: tickFormat = (label: string, i: number) => (i % 15 === 0 ? `-   ${dayjs(label).format('DD/MM')}` : ''),
  yTickFormat = (t) => t,
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
    <ApplicationLayout heading={heading} showFooter={true}>
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
              data={Object.keys(countryData).map((k) => ({
                name: countryData[k as Countries].longName,
                symbol: { fill: countryData[k as Countries].color },
              }))}
            />
            <VictoryChart
              height={largeScreen ? height - 180 : height - 120}
              width={width}
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
                orientation="left"
                standalone={false}
                style={{
                  axisLabel: {
                    fill: AxisColor,
                    fillOpacity: 0.5,
                    verticalAnchor: 'start',
                    textAnchor: 'start',
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
              {Object.keys(result.data).map((k) => {
                assert(result.data?.[k as Countries], `No country data ${k}`);

                const country = result.data?.[k as Countries];
                return (
                  <VictoryGroup
                    key={k}
                    color={country?.color}
                    labels={labels}
                    labelComponent={<VictoryTooltip style={{ fontSize: 10 }} renderInPortal={false} />}
                    data={country?.data}
                  >
                    <VictoryLine
                      style={{
                        data: { strokeWidth: k === 'GB' ? 3 : 1 },
                      }}
                    />
                    <VictoryScatter size={() => (k === 'GB' ? 5 : 3)} />
                  </VictoryGroup>
                );
              })}
            </VictoryChart>
          </ResponsiveSVG>
        </div>
      </div>
    </ApplicationLayout>
  );
};

export default Graph;
