// MyReadonly<T>を実装してください
// MyReadonlyは、Tのプロパティをすべて読み取り専用にする型です

interface Todo {
    title: string;
    description: string;
}

type MyReadonly<T> = {
    readonly [Properties in keyof T as Properties]: T[Properties]
}



const todo: MyReadonly<Todo> = {
    title: "Hey",
    description: "foobar",
};


todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property