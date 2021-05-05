import type { FC } from 'react';
import { buildClientSchema, IntrospectionQuery, introspectionFromSchema, lexicographicSortSchema } from 'graphql';
import { useRef } from 'react';
import { getIntrospectionQuery } from 'graphql';
import { ParentsizeSVG } from '@cutting/svg';
import styles from './Explorer.module.scss';
import { useFetch } from '@cutting/react-abortable-fetch';
import { LoadingOverlay } from '@cutting/component-library';
import { SimplifiedIntrospection } from '../../types';

export interface ExplorerProps {
  gatewayUrl: string;
}

export const Explorer: FC<ExplorerProps> = ({ gatewayUrl }) => {
  const { error, state } = useFetch<SimplifiedIntrospection, { data: IntrospectionQuery }>(
    {
      url: gatewayUrl,
      method: 'POST',
      body: JSON.stringify({ query: getIntrospectionQuery() }, null, 2),
    },
    {
      initialState: {} as SimplifiedIntrospection,
      accumulator(acc, { data }) {
        const schema = lexicographicSortSchema(buildClientSchema(data));
        const introspection = introspectionFromSchema(schema);
        console.log(introspection);
        return acc;
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

  return (
    <>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG elementRef={ref} align="center">
          <circle fill="#fff" x={12} y={20} r={200} />
        </ParentsizeSVG>
      </div>
    </>
  );
};
