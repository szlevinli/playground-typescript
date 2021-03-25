import { curry } from 'ramda';

const fn01 = (className: string, element: string) => `${element}.${className}`;

const curriedFn01 = curry(fn01);

const elements = ['A', 'B', 'C'];

const result = elements.map(curriedFn01('ClassA'));

console.log(`${JSON.stringify(result, null, 2)}`);
