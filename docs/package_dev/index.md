# API :`index.d.ts`

`index.d.ts` .:

- `.d.ts` .
- .
- `Tools` .

,.

## Translated section

```ts
/// <reference path="./types/index.d.ts" />
```

 IDE API .

## `index.d.ts`

### 1.

:

- `core.d.ts`
- `results.d.ts`
- `tool-types.d.ts`
- `java-bridge.d.ts`
- `toolpkg.d.ts`
- `compose-dsl.d.ts`
- `compose-dsl.material3.generated.d.ts`

### 2.

:

- `Net`
- `System`
- `SoftwareSettings`
- `UI`
- `UINode`
- `FFmpegVideoCodec` / `FFmpegAudioCodec` / `FFmpegResolution` / `FFmpegBitrate`
- `Tasker`
- `Workflow`
- `ToolPkg`
- `Chat`
- `Memory`
- Android

### 3.

 `index.d.ts` : `import`,.

## Translated section

### Translated section

- `toolCall(...)`
- `complete(result)`
- `sendIntermediateResult(result)`

### Translated section

- `getEnv(key)`
- `getState()`
- `getLang()`
- `getCallerName()`
- `getChatId()`
- `getCallerCardId()`

## Translated section

### Android / UI

- `Intent`
- `IntentFlag`
- `IntentAction`
- `IntentCategory`
- `UINode`
- `Android`

### Translated section

- `Tools`
- `_`
- `dataUtils`
- `exports`
- `NativeInterface`
- `Java`
- `Kotlin`

### Translated section

- `OPERIT_DOWNLOAD_DIR`
- `OPERIT_CLEAN_ON_EXIT_DIR`

## `Tools`

`Tools` :

```ts
const Tools: {
  Files
  Net
  System
  SoftwareSettings
  UI
  FFmpeg
  Tasker
  Workflow
  Chat
  Memory
  calc
}
```

:

- `Tools.Tasker` `Tasker.Runtime`
- `Tools.Workflow` `Workflow.Runtime`
- `Tools.calc(expression)` `Promise<CalculationResultData>`

## Translated section

`index.d.ts` ,:

- `CalculationResultData`
- `SleepResultData`
- `SystemSettingData`
- `AppOperationData`
- `AppListData`
- `DeviceInfoResultData`
- `UIPageResultData`
- `UIActionResultData`
- `FileContentData`
- `HttpResponseData`
- `VisitWebResultData`
- `WorkflowDetailResultData`
- `ModelConfigResultItem`
- `MemoryLinkResultData`

,:

- `ComposeDslContext`
- `ComposeDslScreen`
- `ComposeNode`
- `ComposeCanvasCommand`
- `JavaBridgeApi`
- `JavaBridgeClass`
- `JavaBridgeInstance`
- `JavaBridgeHandle`
- `JavaBridgePackage`
- `JavaBridgeJsInterfaceMarker`
- `JavaBridgeJsInterfaceImpl`
- `JavaBridgeJsMethod`
- `JavaBridgeInterfaceRef`
- `JavaBridgeCallbackResult`

## Translated section

### Translated section

```ts
/// <reference path="./types/index.d.ts" />

const page = await UINode.getCurrentPage();
const title = page.findByText('');

if (title) {
  await title.click();
}

const response = await Tools.Net.httpGet('https://example.com');
complete({
  ok: true,
  status: response.statusCode
});
```

### Translated section

```ts
const apiKey = getEnv('OPENAI_API_KEY');
const state = getState();
const chatId = getChatId();

sendIntermediateResult({ state, chatId });
```

## Translated section

 `docs/package_dev` :

- `android.md`
- `chat.md`
- `core.md`
- `cryptojs.md`
- `ffmpeg.md`
- `files.md`
- `jimp.md`
- `memory.md`
- `network.md`
- `okhttp.md`
- `results.md`
- `software_settings.md`
- `system.md`
- `tasker.md`
- `tool-types.md`
- `toolpkg.md`
- `ui.md`
- `workflow.md`

## Translated section

`examples/types` ,:

- `compose-dsl.d.ts`
- `compose-dsl.material3.generated.d.ts`
- `java-bridge.d.ts`
- `pako.d.ts`

 `index.d.ts` , `.d.ts` .

## Translated section

- `examples/types/index.d.ts`
- `docs/package_dev/core.md`
- `docs/package_dev/results.md`
- `docs/package_dev/toolpkg.md`
