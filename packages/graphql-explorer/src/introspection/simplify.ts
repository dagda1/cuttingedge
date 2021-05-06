import { keyBy, unique } from '@cutting/util';
import type {
  IntrospectionField,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';
import type { SimplifiedIntrospection, SimplifiedType } from '../types';

function unwrapType(type: IntrospectionInputTypeRef, wrappers: IntrospectionType['description'][]) {
  while (type.kind === 'NON_NULL' || type.kind === 'LIST') {
    wrappers.push(type.kind);
    type = type.ofType;
  }

  return type.name;
}

function convertArg(inArg: IntrospectionInputValue) {
  const outArg = {
    name: inArg.name,
    description: inArg.description,
    defaultValue: inArg.defaultValue,
    typeWrappers: [],
    type: unwrapType(inArg.type, []),
  };

  return outArg;
}

function convertField(inField: IntrospectionField) {
  const outField = {
    name: inField.name,
    description: inField.description,
    typeWrappers: [],
    isDeprecated: inField.isDeprecated,
    type: unwrapType(inField.type as IntrospectionInputTypeRef, []),
    args: keyBy(inField.args.map(convertArg), 'name'),
    deprecationReason: inField.deprecationReason,
  };

  return outField;
}

function convertType(inType: IntrospectionType): SimplifiedType {
  const outType: SimplifiedType = {
    kind: inType.kind,
    name: inType.name,
    description: inType.description as string,
  };

  switch (inType.kind) {
    case 'OBJECT':
      outType.interfaces = unique(inType.interfaces.map((x) => x.name));
      outType.fields = keyBy(inType.fields.map(convertField), 'name');
      break;
    case 'INTERFACE':
      outType.derivedTypes = unique(inType.possibleTypes.map((x) => x.name));
      outType.fields = keyBy(inType.fields.map(convertField), 'name');
      break;
    case 'UNION':
      outType.possibleTypes = unique(inType.possibleTypes.map((x) => x.name));
      break;
    case 'ENUM':
      outType.enumValues = inType.enumValues.slice();
      break;
    case 'INPUT_OBJECT':
      outType.inputFields = keyBy(inType.inputFields.map(convertArg), 'name');
      break;
  }

  return outType;
}

export const simplifySchema = (schema: IntrospectionSchema): SimplifiedIntrospection => {
  return {
    types: keyBy(schema.types.map(convertType), 'name'),
    queryType: schema.queryType.name,
    mutationType: schema.mutationType?.name ?? null,
    subscriptionType: schema.subscriptionType?.name ?? null,
    //FIXME:
    //directives:
  };
};
