/* METADATA
{
    "name": "extended_chat",

    "display_name": {
        "ru": "Extended Chat", "en": "Extended Chat"
    },
    "description": {
        "ru": "Chat toolkit: list/find/rename/delete chats, read messages across chats, bind character cards and send messages.", "en": "Chat toolkit: list/find/rename/delete chats, read messages across chats, bind character cards and send messages."
    },
    "enabledByDefault": true,
    "category": "Chat",
    "tools": [
        {
            "name": "list_chats",
            "description": {
                "ru": "List and filter chats (to discover chat_id).", "en": "List and filter chats (to discover chat_id)."
            },
            "parameters": [
                { "name": "query", "description": { "ru": "Optional title keyword", "en": "Optional title keyword" }, "type": "string", "required": false },
                { "name": "match", "description": { "ru": "Optional: contains/exact/regex (default contains)", "en": "Optional: contains/exact/regex (default contains)" }, "type": "string", "required": false },
                { "name": "limit", "description": { "ru": "Optional max results (default 50)", "en": "Optional max results (default 50)" }, "type": "number", "required": false },
                { "name": "sort_by", "description": { "ru": "Optional: updatedAt/createdAt/messageCount (default updatedAt)", "en": "Optional: updatedAt/createdAt/messageCount (default updatedAt)" }, "type": "string", "required": false },
                { "name": "sort_order", "description": { "ru": "Optional: asc/desc (default desc)", "en": "Optional: asc/desc (default desc)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "find_chat",
            "description": {
                "ru": "Find a single chat by title and return chat_id.", "en": "Find a single chat by title and return chat_id."
            },
            "parameters": [
                { "name": "query", "description": { "ru": "Title keyword/regex", "en": "Title keyword/regex" }, "type": "string", "required": true },
                { "name": "match", "description": { "ru": "Optional: contains/exact/regex (default contains)", "en": "Optional: contains/exact/regex (default contains)" }, "type": "string", "required": false },
                { "name": "index", "description": { "ru": "Optional: pick Nth when multiple matches (default 0)", "en": "Optional: pick Nth when multiple matches (default 0)" }, "type": "number", "required": false }
            ]
        },
        {
            "name": "read_messages",
            "description": {
                "ru": "Read messages from a chat (by chat_id or chat_title).", "en": "Read messages from a chat (by chat_id or chat_title)."
            },
            "parameters": [
                { "name": "chat_id", "description": { "ru": "Target chat id (optional)", "en": "Target chat id (optional)" }, "type": "string", "required": false },
                { "name": "chat_title", "description": { "ru": "Target chat title (optional; used when chat_id is empty)", "en": "Target chat title (optional; used when chat_id is empty)" }, "type": "string", "required": false },
                { "name": "chat_query", "description": { "ru": "Optional title keyword (used when chat_id/chat_title is empty)", "en": "Optional title keyword (used when chat_id/chat_title is empty)" }, "type": "string", "required": false },
                { "name": "chat_index", "description": { "ru": "Optional: pick Nth when multiple matches (default 0)", "en": "Optional: pick Nth when multiple matches (default 0)" }, "type": "number", "required": false },
                { "name": "match", "description": { "ru": "Optional: contains/exact/regex (default contains)", "en": "Optional: contains/exact/regex (default contains)" }, "type": "string", "required": false },
                { "name": "order", "description": { "ru": "Optional: asc/desc (default desc)", "en": "Optional: asc/desc (default desc)" }, "type": "string", "required": false },
                { "name": "limit", "description": { "ru": "Optional: max number of messages (default 20)", "en": "Optional: max number of messages (default 20)" }, "type": "number", "required": false }
            ]
        },
        {
            "name": "rename_chat",
            "description": {
                "ru": "Rename a chat (by chat_id or chat_title).", "en": "Rename a chat (by chat_id or chat_title)."
            },
            "parameters": [
                { "name": "new_title", "description": { "ru": "New chat title", "en": "New chat title" }, "type": "string", "required": true },
                { "name": "chat_id", "description": { "ru": "Target chat id (optional)", "en": "Target chat id (optional)" }, "type": "string", "required": false },
                { "name": "chat_title", "description": { "ru": "Target chat title (optional; used when chat_id is empty)", "en": "Target chat title (optional; used when chat_id is empty)" }, "type": "string", "required": false },
                { "name": "chat_query", "description": { "ru": "Optional title keyword (used when chat_id/chat_title is empty)", "en": "Optional title keyword (used when chat_id/chat_title is empty)" }, "type": "string", "required": false },
                { "name": "chat_index", "description": { "ru": "Optional: pick Nth when multiple matches (default 0)", "en": "Optional: pick Nth when multiple matches (default 0)" }, "type": "number", "required": false },
                { "name": "match", "description": { "ru": "Optional: contains/exact/regex (default contains)", "en": "Optional: contains/exact/regex (default contains)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "delete_chat",
            "description": {
                "ru": "Delete a chat (by chat_id or chat_title).", "en": "Delete a chat (by chat_id or chat_title)."
            },
            "parameters": [
                { "name": "chat_id", "description": { "ru": "Target chat id (optional)", "en": "Target chat id (optional)" }, "type": "string", "required": false },
                { "name": "chat_title", "description": { "ru": "Target chat title (optional; used when chat_id is empty)", "en": "Target chat title (optional; used when chat_id is empty)" }, "type": "string", "required": false },
                { "name": "chat_query", "description": { "ru": "Optional title keyword (used when chat_id/chat_title is empty)", "en": "Optional title keyword (used when chat_id/chat_title is empty)" }, "type": "string", "required": false },
                { "name": "chat_index", "description": { "ru": "Optional: pick Nth when multiple matches (default 0)", "en": "Optional: pick Nth when multiple matches (default 0)" }, "type": "number", "required": false },
                { "name": "match", "description": { "ru": "Optional: contains/exact/regex (default contains)", "en": "Optional: contains/exact/regex (default contains)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "chat_with_agent",
            "description": {
                "ru": "Chat with the agent for the specified character card name; if chat_id is empty, create a new chat and return its ID. Enforces one role per chat (no sharing between roles). Use this tool to delegate tasks to other agents or communicate with other roles when the user explicitly intends it; otherwise, prefer completing tasks directly without using this tool.", "en": "Chat with the agent for the specified character card name; if chat_id is empty, create a new chat and return its ID. Enforces one role per chat (no sharing between roles). Use this tool to delegate tasks to other agents or communicate with other roles when the user explicitly intends it; otherwise, prefer completing tasks directly without using this tool."
            },
            "parameters": [
                { "name": "message", "description": { "ru": "Message to send to AI", "en": "Message to send to AI" }, "type": "string", "required": true },
                { "name": "character_card_name", "description": { "ru": "Character card name", "en": "Character card name" }, "type": "string", "required": true },
                { "name": "chat_id", "description": { "ru": "Target chat id (optional; create new if empty)", "en": "Target chat id (optional; create new if empty)" }, "type": "string", "required": false },
                { "name": "timeout", "description": { "ru": "Optional timeout seconds to wait for response (default 10)", "en": "Optional timeout seconds to wait for response (default 10)" }, "type": "number", "required": false }
            ]
        },
        {
            "name": "agent_status",
            "description": {
                "ru": "Check a chat's input processing status.", "en": "Check a chat's input processing status."
            },
            "parameters": [
                { "name": "chat_id", "description": { "ru": "Target chat id", "en": "Target chat id" }, "type": "string", "required": true }
            ]
        },
        {
            "name": "list_character_cards",
            "description": {
                "ru": "List all character cards (to discover character_card_id).", "en": "List all character cards (to discover character_card_id)."
            },
            "parameters": []
        }
    ]
}*/
const HistoryChat = (function () {
    function normalizeMatchMode(match) {
        const m = (match || '').trim().toLowerCase();
        if (m === 'exact' || m === 'regex' || m === 'contains')
            return m;
        return 'contains';
    }
    function asArray(value) {
        return Array.isArray(value) ? value : [];
    }
    async function list_chats_impl(params) {
        const query = (params?.query ?? '').toString().trim();
        const matchMode = normalizeMatchMode(params?.match);
        const limitRaw = params && params.limit !== undefined ? Number(params.limit) : undefined;
        const limit = limitRaw !== undefined && !isNaN(limitRaw) ? limitRaw : undefined;
        const sortBy = params?.sort_by ? params.sort_by.toString().trim() : undefined;
        const sortOrder = params?.sort_order ? params.sort_order.toString().trim().toLowerCase() : undefined;
        const listParams = {};
        if (query)
            listParams.query = query;
        if (matchMode)
            listParams.match = matchMode;
        if (limit !== undefined)
            listParams.limit = limit;
        if (sortBy)
            listParams.sort_by = sortBy;
        if (sortOrder)
            listParams.sort_order = sortOrder;
        const listResult = (await toolCall('list_chats', listParams));
        const chats = asArray(listResult?.chats);
        return {
            success: true,
            message: '对话列表获取完成',
            data: {
                totalCount: listResult?.totalCount ?? chats.length,
                currentChatId: listResult?.currentChatId ?? null,
                matchedCount: listResult?.totalCount ?? chats.length,
                chats,
            }
        };
    }
    async function find_chat_impl(params) {
        const query = (params?.query ?? '').toString().trim();
        if (!query) {
            throw new Error('Missing parameter: query');
        }
        const matchMode = normalizeMatchMode(params?.match);
        const indexRaw = params && params.index !== undefined ? Number(params.index) : 0;
        const index = isNaN(indexRaw) ? 0 : indexRaw;
        const findParams = { query };
        if (matchMode)
            findParams.match = matchMode;
        if (index !== undefined)
            findParams.index = index;
        const findResult = (await toolCall('find_chat', findParams));
        const picked = findResult?.chat ?? null;
        if (!picked) {
            throw new Error(`Chat not found by query: ${query}`);
        }
        return {
            success: true,
            message: '对话查找完成',
            data: {
                chat: picked,
                matchedCount: findResult?.matchedCount ?? 1,
            }
        };
    }
    async function resolveChatId(params) {
        if (params && typeof params.chat_id === 'string' && params.chat_id.trim()) {
            return params.chat_id.trim();
        }
        const title = params && typeof params.chat_title === 'string' ? params.chat_title.trim() : '';
        const query = params && typeof params.chat_query === 'string' ? params.chat_query.trim() : '';
        const matchMode = normalizeMatchMode(params?.match);
        const indexRaw = params && params.chat_index !== undefined ? Number(params.chat_index) : 0;
        const index = isNaN(indexRaw) ? 0 : indexRaw;
        if (!title && !query) {
            throw new Error('Missing parameter: chat_id or chat_title or chat_query is required');
        }
        const needle = title || query;
        const findParams = { query: needle };
        findParams.match = title ? 'exact' : matchMode;
        if (index !== undefined)
            findParams.index = index;
        const findResult = (await toolCall('find_chat', findParams));
        const picked = findResult?.chat ?? null;
        if (!picked?.id) {
            throw new Error(`Chat not found by query: ${needle}`);
        }
        return picked.id;
    }
    async function read_messages_impl(params) {
        const chatId = await resolveChatId(params || {});
        const orderRaw = params && params.order !== undefined ? String(params.order).trim().toLowerCase() : '';
        const order = (orderRaw === 'asc' || orderRaw === 'desc') ? orderRaw : 'desc';
        const limitRaw = params && params.limit !== undefined ? Number(params.limit) : 20;
        const limit = isNaN(limitRaw) ? 20 : limitRaw;
        const result = (await toolCall('get_chat_messages', {
            chat_id: chatId,
            order,
            limit,
        }));
        const rawMessages = asArray(result?.messages);
        const text = rawMessages
            .map((m) => {
            const role = (m.roleName ?? m.sender ?? '').toString() || 'message';
            const ts = (m.timestamp !== undefined && m.timestamp !== null) ? String(m.timestamp) : '';
            const header = ts ? `[${ts}] ${role}` : role;
            return `${header}:\n${(m.content ?? '').toString()}`;
        })
            .join('\n\n');
        return {
            success: true,
            message: '读取对话消息完成',
            data: {
                result,
                text,
            },
        };
    }
    async function rename_chat_impl(params) {
        const newTitle = (params?.new_title ?? '').toString().trim();
        if (!newTitle) {
            throw new Error('Missing parameter: new_title');
        }
        const chatId = await resolveChatId(params || {});
        const result = (await toolCall('update_chat_title', {
            chat_id: chatId,
            title: newTitle,
        }));
        return {
            success: true,
            message: '对话重命名完成',
            data: {
                chat_id: chatId,
                title: newTitle,
                result,
            },
        };
    }
    async function delete_chat_impl(params) {
        const chatId = await resolveChatId(params || {});
        const result = (await toolCall('delete_chat', {
            chat_id: chatId,
        }));
        return {
            success: true,
            message: '对话删除完成',
            data: {
                chat_id: chatId,
                result,
            },
        };
    }
    async function agent_status_impl(params) {
        const chatId = (params?.chat_id ?? '').toString().trim();
        if (!chatId) {
            throw new Error('Missing parameter: chat_id');
        }
        const result = await toolCall('agent_status', { chat_id: chatId });
        return {
            success: true,
            message: '对话状态查询完成',
            data: {
                result,
            },
        };
    }
    async function list_character_cards_impl() {
        const result = (await toolCall('list_character_cards', {}));
        const cards = asArray(result?.cards);
        return {
            success: true,
            message: '角色卡列表获取完成',
            data: {
                totalCount: result?.totalCount ?? cards.length,
                cards,
            },
        };
    }
    async function chat_with_agent_impl(params) {
        const message = (params?.message ?? '').toString();
        const characterCardNameInput = (params?.character_card_name ?? '').toString().trim();
        if (!message.trim()) {
            throw new Error('Missing parameter: message');
        }
        if (!characterCardNameInput) {
            throw new Error('Missing parameter: character_card_name');
        }
        let characterCardName = characterCardNameInput;
        let characterCardId = '';
        try {
            const cardResult = (await toolCall('list_character_cards', {}));
            const cards = asArray(cardResult?.cards);
            const targetCard = cards.find((card) => card.name === characterCardNameInput);
            if (!targetCard) {
                throw new Error(`Character card not found: ${characterCardNameInput}`);
            }
            characterCardName = targetCard.name;
            characterCardId = targetCard.id;
        }
        catch {
            if (!characterCardId) {
                throw new Error(`Character card not found: ${characterCardNameInput}`);
            }
        }
        try {
            await toolCall('start_chat_service', {
                initial_mode: 'BALL',
                keep_if_exists: true,
            });
        }
        catch {
            // ignore service start errors to avoid blocking agent message
        }
        let chatId = (params?.chat_id ?? '').toString().trim();
        if (!chatId) {
            const lang = (getLang() || '').toLowerCase();
            const group = lang === 'zh' ? '子任务' : 'subTask';
            const creation = (await toolCall('create_new_chat', {
                group,
                set_as_current_chat: false,
                character_card_id: characterCardId,
            }));
            chatId = (creation?.chatId ?? '').toString().trim();
            if (!chatId) {
                throw new Error('Failed to create new chat');
            }
        }
        else {
            const findResult = (await toolCall('find_chat', {
                query: chatId,
                match: 'exact',
                index: 0,
            }));
            const boundName = findResult?.chat?.characterCardName ?? null;
            if (boundName && boundName !== characterCardName) {
                throw new Error(`Chat ${chatId} 已绑定角色 ${boundName}，不能与 ${characterCardName} 共用会话`);
            }
        }
        const timeoutRaw = params?.timeout !== undefined ? Number(params.timeout) : 10;
        const timeoutSec = isNaN(timeoutRaw) || timeoutRaw <= 0 ? 10 : timeoutRaw;
        const timeoutMs = Math.min(timeoutSec, 60) * 1000;
        const sendPromise = toolCall('send_message_to_ai', {
            message,
            chat_id: chatId,
            role_card_id: characterCardId,
            sender_name: getCallerName() || characterCardName,
        });
        const timeoutPromise = new Promise((resolve) => {
            setTimeout(() => resolve(null), timeoutMs);
        });
        const sendResult = await Promise.race([sendPromise, timeoutPromise]);
        if (sendResult === null) {
            return {
                success: true,
                message: `已发送给 ${characterCardName}，等待响应超时（${timeoutSec}s）`,
                data: {
                    chat_id: chatId,
                    timeout: true,
                    hint: '可以通过 agent_status 查看该 agent 是否已处理你的问题。',
                },
            };
        }
        return {
            success: true,
            message: `发消息给 ${characterCardName}`,
            data: {
                chat_id: chatId,
                result: sendResult,
            },
        };
    }
    async function wrapToolExecution(func, params) {
        try {
            const result = await func(params);
            complete(result);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Tool ${func.name} failed unexpectedly`, error);
            complete({
                success: false,
                message: `读取对话消息失败: ${message}`,
            });
        }
    }
    async function wrapToolExecutionNoParams(func) {
        try {
            const result = await func();
            complete(result);
        }
        catch (error) {
            const message = error instanceof Error ? error.message : String(error);
            console.error(`Tool ${func.name} failed unexpectedly`, error);
            complete({
                success: false,
                message: `读取对话消息失败: ${message}`,
            });
        }
    }
    async function read_messages(params) {
        return await wrapToolExecution(read_messages_impl, params);
    }
    async function rename_chat(params) {
        return await wrapToolExecution(rename_chat_impl, params);
    }
    async function delete_chat(params) {
        return await wrapToolExecution(delete_chat_impl, params);
    }
    async function list_chats(params) {
        return await wrapToolExecution(list_chats_impl, params);
    }
    async function find_chat(params) {
        return await wrapToolExecution(find_chat_impl, params);
    }
    async function agent_status(params) {
        return await wrapToolExecution(agent_status_impl, params);
    }
    async function list_character_cards() {
        return await wrapToolExecutionNoParams(list_character_cards_impl);
    }
    async function chat_with_agent(params) {
        return await wrapToolExecution(chat_with_agent_impl, params);
    }
    async function main() {
        complete({
            success: true,
            message: 'extended_chat 工具包已加载',
            data: {
                hint: 'Use extended_chat:read_messages / rename_chat / delete_chat.',
            },
        });
    }
    return {
        list_chats,
        find_chat,
        read_messages,
        rename_chat,
        delete_chat,
        chat_with_agent,
        agent_status,
        list_character_cards,
        main,
    };
})();
exports.list_chats = HistoryChat.list_chats;
exports.find_chat = HistoryChat.find_chat;
exports.read_messages = HistoryChat.read_messages;
exports.rename_chat = HistoryChat.rename_chat;
exports.delete_chat = HistoryChat.delete_chat;
exports.chat_with_agent = HistoryChat.chat_with_agent;
exports.agent_status = HistoryChat.agent_status;
exports.list_character_cards = HistoryChat.list_character_cards;
exports.main = HistoryChat.main;
