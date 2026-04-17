# API :`workflow.d.ts`

`workflow.d.ts` `Workflow` , `Tools.Workflow`.、、.

## Translated section

:

- .
- 、、、、、.
- .

## Translated section

:

```ts
Workflow
```

:

```ts
Tools.Workflow
```

:`Tools.Workflow` `Workflow.Runtime` .

## Translated section

### Translated section

`Workflow.Node` :

- `Workflow.Trigger`
- `Workflow.Execute`
- `Workflow.Condition`
- `Workflow.Logic`
- `Workflow.Extract`

### `Workflow.NodeInput`

.:

- `id?`
- `type: 'trigger' | 'execute' | 'condition' | 'logic' | 'extract'`
- `name?`
- `description?`
- `position?`

:

- :`triggerType`、`triggerConfig`
- :`actionType`、`actionConfig`、`jsCode`
- :`left`、`operator`、`right`
- :`source`、`mode`、`expression`、`group`、`defaultValue`
- : `type: 'logic'`

### `Workflow.ParameterValueInput`

:

- :`string | number | boolean | null`
- :`{ value?, nodeId?, ref?, refNodeId? }`

### Translated section

#### `Workflow.ConnectionInput`

- `id?`
- `sourceNodeId?`
- `targetNodeId?`
- `condition?: ConnectionCondition | null`

#### `Workflow.ConnectionCondition`

:

- `true`
- `false`
- `on_success`
- `success`
- `ok`
- `on_error`
- `error`
- `failed`

.

### Patch

:

- `PatchOperation = 'add' | 'update' | 'remove'`
- `NodePatch`
- `ConnectionPatch`
- `PatchParams`

## API

### `Tools.Workflow.getAll()`

, `WorkflowListResultData`.

### `Tools.Workflow.create(name, description?, nodes?, connections?, enabled?)`

, `WorkflowDetailResultData`.

### `Tools.Workflow.get(workflowId)`

 ID .

### `Tools.Workflow.update(workflowId, updates?)`

,:

- `name?`
- `description?`
- `nodes?`
- `connections?`
- `enabled?`

### `Tools.Workflow.patch(workflowId, patch?)`

 patch ,:

- `name?`
- `description?`
- `enabled?`
- `node_patches?`
- `connection_patches?`

### `Tools.Workflow.delete(workflowId)`

, `StringResultData`.

 `'delete'(...)`, `Tools.Workflow.delete(id)`, `Tools.Workflow['delete'](id)`.

### `Tools.Workflow.trigger(workflowId)`

, `StringResultData`.

## Translated section

### Translated section

```ts
const created = await Tools.Workflow.create(
  'demo-workflow',
 '',
  [
    {
      id: 'trigger_1',
      type: 'trigger',
 name: '',
      triggerType: 'manual',
      position: { x: 80, y: 80 }
    },
    {
      id: 'exec_1',
      type: 'execute',
 name: '',
      actionType: 'send_notification',
      actionConfig: {
 message: ''
      },
      position: { x: 320, y: 80 }
    }
  ],
  [
    {
      sourceNodeId: 'trigger_1',
      targetNodeId: 'exec_1',
      condition: 'on_success'
    }
  ],
  true
);
```

### Translated section

```ts
const detail = await Tools.Workflow.get(created.id);
console.log(detail.nodes.length);
console.log(detail.connections.length);
```

### Translated section

```ts
await Tools.Workflow.patch(created.id, {
  node_patches: [
    {
      op: 'add',
      node: {
        id: 'exec_2',
        type: 'execute',
 name: '',
        actionType: 'write_file',
        actionConfig: {
          path: '/sdcard/workflow.log',
          content: 'workflow finished'
        },
        position: { x: 560, y: 80 }
      }
    }
  ]
});
```

### Translated section

```ts
await Tools.Workflow.trigger(created.id);
await Tools.Workflow['delete'](created.id);
```

## Translated section

:

- `WorkflowResultData`
- `WorkflowListResultData`
- `WorkflowDetailResultData`
- `StringResultData`

## Translated section

- `examples/types/workflow.d.ts`
- `examples/types/results.d.ts`
- `docs/package_dev/results.md`
