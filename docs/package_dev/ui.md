# API :`ui.d.ts`

`ui.d.ts` UI :

- `Tools.UI`:、、.
- `UINode`:、、.

## Translated section

```ts
Tools.UI
UINode
```

`UINode` ,.

## `Tools.UI`

### Translated section

#### `getPageInfo()`

, `UIPageResultData`.

### Translated section

#### `tap(x, y)`

.

#### `longPress(x, y)`

.

#### `setText(text, resourceId?)`

； `resourceId`,.

#### `pressKey(keyCode)`

.

#### `swipe(startX, startY, endX, endY, duration?)`

.

### :`clickElement(...)`

, `ui.d.ts` .

:

```ts
clickElement(resourceId)
clickElement(bounds)
clickElement(resourceId, index)
clickElement(type, value)
clickElement(type, value, index)
clickElement({ resourceId?, className?, text?, contentDesc?, bounds?, index?, partialMatch?, isClickable? })
```

:

- `bounds` `"[x1,y1][x2,y2]"`
- `type` `resourceId | className | bounds`
- translated

### Translated section

#### `runSubAgent(intent, maxSteps?, agentId?, targetApp?)`

```ts
runSubAgent(intent: string, maxSteps?: number, agentId?: string, targetApp?: string): Promise<AutomationExecutionResultData>
```

 UI .

## `UINode`

### Translated section

:

```ts
const root = await UINode.getCurrentPage();
```

:

```ts
const page = await Tools.UI.getPageInfo();
const root = UINode.fromPageInfo(page);
```

### Translated section

- `className`
- `text`
- `contentDesc`
- `resourceId`
- `bounds`
- `isClickable`
- `rawNode`
- `parent`
- `path`
- `centerPoint`
- `children`
- `childCount`

### Translated section

- `allTexts(trim?, skipEmpty?)`
- `textContent(separator?)`
- `hasText(text, caseSensitive?)`

### Translated section

- `find(criteria, deep?)`
- `findAll(criteria, deep?)`
- `findByText(text, options?)`
- `findAllByText(text, options?)`
- `findById(id, options?)`
- `findAllById(id, options?)`
- `findByClass(className, options?)`
- `findAllByClass(className, options?)`
- `findByContentDesc(description, options?)`
- `findAllByContentDesc(description, options?)`
- `findClickable()`
- `closest(criteria)`

### Translated section

- `click()`
- `longPress()`
- `setText(text)`
- `wait(ms?)`
- `clickAndWait(ms?)`
- `longPressAndWait(ms?)`

 `wait()` / `clickAndWait()` / `longPressAndWait()` `UINode` .

### Translated section

- `toString()`
- `toTree(indent?)`
- `toTreeString(indent?)`
- `toFormattedString?()`
- `equals(other)`

### Translated section

- `fromPageInfo(pageInfo)`
- `getCurrentPage()`
- `findAndWait(query, delayMs?)`
- `clickAndWait(query, delayMs?)`
- `longPressAndWait(query, delayMs?)`

## Translated section

### Translated section

```ts
const root = await UINode.getCurrentPage();
const button = root.findByText('');
if (button) {
  await button.click();
}
```

### `clickElement`

```ts
await Tools.UI.clickElement({
 text: '',
  partialMatch: false,
  isClickable: true
});
```

### Translated section

```ts
await Tools.UI.setText('hello world', 'com.example:id/input');
```

### UI

```ts
const result = await Tools.UI.runSubAgent(
 ' WLAN ',
  20,
  undefined,
  'com.android.settings'
);
complete(result);
```

## Translated section

- `examples/types/ui.d.ts`
- `examples/types/results.d.ts`
- `docs/package_dev/results.md`
