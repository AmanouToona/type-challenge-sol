// 文字列をUnion型に変換するStringToUnion<T>を実装してください。

type Test = "123";

type StringToUnion<T> = T extends [infer R, ...(infer S extend string)] ? R : never;

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
