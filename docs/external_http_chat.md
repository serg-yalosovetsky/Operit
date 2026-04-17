# External HTTP Chat API

 Operit HTTP . `EXTERNAL_CHAT` Intent , HTTP.

## 1.

:

- translated
- translated
- HTTP

:

- translated
- Bearer Token
- ,

 `8094`.

## 2.

 `OPTIONS` ,:

```http
Authorization: Bearer YOUR_TOKEN
```

Bearer Token ,.

## 3.

### 3.1 `GET /api/health`

.

:

```bash
curl -H "Authorization: Bearer YOUR_TOKEN" "http://DEVICE_IP:8094/api/health"
```

:

```json
{
  "status": "ok",
  "enabled": true,
  "service_running": true,
  "port": 8094,
  "version_name": "1.10.0+1"
}
```

### 3.2 `POST /api/external-chat`

 JSON, Intent :

- `request_id`
- `message`
- `group`
- `create_new_chat`
- `chat_id`
- `create_if_none`
- `show_floating`
- `return_tool_status`
- `initial_mode`
- `auto_exit_after_ms`
- `stop_after`

HTTP :

- `stream`: `true` SSE
- `response_mode`: `sync` `async_callback`
- `callback_url`: `response_mode=async_callback`

:

- `return_tool_status` `true`
- `return_tool_status=false` , `<tool*>`、`<tool_result*>`、`<status>` ,
- `initial_mode` `show_floating=true`
- `initial_mode` :`WINDOW`、`BALL`、`VOICE_BALL`、`FULLSCREEN`、`RESULT_DISPLAY`、`SCREEN_OCR`
- `show_floating=true` `initial_mode`,/； `WINDOW`
- `stream=true` `response_mode=async_callback`

## 4.

:

```bash
curl -X POST "http://DEVICE_IP:8094/api/external-chat" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
 "message": ",",
    "response_mode": "sync",
    "show_floating": true,
    "return_tool_status": false,
    "initial_mode": "WINDOW"
  }'
```

:

```json
{
  "request_id": "f0fdde0c-3f68-43c1-ae43-9d7736d6fd7d",
  "success": true,
  "chat_id": "1742558116153",
 "ai_response": "……"
}
```

,, JSON,:

- `success = false`
- `error`

## 5. SSE

 `stream=true` , `text/event-stream`, SSE .

:

```bash
curl -N -X POST "http://DEVICE_IP:8094/api/external-chat" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Accept: text/event-stream" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
 "message": "",
    "stream": true,
    "show_floating": true,
    "return_tool_status": false,
    "initial_mode": "WINDOW"
  }'
```

:

- `start`: `chat_id`
- `delta`:
- `done`: ,`ai_response`
- `error`:

:

```text
event: start
data: {"event":"start","request_id":"req-001","chat_id":"1742558116153"}

event: delta
data: {"event":"delta","request_id":"req-001","chat_id":"1742558116153","delta":","}

event: delta
data: {"event":"delta","request_id":"req-001","chat_id":"1742558116153","delta":"."}

event: done
data: {"event":"done","request_id":"req-001","chat_id":"1742558116153","success":true,"ai_response":",."}
```

:

```text
event: error
data: {"event":"error","request_id":"req-001","success":false,"error":"Invalid parameter: stream=true is not compatible with async_callback"}
```

:

- SSE `Accept: text/event-stream`
- , AI

## 6.

:

```bash
curl -X POST "http://DEVICE_IP:8094/api/external-chat" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d '{
 "message": "",
    "response_mode": "async_callback",
    "callback_url": "http://YOUR_PC:8080/callback"
  }'
```

:

```json
{
  "request_id": "dca1a2e0-8f7e-4bf8-9523-a4b7bdf2fd13",
  "accepted": true,
  "status": "accepted"
}
```

AI ,Operit `callback_url` `POST application/json` ,:

```json
{
  "request_id": "dca1a2e0-8f7e-4bf8-9523-a4b7bdf2fd13",
  "success": true,
  "chat_id": "1742558116153",
  "ai_response": "……"
}
```

:

- JSON UTF-8 , `Content-Type: application/json; charset=utf-8`
- v1
- callback 2xx ,

## 7.

- `show_floating=true` , `FloatingChatService`
- `show_floating=true` `initial_mode` ,
- `show_floating=true` `initial_mode` ,/； `WINDOW`
- `create_new_chat=true` ,
- `chat_id` `create_new_chat=false`
- `create_if_none=false` ,
- `stop_after=true` ,
- `return_tool_status=false` , XML, `ai_response` / SSE `delta`
- `stream=true` , SSE； JSON
- `stream=true` `response_mode=async_callback` , `400 Bad Request`

 `EXTERNAL_CHAT` Intent .
