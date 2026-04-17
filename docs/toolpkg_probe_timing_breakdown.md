# ToolPkg Probe Timing Breakdown

:2026-03-10 00:17:18
:`deepsearching_message_plugin` ,`probeOnly=true`, `2`

## Translated section

- `sendMessage.total`、`delegate.prepareResponseStream`、`toolpkg.messageProcessing.matchTotal` ,.
- ,；,.
- ,.

## Translated section

| | |
| --- | ---: |
| `delegate.loadModelConfig` | 4ms |
| `delegate.buildUserMessageContent` | 11ms |
| `delegate.addUserMessageToChat` | 10ms |
| `delegate.acquireService` | 0ms |
| `delegate.loadRoleInfo` | 1ms |
| `delegate.loadChatHistory` | 0ms |
| `sendMessage.buildMemory` | 2ms |
| `sendMessage.limitHistory` | 1ms |
| `sendMessage.matchPlugin` | 117ms |
| `sendMessage.readStreamSetting` | 1ms |
| `sendMessage.prepareRequest` | 4ms |
| `sendMessage.total` | 142ms |
| `delegate.prepareResponseStream` | 145ms |
| `delegate.shareResponseStream` | 1ms |
| `delegate.loadProviderModel` | 18ms |
| `delegate.firstResponseChunk` | 1895ms |

## ToolPkg Probe

| | |
| --- | ---: |
| `toolpkg.messageProcessing.loadHooks` | 9ms |
| `toolpkg.messageProcessing.buildPayload` | 0ms |
| `toolpkg.getMainScript.readBytes` | 2ms |
| `toolpkg.getMainScript.total` | 13ms |
| `toolpkg.runMainHook.getMainScript` | 16ms |
| `toolpkg.runMainHook.resolveFunctionSource` | 1ms |
| `toolpkg.runMainHook.getExecutionEngine` | 0ms |
| `toolpkg.jsEngine.initQuickJs` | 0ms |
| `toolpkg.jsEngine.buildExecutionScript` | 7ms |
| `deepsearching_probe.onMessageProcessing` | 28ms |
| `toolpkg.jsEngine.waitResult` | 41ms |
| `toolpkg.jsEngine.total` | 58ms |
| `toolpkg.runMainHook.executeScriptFunction` | 60ms |
| `toolpkg.runMainHook.total` | 86ms |
| `toolpkg.messageProcessing.runMainHook` | 88ms |
| `toolpkg.messageProcessing.decodeHookResult` | 1ms |
| `toolpkg.messageProcessing.hookTotal` | 92ms |
| `toolpkg.messageProcessing.parseProbeResult` | 1ms |
| `toolpkg.messageProcessing.probeHook` | 97ms |
| `toolpkg.messageProcessing.matchTotal` | 114ms |

## Translated section

| | |
| --- | ---: |
| `delegate.prepareResponseStream` | 145ms |
| 、 | 164ms |
| | 114ms |
| | 1895ms |
| / | 1731ms |

## Translated section

| | |
| --- | ---: |
| probe | ~498ms |
| | ~385ms |
| | ~114ms |

