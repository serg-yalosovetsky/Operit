# API :`cryptojs.d.ts`

`cryptojs.d.ts` `CryptoJS` . CryptoJS,.

## Translated section

:

- `MD5`.
- `AES.decrypt()` .

## Translated section

```ts
CryptoJS
```

, `import`.

## Translated section

### `CryptoJS.WordArray`

,:

```ts
toString(encoding?: any): string
```

:

```ts
const hex = CryptoJS.MD5("hello").toString();
```

### `CryptoJS.MD5(message)`

```ts
MD5(message: string): WordArray
```

 MD5 , `WordArray`.

### `CryptoJS.AES.decrypt(ciphertext, key, cfg?)`

```ts
CryptoJS.AES.decrypt(ciphertext: string, key: any, cfg?: any): WordArray
```

:

- `key` `cfg` .
- `AES.encrypt()`,.

### Translated section

:

- `CryptoJS.enc.Hex.parse(hexStr)`
- `CryptoJS.enc.Utf8`
- `CryptoJS.pad.Pkcs7`
- `CryptoJS.mode.ECB`

## Translated section

### MD5

```ts
const digest = CryptoJS.MD5("assistance").toString();
complete({ digest });
```

### `WordArray`

```ts
const wordArray = CryptoJS.enc.Hex.parse("48656c6c6f");
const text = wordArray.toString(CryptoJS.enc.Utf8);
```

### AES

```ts
const result = CryptoJS.AES.decrypt(ciphertext, key, {
  mode: CryptoJS.mode.ECB,
  padding: CryptoJS.pad.Pkcs7
});
const plaintext = result.toString(CryptoJS.enc.Utf8);
```

## Translated section

- “ API”, CryptoJS.
- CryptoJS `examples/types/cryptojs.d.ts`,.
- `toString()` ,.

## Translated section

- `examples/types/cryptojs.d.ts`
- `examples/types/index.d.ts`
