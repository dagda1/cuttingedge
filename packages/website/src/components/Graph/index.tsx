/* eslint-disable no-console */
// eslint:disable
import React, { useRef } from 'react';
import { useAsync } from 'react-async';
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

const styles = require('./Graph.module.scss');

// https://www.nationsonline.org/oneworld/count ry_code_list.htm
enum Countries {
  China = 'CHN',
  IT = 'ITA',
  GB = 'GBR',
  USA = 'USA',
  Spain = 'ESP',
}

type Result = { confirmed: number; deaths: number; recovered: number };

type Results = {
  count: number;
  result: Result;
};

type DayData = {
  x: number;
  y: number;
  country: Countries;
};

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: Countries): DayData[] => {
  const data = Object.keys(results.result)
    .map((k, i) => {
      return {
        x: i + 1,
        y: results.result[k].deaths,
        date: dayjs(k).format('DD/MM/YYYY'),
      };
    })
    .filter(d => d.y > 1)
    .map(({ y, ...rest }, i) => ({ ...rest, x: i + 1, y, country }));

  const result = data.map((d, i) => {
    return {
      ...d,
      delta: i === 0 ? 0 : d.y - data[i - 1].y,
    };
  });

  return result;
};

const getCountriesData = () => {
  const headers = { Accept: 'application/json' };

  return Promise.all([
    fetch(`${baseUrl}/${Countries.GB}`, { headers }),
    fetch(`${baseUrl}/${Countries.IT}`, { headers }),
    fetch(`${baseUrl}/${Countries.USA}`, { headers }),
    fetch(`${baseUrl}/${Countries.China}`, { headers }),
    fetch(`${baseUrl}/${Countries.Spain}`, { headers }),
  ])
    .then(async result => {
      const gb = {
        data: transform(await result[0].json(), Countries.GB),
        color: 'cyan',
        name: 'UK',
      };
      const italy = {
        data: transform(await result[1].json(), Countries.IT),
        color: '#016CD0',
        name: 'Italy',
      };
      const usa = {
        data: transform(await result[2].json(), Countries.USA),
        color: '#fff',
        name: 'USA',
      };
      const china = {
        data: transform(await result[3].json(), Countries.China),
        color: 'red',
        name: 'China',
      };
      const spain = {
        data: transform(await result[4].json(), Countries.Spain),
        color: 'yellow',
        name: 'Spain',
      };

      return { gb, italy, usa, china, spain };
    })
    .catch(console.error);
};

const AxisColor = '#fff';

export const Graph: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useParentSize(ref, {
    initialDimensions: { width: 200, height: 200 },
  });

  const { data } = useAsync(getCountriesData);

  const aspect = width / height;

  const adjustedHeight = Math.min(Math.round(width / aspect), 700);

  return (
    <ApplicationLayout
      heading={`Covid-19 deaths over days since first death on ${dayjs()
        .subtract(1, 'day')
        .format('DD/MM/YYYY')}`}
    >
      <div className={styles.container} ref={ref}>
        {!data ? (
          <div>loading.....</div>
        ) : (
          <>
            <ResponsiveSVG width={width * 1.1} height={200}>
              <VictoryLegend
                x={0}
                y={0}
                centerTitle
                standalone={false}
                orientation="horizontal"
                gutter={20}
                style={{
                  labels: {
                    fill: AxisColor,
                  },
                }}
                data={[
                  { name: 'UK', symbol: { fill: 'cyan' } },
                  { name: 'Italy', symbol: { fill: '#016CD0' } },
                  { name: 'Spain', symbol: { fill: 'yellow' } },
                  { name: 'China', symbol: { fill: 'red' } },
                  { name: 'USA', symbol: { fill: '#fff' } },
                ]}
              />
            </ResponsiveSVG>
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
                label="Number of deaths"
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
                label="days since first reported death"
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
                    <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
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
