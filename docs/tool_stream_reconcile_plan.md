# Tool Stream Reconcile

## Translated section

- [x] :`SAVEPOINT / ROLLBACK + id`
- [x]
- [x] `EnhancedAIService` `share()`
- [x] OpenAI “”“ savepoint”
- [x] UI
- [x]
- [x]
- [ ]

.

:

- .
- `tool_xxxx` XML .
- “ `Stream<String>` ”.
- OpenAI ,tool “ tool + tool”.

:

```xml
<tool_ABC name="read_file">
<param name="path">/a/b

<tool_bcd name="read_file">
<param name="path">/a/b/c.txt</param>
</tool_bcd>
```

“tool id ”,:

- tool .
- tool .
- `tool_xxxx`.
- .

## 1.

:

- .
- assistant “”,.

“”,“”.
 `tool` ,“ assistant attempt”.

## 2.

:

- `Stream<String>`
- `emit(chunk)`
- `tool_xxxx`

:

```kotlin
interface RevisableTextStream : Stream<String> {
    val eventChannel: Stream<TextStreamEvent>
}

data class TextStreamEvent(
    val eventType: TextStreamEventType,
    val id: String
)

enum class TextStreamEventType {
    SAVEPOINT,
    ROLLBACK
}
```

:

- `SAVEPOINT(id)`:
- `ROLLBACK(id)`:

:

- `eventType`
- `id`

, offset,.

## 3.

:

- `RollbackChars(n)`
- `DeleteLastChunk`
- translated
- translated

:

- ,.
- .
- .
- “”,.

:

- `SAVEPOINT`
- `ROLLBACK`

## 4. Provider

provider .

 assistant request :

- `SAVEPOINT(id)`

:

- translated

、、:

- `ROLLBACK(id)`

:

- ,“”
- ,

:

- attempt
- `message + history`
- LLM “continue from interruption”

## 5.

 provider UI,:

1. `provider`
2. `EnhancedAIService`
3. `AIMessageManager`
4. `MessageProcessingDelegate`
5. `ChatMessage.contentStream`
6. UI

:

- `share()` .

, `EnhancedAIService` “”, `share()` ,.

:

- “EnhancedAIService ”

:

- “EnhancedAIService ,, UI”

## 6.

### 6.1 EnhancedAIService

`EnhancedAIService` :

- provider
- translated

,:

- `SAVEPOINT(id)` , `streamBuffer.toString()`
- `ROLLBACK(id)` ,
- translated

:

- translated
- translated

.

### 6.2 AIMessageManager / MessageProcessingDelegate

,.

:

- `share()`
- share , share ,

:

- share, share
- “ + ”

 `MessageProcessingDelegate` `contentBuilder` .

:

- `SAVEPOINT(id)`
- `ROLLBACK(id)`

:

- UI
- delegate

### 6.3 UI

UI `content` .

:

- UI `contentStream`
- , `content`

 UI :

- `SAVEPOINT(id)`:
- `ROLLBACK(id)`:

UI :

1.
2.

,“,”.

## 7.

:

- `tool_xxxx`
- translated
- translated
- tool

:

1.
2.
3. `SAVEPOINT` , `ROLLBACK`

“”,.

## 8.

### 8.1 `id` `tool_xxxx`

 `id` savepoint id .

 `tool_xxxx` .

:

- `tool_xxxx`
- savepoint id
- translated

:

- `tool_xxxx`
- savepoint id

### 8.2

 replay,:

- `ROLLBACK(id)`
- `SAVEPOINT(id)`
- translated

、.

### 8.3

 `EnhancedAIService` ,:

- delegate
- UI

 UI ,:

- translated

“”,“ side channel ”.

## 9.

:

- `Stream<String>`
- translated
- `SAVEPOINT / ROLLBACK`
- `eventType + id`
- `EnhancedAIService` ,
- `share()`
- `MessageProcessingDelegate`
- UI

、、“”.
