# API :`tool-types.d.ts`

`tool-types.d.ts` :`ToolResultMap`., `toolCall()` ** → **.

## Translated section

:

```ts
const result = await toolCall('read_file', { path: '/sdcard/a.txt' });
```

TypeScript `ToolResultMap['read_file']` `result` .

## Translated section

```ts
interface ToolResultMap {
  [toolName: string]: ResultType
}
```

## Translated section

### Translated section

- `list_files` → `DirectoryListingData`
- `read_file` → `FileContentData`
- `read_file_part` → `FilePartContentData`
- `read_file_full` → `FileContentData`
- `read_file_binary` → `BinaryFileContentData`
- `write_file` → `FileOperationData`
- `delete_file` → `FileOperationData`
- `file_exists` → `FileExistsData`
- `move_file` → `FileOperationData`
- `copy_file` → `FileOperationData`
- `make_directory` → `FileOperationData`
- `find_files` → `FindFilesResultData`
- `grep_code` → `GrepResultData`
- `grep_context` → `GrepResultData`
- `file_info` → `FileInfoData`
- `zip_files` → `FileOperationData`
- `unzip_files` → `FileOperationData`
- `open_file` → `FileOperationData`
- `share_file` → `FileOperationData`
- `download_file` → `FileOperationData`
- `apply_file` → `FileApplyResultData`

### Translated section

- `http_request` → `HttpResponseData`
- `visit_web` → `VisitWebResultData`
- `browser_click` → `StringResultData`
- `browser_close` → `StringResultData`
- `browser_console_messages` → `StringResultData`
- `browser_drag` → `StringResultData`
- `browser_evaluate` → `StringResultData`
- `browser_file_upload` → `StringResultData`
- `browser_fill_form` → `StringResultData`
- `browser_handle_dialog` → `StringResultData`
- `browser_hover` → `StringResultData`
- `browser_navigate` → `StringResultData`
- `browser_navigate_back` → `StringResultData`
- `browser_network_requests` → `StringResultData`
- `browser_press_key` → `StringResultData`
- `browser_resize` → `StringResultData`
- `browser_run_code` → `StringResultData`
- `browser_select_option` → `StringResultData`
- `browser_wait_for` → `StringResultData`
- `browser_snapshot` → `StringResultData`
- `browser_take_screenshot` → `StringResultData`
- `browser_type` → `StringResultData`
- `browser_tabs` → `StringResultData`
- `multipart_request` → `HttpResponseData`
- `manage_cookies` → `HttpResponseData`

### Translated section

- `sleep` → `SleepResultData`
- `get_system_setting` → `SystemSettingData`
- `modify_system_setting` → `SystemSettingData`
- `toast` → `StringResultData`
- `send_notification` → `StringResultData`
- `install_app` → `AppOperationData`
- `uninstall_app` → `AppOperationData`
- `list_installed_apps` → `AppListData`
- `start_app` → `AppOperationData`
- `stop_app` → `AppOperationData`
- `device_info` → `DeviceInfoResultData`
- `get_notifications` → `NotificationData`
- `get_device_location` → `LocationData`
- `read_environment_variable` → `StringResultData`
- `write_environment_variable` → `StringResultData`
- `list_sandbox_packages` → `StringResultData`
- `set_sandbox_package_enabled` → `StringResultData`
- `restart_mcp_with_logs` → `StringResultData`
- `get_speech_services_config` → `SpeechServicesConfigResultData`
- `set_speech_services_config` → `SpeechServicesUpdateResultData`
- `list_model_configs` → `ModelConfigsResultData`
- `create_model_config` → `ModelConfigCreateResultData`
- `update_model_config` → `ModelConfigUpdateResultData`
- `delete_model_config` → `ModelConfigDeleteResultData`
- `list_function_model_configs` → `FunctionModelConfigsResultData`
- `get_function_model_config` → `FunctionModelConfigResultData`
- `set_function_model_config` → `FunctionModelBindingResultData`
- `test_model_config_connection` → `ModelConfigConnectionTestResultData`
- `trigger_tasker_event` → `string`

### UI

- `get_page_info` → `UIPageResultData`
- `click_element` → `UIActionResultData`
- `tap` → `UIActionResultData`
- `set_input_text` → `UIActionResultData`
- `press_key` → `UIActionResultData`
- `swipe` → `UIActionResultData`
- `combined_operation` → `CombinedOperationResultData`
- `run_ui_subagent` → `AutomationExecutionResultData`

### Translated section

- `calculate` → `CalculationResultData`

### Translated section

- `use_package` → `string`
- `query_memory` → `MemoryQueryResultData`
- `link_memories` → `MemoryLinkResultData`
- `query_memory_links` → `MemoryLinkQueryResultData`

### FFmpeg

- `ffmpeg_execute` → `FFmpegResultData`
- `ffmpeg_info` → `FFmpegResultData`
- `ffmpeg_convert` → `FFmpegResultData`

### ADB / Intent / Terminal

- `execute_shell` → `ADBResultData`
- `execute_intent` → `IntentResultData`
- `send_broadcast` → `IntentResultData`
- `execute_terminal` → `TerminalCommandResultData`
- `get_terminal_session_screen` → `TerminalSessionScreenResultData`

### Translated section

- `get_all_workflows` → `WorkflowListResultData`
- `create_workflow` → `WorkflowDetailResultData`
- `get_workflow` → `WorkflowDetailResultData`
- `update_workflow` → `WorkflowDetailResultData`
- `patch_workflow` → `WorkflowDetailResultData`
- `delete_workflow` → `StringResultData`
- `trigger_workflow` → `StringResultData`

### Chat Manager

- `start_chat_service` → `ChatServiceStartResultData`
- `create_new_chat` → `ChatCreationResultData`
- `list_chats` → `ChatListResultData`
- `find_chat` → `ChatFindResultData`
- `agent_status` → `AgentStatusResultData`
- `switch_chat` → `ChatSwitchResultData`
- `update_chat_title` → `ChatTitleUpdateResultData`
- `delete_chat` → `ChatDeleteResultData`
- `send_message_to_ai` → `MessageSendResultData`
- `send_message_to_ai_advanced` → `MessageSendResultData`
- `list_character_cards` → `CharacterCardListResultData`
- `get_chat_messages` → `ChatMessagesResultData`

## Translated section

### `toolCall()`

```ts
const file = await toolCall('read_file', {
  path: '/sdcard/demo.txt'
});

file.content;
file.size;
```

### Translated section

```ts
const page = await toolCall({
  name: 'get_page_info'
});
```

## Translated section

- `tool-types.d.ts` ****.
- `.d.ts` .
- `ToolResultMap` ,`toolCall()` `any`.

## Translated section

- `examples/types/tool-types.d.ts`
- `examples/types/core.d.ts`
- `docs/package_dev/results.md`
