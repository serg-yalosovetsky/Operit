# API :`chat.d.ts`

`chat.d.ts` `Tools.Chat` ,、、.

## Translated section

:

- .
- 、、、.
- .
- .

## Translated section

```ts
Tools.Chat
```

## API

### `startService()`

```ts
startService(): Promise<ChatServiceStartResultData>
```

.

### `createNew(group?, setAsCurrentChat?, characterCardId?)`

```ts
createNew(group?: string, setAsCurrentChat?: boolean, characterCardId?: string): Promise<ChatCreationResultData>
```

.

### `listAll()`

.

### `listChats(params?)`

:

- `query?`
- `match?: 'contains' | 'exact' | 'regex'`
- `limit?`
- `sort_by?: 'updatedAt' | 'createdAt' | 'messageCount'`
- `sort_order?: 'asc' | 'desc'`

### `findChat(params)`

```ts
findChat({ query, match?, index? }): Promise<ChatFindResultData>
```

 ID .

### `agentStatus(chatId)`

.

### `switchTo(chatId)`

.

### `updateTitle(chatId, title)`

.

### `deleteChat(chatId)`

.

### `sendMessage(message, chatId?, roleCardId?, senderName?)`

.

### `sendMessageAdvanced(params)`

,:

- `chatId`
- `chatHistory`
- `workspacePath`
- `functionType`
- `promptFunctionType`
- `enableThinking`
- `thinkingGuidance`
- `enableMemoryQuery`
- `maxTokens`
- `tokenUsageThreshold`
- `customSystemPromptTemplate`
- `isSubTask`
- `stream`

### `listCharacterCards()`

.

### `getMessages(chatId, options?)`

```ts
getMessages(chatId: string, options?: { order?: 'asc' | 'desc'; limit?: number }): Promise<ChatMessagesResultData>
```

.

## Translated section

`chat.d.ts` `results.d.ts` ,:

- `ChatServiceStartResultData`
- `ChatCreationResultData`
- `ChatListResultData`
- `ChatFindResultData`
- `AgentStatusResultData`
- `ChatSwitchResultData`
- `ChatTitleUpdateResultData`
- `ChatDeleteResultData`
- `MessageSendResultData`
- `ChatMessagesResultData`
- `CharacterCardListResultData`

## Translated section

### Translated section

```ts
const created = await Tools.Chat.createNew('work', true);
const chatId = created.chatId;

await Tools.Chat.sendMessage('', chatId);
```

### Translated section

```ts
const found = await Tools.Chat.findChat({
 query: '',
  match: 'contains'
});

if (found.chat) {
  await Tools.Chat.switchTo(found.chat.id);
}
```

### Translated section

```ts
const messages = await Tools.Chat.getMessages('chat_123', {
  order: 'desc',
  limit: 20
});
console.log(messages.toString());
```

## Translated section

- `examples/types/chat.d.ts`
- `examples/types/results.d.ts`
- `examples/types/index.d.ts`
