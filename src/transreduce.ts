/* eslint-disable  @typescript-eslint/no-explicit-any */
import R from 'ramda';

type Reduce<Acc, T> = (acc: Acc, cur: T) => Acc;

const map = <Acc, T>(f: (c: T) => T) => (step: Reduce<Acc, T>) => (
  a: Acc,
  c: T
) => step(a, f(c));

const filter = <Acc, T>(predicate: (c: T) => boolean) => (
  step: Reduce<Acc, T>
) => (a: Acc, c: T) => (predicate(c) ? step(a, c) : a);

const isEven = (n: number) => n % 2 === 0;
const double = (n: number) => n * 2;

const doubleEvens = R.compose<
  Reduce<any, number>,
  Reduce<any, number>,
  Reduce<any, number>
>(filter(isEven), map(double));

const arrayConcat: Reduce<number[], number> = (a, c) => a.concat([c]);
const count: Reduce<number, number> = (a, c) => a + c;

const xForm = doubleEvens(arrayConcat);
const yForm = doubleEvens(count);

const result = [1, 2, 3, 4, 5, 6].reduce(xForm, []);
const result2 = [1, 2, 3, 4, 5, 6].reduce(yForm, 0);

console.log(result);
console.log(result2);
