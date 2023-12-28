type Diff<O, O1> = { [Property in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]:
    Property extends keyof O ? O[Property] : Property extends keyof O1 ? O1[Property] : never };

type Foo = {
    name: string;
    age: string;
};
type Bar = {
    name: string;
    age: string;
    gender: number;
};
type Coo = {
    name: string;
    gender: number;
};


type DiffFooBar = Diff<Foo, Bar>; // { gender: number }
type DiffBarFoo = Diff<Bar, Foo>; // { gender: number }
type DiffFooCoo = Diff<Foo, Coo>; // { gender: number, age: string }
type DiffCooFoo = Diff<Coo, Foo>; // { gender: number, age: string }
