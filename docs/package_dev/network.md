# API :`network.d.ts`

`network.d.ts` `Tools.Net` . HTTP ,“” Web API.

## Translated section

:

- HTTP .
- .
- Web (、 JS、、、、).

## Translated section

```ts
Tools.Net
```

## API

### HTTP

#### `httpGet(url, ignore_ssl?)`

```ts
httpGet(url: string, ignore_ssl?: boolean): Promise<HttpResponseData>
```

#### `httpPost(url, body, ignore_ssl?)`

```ts
httpPost(url: string, body: string | object, ignore_ssl?: boolean): Promise<HttpResponseData>
```

#### `http(options)`

```ts
http({
  url,
  method?,
  headers?,
  body?,
  connect_timeout?,
  read_timeout?,
  follow_redirects?,
  ignore_ssl?,
  responseType?,
  validateStatus?
}): Promise<HttpResponseData>
```

 HTTP .

#### `uploadFile(options)`

 `multipart/form-data` ,:

- `url`
- `method?: 'POST' | 'PUT'`
- `headers?`
- `form_data?`
- `ignore_ssl?`
- `files[]`

 `files[]` :

- `field_name`
- `file_path`
- `content_type?`
- `file_name?`

### Translated section

#### `visit(urlOrParams)`

```ts
visit(
  string |
  {
    url?,
    visit_key?,
    link_number?,
    include_image_links?,
    headers?,
    user_agent_preset?,
    user_agent?
  }
): Promise<VisitWebResultData>
```

:

- URL.
- `visit_key` .
- “”, HTTP GET/POST .
- 、AJAX 、 headers/status/body, `httpGet()`、`httpPost()` `http()`； `visit()` .
- ,`VisitWebResultData.content` , `contentSavedTo` .
- `contentSavedTo` , `read_file_part`、`read_file_full` `grep_code`.

### Translated section

#### `startBrowser(options?)`

( WebView), `StringResultData`, `value` JSON .

#### `stopBrowser(sessionIdOrOptions?)`

.

#### `browserNavigate(sessionId, url, headers?)`

 URL.

#### `browserEval(sessionId, script, timeoutMs?)`

 JavaScript.

#### `browserClick(options)`

```ts
browserClick({
  session_id?,
  ref,
  element?,
  button?,
  modifiers?,
  doubleClick?
}): Promise<StringResultData>
```

 `ref` .

#### `browserFill(sessionId, selector, value)`

 CSS .

#### `browserWaitFor(sessionId, selector?, timeoutMs?)`

.

#### `browserSnapshot(sessionId, options?)`

,.

#### `browserFileUpload(sessionId, paths?)`

； `paths` .

### Cookie

 `Tools.Net.cookies` :

- `get(domain)`
- `set(domain, cookies)`
- `clear(domain?)`

 `HttpResponseData`.

## Translated section

### GET

```ts
const response = await Tools.Net.httpGet('https://example.com');
console.log(response.statusCode);
console.log(response.content);
```

### HTTP

```ts
const response = await Tools.Net.http({
  url: 'https://example.com/api',
  method: 'POST',
  headers: {
    Authorization: 'Bearer token'
  },
  body: {
    hello: 'world'
  },
  follow_redirects: true
});
```

### Translated section

```ts
const page = await Tools.Net.visit({
  url: 'https://example.com',
  include_image_links: true,
  user_agent_preset: 'desktop'
});
console.log(page.title);
console.log(page.content);

// If you need raw API responses instead of webpage extraction,
// use httpGet/httpPost/http rather than visit().
```

### Translated section

```ts
const started = await Tools.Net.startBrowser({ url: 'https://example.com' });
const session = JSON.parse(started.value);

await Tools.Net.browserClick({
  session_id: session.sessionId,
  ref: 'node_12',
 element: ''
});
```

## Translated section

- `HttpResponseData`.
- `visit()` `VisitWebResultData`.
- API `StringResultData`, `value` , JSON .

## Translated section

- `examples/types/network.d.ts`
- `examples/types/results.d.ts`
- `docs/package_dev/results.md`
