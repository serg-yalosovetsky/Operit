# API :`okhttp.d.ts`

`okhttp.d.ts` `OkHttp` “” HTTP API. `Tools.Net.http()` ,、.

## Translated section

```ts
OkHttp
```

, `import`.

## Translated section

- `OkHttp.newClient()`:.
- `OkHttp.newBuilder()`:.
- `OkHttpClientBuilder`:、、、.
- `OkHttpClient`:.
- `RequestBuilder`: `HttpRequest`.
- `OkHttpResponse`:.

## Translated section

### `HttpRequest`

:

- `url`
- `method`
- `headers`
- `body?`
- `bodyType?`：`text | json | form | multipart`
- `formParams?`
- `multipartParams?`

:

- `execute()`:.

### `OkHttpResponse`

:

- `raw: HttpResponseData`
- `statusCode`
- `statusMessage`
- `headers`
- `content`
- `contentType`
- `size`

:

- `json()`
- `text()`
- `bodyAsBase64()`
- `isSuccessful()`

### `OkHttpClientBuilder`

:

- `connectTimeout(timeout)`
- `readTimeout(timeout)`
- `writeTimeout(timeout)`
- `followRedirects(follow)`
- `retryOnConnectionFailure(retry)`
- `addInterceptor(interceptor)`
- `build()`

### `OkHttpClient`

:

- `newRequest()`
- `execute(request)`
- `get(url, headers?)`
- `post(url, body, headers?)`
- `put(url, body, headers?)`
- `delete(url, headers?)`
- `OkHttpClient.newBuilder()`

### `RequestBuilder`

:

- `url(url)`
- `method(method)`
- `header(name, value)`
- `headers(headers)`
- `body(body, type?)`
- `jsonBody(data)`
- `formParam(name, value)`
- `multipartParam(name, value, contentType?)`
- `build()`

## Translated section

### GET

```ts
const client = OkHttp.newClient();
const response = await client.get('https://example.com');
console.log(response.statusCode);
console.log(response.text());
```

### Translated section

```ts
const client = OkHttp
  .newBuilder()
  .connectTimeout(10_000)
  .readTimeout(20_000)
  .followRedirects(true)
  .retryOnConnectionFailure(true)
  .build();
```

### JSON POST

```ts
const client = OkHttp.newClient();
const request = client
  .newRequest()
  .url('https://example.com/api')
  .header('Authorization', 'Bearer token')
  .jsonBody({ hello: 'world' })
  .build();

const response = await client.execute(request);
const json = response.json();
```

### Translated section

```ts
const client = OkHttp
  .newBuilder()
  .addInterceptor((request) => {
    request.headers['X-Trace-Id'] = String(Date.now());
    return request;
  })
  .build();
```

## `Tools.Net`

- `Tools.Net` ,.
- `OkHttp` ,.
- ,.

## Translated section

- `examples/types/okhttp.d.ts`
- `examples/types/network.d.ts`
- `examples/types/results.d.ts`
