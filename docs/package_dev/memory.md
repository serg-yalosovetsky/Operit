# API :`memory.d.ts`

`memory.d.ts` `Tools.Memory` ,、、,.

## Translated section

:

- .
- .
- 、、、.
- 、、、.

## Translated section

```ts
Tools.Memory
```

## API

### Translated section

#### `query(query, folderPath?, limit?, startTime?, endTime?, snapshotId?, threshold?)`

```ts
query(
  query: string,
  folderPath?: string,
  limit?: number,
  startTime?: string,
  endTime?: string,
  snapshotId?: string,
  threshold?: number
): Promise<MemoryQueryResultData>
```

:

- `query` 、, `|` ；,`*` , `error*timeout`； `*` .
- `limit` , `>=1`, `20`； `limit > 20` .
- `startTime` / `endTime` , `YYYY-MM-DD` `YYYY-MM-DD HH:mm` .
- `startTime` : `00:00:00.000` , `00` .
- `endTime` : `23:59:59.999`, `59.999` .
- `snapshotId` ,, `snapshotId`.
- `snapshotId` , id；, id ,.
- `snapshotId` ,,.
- `threshold` , `>= 0`；.`query_memory` `0`.
- `memories[]`, `title`、`content`、`source`、`tags`、`createdAt`, `chunkInfo` `chunkIndices`.
- `snapshotId`、`snapshotCreated`、`excludedBySnapshotCount`,.

#### `getByTitle(title, chunkIndex?, chunkRange?, query?, limit?)`

；,:

- `chunkIndex?`
- `chunkRange?`, `"3-7"`
- `query?`,,、、`|` , `*`
- `limit?`, `query` ,, `20`

 `Promise<string>`.

### Translated section

#### `create(title, content, contentType?, source?, folderPath?, tags?)`

,:

- `contentType` `text/plain`
- `source` `ai_created`
- `folderPath`

 `Promise<string>`.

#### `update(oldTitle, updates?)`

```ts
update(oldTitle: string, updates?: {
  newTitle?,
  content?,
  contentType?,
  source?,
  credibility?,
  importance?,
  folderPath?,
  tags?
}): Promise<string>
```

### Translated section

#### `deleteMemory(title)`

, `Promise<string>`.

#### `move(targetFolderPath, titles?, sourceFolderPath?)`

:

- `titles` .
- .
- `sourceFolderPath` .

## API

### `link(sourceTitle, targetTitle, linkType?, weight?, description?)`

, `MemoryLinkResultData`.

### `queryLinks(linkId?, sourceTitle?, targetTitle?, linkType?, limit?)`

, `MemoryLinkQueryResultData`.

### `updateLink(linkId?, sourceTitle?, targetTitle?, linkType?, newLinkType?, weight?, description?)`

, `MemoryLinkResultData`.

### `deleteLink(linkId?, sourceTitle?, targetTitle?, linkType?)`

, `Promise<string>`.

## Translated section

`memory.d.ts` :

- `query()` `MemoryQueryResultData`.
- / `Promise<string>`.
- :`MemoryLinkResultData`、`MemoryLinkQueryResultData`.

## Translated section

### Translated section

```ts
const result = await Tools.Memory.query(
 '',
  'dev/network',
  20,
  undefined,
  undefined,
  undefined,
  0
);
console.log(result.snapshotId);
console.log(result.memories.map(item => item.title));
```

### Translated section

```ts
const result = await Tools.Memory.query(
 '',
  'dev/network',
  5,
  '2026-03-01',
  '2026-03-27 18:30',
  undefined,
  0.1
);
console.log(result.memories.length);
```

### Translated section

```ts
const firstPage = await Tools.Memory.query('');
const secondPage = await Tools.Memory.query(
 '',
  undefined,
  5,
  undefined,
  undefined,
  firstPage.snapshotId || undefined,
  0
);
console.log(secondPage.excludedBySnapshotCount);
```

### id

```ts
const snapshotId = 'network-audit-batch-1';
const threshold = 0.05;

const [recent, historical] = await Promise.all([
 Tools.Memory.query('', 'dev/network', 5, '2026-03-20', undefined, snapshotId, threshold),
 Tools.Memory.query('', 'dev/network', 5, undefined, '2026-03-19 23:59', snapshotId, threshold)
]);

console.log(snapshotId, recent.snapshotCreated, historical.snapshotCreated);
```

### Translated section

```ts
await Tools.Memory.create(
 'OkHttp ',
 '',
  'text/plain',
  'manual',
  'dev/http',
  'android,http'
);
```

### Translated section

```ts
await Tools.Memory.update('OkHttp ', {
 content: '',
  importance: 0.9,
  tags: 'android,http,okhttp'
});
```

### Translated section

```ts
const link = await Tools.Memory.link(
 'OkHttp ',
 '',
  'related',
  0.8,
 ' Android '
);
complete(link);
```

## Translated section

- `examples/types/memory.d.ts`
- `examples/types/results.d.ts`
- `docs/package_dev/results.md`
