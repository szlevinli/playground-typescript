// import readline from 'readline';
import prompt from 'prompt';

interface Node {
  id: number;
  label: string;
  // 行政区级别
  //  S: 国家; P: 省; C: 市; D: 区
  region: 'S' | 'P' | 'C' | 'D';
  children: Node[];
}

const china: Node = {
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

const getNodeByRegion = (region: Node['region'], node: Node) => {
  const recursion = (region: Node['region'], node: Node, acc: Node[]) => {
    if (node.region === region) acc.push(node);

    node.children.forEach((child) => recursion(region, child, acc));
  };
  const acc: Node[] = [];
  recursion(region, node, acc);
  return acc;
};

const getNodeById = (id: Node['id'], node: Node): Node | null => {
  if (node.id === id) return node;

  for (const child of node.children) {
    const res = getNodeById(id, child);
    if (res) return res;
  }

  return null;
};

// const main = () => {
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//   });

//   rl.question(
//     `
// Province:
//   ${getNodeByRegion('P', china)
//     .map((v) => `${v.id}: ${v.label}`)
//     .join('\n  ')}
// Please select province:`,
//     (province) => {
//       rl.question(
//         `
// City:
//   ${getNodeByRegion('C', getNodeById(Number.parseInt(province), china) || china)
//     .map((v) => `${v.id}: ${v.label}`)
//     .join('\n  ')}
// Please select city:`,
//         (city) => {
//           rl.question(
//             `
// District:
//   ${getNodeByRegion('D', getNodeById(Number.parseInt(city), china) || china)
//     .map((v) => `${v.id}: ${v.label}`)
//     .join('\n  ')}
// Please select district:`,
//             (district) => {
//               console.log(
//                 `Province: ${province}; City: ${city}; District: ${district}`
//               );
//               rl.close();
//             }
//           );
//         }
//       );
//     }
//   );

//   rl.on('close', () => {
//     console.log('\nBye BYE !!!');
//     process.exit(0);
//   });

//   // console.log(`
//   // getNodeByRegion:
//   // ${JSON.stringify(
//   //   getNodeByRegion('C', china).map((v) => v.label),
//   //   null,
//   //   2
//   // )}
//   // getNodeById:
//   // ${JSON.stringify(getNodeById(10111, china), null, 2)}
//   // `);
// };

const main = async () => {
  prompt.start();

  console.log('Province:');
  console.log(
    getNodeByRegion('P', china)
      .map((v) => `  ${v.id}. ${v.label}`)
      .join('\n')
  );
  const { province } = await prompt.get([
    {
      name: 'province',
      description: 'Please select province (number): ',
    },
  ]);

  console.log('City:');
  console.log(
    getNodeByRegion(
      'C',
      getNodeById(Number.parseInt(province as string), china) || china
    )
      .map((v) => `  ${v.id}. ${v.label}`)
      .join('\n')
  );
  const { city } = await prompt.get([
    {
      name: 'city',
      description: 'Please select city (number): ',
    },
  ]);

  console.log('District:');
  console.log(
    getNodeByRegion(
      'D',
      getNodeById(Number.parseInt(city as string), china) || china
    )
      .map((v) => `  ${v.id}. ${v.label}`)
      .join('\n')
  );
  const { district } = await prompt.get([
    {
      name: 'district',
      description: 'Please select district (number): ',
    },
  ]);

  console.log(`
  You select:
  Province: ${getNodeById(Number.parseInt(province as string), china)?.label}
  City: ${getNodeById(Number.parseInt(city as string), china)?.label}
  District: ${getNodeById(Number.parseInt(district as string), china)?.label}`);
};

main();
