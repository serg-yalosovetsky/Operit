# API :`toolpkg.d.ts`

`toolpkg.d.ts` .“”,**、**, tool package 、、XML 、.

## Translated section

:

- UI .
- .
- .
- XML .
- .
- .
- Prompt 、、、、.

## Translated section

`toolpkg.d.ts` `ToolPkg`:

- `namespace ToolPkg`:.
- `const ToolPkg: ToolPkg.Registry`:.

:

```ts
ToolPkg.registerAppLifecycleHook(...)
ToolPkg.registerMessageProcessingPlugin(...)
```

,:

- `registerToolPkgToolboxUiModule(...)`
- `registerToolPkgAppLifecycleHook(...)`
- `registerToolPkgMessageProcessingPlugin(...)`
- `registerToolPkgXmlRenderPlugin(...)`
- `registerToolPkgInputMenuTogglePlugin(...)`
- `registerToolPkgToolLifecycleHook(...)`
- `registerToolPkgPromptInputHook(...)`
- `registerToolPkgPromptHistoryHook(...)`
- `registerToolPkgPromptEstimateHistoryHook(...)`
- `registerToolPkgSystemPromptComposeHook(...)`
- `registerToolPkgToolPromptComposeHook(...)`
- `registerToolPkgPromptFinalizeHook(...)`
- `registerToolPkgPromptEstimateFinalizeHook(...)`

## Translated section

### `ToolPkg.LocalizedText`

```ts
type LocalizedText = string | { [lang: string]: string }
```

、.

### `ToolPkg.JsonPrimitive` / `ToolPkg.JsonValue` / `ToolPkg.JsonObject`

 JSON .

## Translated section

### :`AppLifecycleEvent`

:

- `application_on_create`
- `application_on_foreground`
- `application_on_background`
- `application_on_low_memory`
- `application_on_trim_memory`
- `application_on_terminate`
- `activity_on_create`
- `activity_on_start`
- `activity_on_resume`
- `activity_on_pause`
- `activity_on_stop`
- `activity_on_destroy`

### :`HookEventName`

 hook ,:

- `message_processing`
- `xml_render`
- `input_menu_toggle`
- translated
- Prompt / / / /

### Prompt :`PromptTurnKind` / `PromptTurn`

Prompt hook `message_processing` , `PromptTurn`:

```ts
type PromptTurnKind =
  | 'SYSTEM'
  | 'USER'
  | 'ASSISTANT'
  | 'TOOL_CALL'
  | 'TOOL_RESULT'
  | 'SUMMARY'

interface PromptTurn {
  kind: PromptTurnKind
  content: string
  toolName?: string
  metadata?: JsonObject
}
```

:

- `{ role, content }` .
- `message_processing` `chatHistory` `PromptTurn[]`.
- role , `kind` .

### :`ToolLifecycleEventName`

- `tool_call_requested`
- `tool_permission_checked`
- `tool_execution_started`
- `tool_execution_result`
- `tool_execution_error`
- `tool_execution_finished`

### Prompt

#### `PromptInputEventName`

- `before_process`
- `after_process`

#### `PromptHistoryEventName`

- `before_prepare_history`
- `after_prepare_history`

#### `SystemPromptComposeEventName`

- `before_compose_system_prompt`
- `compose_system_prompt_sections`
- `after_compose_system_prompt`

#### `ToolPromptComposeEventName`

- `before_compose_tool_prompt`
- `filter_tool_prompt_items`
- `after_compose_tool_prompt`

#### `PromptFinalizeEventName`

- `before_finalize_prompt`
- `before_send_to_model`

## Translated section

 hook :

### `HookEventBase<TEventName, TPayload>`

:

- `event`
- `eventName`
- `eventPayload`
- `toolPkgId?`
- `containerPackageName?`
- `functionName?`
- `pluginId?`
- `hookId?`
- `timestampMs?`

## payload

### `MessageProcessingEventPayload`

:

- `messageContent?`
- `chatHistory?: PromptTurn[]`
- `workspacePath?`
- `maxTokens?`
- `tokenUsageThreshold?`
- `probeOnly?`
- `executionId?`

### `XmlRenderEventPayload`

:

- `xmlContent?`
- `tagName?`

### `InputMenuToggleEventPayload`

:

- `action?: 'create' | 'toggle' | string`
- `toggleId?`

### `ToolLifecycleEventPayload`

:

- `toolName`
- `parameters?`
- `description?`
- `granted?`
- `reason?`
- `success?`
- `errorMessage?`
- `resultText?`
- `resultJson?`

### `PromptHookEventPayload`

:

- `stage?`
- `functionType?`
- `promptFunctionType?`
- `useEnglish?`
- `rawInput?`
- `processedInput?`
- `chatHistory?: PromptTurn[]`
- `preparedHistory?: PromptTurn[]`
- `systemPrompt?`
- `toolPrompt?`
- `modelParameters?`
- `availableTools?`
- `metadata?`

## Translated section

### :`MessageProcessingHookReturn`

:

- `boolean`
- `string`
- `MessageProcessingHookObjectResult`
- `null`
- `void`
- `Promise`

 `MessageProcessingHookObjectResult` :

- `matched?`
- `text?`
- `content?`
- `chunks?`

### XML :`XmlRenderHookReturn`

:

- `string`
- `XmlRenderHookObjectResult`
- `null`
- `void`
- `Promise`

 `XmlRenderHookObjectResult` :

- `handled?`
- `text?`
- `content?`
- `composeDsl?`

`composeDsl` :

- `screen: ComposeDslScreen`
- `state?`
- `memo?`
- `moduleSpec?`

### :`InputMenuToggleHookReturn`

:

- `InputMenuToggleDefinitionResult[]`
- `InputMenuToggleObjectResult`
- `null`
- `void`
- `Promise`

:

- `id`
- `title`
- `description?`
- `isChecked?`

### Prompt

- `PromptInputHookReturn`
- `PromptHistoryHookReturn`
- `SystemPromptComposeHookReturn`
- `ToolPromptComposeHookReturn`
- `PromptFinalizeHookReturn`

、、,.
:

- `PromptHistoryHookReturn` `PromptTurn`
- `PromptFinalizeHookReturn` `PromptTurn`
- `PromptEstimateHistoryHook` / `PromptEstimateFinalizeHook` payload

## Translated section

### `ToolboxUiModuleRegistration`

:

- `id`
- `runtime?`
- `screen: ComposeDslScreen`
- `params?`
- `title?`

### `AppLifecycleHookRegistration`

:

- `id`
- `event`
- `function`

### `MessageProcessingPluginRegistration`

:

- `id`
- `function`

### `XmlRenderPluginRegistration`

:

- `id`
- `tag`
- `function`

### `InputMenuTogglePluginRegistration`

:

- `id`
- `function`

### Translated section

,:`id` + `function`:

- `ToolLifecycleHookRegistration`
- `PromptInputHookRegistration`
- `PromptHistoryHookRegistration`
- `PromptEstimateHistoryHookRegistration`
- `SystemPromptComposeHookRegistration`
- `ToolPromptComposeHookRegistration`
- `PromptFinalizeHookRegistration`
- `PromptEstimateFinalizeHookRegistration`

## `ToolPkg.Registry`

 `ToolPkg` ,:

- `registerToolboxUiModule(definition)`
- `registerAppLifecycleHook(definition)`
- `registerMessageProcessingPlugin(definition)`
- `registerXmlRenderPlugin(definition)`
- `registerInputMenuTogglePlugin(definition)`
- `registerToolLifecycleHook(definition)`
- `registerPromptInputHook(definition)`
- `registerPromptHistoryHook(definition)`
- `registerPromptEstimateHistoryHook(definition)`
- `registerSystemPromptComposeHook(definition)`
- `registerToolPromptComposeHook(definition)`
- `registerPromptFinalizeHook(definition)`
- `registerPromptEstimateFinalizeHook(definition)`
- `readResource(key, outputFileName?)`

### `ToolPkg.readResource(...)`

 toolpkg `manifest.resources` `key` ,.

```ts
const jarPath = await ToolPkg.readResource('apktool_lib_jar', 'apktool-lib.jar');
```

:

- `compose_dsl` `ctx`,、 hook、UI .
- `key` `manifest.json` `resources[].key`.
- `outputFileName` ；.
- `mime` ( `inode/directory`、`vnd.android.document/directory`), zip, zip ； `.zip`.

## Translated section

### UI

```ts
import toolboxUI from './index.ui.js';

ToolPkg.registerToolboxUiModule({
  id: 'demo_toolbox',
  runtime: 'compose_dsl',
  screen: toolboxUI,
  params: {},
  title: {
 zh: '',
    en: 'Demo Module'
  }
});
```

### Translated section

```ts
ToolPkg.registerAppLifecycleHook({
  id: 'demo_app_create',
  event: 'application_on_create',
  function(event) {
    console.log(JSON.stringify(event.eventPayload ?? {}));
    return { ok: true };
  }
});
```

### Translated section

```ts
ToolPkg.registerMessageProcessingPlugin({
  id: 'demo_message_plugin',
  async function(event) {
    const message = String(event.eventPayload?.messageContent ?? '').trim();
    if (!message.startsWith('/demo')) {
      return { matched: false };
    }
    return {
      matched: true,
 text: ' demo '
    };
  }
});
```

### XML

```ts
ToolPkg.registerXmlRenderPlugin({
  id: 'demo_xml',
  tag: 'demo',
  function(event) {
    const xml = String(event.eventPayload?.xmlContent ?? '');
    if (!xml) {
      return { handled: false };
    }
    return {
      handled: true,
 text: 'XML '
    };
  }
});
```

### Translated section

```ts
ToolPkg.registerInputMenuTogglePlugin({
  id: 'demo_toggle',
  function(event) {
    if (event.eventPayload?.action === 'create') {
      return [
        {
          id: 'demo_feature',
          title: 'Demo Feature',
 description: '',
          isChecked: true
        }
      ];
    }
    return [];
  }
});
```

## `registerToolPkg()`

 `examples/linux_ssh/src/main.ts` `examples/deepsearching/src/plugin/deep-search-plugin.ts` , `registerToolPkg()` ,.

****； `toolpkg.d.ts` .

## Translated section

`toolpkg.d.ts` API,“”.

 ToolPkg,:

- `.js` `tools/execute_js.bat` / `tools/execute_js.sh`
- `toolpkg` , `manifest`、`main` 、ToolPkg cache、 hook/runtime
- ToolPkg , `tools/debug_toolpkg.bat` / `tools/debug_toolpkg.sh` / `tools/debug_toolpkg.py`

、、、 hook/runtime , [TOOLPKG_FORMAT_GUIDE.md](../TOOLPKG_FORMAT_GUIDE.md) “10.3 ”.

## Translated section

- `examples/types/toolpkg.d.ts`
- `examples/types/compose-dsl.d.ts`
- `docs/package_dev/core.md`
- `docs/TOOLPKG_FORMAT_GUIDE.md`
