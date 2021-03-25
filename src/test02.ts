import util from 'util';

class T {
  constructor(public v: string) {}

  toString = () => `is ${this.v}`;

  // [util.inspect.custom] = () => `===this value===is===${this.v}`;
}

const t = new T('LEVIN');

console.log(t);
console.log(util.inspect(t));

Object.getOwnPropertySymbols(t).forEach((v) => console.log(v));
