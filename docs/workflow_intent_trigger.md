# Workflow Intent ( Action)

 **Intent ** Operit (Workflow).

:

- ** Intent Trigger `action`**
- App (“”)

:

- :`app/src/main/java/com/ai/assistance/operit/integrations/tasker/WorkflowTaskerReceiver.kt`
- :`WorkflowRepository.triggerWorkflowsByIntentEvent(intent)`

---

## 1.

### 1.1 TriggerNode(intent)

:

- `triggerType == "intent"`
- `triggerConfig["action"] == intent.action`

.

### 1.2 “”

Android (、Android 8+ ).

 Operit,:

- ****: `component`( + Receiver )

 action , Operit `WorkflowTaskerReceiver`.

---

## 2. Receiver / Component

- **Receiver **:`com.ai.assistance.operit.integrations.tasker.WorkflowTaskerReceiver`
- ****:`com.ai.assistance.operit`
- **Component**：`com.ai.assistance.operit/.integrations.tasker.WorkflowTaskerReceiver`

---

## 3. action

,:

- ****:Intent
- **action**: action,:
  - `com.example.myapp.TRIGGER_OPERIT_WORKFLOW_A`

:

- action ,.
- intent extras TriggerNode JSON()( ExtractNode(JSON) ).

---

## 4. adb

### 4.1 A:(, action)

```bash
adb shell am broadcast \
  -n com.ai.assistance.operit/.integrations.tasker.WorkflowTaskerReceiver \
  -a com.example.myapp.TRIGGER_OPERIT_WORKFLOW_A \
  --es message "hello from adb" \
  --es request_id "req-1001"
```

- `-n` component, Operit.
- `-a` Trigger action.
- `--es/--ez/--ei/...` extras, TriggerNode .

### 4.2 B:()

 component,:

```bash
adb shell am broadcast \
  -a com.example.myapp.TRIGGER_OPERIT_WORKFLOW_A \
  --es message "hello"
```

、ROM Operit .

### 4.3 C: action()

 Trigger `action` :

- `com.ai.assistance.operit.TRIGGER_WORKFLOW`

:

```bash
adb shell am broadcast \
  -a com.ai.assistance.operit.TRIGGER_WORKFLOW \
  --es message "hello" \
  --es request_id "req-1002"
```

---

## 5. WORKFLOW_RESULT:()

“Intent + + ”, `send_broadcast` :

- **action**：`com.ai.assistance.operit.WORKFLOW_RESULT`
- **extra_key**：`result`
- **extra_value**: `send_message_to_ai` ()

:

- action( App)
- extra key/value( `request_id`、`chat_id` )

---

## 6. WORKFLOW_RESULT

`adb` “”().,:

### 6.1 Tasker ()

- Tasker Profile:Event -> System -> Intent Received
- Action :`com.ai.assistance.operit.WORKFLOW_RESULT`
- Task ( `%result` extras )

### 6.2 App / Receiver()

 App `BroadcastReceiver` `com.ai.assistance.operit.WORKFLOW_RESULT`, `onReceive()` :

- `intent.getStringExtra("result")`

 `adb logcat` .

---

## 7. extras(Trigger JSON + Extract(JSON))

TriggerNode extras JSON ,:

- extras:
  - `message=hello`
  - `request_id=req-1001`

TriggerNode ():

```json
{"message":"hello","request_id":"req-1001"}
```

 `ExtractNode(mode=JSON)`:

- `source = NodeReference(triggerNodeId)`
- `expression = "message"`

 `hello`.

---

## 8.

- Receiver `exported=true`: App .
- , permission Receiver /.
