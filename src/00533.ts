type Concat<S extends any[], T extends any[]> = [...S, ...T];
type Result = Concat<[1], [2]>; // expected to be [1, 2]
