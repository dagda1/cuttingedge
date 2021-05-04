import { FC, useRef } from 'react';
import { ParentsizeSVG } from '@cutting/svg';
import styles from './Explorer.module.scss';
import { useFetch } from '@cutting/react-abortable-fetch';
import { LoadingOverlay } from '@cutting/component-library';
import { getIntrospectionQuery, IntrospectionSchema } from 'graphql';
import { SimplifiedIntrospection } from '../../types';

export interface ExplorerProps {
  gatewayUrl: string;
}

export const Explorer: FC<ExplorerProps> = ({ gatewayUrl }) => {
  const { data, error, state } = useFetch<SimplifiedIntrospection, IntrospectionSchema>(
    {
      url: gatewayUrl,
      method: 'POST',
      body: JSON.stringify({ query: getIntrospectionQuery() }, null, 2),
    },
    {
      initialState: {},
      accumulator(acc: unknown, data: unknown) {
        console.log({ acc, data });
        return data;
      },
    },
  );
  const ref = useRef<HTMLDivElement>(null);

  if (state === 'LOADING') {
    return <LoadingOverlay busy={true} />;
  }

  if (state === 'ERROR') {
    console.log(error);
    return (
      <div className={styles.error}>
        <h2>{error?.message}</h2>
      </div>
    );
  }

  console.log({ data });

  return (
    <>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref}>
          <circle fill="#fff" x={12} y={20} r={200} />
        </ParentsizeSVG>
      </div>
    </>
  );
};
