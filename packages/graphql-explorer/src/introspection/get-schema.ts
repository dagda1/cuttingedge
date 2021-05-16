import { keyBy, unique } from '@cutting/util';
import type {
  IntrospectionField,
  IntrospectionInputTypeRef,
  IntrospectionInputValue,
  IntrospectionSchema,
  IntrospectionType,
} from 'graphql';
import type { SimplifiedIntrospection, SimplifiedIntrospectionWithIds, SimplifiedType } from '../types';
import { typeNameToId } from './utils';

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

export const getSchema = (schema: IntrospectionSchema): SimplifiedIntrospectionWithIds => {
  const simplifiedSchema = simplifySchema(schema);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const result: any = { ...simplifiedSchema };

  for (const [t, type] of Object.entries(simplifiedSchema.types)) {
    result.types[t].id = typeNameToId(type.name);

    if (type.inputFields) {
      for (const [key, input] of Object.entries(type.inputFields)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const inputField: any = (result.types[t].inputFields[key] = { ...input });
        inputField.id = `FIELD::${type.name}::${input.name}`;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        inputField.type = simplifiedSchema.types[(input as any).type];
      }
    }

    if (type.fields) {
      for (const [key, fieldValue] of Object.entries(type.fields)) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const field: any = (result.types[t].fields[key] = { ...fieldValue });
        field.id = `FIELD::${type.name}::${fieldValue.name}`;
        field.type = simplifiedSchema.types[fieldValue.type];
        for (const [a, argValue] of Object.entries(fieldValue.args)) {
          field.args = {};
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const arg: any = (field.args[a] = { ...argValue });
          arg.id = `ARGUMENT::${type.name}::${field.name}::${argValue.name}`;
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          arg.type = simplifiedSchema.types[(argValue as any).type];
        }
      }
    }

    if (type.possibleTypes) {
      result.types[t].possibleTypes = type.possibleTypes.map((possibleType) => ({
        id: `POSSIBLE_TYPE::${type.name}::${possibleType}`,
        type: simplifiedSchema.types[possibleType],
      }));
    }

    if (type.derivedTypes) {
      result.types[t].derivedTypes = type.derivedTypes.map((derivedType) => ({
        id: `DERIVED_TYPE::${type.name}::${derivedType}`,
        type: simplifiedSchema.types[derivedType],
      }));
    }

    if (type.interfaces) {
      result.types[t].interfaces = type.interfaces.map((baseType) => ({
        id: `INTERFACE::${type.name}::${baseType}`,
        type: simplifiedSchema.types[baseType],
      }));
    }
  }

  return result;
};
