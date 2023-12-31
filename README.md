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

```**ts**
tuple[number]
```

で tuple の内容を union 型で取得できる

### 00002

`infer` の位置が分からなかった

### 00599

三項演算子は連続できたんだ

### 00645

ユーティリティ型の知識が必要  
[サバイバル TypeScript](https://typescriptbook.jp/reference/type-reuse/utility-types)参考

### 00531

なぜ、infer F が 1 文字に推定されるのかがわからない。 {infer F}{infer R} ならどちらが何に推定されても大丈夫に感じる。  
おそらく仕様がある。

### 00010

00011 では typeof で unuon 型を渡している、この違いがよくわからない
