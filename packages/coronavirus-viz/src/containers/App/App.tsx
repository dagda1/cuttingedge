/* eslint-disable no-console */
// eslint:disable
import React, { useRef, useState } from 'react';
import { useAsync } from 'react-async';
import { useParentSize } from '@cutting/hooks';
import {
  VictoryChart,
  VictoryVoronoiContainer,
  VictoryGroup,
  VictoryTooltip,
  VictoryLine,
  VictoryScatter,
} from 'victory';

require('../../styles/global.module.scss');

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
    .map((k, i) => ({
      x: i + 1,
      y: results.result[k].deaths,
    }))
    .filter(d => d.y > 1)
    .map(({ y }, i) => ({ x: i + 1, y, country }));

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
      const gb = transform(await result[0].json(), Countries.GB);
      const italy = transform(await result[1].json(), Countries.IT);
      const usa = transform(await result[2].json(), Countries.USA);
      const china = transform(await result[3].json(), Countries.China);
      const spain = transform(await result[4].json(), Countries.Spain);

      return { gb, italy, usa, china, spain };
    })
    .catch(console.error);
};

export const App: React.FC = () => {
  const [{ width, height }, setDimensions] = useState({
    width: 600,
    height: 600,
  });
  const parentRef = useRef(null);

  useParentSize({
    ref: parentRef,
    callback: (entry: any) => {
      const { width, height } = entry;

      setDimensions({
        width,
        height,
      });
    },
  });
  const { error, isLoading, data } = useAsync(getCountriesData);

  if (isLoading || !data) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);

  return (
    <VictoryChart
      height={height}
      width={width}
      containerComponent={<VictoryVoronoiContainer />}
    >
      <VictoryGroup
        color="#c43a31"
        labels={({ datum }) =>
          `${datum.country} - day ${datum.x}, deaths = ${datum.y}, delta = ${datum.delta}`
        }
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={data.china}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
      <VictoryGroup
        color="blue"
        labels={({ datum }) =>
          `${datum.country} - day ${datum.x}, deaths = ${datum.y}, delta = ${datum.delta}`
        }
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={data.italy}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
      <VictoryGroup
        color="cyan"
        labels={({ datum }) =>
          `${datum.country} - day ${datum.x}, deaths = ${datum.y}, delta = ${datum.delta}`
        }
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={data.gb}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
      <VictoryGroup
        color="white"
        labels={({ datum }) =>
          `${datum.country} - day ${datum.x}, deaths = ${datum.y}, delta = ${datum.delta}`
        }
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={data.usa}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
      <VictoryGroup
        color="yellow"
        labels={({ datum }) =>
          `${datum.country} - day ${datum.x}, deaths = ${datum.y}, delta = ${datum.delta}`
        }
        labelComponent={<VictoryTooltip style={{ fontSize: 10 }} />}
        data={data.spain}
      >
        <VictoryLine />
        <VictoryScatter size={({ active }) => (active ? 8 : 3)} />
      </VictoryGroup>
    </VictoryChart>
  );
};
