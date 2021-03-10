import {
  Where,
  whereParser,
  whereParser2,
  WhereConditionInput,
  WhereConditionType,
} from './where';

const where: Where = {
  type: null,
  fields: {
    name: '_id',
    value: 'test|001',
    quote: "'",
  },
};

const _where: WhereConditionInput = {
  type: WhereConditionType.Null,
  field: {
    name: '_id',
    value: 'test|001',
    quote: "'",
  },
};

const where2: Where = {
  type: 'add',
  fields: [
    {
      type: null,
      fields: {
        name: 'name',
        value: 'lev',
        quote: '/',
      },
    },
    {
      type: null,
      fields: {
        name: 'age',
        value: '_.lt(18)',
        quote: '',
      },
    },
  ],
};

const _where2: WhereConditionInput = {
  type: WhereConditionType.Add,
  condition: [
    {
      type: WhereConditionType.Null,
      field: {
        name: 'name',
        value: 'lev',
        quote: '/',
      },
    },
    {
      type: WhereConditionType.Null,
      field: {
        name: 'age',
        value: '_.lt(18)',
        quote: '',
      },
    },
  ],
};

const where3: Where = {
  type: 'add',
  fields: [
    {
      type: 'or',
      fields: [
        {
          type: null,
          fields: {
            name: 'name',
            value: 'lev',
            quote: '/',
          },
        },
        {
          type: null,
          fields: {
            name: 'age',
            value: '_.gt(18)',
            quote: '',
          },
        },
      ],
    },
    {
      type: 'add',
      fields: [
        {
          type: null,
          fields: {
            name: 'color',
            value: 'green',
            quote: "'",
          },
        },
        {
          type: null,
          fields: {
            name: 'age',
            value: '_.gt(18)',
            quote: '',
          },
        },
      ],
    },
    {
      type: null,
      fields: {
        name: 'type',
        value: 'ALL',
        quote: "'",
      },
    },
  ],
};

const _where3: WhereConditionInput = {
  type: WhereConditionType.Add,
  condition: [
    {
      type: WhereConditionType.Or,
      condition: [
        {
          type: WhereConditionType.Null,
          field: {
            name: 'name',
            value: 'lev',
            quote: '/',
          },
        },
        {
          type: WhereConditionType.Null,
          field: {
            name: 'age',
            value: '_.gt(18)',
            quote: '',
          },
        },
      ],
    },
    {
      type: WhereConditionType.Add,
      condition: [
        {
          type: WhereConditionType.Null,
          field: {
            name: 'color',
            value: 'green',
            quote: "'",
          },
        },
        {
          type: WhereConditionType.Null,
          field: {
            name: 'age',
            value: '_.gt(18)',
            quote: '',
          },
        },
      ],
    },
    {
      type: WhereConditionType.Null,
      field: {
        name: 'type',
        value: 'ALL',
        quote: "'",
      },
    },
  ],
};

const main = () => {
  console.log(`
  1. ${whereParser(where)}
     ${whereParser2(_where)}
  
  2. ${whereParser(where2)}
     ${whereParser2(_where2)}

  3. ${whereParser(where3)}
     ${whereParser2(_where3)}
  `);
};

main();
