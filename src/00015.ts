// Last型を実装してください。
// Last型は、配列の最後の要素の型を返す型です。

type arr1 = ["a", "b", "c"];
type arr2 = [3, 2, 1];

type Last<T extends any[]> = T extends [...any, infer R] ? R : never;

type tail1 = Last<arr1>; // expected to be 'c'
type tail2 = Last<arr2>; // expected to be 1
