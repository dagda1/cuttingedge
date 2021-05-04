import { IntrospectionEnumValue } from 'graphql';

export type SimplifiedArg = {
  name: string;
  description: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValue: any;
  typeWrappers: ('NON_NULL' | 'LIST')[];
  id?: string;
};

export type SimplifiedField<T> = {
  name: string;
  type: T;
  id?: string;
  relayType: T;
  description: string;
  typeWrappers: ('NON_NULL' | 'LIST')[];
  isDeprecated: boolean;
  deprecationReason?: string;
  args: {
    [name: string]: SimplifiedArg;
  };
  relayArgs: {
    [name: string]: SimplifiedArg;
  };
};

export type SimplifiedInputField = SimplifiedArg;

export type SimplifiedTypeBase = {
  kind: 'OBJECT' | 'INTERFACE' | 'UNION' | 'ENUM' | 'INPUT_OBJECT' | 'SCALAR';
  name: string;
  description: string;
  enumValues?: IntrospectionEnumValue[];
  inputFields?: {
    [name: string]: SimplifiedInputField;
  };

  isRelayType?: boolean;
};

export type SimplifiedType = SimplifiedTypeBase & {
  fields?: {
    [name: string]: SimplifiedField<string>;
  };
  interfaces?: string[];
  derivedTypes?: string[];
  possibleTypes?: string[];
};

export type SimplifiedIntrospection = {
  types: {
    [typeName: string]: SimplifiedType;
  };
  queryType: string;
  mutationType: string | null;
  subscriptionType: string | null;
};
