/* METADATA
{
    "name": "extended_memory_tools",

    "display_name": {
        "ru": "Extended Memory Tools", "en": "Extended Memory Tools"
    },
    "description": {
        "ru": "Extended memory tools: create/update/delete/query/link memories and update user preferences (default tools only keep query/get/query_links).", "en": "Extended memory tools: create/update/delete/query/link memories and update user preferences (default tools only keep query/get/query_links)."
    },
    "category": "Memory",
    "enabledByDefault": true,
    "tools": [
        {
            "name": "create_memory",
            "description": { "ru": "Create a new memory node.", "en": "Create a new memory node." },
            "parameters": [
                { "name": "title", "description": { "ru": "Memory title", "en": "Memory title" }, "type": "string", "required": true },
                { "name": "content", "description": { "ru": "Memory content", "en": "Memory content" }, "type": "string", "required": true },
                { "name": "content_type", "description": { "ru": "Optional: content type (default: text/plain)", "en": "Optional: content type (default: text/plain)" }, "type": "string", "required": false },
                { "name": "source", "description": { "ru": "Optional: source (default: ai_created)", "en": "Optional: source (default: ai_created)" }, "type": "string", "required": false },
                { "name": "folder_path", "description": { "ru": "Optional: folder path (default: empty)", "en": "Optional: folder path (default: empty)" }, "type": "string", "required": false },
                { "name": "tags", "description": { "ru": "Optional: tags (comma-separated string)", "en": "Optional: tags (comma-separated string)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "update_memory",
            "description": { "ru": "Update an existing memory node by title.", "en": "Update an existing memory node by title." },
            "parameters": [
                { "name": "old_title", "description": { "ru": "Old title (to locate the memory)", "en": "Old title (to locate the memory)" }, "type": "string", "required": true },
                { "name": "new_title", "description": { "ru": "Optional: new title (rename)", "en": "Optional: new title (rename)" }, "type": "string", "required": false },
                { "name": "content", "description": { "ru": "Optional: new content", "en": "Optional: new content" }, "type": "string", "required": false },
                { "name": "content_type", "description": { "ru": "Optional: content type", "en": "Optional: content type" }, "type": "string", "required": false },
                { "name": "source", "description": { "ru": "Optional: source", "en": "Optional: source" }, "type": "string", "required": false },
                { "name": "credibility", "description": { "ru": "Optional: credibility 0-1", "en": "Optional: credibility 0-1" }, "type": "number", "required": false },
                { "name": "importance", "description": { "ru": "Optional: importance 0-1", "en": "Optional: importance 0-1" }, "type": "number", "required": false },
                { "name": "folder_path", "description": { "ru": "Optional: folder path", "en": "Optional: folder path" }, "type": "string", "required": false },
                { "name": "tags", "description": { "ru": "Optional: tags (comma-separated string)", "en": "Optional: tags (comma-separated string)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "delete_memory",
            "description": { "ru": "Delete a memory node by title (irreversible).", "en": "Delete a memory node by title (irreversible)." },
            "parameters": [
                { "name": "title", "description": { "ru": "Memory title to delete", "en": "Memory title to delete" }, "type": "string", "required": true }
            ]
        },
        {
            "name": "move_memory",
            "description": { "ru": "Move memories to another folder in batch. Filter by titles and/or source folder.", "en": "Move memories to another folder in batch. Filter by titles and/or source folder." },
            "parameters": [
                { "name": "target_folder_path", "description": { "ru": "Target folder path (empty string means uncategorized)", "en": "Target folder path (empty string means uncategorized)" }, "type": "string", "required": true },
                { "name": "titles", "description": { "ru": "Optional: title list (comma/newline separated)", "en": "Optional: title list (comma/newline separated)" }, "type": "string", "required": false },
                { "name": "source_folder_path", "description": { "ru": "Optional: source folder path (empty string means uncategorized)", "en": "Optional: source folder path (empty string means uncategorized)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "link_memories",
            "description": { "ru": "Create a semantic link between two memories.", "en": "Create a semantic link between two memories." },
            "parameters": [
                { "name": "source_title", "description": { "ru": "Source memory title", "en": "Source memory title" }, "type": "string", "required": true },
                { "name": "target_title", "description": { "ru": "Target memory title", "en": "Target memory title" }, "type": "string", "required": true },
                { "name": "link_type", "description": { "ru": "Optional: link type (default: related)", "en": "Optional: link type (default: related)" }, "type": "string", "required": false },
                { "name": "weight", "description": { "ru": "Optional: weight 0-1 (default: 0.7)", "en": "Optional: weight 0-1 (default: 0.7)" }, "type": "number", "required": false },
                { "name": "description", "description": { "ru": "Optional: relationship description", "en": "Optional: relationship description" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "query_memory_links",
            "description": { "ru": "Query memory links (filter by id/source/target/type).", "en": "Query memory links (filter by id/source/target/type)." },
            "parameters": [
                { "name": "link_id", "description": { "ru": "Optional: link id", "en": "Optional: link id" }, "type": "number", "required": false },
                { "name": "source_title", "description": { "ru": "Optional: source memory title", "en": "Optional: source memory title" }, "type": "string", "required": false },
                { "name": "target_title", "description": { "ru": "Optional: target memory title", "en": "Optional: target memory title" }, "type": "string", "required": false },
                { "name": "link_type", "description": { "ru": "Optional: link type", "en": "Optional: link type" }, "type": "string", "required": false },
                { "name": "limit", "description": { "ru": "Optional: limit 1-200, default 20", "en": "Optional: limit 1-200, default 20" }, "type": "number", "required": false }
            ]
        },
        {
            "name": "update_memory_link",
            "description": { "ru": "Update a memory link (by link_id or source/target/link_type).", "en": "Update a memory link (by link_id or source/target/link_type)." },
            "parameters": [
                { "name": "link_id", "description": { "ru": "Optional: link ID (preferred)", "en": "Optional: link ID (preferred)" }, "type": "number", "required": false },
                { "name": "source_title", "description": { "ru": "Optional: source title (used when link_id is not provided)", "en": "Optional: source title (used when link_id is not provided)" }, "type": "string", "required": false },
                { "name": "target_title", "description": { "ru": "Optional: target title (used when link_id is not provided)", "en": "Optional: target title (used when link_id is not provided)" }, "type": "string", "required": false },
                { "name": "link_type", "description": { "ru": "Optional: current relation type (for unique resolution)", "en": "Optional: current relation type (for unique resolution)" }, "type": "string", "required": false },
                { "name": "new_link_type", "description": { "ru": "Optional: new relation type", "en": "Optional: new relation type" }, "type": "string", "required": false },
                { "name": "weight", "description": { "ru": "Optional: new weight 0-1", "en": "Optional: new weight 0-1" }, "type": "number", "required": false },
                { "name": "description", "description": { "ru": "Optional: new relationship description", "en": "Optional: new relationship description" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "delete_memory_link",
            "description": { "ru": "Delete a memory link (by link_id or source/target/link_type).", "en": "Delete a memory link (by link_id or source/target/link_type)." },
            "parameters": [
                { "name": "link_id", "description": { "ru": "Optional: link ID (preferred)", "en": "Optional: link ID (preferred)" }, "type": "number", "required": false },
                { "name": "source_title", "description": { "ru": "Optional: source title (used when link_id is not provided)", "en": "Optional: source title (used when link_id is not provided)" }, "type": "string", "required": false },
                { "name": "target_title", "description": { "ru": "Optional: target title (used when link_id is not provided)", "en": "Optional: target title (used when link_id is not provided)" }, "type": "string", "required": false },
                { "name": "link_type", "description": { "ru": "Optional: relation type (for unique resolution)", "en": "Optional: relation type (for unique resolution)" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "update_user_preferences",
            "description": { "ru": "Update user preferences (provide at least one field).", "en": "Update user preferences (provide at least one field)." },
            "parameters": [
                { "name": "birth_date", "description": { "ru": "Optional: birth date (Unix ms timestamp)", "en": "Optional: birth date (Unix ms timestamp)" }, "type": "number", "required": false },
                { "name": "gender", "description": { "ru": "Optional: gender", "en": "Optional: gender" }, "type": "string", "required": false },
                { "name": "personality", "description": { "ru": "Optional: personality", "en": "Optional: personality" }, "type": "string", "required": false },
                { "name": "identity", "description": { "ru": "Optional: identity/role", "en": "Optional: identity/role" }, "type": "string", "required": false },
                { "name": "occupation", "description": { "ru": "Optional: occupation", "en": "Optional: occupation" }, "type": "string", "required": false },
                { "name": "ai_style", "description": { "ru": "Optional: preferred AI interaction style", "en": "Optional: preferred AI interaction style" }, "type": "string", "required": false }
            ]
        }
    ]
}*/
const ExtendedMemoryTools = (function () {
    async function create_memory(params) {
        const result = await Tools.Memory.create(params.title, params.content, params.content_type, params.source, params.folder_path, params.tags);
        return { success: typeof result === 'string' && result.length > 0, message: '记忆创建完成', data: result };
    }
    async function update_memory(params) {
        const result = await Tools.Memory.update(params.old_title, {
            newTitle: params.new_title,
            content: params.content,
            contentType: params.content_type,
            source: params.source,
            credibility: params.credibility,
            importance: params.importance,
            folderPath: params.folder_path,
            tags: params.tags,
        });
        return { success: typeof result === 'string' && result.length > 0, message: '记忆更新完成', data: result };
    }
    async function delete_memory(params) {
        const result = await Tools.Memory.deleteMemory(params.title);
        return { success: typeof result === 'string' && result.length > 0, message: '记忆删除完成', data: result };
    }
    async function move_memory(params) {
        const titles = params.titles
            ? params.titles.split(/[,\n|]/).map(s => s.trim()).filter(Boolean)
            : undefined;
        const result = await Tools.Memory.move(params.target_folder_path, titles, params.source_folder_path);
        return { success: typeof result === 'string' && result.length > 0, message: '记忆移动完成', data: result };
    }
    async function link_memories(params) {
        const result = await Tools.Memory.link(params.source_title, params.target_title, params.link_type, params.weight, params.description);
        return { success: !!result, message: '记忆链接创建完成', data: result };
    }
    async function query_memory_links(params) {
        const result = await Tools.Memory.queryLinks(params.link_id, params.source_title, params.target_title, params.link_type, params.limit);
        return { success: !!result, message: '记忆链接查询完成', data: result };
    }
    async function update_memory_link(params) {
        const result = await Tools.Memory.updateLink(params.link_id, params.source_title, params.target_title, params.link_type, params.new_link_type, params.weight, params.description);
        return { success: !!result, message: '记忆链接更新完成', data: result };
    }
    async function delete_memory_link(params) {
        const result = await Tools.Memory.deleteLink(params.link_id, params.source_title, params.target_title, params.link_type);
        return { success: typeof result === 'string' ? result.length > 0 : !!result, message: '记忆链接删除完成', data: result };
    }
    async function update_user_preferences(params) {
        const toolParams = {};
        if (params.birth_date !== undefined)
            toolParams.birth_date = params.birth_date;
        if (params.gender !== undefined)
            toolParams.gender = params.gender;
        if (params.personality !== undefined)
            toolParams.personality = params.personality;
        if (params.identity !== undefined)
            toolParams.identity = params.identity;
        if (params.occupation !== undefined)
            toolParams.occupation = params.occupation;
        if (params.ai_style !== undefined)
            toolParams.ai_style = params.ai_style;
        const result = await toolCall({ name: "update_user_preferences", params: toolParams });
        const success = typeof result === 'string' ? result.length > 0 : !!result;
        return { success, message: '用户偏好更新完成', data: result };
    }
    async function wrapToolExecution(func, params) {
        try {
            const result = await func(params);
            complete(result);
        }
        catch (error) {
            console.error(`Tool ${func.name} failed unexpectedly`, error);
            complete({
                success: false,
                message: `工具执行时发生意外错误: ${error.message}`,
            });
        }
    }
    async function main() {
        const results = [];
        // 这些工具都可能修改记忆/偏好，默认不做自动化演示，避免污染用户数据。
        results.push({ tool: 'create_memory', result: { success: null, message: '未测试（会写入记忆库）' } });
        results.push({ tool: 'update_memory', result: { success: null, message: '未测试（会修改记忆库）' } });
        results.push({ tool: 'delete_memory', result: { success: null, message: '未测试（会删除记忆库数据）' } });
        results.push({ tool: 'move_memory', result: { success: null, message: '未测试（会批量修改记忆文件夹）' } });
        results.push({ tool: 'link_memories', result: { success: null, message: '未测试（会修改记忆库链接）' } });
        results.push({ tool: 'query_memory_links', result: { success: null, message: '未测试（只读查询）' } });
        results.push({ tool: 'update_memory_link', result: { success: null, message: '未测试（会修改记忆库链接）' } });
        results.push({ tool: 'delete_memory_link', result: { success: null, message: '未测试（会删除记忆库链接）' } });
        results.push({ tool: 'update_user_preferences', result: { success: null, message: '未测试（会修改用户偏好）' } });
        complete({
            success: true,
            message: "拓展记忆工具包加载完成（未执行破坏性测试）",
            data: { results }
        });
    }
    return {
        create_memory: (params) => wrapToolExecution(create_memory, params),
        update_memory: (params) => wrapToolExecution(update_memory, params),
        delete_memory: (params) => wrapToolExecution(delete_memory, params),
        move_memory: (params) => wrapToolExecution(move_memory, params),
        link_memories: (params) => wrapToolExecution(link_memories, params),
        query_memory_links: (params) => wrapToolExecution(query_memory_links, params),
        update_memory_link: (params) => wrapToolExecution(update_memory_link, params),
        delete_memory_link: (params) => wrapToolExecution(delete_memory_link, params),
        update_user_preferences: (params) => wrapToolExecution(update_user_preferences, params),
        main,
    };
})();
exports.create_memory = ExtendedMemoryTools.create_memory;
exports.update_memory = ExtendedMemoryTools.update_memory;
exports.delete_memory = ExtendedMemoryTools.delete_memory;
exports.move_memory = ExtendedMemoryTools.move_memory;
exports.link_memories = ExtendedMemoryTools.link_memories;
exports.query_memory_links = ExtendedMemoryTools.query_memory_links;
exports.update_memory_link = ExtendedMemoryTools.update_memory_link;
exports.delete_memory_link = ExtendedMemoryTools.delete_memory_link;
exports.update_user_preferences = ExtendedMemoryTools.update_user_preferences;
exports.main = ExtendedMemoryTools.main;
