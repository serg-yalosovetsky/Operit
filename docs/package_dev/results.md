# API :`results.d.ts`

`results.d.ts` ., `Tools.*`、`toolCall()` .

## Translated section

:

- `...Data` .
- `...Result` , `BaseResult` `data` .

## Translated section

### `...Data`

,:

- `FileContentData`
- `HttpResponseData`
- `UIPageResultData`
- `WorkflowDetailResultData`

### `...Result`

 `success` / `error` ,:

- `SystemSettingResult`
- `UIPageResult`
- `ChatCreationResult`
- `MemoryLinkResult`

### `toString()`

 `...Data` `toString()`,.

## Translated section

### 1.

:

- `FileEntry`
- `FileExistsData`
- `FileInfoData`
- `DirectoryListingData`
- `FileContentData`
- `BinaryFileContentData`
- `FilePartContentData`
- `FileOperationData`
- `FileApplyResultData`
- `FindFilesResultData`
- `GrepLineMatch`
- `GrepFileMatch`
- `GrepResultData`

:

- `FileContentData` `env`、`path`、`content`、`size`
- `BinaryFileContentData` `contentBase64`
- `GrepResultData` `matches`、`totalMatches`、`filesSearched`

### 2.

:

- `HttpResponseData`
- `Link`
- `VisitWebResultData`

:

- `HttpResponseData` `statusCode`、`statusMessage`、`headers`、`contentType`、`content`
- `VisitWebResultData` , `metadata`、`links`、`imageLinks`、`visitKey`
- ,`VisitWebResultData` `contentSavedTo`、`contentTruncated`、`originalContentLength`

### 3. / /

:

- `SleepResultData`
- `SystemSettingData`
- `AppOperationData`
- `AppListData`
- `AppUsageTimeResultData`
- `NotificationData`
- `LocationData`
- `DeviceInfoResultData`

:

- `SystemSettingData` `namespace`、`setting`、`value`
- `AppOperationData` `operationType`、`packageName`、`success`、`details`
- `AppUsageTimeResultData` 、
- `NotificationData`
- `LocationData` 、、

### 4. UI

:

- `SimplifiedUINode`
- `UIPageResultData`
- `UIActionResultData`
- `CombinedOperationResultData`
- `AutomationExecutionResultData`

:

- `UIPageResultData` `packageName`、`activityName`、`uiElements`
- `UIActionResultData` 、、
- `AutomationExecutionResultData` `agentId`、`displayId`、`executionSuccess`、`executionMessage`、`finalState`

### 5. Shell / Intent / Terminal / FFmpeg

:

- `ADBResultData`
- `IntentResultData`
- `TerminalCommandResultData`
- `TerminalSessionCreationResultData`
- `TerminalSessionCloseResultData`
- `TerminalSessionScreenResultData`
- `FFmpegResultData`
- `StringResultData`

`StringResultData` ,:

- `value`
- `toString()`

“ API”.

### 6.

`results.d.ts` ,.

:

- `WorkflowResultData`
- `WorkflowListResultData`
- `NodePosition`
- `StaticValue`
- `NodeReference`
- `ParameterValue`
- `TriggerType`
- `TriggerNode`
- `ExecuteNode`
- `ConditionOperator`
- `ConditionNode`
- `LogicOperator`
- `LogicNode`
- `ExtractMode`
- `ExtractNode`
- `WorkflowNode`
- `WorkflowConnectionConditionKeyword`
- `WorkflowConnectionCondition`
- `WorkflowNodeConnection`
- `WorkflowDetailResultData`

:

- `WorkflowResultData` / `WorkflowListResultData`
- `WorkflowDetailResultData` `nodes`、`connections`、`enabled`、
- `WorkflowNode`

### 7.

:

- `SpeechTtsHttpConfigResultItem`
- `SpeechSttHttpConfigResultItem`
- `SpeechServicesConfigResultData`
- `SpeechServicesUpdateResultData`
- `ModelConfigResultItem`
- `FunctionModelMappingResultItem`
- `ModelConfigsResultData`
- `ModelConfigCreateResultData`
- `ModelConfigUpdateResultData`
- `ModelConfigDeleteResultData`
- `FunctionModelConfigsResultData`
- `FunctionModelConfigResultData`
- `FunctionModelBindingResultData`
- `ModelConfigConnectionTestItemResultData`
- `ModelConfigConnectionTestResultData`

 `Tools.SoftwareSettings` .

### 8. Chat

:

- `ChatServiceStartResultData`
- `ChatCreationResultData`
- `ChatInfo`
- `ChatListResultData`
- `ChatSwitchResultData`
- `ChatTitleUpdateResultData`
- `ChatDeleteResultData`
- `MessageSendResultData`
- `ChatMessageInfo`
- `ChatMessagesResultData`
- `CharacterCardListResultData`
- `CharacterCardInfo`
- `ChatFindResultData`
- `AgentStatusResultData`

:

- `ChatServiceStartResult`
- `ChatCreationResult`
- `ChatListResult`
- `ChatFindResult`
- `AgentStatusResult`
- `ChatSwitchResult`
- `ChatTitleUpdateResult`
- `ChatDeleteResult`
- `MessageSendResult`
- `ChatMessagesResult`

### 9.

:

- `MemoryQueryResultData`
- `MemoryLinkResultData`
- `MemoryLinkQueryResultData`
- `MemoryLinkResult`
- `MemoryLinkQueryResult`

`MemoryQueryResultData` `memories[]`,:

- `title`
- `content`
- `source`
- `tags`
- `createdAt`
- `chunkInfo`
- `chunkIndices`

`MemoryQueryResultData` :

- `snapshotId`
- `snapshotCreated`
- `excludedBySnapshotCount`

 `snapshotId` ,.

`MemoryLinkQueryResultData` `links[]`,:

- `linkId`
- `sourceTitle`
- `targetTitle`
- `linkType`
- `weight`
- `description`

## Translated section

### `FileContentData`

```ts
const file = await Tools.Files.read('/sdcard/a.txt');
console.log(file.content);
console.log(file.size);
```

### `VisitWebResultData`

```ts
const page = await Tools.Net.visit('https://example.com');
console.log(page.title);
console.log(page.links?.length ?? 0);
if (page.contentSavedTo) {
  console.log(page.contentSavedTo);
}
```

### `WorkflowDetailResultData`

```ts
const detail = await Tools.Workflow.get('workflow_123');
console.log(detail.nodes.length);
console.log(detail.connections.length);
```

## Translated section

“”:

- → `files.d.ts`
- → `network.d.ts` / `okhttp.d.ts`
- → `system.d.ts`
- UI → `ui.d.ts`
- → `workflow.d.ts`
- → `software_settings.d.ts`
- Chat → `chat.d.ts`
- → `memory.d.ts`

## Translated section

- `examples/types/results.d.ts`
- `docs/package_dev/files.md`
- `docs/package_dev/network.md`
- `docs/package_dev/system.md`
- `docs/package_dev/ui.md`
- `docs/package_dev/workflow.md`
- `docs/package_dev/software_settings.md`
- `docs/package_dev/chat.md`
- `docs/package_dev/memory.md`
