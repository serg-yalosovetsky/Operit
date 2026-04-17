# External Intent API: `EXTERNAL_CHAT`

****: Intent(`com.ai.assistance.operit.EXTERNAL_CHAT`) Operit “ AI”,.

 HTTP , Intent,:

- `docs/external_http_chat.md`

HTTP Intent ,.

:

- `app/src/main/java/com/ai/assistance/operit/integrations/intent/ExternalChatReceiver.kt`

Manifest :

- `AndroidManifest.xml` -> `.integrations.intent.ExternalChatReceiver`

---

## 1. Action

- ** Action**:`com.ai.assistance.operit.EXTERNAL_CHAT`
- ** Action**:`com.ai.assistance.operit.EXTERNAL_CHAT_RESULT`

 `reply_action` action.

---

## 2. (Intent extras)

| extra key | | | | |
|---|---:|:---:|---:|---|
| `message` | `String` | | - | AI |
| `request_id` | `String` | | - | ID(,/) |
| `group` | `String` | | - | `create_new_chat=true` , |
| `create_new_chat` | `Boolean` | | `false` | |
| `chat_id` | `String` | | - | ( `create_new_chat=false` ) |
| `create_if_none` | `Boolean` | | `true` | `chat_id` ,( `false` ) |
| `show_floating` | `Boolean` | | `false` | /( `FloatingChatService`) |
| `return_tool_status` | `Boolean` | | `true` | . `false` , `ai_response` `<tool*>`、`<tool_result*>`、`<status>` |
| `initial_mode` | `String` | | - | `show_floating=true` ,:`WINDOW`、`BALL`、`VOICE_BALL`、`FULLSCREEN`、`RESULT_DISPLAY`、`SCREEN_OCR` |
| `auto_exit_after_ms` | `Long` | | `-1` | `show_floating=true` :/() |
| `stop_after` | `Boolean` | | `false` | ( stop `FloatingChatService`) |
| `reply_action` | `String` | | `com.ai.assistance.operit.EXTERNAL_CHAT_RESULT` | action |
| `reply_package` | `String` | | - | , `intent.setPackage(reply_package)`, App |

---

## 3. (Intent extras)

Operit (action `reply_action` action), extras:

| extra key | | |
|---|---:|---|
| `request_id` | `String` | , |
| `success` | `Boolean` | |
| `chat_id` | `String` | ID() |
| `ai_response` | `String` | AI () |
| `error` | `String` | () |

---

## 4. ()

- `message` ,.
- `show_floating=true`:
 - / `FloatingChatService`.
 - `initial_mode` .
 - `initial_mode`,/； `WINDOW`.
 - `auto_exit_after_ms` .
- `return_tool_status=false`:
 - `ai_response` XML,.
- `create_new_chat=true`:
 - ( `group`).
 - `chat_id`( `chat_id`).
- `create_new_chat=false` `chat_id` :
 - .
- `create_new_chat=false` `chat_id` :
 - `create_if_none=true`:.
 - `create_if_none=false`:.
- `stop_after=true`: `FloatingChatService`.

---

## 5. adb

### 5.1 + + +

```bash
adb shell am broadcast \
  -a com.ai.assistance.operit.EXTERNAL_CHAT \
  --es request_id "req-001" \
 --es message "," \
  --es group "workflow" \
  --ez create_new_chat true \
  --ez show_floating true \
  --ez return_tool_status false \
  --es initial_mode "WINDOW" \
  --el auto_exit_after_ms 10000
```

### 5.2 chat_id()

```bash
adb shell am broadcast \
  -a com.ai.assistance.operit.EXTERNAL_CHAT \
  --es request_id "req-002" \
  --es chat_id "YOUR_CHAT_ID" \
 --es message ""
```

### 5.3 (create_if_none=false)

,:

```bash
adb shell am broadcast \
  -a com.ai.assistance.operit.EXTERNAL_CHAT \
  --es request_id "req-003" \
 --es message "" \
  --ez create_if_none false
```

---

## 6.

Operit :

- action:`com.ai.assistance.operit.EXTERNAL_CHAT_RESULT`
- `reply_action`

:

- `adb` “”,“”.

** App **,:

- `reply_package = `

 Operit `intent.setPackage(reply_package)`.

### 6.1 App / Receiver(/)

“”(Kotlin).:

- `BroadcastReceiver`
- `EXTERNAL_CHAT_RESULT`( `reply_action`)
- `onReceive()` extras

#### 6.1.1 Receiver

```kotlin
class ExternalChatResultReceiver : BroadcastReceiver() {
    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action != "com.ai.assistance.operit.EXTERNAL_CHAT_RESULT") return

        val requestId = intent.getStringExtra("request_id")
        val success = intent.getBooleanExtra("success", false)
        val chatId = intent.getStringExtra("chat_id")
        val aiResponse = intent.getStringExtra("ai_response")
        val error = intent.getStringExtra("error")

        Log.d(
            "ExternalChatResult",
            "request_id=$requestId success=$success chat_id=$chatId ai_response=$aiResponse error=$error"
        )
    }
}
```

#### 6.1.2 Manifest

 App `AndroidManifest.xml` (Android 12+ exported):

```xml
<receiver
    android:name=".ExternalChatResultReceiver"
    android:exported="true">
    <intent-filter>
        <action android:name="com.ai.assistance.operit.EXTERNAL_CHAT_RESULT" />
    </intent-filter>
</receiver>
```

#### 6.1.3 (adb + logcat)

1) App( log):

2) ( `reply_package`, App ):

```bash
adb shell am broadcast \
  -a com.ai.assistance.operit.EXTERNAL_CHAT \
  --es request_id "req-101" \
  --es message "hello" \
  --es reply_package "YOUR.APP.PACKAGE"
```

3) App :

```bash
adb logcat | findstr ExternalChatResult
```

 `success=true`, `ai_response` AI ； `error`.

### 6.2

 extras:

- `request_id: String?`
- `success: Boolean`
- `chat_id: String?`
- `ai_response: String?`
- `error: String?`

 `request_id` .
