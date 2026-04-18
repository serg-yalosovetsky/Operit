/* METADATA
{
    "name": "extended_file_tools",

    "display_name": {
        "ru": "Extended File Tools", "en": "Extended File Tools"
    },
    "description": {
        "ru": "Extended file tools: file_exists / move_file / copy_file / file_info / unzip_files / zip_files / open_file / share_file (removed from default file tools).", "en": "Extended file tools: file_exists / move_file / copy_file / file_info / unzip_files / zip_files / open_file / share_file (removed from default file tools)."
    },
    "category": "File",
    "enabledByDefault": true,
    "tools": [
        {
            "name": "file_exists",
            "description": { "ru": "Check if a file or directory exists.", "en": "Check if a file or directory exists." },
            "parameters": [
                { "name": "path", "description": { "ru": "Target path", "en": "Target path" }, "type": "string", "required": true },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "move_file",
            "description": { "ru": "Move or rename a file/directory.", "en": "Move or rename a file/directory." },
            "parameters": [
                { "name": "source", "description": { "ru": "Source path", "en": "Source path" }, "type": "string", "required": true },
                { "name": "destination", "description": { "ru": "Destination path", "en": "Destination path" }, "type": "string", "required": true },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "copy_file",
            "description": { "ru": "Copy a file/directory (supports cross-environment copy).", "en": "Copy a file/directory (supports cross-environment copy)." },
            "parameters": [
                { "name": "source", "description": { "ru": "Source path", "en": "Source path" }, "type": "string", "required": true },
                { "name": "destination", "description": { "ru": "Destination path", "en": "Destination path" }, "type": "string", "required": true },
                { "name": "recursive", "description": { "ru": "Optional: recursive (default: false)", "en": "Optional: recursive (default: false)" }, "type": "boolean", "required": false },
                { "name": "source_environment", "description": { "ru": "Optional: source environment android/linux", "en": "Optional: source environment android/linux" }, "type": "string", "required": false },
                { "name": "dest_environment", "description": { "ru": "Optional: destination environment android/linux", "en": "Optional: destination environment android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "file_info",
            "description": { "ru": "Get file/directory info.", "en": "Get file/directory info." },
            "parameters": [
                { "name": "path", "description": { "ru": "Target path", "en": "Target path" }, "type": "string", "required": true },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "zip_files",
            "description": { "ru": "Zip files/directories.", "en": "Zip files/directories." },
            "parameters": [
                { "name": "source", "description": { "ru": "Source path", "en": "Source path" }, "type": "string", "required": true },
                { "name": "destination", "description": { "ru": "Destination zip path", "en": "Destination zip path" }, "type": "string", "required": true },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "unzip_files",
            "description": { "ru": "Unzip an archive.", "en": "Unzip an archive." },
            "parameters": [
                { "name": "source", "description": { "ru": "Zip file path", "en": "Zip file path" }, "type": "string", "required": true },
                { "name": "destination", "description": { "ru": "Destination directory", "en": "Destination directory" }, "type": "string", "required": true },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "open_file",
            "description": { "ru": "Open a file with system default app.", "en": "Open a file with system default app." },
            "parameters": [
                { "name": "path", "description": { "ru": "File path", "en": "File path" }, "type": "string", "required": true },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        },
        {
            "name": "share_file",
            "description": { "ru": "Share a file with other apps.", "en": "Share a file with other apps." },
            "parameters": [
                { "name": "path", "description": { "ru": "File path", "en": "File path" }, "type": "string", "required": true },
                { "name": "title", "description": { "ru": "Optional: share title", "en": "Optional: share title" }, "type": "string", "required": false },
                { "name": "environment", "description": { "ru": "Optional: android/linux", "en": "Optional: android/linux" }, "type": "string", "required": false }
            ]
        }
    ]
}*/
const ExtendedFileTools = (function () {
    async function file_exists(params) {
        const result = await Tools.Files.exists(params.path, params.environment);
        return { success: !!result && (result.exists ?? true), message: '检查完成', data: result };
    }
    async function move_file(params) {
        const result = await Tools.Files.move(params.source, params.destination, params.environment);
        return { success: !!result, message: '移动完成', data: result };
    }
    async function copy_file(params) {
        const result = await Tools.Files.copy(params.source, params.destination, params.recursive, params.source_environment, params.dest_environment);
        return { success: !!result, message: '复制完成', data: result };
    }
    async function file_info(params) {
        const result = await Tools.Files.info(params.path, params.environment);
        return { success: !!result, message: '获取信息完成', data: result };
    }
    async function zip_files(params) {
        const result = await Tools.Files.zip(params.source, params.destination, params.environment);
        return { success: !!result, message: '压缩完成', data: result };
    }
    async function unzip_files(params) {
        const result = await Tools.Files.unzip(params.source, params.destination, params.environment);
        return { success: !!result, message: '解压完成', data: result };
    }
    async function open_file(params) {
        const result = await Tools.Files.open(params.path, params.environment);
        return { success: !!result, message: '打开文件完成', data: result };
    }
    async function share_file(params) {
        const result = await Tools.Files.share(params.path, params.title, params.environment);
        return { success: !!result, message: '分享文件完成', data: result };
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
        results.push({ tool: 'file_exists', result: { success: null, message: '未测试' } });
        results.push({ tool: 'move_file', result: { success: null, message: '未测试（会移动/重命名文件）' } });
        results.push({ tool: 'copy_file', result: { success: null, message: '未测试（会复制文件）' } });
        results.push({ tool: 'file_info', result: { success: null, message: '未测试' } });
        results.push({ tool: 'zip_files', result: { success: null, message: '未测试（会写入zip文件）' } });
        results.push({ tool: 'unzip_files', result: { success: null, message: '未测试（会写入解压文件）' } });
        results.push({ tool: 'open_file', result: { success: null, message: '未测试（会拉起系统应用）' } });
        results.push({ tool: 'share_file', result: { success: null, message: '未测试（会弹出分享面板）' } });
        complete({
            success: true,
            message: '拓展文件工具包加载完成（未执行破坏性测试）',
            data: { results }
        });
    }
    return {
        file_exists: (params) => wrapToolExecution(file_exists, params),
        move_file: (params) => wrapToolExecution(move_file, params),
        copy_file: (params) => wrapToolExecution(copy_file, params),
        file_info: (params) => wrapToolExecution(file_info, params),
        zip_files: (params) => wrapToolExecution(zip_files, params),
        unzip_files: (params) => wrapToolExecution(unzip_files, params),
        open_file: (params) => wrapToolExecution(open_file, params),
        share_file: (params) => wrapToolExecution(share_file, params),
        main,
    };
})();
exports.file_exists = ExtendedFileTools.file_exists;
exports.move_file = ExtendedFileTools.move_file;
exports.copy_file = ExtendedFileTools.copy_file;
exports.file_info = ExtendedFileTools.file_info;
exports.zip_files = ExtendedFileTools.zip_files;
exports.unzip_files = ExtendedFileTools.unzip_files;
exports.open_file = ExtendedFileTools.open_file;
exports.share_file = ExtendedFileTools.share_file;
exports.main = ExtendedFileTools.main;
