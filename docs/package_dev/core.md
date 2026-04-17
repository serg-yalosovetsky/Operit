# API :`core.d.ts`

`core.d.ts` .、、,.

## Translated section

:

- .
- `toolCall()` `complete()`.
- `NativeInterface` .
- `_` `dataUtils`.
- CommonJS `exports`.

## Translated section

### `ToolParams`

```ts
interface ToolParams {
  [key: string]: string | number | boolean | object;
}
```

.

### `ToolConfig`

```ts
interface ToolConfig {
  type?: string;
  name: string;
  params?: ToolParams;
}
```

 `toolCall()`.

### `BaseResult`

```ts
interface BaseResult {
  success: boolean;
  error?: string;
}
```

### `StringResult` / `BooleanResult` / `NumberResult`

 `BaseResult`,:

- `data`
- `toString()`

### `ToolResult`

```ts
type ToolResult = StringResult | BooleanResult | NumberResult | (BaseResult & { data: any })
```

### `ToolReturnType<T>`

 `tool-types.d.ts` `ToolResultMap` `toolCall()` .

## Translated section

### `toolCall()`

`core.d.ts` 4 :

```ts
toolCall(toolType: string, toolName: T, toolParams?: ToolParams)
toolCall(toolName: T, toolParams?: ToolParams)
toolCall(config: ToolConfig & { name: T })
toolCall(toolName: string)
```

:

```ts
const result = await toolCall('read_file', { path: '/sdcard/a.txt' });
```

:

```ts
const result = await toolCall({
  name: 'http_request',
  params: { url: 'https://example.com' }
});
```

### `complete(result)`

```ts
complete<T>(result: T): void
```

.

## `NativeInterface`

`NativeInterface` . `Tools.*`、`toolCall()` ；.

### Translated section

- `callTool(toolType, toolName, paramsJson)`
- `callToolAsync(callbackId, toolType, toolName, paramsJson)`
- `setResult(result)`
- `setError(error)`
- `logInfo(message)`
- `logError(message)`
- `logDebug(message, data)`

### ToolPkg

- `registerToolPkgToolboxUiModule(specJson)`
- `registerToolPkgAppLifecycleHook(specJson)`
- `registerToolPkgMessageProcessingPlugin(specJson)`
- `registerToolPkgXmlRenderPlugin(specJson)`
- `registerToolPkgInputMenuTogglePlugin(specJson)`

### Translated section

- `registerImageFromBase64(base64, mimeType)`
- `registerImageFromPath(path)`

 `<link type="image" id="...">` .

### Translated section

- `reportError(errorType, errorMessage, errorLine, errorStack)`

### Java / Kotlin

- `javaClassExists(className)`
- `javaGetApplicationContext()`
- `javaGetCurrentActivity()`
- `javaNewInstance(className, argsJson)`
- `javaCallStatic(className, methodName, argsJson)`
- `javaCallInstance(instanceHandle, methodName, argsJson)`
- `javaGetStaticField(className, fieldName)`
- `javaSetStaticField(className, fieldName, valueJson)`
- `javaGetInstanceField(instanceHandle, fieldName)`
- `javaSetInstanceField(instanceHandle, fieldName, valueJson)`

 JSON ,.

:

- Java , `release` / `releaseAll` .
- `Java.implement(...)` / `Java.proxy(...)` JS ,.

## Translated section

### `_`

 Lodash :

- `isEmpty`
- `isString`
- `isNumber`
- `isBoolean`
- `isObject`
- `isArray`
- `forEach`
- `map`

### `dataUtils`

- `parseJson(jsonString)`
- `stringifyJson(obj)`
- `formatDate(date?)`

### `exports`

```ts
var exports: { [key: string]: any }
```

 CommonJS .

## Translated section

### `toolCall()`

```ts
const file = await toolCall('read_file', {
  path: '/sdcard/demo.txt'
});
complete(file);
```

### Translated section

```ts
NativeInterface.logInfo('start');
NativeInterface.logDebug('payload', JSON.stringify({ ok: true }));
```

### Translated section

```ts
const imageLink = NativeInterface.registerImageFromPath('/sdcard/demo.png');
complete({ imageLink });
```

## `index.d.ts`

`core.d.ts` “”；`index.d.ts` ,:

- `sendIntermediateResult`
- `getEnv`
- `Tools`
- `Java`
- `Kotlin`

 `docs/package_dev/index.md` .

## Translated section

- `examples/types/core.d.ts`
- `examples/types/tool-types.d.ts`
- `docs/package_dev/index.md`
