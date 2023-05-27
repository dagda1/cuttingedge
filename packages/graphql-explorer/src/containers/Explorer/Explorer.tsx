import type { IntrospectionQuery } from 'graphql';
import { buildClientSchema, introspectionFromSchema, lexicographicSortSchema } from 'graphql';
import { useRef } from 'react';
import { getIntrospectionQuery } from 'graphql';
import { ParentsizeSVG } from '@cutting/svg';
import * as styles from './Explorer.css';
import { useFetch } from '@cutting/react-abortable-fetch';
import { LoadingOverlay } from '@cutting/component-library';
import type { SimplifiedIntrospectionWithIds } from '../../types';
import { getSchema } from '../../introspection/get-schema';
import { getTypeGraph } from '../../introspection/get-type-graph';
import { Heading } from '@cutting/component-library';

export interface ExplorerProps {
  gatewayUrl: string;
}

export function Explorer({ gatewayUrl }: ExplorerProps): JSX.Element {
  const { data, error, state } = useFetch<{ schema: SimplifiedIntrospectionWithIds }, { data: IntrospectionQuery }>(
    {
      url: gatewayUrl,
      method: 'POST',
      body: JSON.stringify({ query: getIntrospectionQuery() }, null, 2),
    },
    {
      initialState: { schema: {} as SimplifiedIntrospectionWithIds },
      accumulator(_, { data }) {
        const introspectionSchema = lexicographicSortSchema(buildClientSchema(data));
        const introspection = introspectionFromSchema(introspectionSchema);
        const schema = getSchema(introspection.__schema);

        const typeGraph = getTypeGraph(schema, 'Query');

        return { schema, typeGraph };
      },
    },
  );

  if (data) {
    console.dir(data);
  }

  const ref = useRef<HTMLDivElement>(null);

  if (state === 'loading') {
    return <LoadingOverlay busy={true} />;
  }

  if (state === 'error') {
    console.log(error);
    return (
      <div className={styles.error}>
        <Heading level="2">{error?.message}</Heading>
      </div>
    );
  }

  return (
    <>
      <div className={styles.container} ref={ref}>
        <ParentsizeSVG parentRef={ref} align="center">
          <circle fill="#fff" x={12} y={20} r={200} />
        </ParentsizeSVG>
      </div>
    </>
  );
}
