/* METADATA
{
    "name": "Automatic_ui_base",

    "display_name": {
        "ru": "Automation Base Tools", "en": "Automation Base Tools"
    },
    "description": { "ru": "Basic UI automation tools to operate the device screen as requested (tap, swipe, input, etc.).", "en": "Basic UI automation tools to operate the device screen as requested (tap, swipe, input, etc.)." },
    "category": "Automatic",
    "enabledByDefault": true,
    "tools": [
        {
            "name": "usage_advice",
            "description": { "ru": "UI automation advice:\\n- Element targeting options:\\n  • Lists: use the index parameter (e.g., tap list item at index 2).\\n  • Text: use bounds or partialMatch for fuzzy matching (e.g., tap a button containing the text 'Login').\\n- Action chains: combine multiple actions to complete complex tasks (e.g., get page info, then click an element).\\n- Error handling: if an action fails, inspect the page info to find the cause and try alternative methods.\\n- **Combined calls (recommended)**: strongly recommend combining 2~3 real tools in a single response, e.g. tap → get_page_info, or click_element → sleep → get_page_info. The system will execute these tool calls sequentially.", "en": "UI automation advice:\\n- Element targeting options:\\n  • Lists: use the index parameter (e.g., tap list item at index 2).\\n  • Text: use bounds or partialMatch for fuzzy matching (e.g., tap a button containing the text 'Login').\\n- Action chains: combine multiple actions to complete complex tasks (e.g., get page info, then click an element).\\n- Error handling: if an action fails, inspect the page info to find the cause and try alternative methods.\\n- **Combined calls (recommended)**: strongly recommend combining 2~3 real tools in a single response, e.g. tap → get_page_info, or click_element → sleep → get_page_info. The system will execute these tool calls sequentially." },
            "parameters": [],
            "advice": true
        },
        {
            "name": "app_launch",
            "description": { "ru": "Launch an app by package name. If not found, returns the installed app list for you to choose from.", "en": "Launch an app by package name. If not found, returns the installed app list for you to choose from." },
            "parameters": [
                { "name": "package_name", "description": { "ru": "App package name, e.g. 'com.tencent.mm'.", "en": "App package name, e.g. 'com.tencent.mm'." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "get_page_info",
            "description": { "ru": "Get information about the current UI screen, including the full UI hierarchy.", "en": "Get information about the current UI screen, including the full UI hierarchy." },
            "parameters": [
                { "name": "format", "description": { "ru": "Format: 'xml' or 'json' (default: 'xml').", "en": "Format: 'xml' or 'json' (default: 'xml')." }, "type": "string", "required": false },
                { "name": "detail", "description": { "ru": "Detail level: 'minimal', 'summary', or 'full' (default: 'summary').", "en": "Detail level: 'minimal', 'summary', or 'full' (default: 'summary')." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "get_page_screenshot_image",
            "description": { "ru": "Capture the current screen as an image (screenshot) and return the saved file path.", "en": "Capture the current screen as an image (screenshot) and return the saved file path." },
            "parameters": []
        },
        {
            "name": "tap",
            "description": { "ru": "Simulate a tap at the specified coordinates.", "en": "Simulate a tap at the specified coordinates." },
            "parameters": [
                { "name": "x", "description": { "ru": "X coordinate.", "en": "X coordinate." }, "type": "number", "required": true },
                { "name": "y", "description": { "ru": "Y coordinate.", "en": "Y coordinate." }, "type": "number", "required": true }
            ]
        },
        {
            "name": "double_tap",
            "description": { "ru": "Simulate a double tap at the specified coordinates (two quick taps).", "en": "Simulate a double tap at the specified coordinates (two quick taps)." },
            "parameters": [
                { "name": "x", "description": { "ru": "X coordinate.", "en": "X coordinate." }, "type": "number", "required": true },
                { "name": "y", "description": { "ru": "Y coordinate.", "en": "Y coordinate." }, "type": "number", "required": true }
            ]
        },
        {
            "name": "long_press",
            "description": { "ru": "Simulate a long press at the specified coordinates. Useful for context menus or starting a drag.", "en": "Simulate a long press at the specified coordinates. Useful for context menus or starting a drag." },
            "parameters": [
                { "name": "x", "description": { "ru": "X coordinate.", "en": "X coordinate." }, "type": "number", "required": true },
                { "name": "y", "description": { "ru": "Y coordinate.", "en": "Y coordinate." }, "type": "number", "required": true }
            ]
        },
        {
            "name": "click_element",
            "description": { "ru": "Click an element identified by resourceId or className. You must provide at least one identifier.", "en": "Click an element identified by resourceId or className. You must provide at least one identifier." },
            "parameters": [
                { "name": "resourceId", "description": { "ru": "Element resourceId.", "en": "Element resourceId." }, "type": "string", "required": false },
                { "name": "className", "description": { "ru": "Element class name.", "en": "Element class name." }, "type": "string", "required": false },
                { "name": "index", "description": { "ru": "Index of the matched element to click (0-based, default: 0).", "en": "Index of the matched element to click (0-based, default: 0)." }, "type": "number", "required": false },
                { "name": "partialMatch", "description": { "ru": "Enable partial match (default: false).", "en": "Enable partial match (default: false)." }, "type": "boolean", "required": false },
                { "name": "bounds", "description": { "ru": "Element bounds in format '[left,top][right,bottom]'.", "en": "Element bounds in format '[left,top][right,bottom]'." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "set_input_text",
            "description": { "ru": "Set text in the current input field.", "en": "Set text in the current input field." },
            "parameters": [
                { "name": "text", "description": { "ru": "Text to input.", "en": "Text to input." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "press_key",
            "description": { "ru": "Simulate a key press.", "en": "Simulate a key press." },
            "parameters": [
                { "name": "key_code", "description": { "ru": "Key code, e.g. 'KEYCODE_BACK', 'KEYCODE_HOME'.", "en": "Key code, e.g. 'KEYCODE_BACK', 'KEYCODE_HOME'." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "swipe",
            "description": { "ru": "Simulate a swipe gesture.", "en": "Simulate a swipe gesture." },
            "parameters": [
                { "name": "start_x", "description": { "ru": "Start X coordinate.", "en": "Start X coordinate." }, "type": "number", "required": true },
                { "name": "start_y", "description": { "ru": "Start Y coordinate.", "en": "Start Y coordinate." }, "type": "number", "required": true },
                { "name": "end_x", "description": { "ru": "End X coordinate.", "en": "End X coordinate." }, "type": "number", "required": true },
                { "name": "end_y", "description": { "ru": "End Y coordinate.", "en": "End Y coordinate." }, "type": "number", "required": true },
                { "name": "duration", "description": { "ru": "Duration in milliseconds (default: 300).", "en": "Duration in milliseconds (default: 300)." }, "type": "number", "required": false }
            ]
        }
    ]
}*/
const UIAutomationTools = (function () {
    async function get_page_info(params) {
        const result = (await UINode.getCurrentPage()).toFormattedString();
        return { success: true, message: '成功获取页面信息', data: result };
    }
    async function get_page_screenshot_image(params) {
        try {
            const screenshotDir = OPERIT_CLEAN_ON_EXIT_DIR;
            // Ensure the directory exists
            await Tools.Files.mkdir(screenshotDir, true);
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const filePath = `${screenshotDir}/ui_screenshot_${timestamp}.png`;
            console.log(`截取当前UI屏幕并保存到: ${filePath}`);
            const result = await Tools.System.shell(`screencap -p ${filePath}`);
            const imageLink = NativeInterface.registerImageFromPath(filePath);
            return {
                success: true,
                message: `截图已保存到 ${filePath}`,
                data: {
                    file_path: filePath,
                    image_link: imageLink,
                    raw_result: result,
                },
            };
        }
        catch (error) {
            console.error(`获取屏幕截图失败: ${error.message}`);
            return {
                success: false,
                message: `获取屏幕截图失败: ${error.message}`,
            };
        }
    }
    async function tap(params) {
        const result = await Tools.UI.tap(params.x, params.y);
        return { success: true, message: '点击操作成功', data: result };
    }
    async function double_tap(params) {
        const first = await Tools.UI.tap(params.x, params.y);
        await Tools.System.sleep(120);
        const second = await Tools.UI.tap(params.x, params.y);
        return {
            success: true,
            message: '双击操作成功',
            data: { first, second },
        };
    }
    async function long_press(params) {
        const result = await Tools.UI.longPress(params.x, params.y);
        return { success: true, message: '长按操作成功', data: result };
    }
    async function click_element(params) {
        const result = await Tools.UI.clickElement(params);
        return { success: true, message: '点击元素操作成功', data: result };
    }
    async function set_input_text(params) {
        const result = await Tools.UI.setText(params.text);
        return { success: true, message: '输入文本操作成功', data: result };
    }
    async function press_key(params) {
        const result = await Tools.UI.pressKey(params.key_code);
        return { success: true, message: '按键操作成功', data: result };
    }
    async function swipe(params) {
        const result = await Tools.UI.swipe(params.start_x, params.start_y, params.end_x, params.end_y);
        return { success: true, message: '滑动操作成功', data: result };
    }
    async function app_launch(params) {
        if (!params.package_name) {
            return { success: false, message: '必须提供package_name参数' };
        }
        try {
            const startResult = await Tools.System.startApp(params.package_name);
            if (startResult && startResult.success) {
                return {
                    success: true,
                    message: '应用启动成功',
                    data: {
                        operation: startResult,
                    },
                };
            }
            const appList = await Tools.System.listApps(false);
            return {
                success: false,
                message: '未能启动应用，可能未安装或无法找到启动入口。已返回当前安装的应用列表。',
                data: {
                    operation: startResult,
                    installed_apps: appList,
                },
            };
        }
        catch (error) {
            console.error(`app_launch 执行失败: ${error.message}`);
            try {
                const appList = await Tools.System.listApps(false);
                return {
                    success: false,
                    message: `启动应用时发生错误: ${error.message}。已返回当前安装的应用列表。`,
                    data: {
                        installed_apps: appList,
                    },
                };
            }
            catch (listError) {
                console.error(`获取应用列表失败: ${listError.message}`);
                return {
                    success: false,
                    message: `启动应用失败且无法获取应用列表: ${listError.message}`,
                };
            }
        }
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
        console.log("=== UI Automation Tools 测试开始 ===\n");
        const results = [];
        try {
            // 1. 测试 get_page_info
            console.log("1. 测试 get_page_info...");
            const pageInfoResult = await get_page_info({});
            results.push({ tool: 'get_page_info', result: pageInfoResult });
            console.log("✓ get_page_info 测试完成\n");
            // 2. 测试 tap (点击屏幕中心位置)
            console.log("2. 测试 tap...");
            const tapResult = await tap({ x: 500, y: 1000 });
            results.push({ tool: 'tap', result: tapResult });
            console.log("✓ tap 测试完成\n");
            await Tools.System.sleep(500);
            // 3. 测试 press_key (按音量上键)
            console.log("3. 测试 press_key...");
            const pressKeyResult = await press_key({ key_code: 'KEYCODE_VOLUME_UP' });
            results.push({ tool: 'press_key', result: pressKeyResult });
            console.log("✓ press_key 测试完成\n");
            await Tools.System.sleep(500);
            // 4. 测试 set_input_text
            console.log("4. 测试 set_input_text...");
            const setTextResult = await set_input_text({ text: 'UI自动化测试文本' });
            results.push({ tool: 'set_input_text', result: setTextResult });
            console.log("✓ set_input_text 测试完成\n");
            await Tools.System.sleep(500);
            // 5. 测试 swipe (向上滑动)
            console.log("5. 测试 swipe...");
            const swipeResult = await swipe({
                start_x: 500,
                start_y: 1500,
                end_x: 500,
                end_y: 500,
                duration: 300
            });
            results.push({ tool: 'swipe', result: swipeResult });
            console.log("✓ swipe 测试完成\n");
            await Tools.System.sleep(500);
            // 6. 测试 click_element (尝试点击一个常见的元素)
            console.log("6. 测试 click_element...");
            try {
                const clickResult = await click_element({
                    className: 'android.widget.Button',
                    index: 0
                });
                results.push({ tool: 'click_element', result: clickResult });
                console.log("✓ click_element 测试完成\n");
            }
            catch (error) {
                console.log("⚠ click_element 测试失败（这可能是正常的，如果当前页面没有按钮）:", error.message, "\n");
                results.push({ tool: 'click_element', result: { success: false, message: error.message } });
            }
            console.log("=== UI Automation Tools 测试完成 ===\n");
            console.log("测试结果汇总:");
            results.forEach((r, i) => {
                const status = r.result.success ? '✓' : '✗';
                console.log(`${i + 1}. ${status} ${r.tool}: ${r.result.message}`);
            });
            complete({
                success: true,
                message: "所有UI工具测试完成",
                data: results
            });
        }
        catch (error) {
            console.error("测试过程中发生错误:", error);
            complete({
                success: false,
                message: `测试失败: ${error.message}`,
                data: results
            });
        }
    }
    return {
        get_page_info: (params) => wrapToolExecution(get_page_info, params),
        app_launch: (params) => wrapToolExecution(app_launch, params),
        get_page_screenshot_image: () => wrapToolExecution(get_page_screenshot_image, {}),
        tap: (params) => wrapToolExecution(tap, params),
        double_tap: (params) => wrapToolExecution(double_tap, params),
        long_press: (params) => wrapToolExecution(long_press, params),
        click_element: (params) => wrapToolExecution(click_element, params),
        set_input_text: (params) => wrapToolExecution(set_input_text, params),
        press_key: (params) => wrapToolExecution(press_key, params),
        swipe: (params) => wrapToolExecution(swipe, params),
        main,
    };
})();
exports.get_page_info = UIAutomationTools.get_page_info;
exports.app_launch = UIAutomationTools.app_launch;
exports.get_page_screenshot_image = UIAutomationTools.get_page_screenshot_image;
exports.tap = UIAutomationTools.tap;
exports.double_tap = UIAutomationTools.double_tap;
exports.long_press = UIAutomationTools.long_press;
exports.click_element = UIAutomationTools.click_element;
exports.set_input_text = UIAutomationTools.set_input_text;
exports.press_key = UIAutomationTools.press_key;
exports.swipe = UIAutomationTools.swipe;
exports.main = UIAutomationTools.main;
