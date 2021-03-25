/* eslint-disable 
    @typescript-eslint/no-explicit-any, 
    @typescript-eslint/no-unused-vars
*/

type Params<F extends (...args: any[]) => any> = F extends (
  ...args: infer A
) => any
  ? A
  : never;
type Head<T extends any[]> = T extends [any, ...any[]] ? T[0] : never;
type Tail<T extends any[]> = ((...t: T) => any) extends (
  _: any,
  ...tail: infer TT
) => any
  ? TT
  : [];
type HasTail<T extends any[]> = T extends [] | [any] ? false : true;
type CurryV0<P extends any[], R> = (
  arg0: Head<P>
) => HasTail<P> extends true ? CurryV0<Tail<P>, R> : R;

const toCurry01 = (name: string, age: number, single: boolean) => true;
const curried01 = (name: string) => (age: number) => (single: boolean) => true;

declare function curryV0<P extends any[], R>(
  f: (...args: P) => R
): CurryV0<P, R>;

const toCurry02 = (name: string, age: number, single: boolean) => true;
const curried02 = curryV0(toCurry02);
const test23 = curried02('Jane')(26)(true);
