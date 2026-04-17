# Session Runtime

## Translated section

- [x] Runtime , Core
- [x] `ChatRuntimeSlot`, `MAIN` `FLOATING`
- [x] Runtime `ChatServiceCore`
- [x] `MAIN` Core chat
- [x] `FLOATING` Core chat,
- [x] `ChatViewModel` `MAIN` Core, delegate
- [x] `FloatingChatService` `FLOATING` Core, `ChatServiceCore`
- [x] `FloatingWindowDelegate` / reload
- [x] `MessageProcessingDelegate` companion loading ,
- [x] , Core
- [ ] chat, `ViewModel`

## Translated section

- .
- ,.
- ,,.
- Session:
 - `MAIN`:
 - `FLOATING`:
- “ Core”,“ Runtime , Core”.

---

## 、

 delegate,:

- `ChatViewModel` .
- `FloatingChatService` `ChatServiceCore`.

:

1. `ViewModel` .
2. 、“”,.
3. ,,.

 Core,:

- `ChatViewModel` .
- .
- Runtime `ChatServiceCore` .
- `MAIN` Core.
- `FLOATING` Core.
- .

:

> Runtime, Core,.

---

## 、

:

- `ChatViewModel` .
- .
- `ChatServiceCore` .
- `ChatViewModel` `MAIN` Core.
- `FloatingChatService` `FLOATING` Core.
- chat.
- -> 、reload 、.

---

## 、

:

- Core
- `ChatServiceCore` `ChatSessionContext`
- `ChatSessionHost` / `SessionUiBridge` / `ChatSessionContext`
- “”

,:

- Core
- Core
- translated

 UI ,.

---

## 、

## 1. Runtime

 `AIForegroundService` , runtime holder.

:

- `ChatServiceCore`
- translated
- `getCore(slot)`
- runtime

:

```kotlin
enum class ChatRuntimeSlot {
    MAIN,
    FLOATING
}
```

:

- `slot` runtime .
- .
- “ Core, Core”.

## 2. `ChatServiceCore`

 `ChatServiceCore` ,、.

Runtime :

- `mainCore`
- `floatingCore`

:

- `Map<ChatRuntimeSlot, ChatServiceCore>`

 Core :

- `ChatHistoryDelegate`
- `MessageProcessingDelegate`
- `MessageCoordinationDelegate`
- `AttachmentDelegate`
- `TokenStatisticsDelegate`

:

- “”
- “”

## 3.

 chat, Core chat .

:

- `MAIN` Core chat
- `FLOATING` Core chat

,.

:

1. `ChatHistoryDelegate` , `followGlobalCurrentChat: Boolean`
2. ,:

```kotlin
enum class ChatSelectionMode {
    FOLLOW_GLOBAL,
    LOCAL_ONLY
}
```

,:

- `MAIN` chat
- `FLOATING` chat

---

## 、

## 1. `ChatViewModel`

:

- UI
- translated
- WebView / Workspace / / UI
- UI `MAIN` Core

:

- new `ChatHistoryDelegate`
- new `MessageProcessingDelegate`
- new `MessageCoordinationDelegate`
- translated

## 2. `FloatingChatService`

:

- translated
- WindowManager
- translated
- wake lock
- translated
- UI `FLOATING` Core

:

- new `ChatServiceCore`
- translated

## 3. `FloatingWindowDelegate`

:

- translated
- translated
- translated
- translated

:

- translated
- reload
- binder

---

## 、

## 1. `MessageProcessingDelegate` companion

 Runtime Core,:

- `sharedIsLoading`
- `sharedActiveStreamingChatIds`

:

- loading
- loading

.

 loading, Runtime .

## 2. `ChatHistoryDelegate`

 `FLOATING` `currentChatId`,.

,:

- `MAIN`
- `FLOATING`

“ Core”, chat .

---

## 、

## Phase 1: Core Runtime

:

- `ChatServiceCore`
- `ChatViewModel` `FloatingChatService` new Core

:

1. `AIForegroundService` Runtime .
2. `ChatRuntimeSlot`.
3. :
   - `MAIN` Core
   - `FLOATING` Core
4. `slot` Core .
5. Runtime , `ViewModel` .

## Phase 2: chat

:

- `MAIN` `FLOATING` chat.

:

1. `ChatHistoryDelegate`,“”“”.
2. `MAIN` Core `currentChatId`.
3. `FLOATING` Core ,.
4. ,, `FLOATING` chat .

## Phase 3: `MAIN` Core

:

- `ChatViewModel` UI ,.

:

1. `ChatViewModel` Runtime .
2. `MAIN` Core .
3. `sendUserMessage`、`cancelMessage`、`createNewChat`、`switchChat` `MAIN` Core.
4. `ChatViewModel` delegate .

## Phase 4: `FLOATING` Core

:

- `FloatingChatService` Core.

:

1. `FloatingChatService` `chatCore = ChatServiceCore(...)`.
2. `FLOATING` Core.
3. UI `FLOATING` Core :
   - `chatHistory`
   - `currentChatId`
   - `isLoading`
   - `attachments`

## Phase 5:

:

- Core.

:

- `FloatingWindowDelegate` `setReloadCallback`
- `FloatingWindowDelegate` `setChatSyncCallback`
- `chatHistoryFlow -> floatingService.updateChatMessages(...)`
- turn complete reload
- `FloatingChatService.updateChatMessages(...)`

,:

- `MAIN` Core
- `FLOATING` Core

---

## 、

:

- `app/src/main/java/com/ai/assistance/operit/api/chat/AIForegroundService.kt`
- `app/src/main/java/com/ai/assistance/operit/services/ChatServiceCore.kt`
- `app/src/main/java/com/ai/assistance/operit/services/core/ChatHistoryDelegate.kt`
- `app/src/main/java/com/ai/assistance/operit/services/core/MessageProcessingDelegate.kt`
- `app/src/main/java/com/ai/assistance/operit/ui/features/chat/viewmodel/ChatViewModel.kt`
- `app/src/main/java/com/ai/assistance/operit/services/FloatingChatService.kt`
- `app/src/main/java/com/ai/assistance/operit/ui/features/chat/viewmodel/FloatingWindowDelegate.kt`

 runtime holder,:

- `app/src/main/java/com/ai/assistance/operit/api/chat/ChatRuntimeHolder.kt`

:

- Core
- translated
- translated

.

---

## 、

,:

- translated
- translated
- binder
- translated
- `ChatViewModel` runtime

:

- translated
- translated
- translated

---

## 、

:

1. `ChatViewModel` .
2. `FloatingChatService` `ChatServiceCore`.
3. Core:`MAIN` `FLOATING`.
4. chat.
5. ,loading .
6. .
7. , `ViewModel` .

---

## 、

 Runtime Core.

、:

- Core
- translated
- session

:

> `AIForegroundService` Runtime,Runtime `MAIN` Core `FLOATING` Core.
