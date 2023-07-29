/**
 * Day 1
 * Interoperability with non functional code using fp-ts
 */

/**
 * Use case: an API that may fail and returns a special value of the codomain.
 Example: Array.prototype.findIndex
 Solution: Option
 */

import { Option, none, some } from "fp-ts/Option";

function findIndex<T>(
  as: Array<T>,
  predict: (a: T) => boolean
): Option<number> {
  const index = as.findIndex(predict);
  return index === -1 ? none : some(index);
}
const members = [
  { name: "A", age: 1 },
  { name: "B", age: 2 },
];

const result1 = findIndex(members, (member) => member.age === 2);
const result2 = findIndex(members, (member) => member.age === 12);
console.log({ result1, result2 }); // { result1: { _tag:'Some', value: 1 },result2: { _tag: 'None' } }
