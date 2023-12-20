// この型を実装してください
type DeepReadonly<T> = { readonly [Pro in keyof T]: T[Pro] };

type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type Todo = DeepReadonly<X> // should be same as `Expected`
