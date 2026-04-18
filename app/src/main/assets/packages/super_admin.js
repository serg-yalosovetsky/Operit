/*
METADATA
{
    "name": "super_admin",

    "display_name": {
        "ru": "Super Admin", "en": "Super Admin"
    },
    "description": { "ru": "Super admin toolkit providing advanced terminal and shell capabilities. The terminal tool runs in an Ubuntu environment (with sdcard/storage mounted). The shell tool executes Android system commands directly via Shizuku/Root. Useful for low-level system administration and CLI operations.", "en": "Super admin toolkit providing advanced terminal and shell capabilities. The terminal tool runs in an Ubuntu environment (with sdcard/storage mounted). The shell tool executes Android system commands directly via Shizuku/Root. Useful for low-level system administration and CLI operations." },
    "enabledByDefault": true,
    "category": "System",
    "tools": [
        {
            "name": "terminal",
            "description": { "ru": "Execute commands in an Ubuntu environment and collect output. Environment: full Ubuntu system with sdcard/storage mounted, allowing access to Android storage. Automatically preserves working-directory context. Strongly recommend explicitly passing timeoutMs every time to avoid hangs. Do not use commands such as `set -e` or `set -o errexit` that change shell exit behavior, because they can cause the terminal session to exit and hang. If omitted, foreground mode defaults to 15s timeout; background=true does not use this default timeout. When a command times out, it is not automatically cancelled. Do not rerun the command; continue tracking the current screen via terminal_getscreen.", "en": "Execute commands in an Ubuntu environment and collect output. Environment: full Ubuntu system with sdcard/storage mounted, allowing access to Android storage. Automatically preserves working-directory context. Strongly recommend explicitly passing timeoutMs every time to avoid hangs. Do not use commands such as `set -e` or `set -o errexit` that change shell exit behavior, because they can cause the terminal session to exit and hang. If omitted, foreground mode defaults to 15s timeout; background=true does not use this default timeout. When a command times out, it is not automatically cancelled. Do not rerun the command; continue tracking the current screen via terminal_getscreen." },
            "parameters": [
                {
                    "name": "command",
                    "description": { "ru": "Command to execute.", "en": "Command to execute." },
                    "type": "string",
                    "required": true
                },
                {
                    "name": "background",
                    "description": { "ru": "Run command in background. 'true' runs in background and returns immediately (good for long-running tasks like servers; AI will not receive output). 'false' or omitted runs in foreground and returns the command result.", "en": "Run command in background. 'true' runs in background and returns immediately (good for long-running tasks like servers; AI will not receive output). 'false' or omitted runs in foreground and returns the command result." },
                    "type": "string",
                    "required": false
                },
                {
                    "name": "timeoutMs",
                    "description": { "ru": "Optional timeout (ms, minimum 3000ms). Strongly recommended to pass explicitly; if omitted, foreground defaults to 15000ms, and background=true does not use the default timeout.", "en": "Optional timeout (ms, minimum 3000ms). Strongly recommended to pass explicitly; if omitted, foreground defaults to 15000ms, and background=true does not use the default timeout." },
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "terminal_wait",
            "description": { "ru": "Wait until the previous command in the same terminal session finishes. Useful when long install/build commands continue running after a timeout. Unlike sleep, this tool can return early as soon as the command actually completes.", "en": "Wait until the previous command in the same terminal session finishes. Useful when long install/build commands continue running after a timeout. Unlike sleep, this tool can return early as soon as the command actually completes." },
            "parameters": [
                {
                    "name": "sessionId",
                    "description": { "ru": "Optional target session ID. If omitted, uses default session super_admin_default_session.", "en": "Optional target session ID. If omitted, uses default session super_admin_default_session." },
                    "type": "string",
                    "required": false
                },
                {
                    "name": "timeoutMs",
                    "description": { "ru": "Optional timeout (ms, minimum 3000ms). Defaults to 300000ms (5 minutes) if omitted.", "en": "Optional timeout (ms, minimum 3000ms). Defaults to 300000ms (5 minutes) if omitted." },
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "terminal_getscreen",
            "description": { "ru": "Get the current visible screen content for the active terminal session (single screen only, no scrollback history).", "en": "Get the current visible screen content for the active terminal session (single screen only, no scrollback history)." },
            "parameters": []
        },
        {
            "name": "terminal_input",
            "description": { "ru": "Write input to the active terminal session. Provide at least one of input or control. Typical usage: send input first, then control=enter to submit; use control=ctrl with input=c for Ctrl+C.", "en": "Write input to the active terminal session. Provide at least one of input or control. Typical usage: send input first, then control=enter to submit; use control=ctrl with input=c for Ctrl+C." },
            "parameters": [
                {
                    "name": "input",
                    "description": { "ru": "Text to write to terminal.", "en": "Text to write to terminal." },
                    "type": "string",
                    "required": false
                },
                {
                    "name": "control",
                    "description": { "ru": "Control key, e.g. enter / tab / esc / ctrl.", "en": "Control key, e.g. enter / tab / esc / ctrl." },
                    "type": "string",
                    "required": false
                }
            ]
        },
        {
            "name": "shell",
            "description": { "ru": "Execute shell commands directly on Android with Shizuku/Root. Environment: direct Android system access with system-level privileges, suitable for low-level commands such as pm/am.", "en": "Execute shell commands directly on Android with Shizuku/Root. Environment: direct Android system access with system-level privileges, suitable for low-level commands such as pm/am." },
            "parameters": [
                {
                    "name": "command",
                    "description": { "ru": "Shell command to execute.", "en": "Shell command to execute." },
                    "type": "string",
                    "required": true
                }
            ]
        }
    ]
}*/
const superAdmin = (function () {
    const MAX_INLINE_TERMINAL_OUTPUT_CHARS = 12000;
    const DEFAULT_FOREGROUND_TIMEOUT_MS = 15000;
    const DEFAULT_WAIT_TIMEOUT_MS = 300000;
    const MIN_TIMEOUT_MS = 3000;
    async function persistTerminalOutputIfTooLong(command, result) {
        const outputStr = typeof result?.output === "string"
            ? result.output
            : String(result?.output ?? "");
        if (outputStr.length <= MAX_INLINE_TERMINAL_OUTPUT_CHARS) {
            return null;
        }
        await Tools.Files.mkdir(OPERIT_CLEAN_ON_EXIT_DIR, true);
        const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
        const rand = Math.floor(Math.random() * 1000000);
        const filePath = `${OPERIT_CLEAN_ON_EXIT_DIR}/terminal_output_${timestamp}_${rand}.log`;
        await Tools.Files.write(filePath, outputStr, false);
        return {
            command,
            output: "(saved_to_file)",
            exitCode: result?.exitCode,
            sessionId: result?.sessionId,
            context_preserved: true,
            output_saved_to: filePath,
            output_chars: outputStr.length,
            operit_clean_on_exit_dir: OPERIT_CLEAN_ON_EXIT_DIR,
            hint: "Output is large and saved to file. Use read_file_part or grep_code to inspect it.",
        };
    }
    /**
     * 在Ubuntu环境中执行终端命令并收集输出结果
     * 运行环境：完整的Ubuntu系统，已正确挂载sdcard和storage目录
     * 禁止使用 set -e / set -o errexit 等会改变 shell 退出行为的命令，否则可能导致终端会话退出并卡死
     * @param command - 要执行的命令
     * @param background - 是否后台运行（"true" 为后台执行并立即返回，适合启动服务器等长时间运行任务，AI 不会收到该命令的输出结果）
     * @param timeoutMs - 可选的超时时间（毫秒，最低 3000ms）。强烈建议显式传入；前台未传时默认 15000ms，后台模式不应用该默认值。
     */
    async function terminal(params) {
        try {
            if (!params.command) {
                throw new Error("命令不能为空");
            }
            const command = params.command;
            const background = params.background;
            const timeoutMs = params.timeoutMs;
            console.log(`执行终端命令: ${command}`);
            const isBackground = background === "true";
            let timeout;
            if (!isBackground) {
                if (timeoutMs !== undefined) {
                    const parsedTimeout = parseInt(timeoutMs, 10);
                    if (!Number.isFinite(parsedTimeout) || parsedTimeout < MIN_TIMEOUT_MS) {
                        throw new Error(`timeoutMs必须是整数且不少于${MIN_TIMEOUT_MS}毫秒`);
                    }
                    timeout = parsedTimeout;
                }
                else {
                    timeout = DEFAULT_FOREGROUND_TIMEOUT_MS;
                }
            }
            if (isBackground) {
                const session = await Tools.System.terminal.create(`super_admin_background_${Date.now()}`);
                const sessionId = session.sessionId;
                // 调用系统工具执行终端命令
                (async () => {
                    try {
                        await Tools.System.terminal.exec(sessionId, command);
                    }
                    catch (error) {
                        console.error(`[terminal/background] 错误: ${error.message}`);
                        console.error(error.stack);
                    }
                })();
                return {
                    command: command,
                    background: true,
                    sessionId: sessionId,
                    started: true
                };
            }
            // 创建或获取一个默认会话
            const session = await Tools.System.terminal.create("super_admin_default_session");
            const sessionId = session.sessionId;
            // 调用系统工具执行终端命令
            const result = await Tools.System.terminal.exec(sessionId, command, timeout);
            const timedOut = result.timedOut === true;
            let timeoutScreen = null;
            if (timedOut) {
                const screenResult = await Tools.System.terminal.screen(sessionId);
                timeoutScreen = {
                    sessionId: screenResult.sessionId ?? sessionId,
                    rows: screenResult.rows,
                    cols: screenResult.cols,
                    content: screenResult.content
                };
            }
            const persistedResult = await persistTerminalOutputIfTooLong(command, result);
            if (persistedResult) {
                persistedResult.timeoutMsUsed = timeout;
                if (timeoutScreen) {
                    persistedResult.timeoutScreen = timeoutScreen;
                }
                return persistedResult;
            }
            return {
                command: command,
                output: result.output,
                exitCode: result.exitCode,
                sessionId: result.sessionId,
                timedOut: timedOut,
                timeoutMsUsed: timeout,
                timeoutScreen: timeoutScreen,
                context_preserved: true // 标记此命令保留了目录上下文
            };
        }
        catch (error) {
            console.error(`[terminal] 错误: ${error.message}`);
            console.error(error.stack);
            throw error;
        }
    }
    /**
     * 等待同一终端会话中的上一条命令执行完成
     * 原理：向同会话追加一个内部 marker 命令。由于会话按序执行，marker 开始执行即代表前序命令已完成。
     * @param sessionId - 可选会话ID；不传时使用 super_admin_default_session
     * @param timeoutMs - 可选超时（毫秒，最低 3000ms）；未传默认 300000ms
     */
    async function terminal_wait(params = {}) {
        try {
            const timeoutMs = params.timeoutMs;
            let timeout = DEFAULT_WAIT_TIMEOUT_MS;
            if (timeoutMs !== undefined) {
                const parsedTimeout = parseInt(timeoutMs, 10);
                if (!Number.isFinite(parsedTimeout) || parsedTimeout < MIN_TIMEOUT_MS) {
                    throw new Error(`timeoutMs必须是整数且不少于${MIN_TIMEOUT_MS}毫秒`);
                }
                timeout = parsedTimeout;
            }
            const session = params.sessionId
                ? { sessionId: params.sessionId }
                : await Tools.System.terminal.create("super_admin_default_session");
            const sessionId = session.sessionId;
            const marker = `__OPERIT_TERMINAL_WAIT_DONE_${Date.now()}_${Math.floor(Math.random() * 1000000)}__`;
            const waitCommand = `printf '${marker}\\n'`;
            const startedAt = Date.now();
            const result = await Tools.System.terminal.exec(sessionId, waitCommand, timeout);
            const elapsedMs = Date.now() - startedAt;
            const timedOut = result?.timedOut === true;
            let timeoutScreen = null;
            if (timedOut) {
                const screenResult = await Tools.System.terminal.screen(sessionId);
                timeoutScreen = {
                    sessionId: screenResult.sessionId ?? sessionId,
                    rows: screenResult.rows,
                    cols: screenResult.cols,
                    content: screenResult.content
                };
            }
            const outputStr = typeof result?.output === "string"
                ? result.output
                : String(result?.output ?? "");
            const markerSeen = outputStr.includes(marker);
            return {
                sessionId,
                timedOut,
                timeoutMsUsed: timeout,
                elapsedMs,
                waitCompleted: !timedOut && markerSeen,
                markerSeen,
                exitCode: result?.exitCode,
                timeoutScreen,
                context_preserved: true
            };
        }
        catch (error) {
            console.error(`[terminal_wait] 错误: ${error.message}`);
            console.error(error.stack);
            throw error;
        }
    }
    /**
     * 通过Shizuku/Root权限在Android系统中执行Shell命令
     * 运行环境：直接访问Android系统，具有系统级权限
     * @param command - 要执行的Shell命令
     */
    async function shell(params) {
        try {
            if (!params.command) {
                throw new Error("命令不能为空");
            }
            const command = params.command;
            console.log(`执行Shell命令: ${command}`);
            // 通过Shizuku/Root权限执行shell操作
            const result = await Tools.System.shell(`${command}`);
            return {
                command: command,
                output: result.output,
                exitCode: result.exitCode
            };
        }
        catch (error) {
            console.error(`[shell] 错误: ${error.message}`);
            console.error(error.stack);
            throw error;
        }
    }
    /**
     * 获取当前终端会话可见屏幕内容（仅一屏，不包含历史）
     */
    async function terminal_getscreen(_params = {}) {
        try {
            const session = await Tools.System.terminal.create("super_admin_default_session");
            const sessionId = session.sessionId;
            const result = await Tools.System.terminal.screen(sessionId);
            return {
                sessionId: result.sessionId ?? sessionId,
                rows: result.rows,
                cols: result.cols,
                content: result.content,
                commandRunning: result.commandRunning === true
            };
        }
        catch (error) {
            console.error(`[terminal_getscreen] 错误: ${error.message}`);
            console.error(error.stack);
            throw error;
        }
    }
    /**
     * 向当前终端会话写入输入
     * @param input - 文本输入
     * @param control - 控制键
     */
    async function terminal_input(params = {}) {
        try {
            if (params.input === undefined && params.control === undefined) {
                throw new Error("input和control至少需要提供一个");
            }
            const session = await Tools.System.terminal.create("super_admin_default_session");
            const sessionId = session.sessionId;
            const result = await Tools.System.terminal.input(sessionId, {
                input: params.input,
                control: params.control
            });
            return {
                sessionId: sessionId,
                input: params.input,
                control: params.control,
                result: result?.value ?? String(result ?? "")
            };
        }
        catch (error) {
            console.error(`[terminal_input] 错误: ${error.message}`);
            console.error(error.stack);
            throw error;
        }
    }
    return {
        terminal,
        terminal_wait,
        terminal_getscreen,
        terminal_input,
        shell
    };
})();
// 逐个导出
exports.terminal = superAdmin.terminal;
exports.terminal_wait = superAdmin.terminal_wait;
exports.terminal_getscreen = superAdmin.terminal_getscreen;
exports.terminal_input = superAdmin.terminal_input;
exports.shell = superAdmin.shell;
