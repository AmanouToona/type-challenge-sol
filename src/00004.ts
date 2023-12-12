interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

/* _____________ ここにコードを記入 _____________ */


type MyPick<T, K> = {
    [Properties in keyof T]: Properties extends K ? T[Properties] : never
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
