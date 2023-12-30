// 文字列をUnion型に変換するStringToUnion<T>を実装してください。

type Test = "123";

type StringToUnion<T extends string> = T extends `${infer F}${infer R}` ? F | StringToUnion<R> : never

type Result = StringToUnion<Test>; // expected to be "1" | "2" | "3"
