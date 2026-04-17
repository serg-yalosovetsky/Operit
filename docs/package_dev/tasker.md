# API :`tasker.d.ts`

`tasker.d.ts` Tasker API: `Tools.Tasker` Tasker .

## Translated section

- 、 Tasker.
- Assistance Tasker .

## Translated section

:

```ts
Tasker
```

:

```ts
Tools.Tasker
```

## Translated section

### `Tasker.TriggerTaskerEventParams`

:

- `task_type: string`:Tasker ,.
- `arg1?: string` ~ `arg5?: string`: 5 .
- `args_json?: string`:、, JSON .

## API

### `Tools.Tasker.triggerEvent(params)`

```ts
triggerEvent(params: TriggerTaskerEventParams): Promise<string>
```

:

- Tasker .
- , `results.d.ts` .

## Translated section

### Translated section

```ts
await Tools.Tasker.triggerEvent({
  task_type: "sync_notes",
  arg1: "daily",
  arg2: "force"
});
```

### Translated section

```ts
await Tools.Tasker.triggerEvent({
  task_type: "import_payload",
  args_json: JSON.stringify({
    source: "assistance",
    timestamp: Date.now(),
    items: ["a", "b", "c"]
  })
});
```

## Translated section

- `arg1` ~ `arg5`.
- `args_json`, Tasker .
- `task_type` Tasker .

## Translated section

- `examples/types/tasker.d.ts`
- `examples/types/index.d.ts`
- `docs/package_dev/index.md`
