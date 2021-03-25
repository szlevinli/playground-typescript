import { Node } from './typeDef';

export const china: Node = {
  id: 0,
  label: 'China',
  region: 'S',
  children: [
    {
      id: 100,
      label: '广东省',
      region: 'P',
      children: [
        {
          id: 1001,
          label: '深圳市',
          region: 'C',
          children: [
            {
              id: 10011,
              label: '南山区',
              region: 'D',
              children: [],
            },
            {
              id: 10012,
              label: '福田区',
              region: 'D',
              children: [],
            },
          ],
        },
        {
          id: 1000,
          label: '广州市',
          region: 'C',
          children: [
            {
              id: 10001,
              label: '越秀区',
              region: 'D',
              children: [],
            },
            {
              id: 10002,
              label: '天河区',
              region: 'D',
              children: [],
            },
          ],
        },
      ],
    },
    {
      id: 101,
      label: '福建省',
      region: 'P',
      children: [
        {
          id: 1011,
          label: '福州市',
          region: 'C',
          children: [
            {
              id: 10111,
              label: '鼓楼区',
              region: 'D',
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
