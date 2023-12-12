interface Todo {
    title: string;
    description: string;
    completed: boolean;
}

/* _____________ ここにコードを記入 _____________ */


type MyPick<T, K extends keyof T> = {
    [Properties in K]: Properties extends keyof T ? T[Properties] : never
}

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
    title: "Clean room",
    completed: false,
};
