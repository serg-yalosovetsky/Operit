# MNN Tool Call

:2026-03-17

## Translated section

 app prompt ,:

1. MNN .
2. .
3. `tool call`,.

---

## Translated section

### Translated section

- MNN README
  https://github.com/alibaba/MNN
- MNN-LLM
  https://github.com/alibaba/MNN/blob/master/transformers/README.md
- MNN docs LLM
  https://github.com/alibaba/MNN/blob/master/docs/transformers/llm.md
- MNN Wiki `llm`
  https://github.com/alibaba/MNN/wiki/llm
- MNN Android Chat App README
  https://github.com/alibaba/MNN/blob/master/apps/Android/MnnLlmChat/README.md

### Translated section

- Minja
  https://github.com/google/minja

### Translated section

- Wiki `llm` `This document is a placeholder.`, tool call .
- `minja` README `chat_template` , `tool_calls.function.arguments` .
- README, `MNN tool call + Android/JNI` .

---

## Translated section

### MNN

- `mnn/src/main/cpp/MNN/transformers/llm/engine/src/prompt.cpp`
- `mnn/src/main/cpp/MNN/transformers/llm/engine/src/prompt.hpp`
- `mnn/src/main/cpp/MNN/transformers/llm/engine/include/llm/llm.hpp`
- `mnn/src/main/cpp/MNN/transformers/llm/engine/src/minja/chat_template.cpp`
- `mnn/src/main/cpp/MNN/transformers/llm/engine/src/minja/chat_template.hpp`

### Android Chat App

- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/app/src/main/java/com/alibaba/mnnllm/android/llm/LlmSession.kt`
- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/app/src/main/cpp/llm_mnn_jni.cpp`
- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/README.md`
- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/README_CN.md`

---

## Translated section

### 1. `tool call + JNI + Android`

:

- translated
- translated
- translated
- Android Chat App

:

- assistant `tool_calls`
- `role="tool"`
- Android/JNI MNN

, Wiki `llm` ,.

---

### 2. ,

 README, `minja` MNN `minja` .

 `chat_template.hpp/.cpp` ,MNN :

- `inputs.tools`
- assistant `tool_calls`
- `role == "tool"`
- `tool_call_id`
- polyfill

:

- MNN tool .
- .

---

### 3. Android Chat App “”, prompt

`MnnLlmChat` `LlmSession.kt` `submitFullHistory(...)`, JNI .

:

- .
- ,.

“ app system prompt ”.

, hack.

---

### 4. MNN `Prompt/Llm` ,

 checkout :

- `ChatMessage = pair<string, string>`
- `Prompt::applyTemplate(...)` `role/content`
- `Llm::response(...)`

 `minja` `tools/tool_calls/tool responses`, API,.

:

- MNN internal tools .
- .

---

## Translated section

### Translated section

:

- app system prompt
- translated

:

- MNN internal tools.
- prompt engineering.

### Translated section

,:

- `messages`
- `tools`
- assistant `tool_calls`
- tool `tool_call_id` / `content`

---

## Translated section

### A: MNN , JNI MNN

:

- Provider XML `messages_json + tools_json`
- JNI MNN chat template prompt
- prompt tokenizer / generate

:

- translated
- MNN internal tools
- prompt

:

- native “structured messages -> internal template”

### B: MNN , `Prompt/Llm`

:

- `Prompt` / `Llm` `messages_json + tools_json`
- JNI API

:

- translated
- JNI
- translated

:

- translated

---

## Translated section

 2026-03-17,:

1. chat template , app prompt .
2. `minja` .
3. Android Chat App “”.
4. , `minja` .

,“”, `messages/tools/tool_calls/tool responses` native .

---

## :

- `mnn/src/main/cpp/MNN/README.md`
- `mnn/src/main/cpp/MNN/transformers/README.md`
- `mnn/src/main/cpp/MNN/docs/transformers/llm.md`
- `mnn/src/main/cpp/MNN/transformers/llm/engine/src/minja/chat_template.cpp`
- `mnn/src/main/cpp/MNN/transformers/llm/engine/src/prompt.cpp`
- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/README.md`
- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/app/src/main/java/com/alibaba/mnnllm/android/llm/LlmSession.kt`
- `mnn/src/main/cpp/MNN/apps/Android/MnnLlmChat/app/src/main/cpp/llm_mnn_jni.cpp`
