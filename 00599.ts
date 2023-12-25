// Merge型を実装してください。
// Merge型は、2つのオブジェクト型を受け取り、それらをマージした型を返す型です。

type foo = {
    name: string;
    age: string;
};
type coo = {
    age: number;
    sex: string;
};

type Merge<T, U> = { [Property in keyof T | keyof U]: Property extends keyof U ? U[Property] : Property extends keyof T ? T[Property] : never };
type Result = Merge<foo, coo>; // expected to be {name: string, age: number, sex: string}
