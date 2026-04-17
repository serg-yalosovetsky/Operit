# API :`jimp.d.ts`

`jimp.d.ts` `Jimp` .,.

## Translated section

:

- Base64 .
- .
- .
- Base64.
- .

## Translated section

```ts
Jimp
```

, `import`.

## Translated section

### `Jimp.JimpWrapper`

,:

- `crop(x, y, w, h)`: `JimpWrapper`.
- `composite(src, x, y)`:.
- `getWidth()`:.
- `getHeight()`:.
- `getBase64(mime)`: Base64 .
- `release()`:.

### `Jimp.read(base64)`

```ts
read(base64: string): Promise<JimpWrapper>
```

 Base64 .

### `Jimp.create(w, h)`

```ts
create(w: number, h: number): Promise<JimpWrapper>
```

.

### MIME

- `Jimp.MIME_JPEG`
- `Jimp.MIME_PNG`

## Translated section

### Translated section

```ts
const image = await Jimp.read(base64Image);
const cropped = await image.crop(0, 0, 200, 200);
const output = await cropped.getBase64(Jimp.MIME_PNG);
await image.release();
await cropped.release();
```

### Translated section

```ts
const canvas = await Jimp.create(800, 600);
const icon = await Jimp.read(iconBase64);
await canvas.composite(icon, 24, 24);
const merged = await canvas.getBase64(Jimp.MIME_PNG);
await icon.release();
await canvas.release();
```

## Translated section

- `JimpWrapper` , `release()`.
- Base64,；, `Tools.Files.readBinary()` .
- `examples/types/jimp.d.ts` , Jimp API.

## Translated section

- `examples/types/jimp.d.ts`
- `examples/types/files.d.ts`
- `examples/types/index.d.ts`
