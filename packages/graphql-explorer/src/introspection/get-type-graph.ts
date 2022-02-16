/* eslint-disable @typescript-eslint/no-unused-vars */
import { keyBy } from '@cutting/util';
import { isInputObjectType, isScalarType } from 'graphql';
import type { SimplifiedIntrospectionWithIds, SimplifiedTypeWithIDs } from '../types';
import { isSystemType, typeNameToId } from './utils';

export function getDefaultRoot(schema: SimplifiedIntrospectionWithIds): string {
  if (typeof schema.queryType === 'string') {
    return schema.queryType;
  }

  return schema.queryType.name;
}

export function isNode(type: SimplifiedTypeWithIDs): boolean {
  return !(isScalarType(type) || isInputObjectType(type) || isSystemType(type) || type.isRelayType);
}

export function getTypeGraph(
  schema: SimplifiedIntrospectionWithIds,
  rootType?: 'Query' | 'Mutation',
  hideRoot?: boolean,
): {
  rootId: string;
  nodes: Record<string, SimplifiedTypeWithIDs>;
} | null {
  if (schema === null) {
    return null;
  }

  function getEdgeTargets(type: SimplifiedTypeWithIDs) {
    return [...Object.values(type.fields ?? {}), ...(type.derivedTypes || []), ...(type.possibleTypes || [])]
      .map((t) => t.type)
      .filter(isNode)
      .map((t) => t.id);
  }

  function buildGraph(rootId: string) {
    const typeIds = [rootId];
    const nodes: SimplifiedTypeWithIDs[] = [];
    const types = keyBy(Object.values(schema.types), 'id');

    for (let i = 0; i < typeIds.length; ++i) {
      const id = typeIds[i];
      if (typeIds.indexOf(id) < i) {
        continue;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const type = (types as any)[id];
      nodes.push(type);
      typeIds.push(...getEdgeTargets(type));
    }

    const keyed: Record<string, SimplifiedTypeWithIDs> = hideRoot ? keyBy(nodes.slice(1), 'id') : keyBy(nodes, 'id');

    return {
      rootId,
      nodes: keyed,
    };
  }

  const rootId = typeNameToId(rootType || getDefaultRoot(schema));

  return buildGraph(rootId);
}
