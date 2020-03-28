/* eslint-disable no-console */
// eslint:disable
import React, { useRef } from 'react';
import { useAsync } from 'react-async';
import { useParentSize } from './useParentSize';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
} from 'victory';
import dayjs from 'dayjs';
import { Heading } from '@cutting/component-library';

require('../../styles/global.module.scss');
const styles = require('./App.module.scss');

console.log({ styles });

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

  console.log(data);

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
        color: 'blue',
        name: 'Italy',
      };
      const usa = {
        data: transform(await result[2].json(), Countries.USA),
        color: 'white',
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

export const App: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);

  const { width, height } = useParentSize(ref, {
    initialDimensions: { width: 200, height: 200 },
  });

  const { data } = useAsync(getCountriesData);

  const aspect = width / height;

  const adjustedHeight = Math.round(width / aspect);

  return (
    <>
      <Heading>
        Coroanavirus number of deaths comparisons since the first day of each
        country&apos;s first recorded death
      </Heading>
      <div className={styles.container} ref={ref}>
        {!data ? (
          <div>loading.....</div>
        ) : (
          <VictoryChart
            height={adjustedHeight}
            width={width}
            containerComponent={<VictoryVoronoiContainer />}
            theme={{
              axis: {
                style: {
                  axis: { stroke: AxisColor },
                  tickLabels: { color: AxisColor, fill: AxisColor },
                },
              },
            }}
          >
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
        )}
      </div>
    </>
  );
};
