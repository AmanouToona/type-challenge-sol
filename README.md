# 

## 環境構築

```bash
tsc --init
npm i @type-challenges/utils
npm install @type-challenges/utils  # 要らないかも?
```

### tsconfig.json の変更点

- `strictNullChecks` -> `true`

## web

[type-challenges github](https://github.com/type-challenges/type-challenges)
[mosya<TC>](https://mosya.dev/type-challenges/dashboard)
[自分の解答](https://github.com/AmanouToona/type-challenge-sol)

## ヒント・参考

### 000007

[Key Remapping via as](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html#key-remapping-via-as)

### 00016

`infer` を使う。  
`infer` の位置に注意

### 000011

```ts
tuple[number]
```
で tuple の内容を union型で取得できる

### 00002

`infer` の位置が分からなかった  

### 00599

三項演算子は連続できたんだ