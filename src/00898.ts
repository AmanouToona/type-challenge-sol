// Includesを実装してください

type Includes<T extends any[], U> = keyof T extends U ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `false`