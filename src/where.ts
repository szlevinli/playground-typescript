import isNull from 'lodash/isNull';

export type Field = {
  name: string;
  value: string;
  quote: string;
};

export type Where = {
  type: 'add' | 'or' | null;
  fields: Field | Where[];
};
/* eslint-disable */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
  Time: any;
  DateTime: any;
};

export type Maybe<T> = T;

export type WhereConditionFieldInput = {
  /** 字段名称 */
  name: Scalars['String'];
  /** 字段值 */
  value: Scalars['String'];
  /** 字段值的定界符 */
  quote: Scalars['String'];
};

export enum WhereConditionType {
  Add = 'ADD',
  Or = 'OR',
  Null = 'NULL',
}

export type WhereConditionInput = {
  type: WhereConditionType;
  field?: Maybe<WhereConditionFieldInput>;
  condition?: Maybe<Array<WhereConditionInput>>;
};

export const whereParser = (where: Where): string => {
  if (isNull(where.type)) {
    const key = (<Field>where.fields).name;
    const value = (<Field>where.fields).value;
    const quote = (<Field>where.fields).quote;
    return `{${key}: ${quote}${value}${quote}}`;
  }

  return `_.${where.type}[${(<Where[]>where.fields)
    .map((v) => whereParser(v))
    .join(',')}]`;
};

export const whereParser2 = (where: WhereConditionInput): string => {
  if (where.type === WhereConditionType.Null) {
    const key = where.field?.name;
    const value = where.field?.value;
    const quote = where.field?.quote;
    return `{${key}: ${quote}${value}${quote}}`;
  }

  const operation = where.type === WhereConditionType.Add ? 'add' : 'or';

  return `_.${operation}[${where.condition
    ?.map((v) => whereParser2(v))
    .join(',')}]`;
};
