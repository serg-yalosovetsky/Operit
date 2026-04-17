# API :`files.d.ts`

`files.d.ts` `Tools.Files` ., `android` `linux` 、、.

## Translated section

:

- .
- / .
- 、、、.
- 、、.
- 、 AI diff、、、.

## Translated section

### `FileEnvironment`

```ts
type FileEnvironment = 'android' | 'linux'
```

 API ；, `android`.

### `ApplyFileType`

```ts
type ApplyFileType = 'replace' | 'delete' | 'create'
```

 `Tools.Files.apply()`.

## Translated section

```ts
Tools.Files
```

## API

### Translated section

#### `list(path, environment?)`

, `DirectoryListingData`.

#### `read(path)` / `read(options)`

```ts
read(path: string): Promise<FileContentData>
read({ path, environment?, intent?, direct_image? }): Promise<FileContentData>
```

:

- `intent?`:.
- `direct_image?`:.

#### `readPart(path, startLine?, endLine?, environment?)`

, `FilePartContentData`.

#### `readBinary(path, environment?)`

, `BinaryFileContentData`, Base64.

### Translated section

#### `write(path, content, append?, environment?)`

,.

#### `writeBinary(path, base64Content, environment?)`

 Base64 .

#### `apply(path, type, old?, newContent?, environment?)`

```ts
apply(path, 'replace' | 'delete' | 'create', old?, newContent?, environment?)
```

:

- `replace` / `delete` `old` .
- `create` / `replace` `newContent`.
- `FileApplyResultData`, `operation` `aiDiffInstructions`.

### 、、

#### `deleteFile(path, recursive?, environment?)`

.

#### `move(source, destination, environment?)`

.

#### `copy(source, destination, recursive?, sourceEnvironment?, destEnvironment?)`

, `files.d.ts` .

#### `mkdir(path, create_parents?, environment?)`

.

### Translated section

#### `exists(path, environment?)`

, `FileExistsData`.

#### `info(path, environment?)`

, `FileInfoData`.

#### `find(path, pattern, options?, environment?)`

 / , `FindFilesResultData`.

#### `grep(path, pattern, options?)`

```ts
grep(path, pattern, {
  file_pattern?,
  case_insensitive?,
  context_lines?,
  max_results?,
  environment?
})
```

, `GrepResultData`.

#### `grepContext(path, intent, options?)`

, `GrepResultData`.

### 、、、

#### `zip(source, destination, environment?)`

.

#### `unzip(source, destination, environment?)`

.

#### `open(path, environment?)`

.

#### `share(path, title?, environment?)`

.

#### `download(url, destination, environment?, headers?)`

 URL .

#### `download(options)`

```ts
download({
  url?,
  visit_key?,
  link_number?,
  image_number?,
  destination,
  environment?,
  headers?
})
```

 URL, `visit_web` `visit_key` .

## Translated section

### Translated section

```ts
const file = await Tools.Files.read({
  path: '/sdcard/notes/todo.txt',
  environment: 'android'
});
console.log(file.content);
```

### Translated section

```ts
const part = await Tools.Files.readPart('/sdcard/app.log', 1, 80);
console.log(part.content);
```

### Translated section

```ts
await Tools.Files.copy(
  '/sdcard/input.txt',
  '/tmp/input.txt',
  false,
  'android',
  'linux'
);
```

### Translated section

```ts
const matches = await Tools.Files.grep('/workspace', 'toolCall\\(', {
  file_pattern: '*.ts',
  context_lines: 2,
  max_results: 20,
  environment: 'linux'
});
```

### Translated section

```ts
await Tools.Files.apply(
  '/sdcard/demo.txt',
  'replace',
  'old text',
  'new text'
);
```

## Translated section

:

- `DirectoryListingData`
- `FileContentData`
- `BinaryFileContentData`
- `FilePartContentData`
- `FileOperationData`
- `FileExistsData`
- `FindFilesResultData`
- `FileInfoData`
- `FileApplyResultData`
- `GrepResultData`

## Translated section

- `examples/types/files.d.ts`
- `examples/types/results.d.ts`
- `docs/package_dev/results.md`
