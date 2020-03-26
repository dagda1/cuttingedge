/* eslint-disable no-console */
// eslint:disable
import React, { useRef } from 'react';
import { useAsync } from 'react-async';
import dayjs from 'dayjs';
import { useParentSize } from '@cutting/hooks';
import { scaleLinear } from '@vx/scale';
import { ResponsiveSVG } from '@cutting/component-library';
import { Grid } from '@vx/grid';
import { Group } from '@vx/group';

require('../../styles/global.module.scss');

const styles = require('./App.module.scss');

// https://www.nationsonline.org/oneworld/country_code_list.htm
enum Countries {
  China = 'CHN',
  IT = 'ITA',
  GB = 'GBR',
  USA = 'USA',
}

type Result = { confirmed: number; deaths: number; recovered: number };

type Results = {
  count: number;
  result: Result;
};

type DayData = Result & {
  date: string;
  country: Countries;
  delta: number;
};

function numTicksForHeight(height: number) {
  if (height <= 300) return 3;
  if (300 < height && height <= 600) return 5;
  return 10;
}

function numTicksForWidth(width: number) {
  if (width <= 300) return 2;
  if (300 < width && width <= 400) return 5;
  return 10;
}

// documenter.getpostman.com/view/2568274/SzS8rjbe?version=latest
const baseUrl = 'https://covidapi.info/api/v1/country';

const transform = (results: Results, country: Countries): DayData[] => {
  const data: DayData[] = Object.keys(results.result)
    .map(k => ({
      country,
      date: dayjs(k).format('DD/MM/YYYY'),
      ...results.result[k],
    }))
    .filter(d => d.deaths > 10);

  const result = data.map((d, i) => {
    return {
      ...d,
      delta: i === 0 ? 0 : d.deaths - data[i - 1].deaths,
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
  ])
    .then(async result => {
      const gb = transform(await result[0].json(), Countries.GB);
      const italy = transform(await result[1].json(), Countries.IT);
      const usa = transform(await result[2].json(), Countries.USA);
      const china = transform(await result[3].json(), Countries.China);

      return { gb, italy, usa, china };
    })
    .catch(console.error);
};

export const App: React.FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);
  const { width, height } = useParentSize({ ref: parentRef });
  const { error, isLoading, data } = useAsync(getCountriesData);

  if (isLoading || !data) {
    return <div>Loading.....</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log(data);

  const xMax = width;
  const yMax = height;

  const xScale = scaleLinear({
    range: [0, xMax],
    domain: [0, Math.max(...Object.keys(data).map(k => data[k].length))],
  });
  const yScale = scaleLinear({
    range: [0, yMax],
    domain: [
      0,
      Math.max(
        ...Object.keys(data).map(k =>
          Math.max(...data[k].map((x: DayData) => x.deaths)),
        ),
      ),
    ],
    nice: true,
  });

  console.log(width, height);

  return (
    <div className={styles.main} ref={parentRef}>
      <ResponsiveSVG height={height} width={width}>
        <Grid
          top={0}
          left={0}
          xScale={xScale}
          yScale={yScale}
          stroke="rgba(142, 32, 95, 0.9)"
          width={xMax}
          height={yMax}
          numTicksRows={numTicksForHeight(height)}
          numTicksColumns={numTicksForWidth(width)}
        />
      </ResponsiveSVG>
    </div>
  );
};
