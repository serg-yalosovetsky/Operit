# Tool Call XML ()

 ** Tool Call** ** Tool Call** .

> :
> - , **XML ** .
> - `enableToolCall` ****(XML ↔ Provider Tool Call JSON),.

---

## 1.

### 1.1 (Canonical Form)

/ XML:

- (assistant ):

```xml
<tool name="read_file">
<param name="path">README.md</param>
</tool>
```

- (tool ):

```xml
<tool_result name="read_file" status="success"><content>...</content></tool_result>
```

( `EnhancedAIService` + `ToolExecutionManager`) XML .

### 1.2 Tool Call

`enableToolCall=true` , JSON ,:

1. XML Provider `tool_calls` .
2. `tool_calls` XML.

 XML,.

---

## 2. Tool Call(enableToolCall = false)

### 2.1

- `tools` / `tool_choice`.
- `role + content` .
- XML ( `useToolCallApi=false` ).

### 2.2

- `content`().
- `tool_calls` /.
- XML ,.

---

## 3. Tool Call(enableToolCall = true)

### 3.1

“”,:

- `availableTools != null`
- `availableTools.isNotEmpty()`

 `OpenAIProvider` `effectiveEnableToolCall` Tool Call .

### 3.2 (XML -> Tool Call JSON)

### A.

:

- `tools`: `ToolPrompt` + JSON Schema
- `tool_choice`: `"auto"`

### B.

 `buildMessagesAndCountTokens(..., useToolCall=true)` :

- assistant XML `<tool ...>` `tool_calls` .
- user/tool XML `<tool_result ...>` `role="tool"` .
- tool_call_id .

“”,.

### 3.3 (Tool Call JSON -> XML)

### A.

 `delta.tool_calls`( Responses API function_call ):

- `StreamingJsonXmlConverter` XML .
- `<tool ...><param ...>...</param></tool>`.
- /.

### B.

 `message.tool_calls` :

- `convertToolCallsToXml` XML.
- XML .

---

## 4. ()

 Tool Call,:

1. ()XML .
2. `ToolExecutionManager.extractToolInvocations` XML.
3. `<tool_result ...>` .
4. .

“ Tool Call” I/O ,.

---

## 5. (System Prompt)

`useToolCallApi` :

- `true`:,( `tools` ).
- `false`: XML .

 Provider ,“”.

---

## 6. Provider ()

- `OpenAIProvider` Provider:(XML ↔ Tool Call JSON).
- `LLAMA_CPP`：
 - ** ToolCall **: XML .
 - **ToolCall **:, JNI grammar (`llama_sampler_init_grammar_lazy_patterns`), native `tool_calls` , XML.
 - XML ,.
- `MNN`: ToolCall .

---

## 7.

 Tool Call :

- ** XML **；
- ** Provider Tool Call **；
- ** Tool Call = ,**.
