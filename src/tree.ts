import { curry } from 'lodash';
import { china } from './data';
import { Node } from './typeDef';

interface ReducerFn<T, K> {
  (init: T, node: K): T;
}

interface ReduceFn<T, K> {
  (...arg: [ReducerFn<T, K>, T?, K?]): T;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const treeReduce: any = curry(
  (reducerFn: ReducerFn<Node[], Node>, init: Node[], node: Node) => {
    const acc = reducerFn(init, node);

    if (node.children.length === 0) return acc;

    return node.children.reduce(treeReduce(reducerFn), acc);
  }
);

const getNodeByRegion: (region: Node['region']) => ReducerFn<Node[], Node> = (
  region
) => (acc = [], node) => {
  return region === node.region ? acc.concat(node) : acc;
};

const getNodeById: (id: Node['id']) => ReducerFn<Node | null, Node> = (id) => (
  acc,
  node
) => {
  return acc ? acc : id === node.id ? node : null;
};

const byRegion = treeReduce(getNodeByRegion('D'), [], china);
const byId = treeReduce(getNodeById(1001), null, china);

console.log(`by Region:
${JSON.stringify(byRegion, null, 2)}
================================
by id:
${JSON.stringify(byId, null, 2)}
`);
