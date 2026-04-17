# API :`software_settings.d.ts`

`software_settings.d.ts` `Tools.SoftwareSettings` .,.

## Translated section

:

- .
- MCP .
- .

## Translated section

```ts
Tools.SoftwareSettings
```

## Translated section

### `readEnvironmentVariable(key)`

```ts
readEnvironmentVariable(key: string): Promise<StringResultData>
```

.

### `writeEnvironmentVariable(key, value?)`

```ts
writeEnvironmentVariable(key: string, value?: string): Promise<StringResultData>
```

； `value` .

## MCP

### `listSandboxPackages()`

.

### `setSandboxPackageEnabled(packageName, enabled)`

.

### `restartMcpWithLogs(timeoutMs?)`

 MCP ,.

## Translated section

### `getSpeechServicesConfig()`

 TTS / STT , `SpeechServicesConfigResultData`.

### `setSpeechServicesConfig(updates?)`

 TTS / STT , `SpeechServicesUpdateResultData`.

:

- TTS：`tts_service_type`、`tts_url_template`、`tts_api_key`、`tts_headers`、`tts_http_method`、`tts_request_body`、`tts_content_type`、`tts_voice_id`、`tts_model_name`、`tts_response_pipeline`、`tts_cleaner_regexs`、`tts_speech_rate`、`tts_pitch`
- STT：`stt_service_type`、`stt_endpoint_url`、`stt_api_key`、`stt_model_name`

 `tts_response_pipeline` `HTTP_TTS`, JSON . `[]` ,；.

## Translated section

### `listModelConfigs()`

.

### `createModelConfig(options?)`

, `ModelConfigCreateResultData`.

### `updateModelConfig(configId, updates?)`

, `ModelConfigUpdateResultData`.

### `deleteModelConfig(configId)`

, `ModelConfigDeleteResultData`.

### `listFunctionModelConfigs()`

.

### `getFunctionModelConfig(functionType)`

.

### `setFunctionModelConfig(functionType, configId, modelIndex?)`

.

### `testModelConfigConnection(configId, modelIndex?)`

, `ModelConfigConnectionTestResultData`.

## Translated section

`ModelConfigUpdateOptions` :

- :`name`、`api_provider_type`、`api_endpoint`、`api_key`、`model_name`
- :`max_tokens`、`temperature`、`top_p`、`top_k`
- :`presence_penalty`、`frequency_penalty`、`repetition_penalty`
- :`context_length`、`max_context_length`、`enable_max_context_mode`
- :`summary_token_threshold`、`enable_summary`、`enable_summary_by_message_count`、`summary_message_count_threshold`
- :`enable_direct_image_processing`、`enable_direct_audio_processing`、`enable_direct_video_processing`
- :`enable_google_search`、`enable_tool_call`
- /:`mnn_forward_type`、`mnn_thread_count`、`llama_thread_count`、`llama_context_size`、`request_limit_per_minute`、`max_concurrent_requests`

 `..._enabled` ,.

## Translated section

### Translated section

```ts
const apiKey = await Tools.SoftwareSettings.readEnvironmentVariable('OPENAI_API_KEY');
console.log(apiKey.value);
```

### Translated section

```ts
await Tools.SoftwareSettings.setSpeechServicesConfig({
  tts_service_type: 'OPENAI_TTS',
  tts_model_name: 'gpt-4o-mini-tts',
  tts_voice_id: 'alloy'
});
```

### Translated section

```ts
const result = await Tools.SoftwareSettings.testModelConfigConnection('config_123');
complete(result);
```

## Translated section

- `examples/types/software_settings.d.ts`
- `examples/types/results.d.ts`
- `examples/types/index.d.ts`
