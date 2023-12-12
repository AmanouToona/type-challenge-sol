// Unshiftを実装してください

type Unshift<T extends any[], S> = [S, ...T]

type Result = Unshift<[1, 2], 0>; // [0, 1, 2,]
