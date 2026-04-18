/* METADATA
{
    "name": "browser",
    "display_name": {
        "ru": "Browser Automation", "en": "Browser Automation"
    },
    "description": {
        "ru": "Browser automation tools aligned to the default Playwright MCP browser surface.", "en": "Browser automation tools aligned to the default Playwright MCP browser surface."
    },
    "enabledByDefault": true,
    "category": "Automatic",
    "tools": [
        {
            "name": "click",
            "description": { "ru": "Click an element on the page.", "en": "Click an element on the page." },
            "parameters": [
                { "name": "ref", "description": { "ru": "Target element ref from the snapshot.", "en": "Target element ref from the snapshot." }, "type": "string", "required": true },
                { "name": "element", "description": { "ru": "Optional human-readable element description.", "en": "Optional human-readable element description." }, "type": "string", "required": false },
                { "name": "doubleClick", "description": { "ru": "Optional double click.", "en": "Optional double click." }, "type": "boolean", "required": false },
                { "name": "button", "description": { "ru": "Optional mouse button: left/right/middle.", "en": "Optional mouse button: left/right/middle." }, "type": "string", "required": false },
                { "name": "modifiers", "description": { "ru": "Optional modifier keys array.", "en": "Optional modifier keys array." }, "type": "array", "required": false }
            ]
        },
        {
            "name": "close",
            "description": { "ru": "Close the current tab.", "en": "Close the current tab." },
            "parameters": []
        },
        {
            "name": "console_messages",
            "description": { "ru": "Read console messages.", "en": "Read console messages." },
            "parameters": [
                { "name": "level", "description": { "ru": "Optional log level: error/warning/info/debug. Defaults to info.", "en": "Optional log level: error/warning/info/debug. Defaults to info." }, "type": "string", "required": false },
                { "name": "filename", "description": { "ru": "Optional output file name.", "en": "Optional output file name." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "drag",
            "description": { "ru": "Drag between two elements.", "en": "Drag between two elements." },
            "parameters": [
                { "name": "startElement", "description": { "ru": "Human-readable source element description.", "en": "Human-readable source element description." }, "type": "string", "required": true },
                { "name": "startRef", "description": { "ru": "Source element ref.", "en": "Source element ref." }, "type": "string", "required": true },
                { "name": "endElement", "description": { "ru": "Human-readable target element description.", "en": "Human-readable target element description." }, "type": "string", "required": true },
                { "name": "endRef", "description": { "ru": "Target element ref.", "en": "Target element ref." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "evaluate",
            "description": { "ru": "Evaluate a JavaScript function on the page or an element.", "en": "Evaluate a JavaScript function on the page or an element." },
            "parameters": [
                { "name": "function", "description": { "ru": "Function source to execute.", "en": "Function source to execute." }, "type": "string", "required": true },
                { "name": "element", "description": { "ru": "Optional human-readable element description.", "en": "Optional human-readable element description." }, "type": "string", "required": false },
                { "name": "ref", "description": { "ru": "Optional target element ref.", "en": "Optional target element ref." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "upload",
            "description": { "ru": "Upload files to the current file chooser.", "en": "Upload files to the current file chooser." },
            "parameters": [
                { "name": "paths", "description": { "ru": "Optional absolute file paths; omit to cancel the file chooser.", "en": "Optional absolute file paths; omit to cancel the file chooser." }, "type": "array", "required": false }
            ]
        },
        {
            "name": "fill_form",
            "description": { "ru": "Fill multiple form fields.", "en": "Fill multiple form fields." },
            "parameters": [
                { "name": "fields", "description": { "ru": "Array of form fields.", "en": "Array of form fields." }, "type": "array", "required": true }
            ]
        },
        {
            "name": "handle_dialog",
            "description": { "ru": "Handle the current dialog.", "en": "Handle the current dialog." },
            "parameters": [
                { "name": "accept", "description": { "ru": "Whether to accept the dialog.", "en": "Whether to accept the dialog." }, "type": "boolean", "required": true },
                { "name": "promptText", "description": { "ru": "Optional prompt text.", "en": "Optional prompt text." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "hover",
            "description": { "ru": "Hover over an element.", "en": "Hover over an element." },
            "parameters": [
                { "name": "ref", "description": { "ru": "Target element ref.", "en": "Target element ref." }, "type": "string", "required": true },
                { "name": "element", "description": { "ru": "Optional human-readable element description.", "en": "Optional human-readable element description." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "goto",
            "description": { "ru": "Navigate to a URL.", "en": "Navigate to a URL." },
            "parameters": [
                { "name": "url", "description": { "ru": "Target URL.", "en": "Target URL." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "back",
            "description": { "ru": "Go back to the previous page.", "en": "Go back to the previous page." },
            "parameters": []
        },
        {
            "name": "network_requests",
            "description": { "ru": "Read network requests for the current page.", "en": "Read network requests for the current page." },
            "parameters": [
                { "name": "includeStatic", "description": { "ru": "Optional include static resource requests. Defaults to false.", "en": "Optional include static resource requests. Defaults to false." }, "type": "boolean", "required": false },
                { "name": "filename", "description": { "ru": "Optional output file name.", "en": "Optional output file name." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "press_key",
            "description": { "ru": "Press a keyboard key.", "en": "Press a keyboard key." },
            "parameters": [
                { "name": "key", "description": { "ru": "Key name.", "en": "Key name." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "resize",
            "description": { "ru": "Resize the browser viewport.", "en": "Resize the browser viewport." },
            "parameters": [
                { "name": "width", "description": { "ru": "Width.", "en": "Width." }, "type": "number", "required": true },
                { "name": "height", "description": { "ru": "Height.", "en": "Height." }, "type": "number", "required": true }
            ]
        },
        {
            "name": "run_code",
            "description": { "ru": "Run a Playwright-style code snippet.", "en": "Run a Playwright-style code snippet." },
            "parameters": [
                { "name": "code", "description": { "ru": "Code snippet.", "en": "Code snippet." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "select_option",
            "description": { "ru": "Select options in a dropdown.", "en": "Select options in a dropdown." },
            "parameters": [
                { "name": "ref", "description": { "ru": "Target element ref.", "en": "Target element ref." }, "type": "string", "required": true },
                { "name": "values", "description": { "ru": "Values to select.", "en": "Values to select." }, "type": "array", "required": true },
                { "name": "element", "description": { "ru": "Optional human-readable element description.", "en": "Optional human-readable element description." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "snapshot",
            "description": { "ru": "Get a structured page snapshot.", "en": "Get a structured page snapshot." },
            "parameters": [
                { "name": "filename", "description": { "ru": "Optional snapshot output file name.", "en": "Optional snapshot output file name." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "type",
            "description": { "ru": "Type text into an editable element.", "en": "Type text into an editable element." },
            "parameters": [
                { "name": "ref", "description": { "ru": "Target element ref.", "en": "Target element ref." }, "type": "string", "required": true },
                { "name": "text", "description": { "ru": "Text to type.", "en": "Text to type." }, "type": "string", "required": true },
                { "name": "element", "description": { "ru": "Optional human-readable element description.", "en": "Optional human-readable element description." }, "type": "string", "required": false },
                { "name": "submit", "description": { "ru": "Optional submit after typing.", "en": "Optional submit after typing." }, "type": "boolean", "required": false },
                { "name": "slowly", "description": { "ru": "Optional type slowly.", "en": "Optional type slowly." }, "type": "boolean", "required": false }
            ]
        },
        {
            "name": "wait_for",
            "description": { "ru": "Wait for text to appear, disappear, or for a duration.", "en": "Wait for text to appear, disappear, or for a duration." },
            "parameters": [
                { "name": "time", "description": { "ru": "Optional number of seconds to wait.", "en": "Optional number of seconds to wait." }, "type": "number", "required": false },
                { "name": "text", "description": { "ru": "Optional text to wait for.", "en": "Optional text to wait for." }, "type": "string", "required": false },
                { "name": "textGone", "description": { "ru": "Optional text to wait to disappear.", "en": "Optional text to wait to disappear." }, "type": "string", "required": false }
            ]
        },
        {
            "name": "tabs",
            "description": { "ru": "List, create, select, or close tabs.", "en": "List, create, select, or close tabs." },
            "parameters": [
                { "name": "action", "description": { "ru": "Action: list/create/select/close.", "en": "Action: list/create/select/close." }, "type": "string", "required": true },
                { "name": "index", "description": { "ru": "Optional 0-based tab index.", "en": "Optional 0-based tab index." }, "type": "number", "required": false }
            ]
        },
    ]
}*/
const MAX_INLINE_BROWSER_TEXT_CHARS = 24000;
const TOOL_NAMES = [
    "click",
    "close",
    "console_messages",
    "drag",
    "evaluate",
    "upload",
    "fill_form",
    "handle_dialog",
    "hover",
    "goto",
    "back",
    "network_requests",
    "press_key",
    "resize",
    "run_code",
    "select_option",
    "snapshot",
    "type",
    "wait_for",
    "tabs"
];
function normalizeOptionalString(value) {
    if (value === undefined) {
        return undefined;
    }
    const normalized = value.trim();
    return normalized ? normalized : undefined;
}
function buildLargeOutputFilename(prefix, extension) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    const rand = Math.floor(Math.random() * 1000000);
    return OPERIT_CLEAN_ON_EXIT_DIR + "/browser_" + prefix + "_" + timestamp + "_" + rand + "." + extension;
}
async function maybePersistLargeBrowserResponse(result, prefix, extension = "md") {
    if (typeof result !== "string" || result.length <= MAX_INLINE_BROWSER_TEXT_CHARS) {
        return result;
    }
    await Tools.Files.mkdir(OPERIT_CLEAN_ON_EXIT_DIR, true);
    const filename = buildLargeOutputFilename(prefix, extension);
    await Tools.Files.write(filename, result, false);
    const normalizedPath = filename.replace(/\\/g, "/");
    return "Large browser response saved to:\n- [Browser Output](" + normalizedPath + ")";
}
function toToolParams(params) {
    return params;
}
async function callBrowser(nativeName, params = {}) {
    return toolCall(nativeName, toToolParams(params));
}
async function click(params) {
    const payload = {
        ref: params.ref
    };
    const element = normalizeOptionalString(params.element);
    const button = params.button;
    if (element) {
        payload.element = element;
    }
    if (button !== undefined) {
        if (!["left", "right", "middle"].includes(button)) {
            throw new Error("button must be left, right, or middle");
        }
        payload.button = button;
    }
    if (params.modifiers !== undefined) {
        payload.modifiers = params.modifiers;
    }
    if (params.doubleClick !== undefined) {
        payload.doubleClick = params.doubleClick;
    }
    const result = await callBrowser("browser_click", payload);
    return maybePersistLargeBrowserResponse(result, "click");
}
async function close() {
    const result = await callBrowser("browser_close");
    return maybePersistLargeBrowserResponse(result, "close");
}
async function console_messages(params = {}) {
    const payload = {
        level: normalizeOptionalString(params.level) || "info"
    };
    const filename = normalizeOptionalString(params.filename);
    if (filename) {
        payload.filename = filename;
    }
    const result = await callBrowser("browser_console_messages", payload);
    return maybePersistLargeBrowserResponse(result, "console_messages");
}
async function drag(params) {
    const result = await callBrowser("browser_drag", params);
    return maybePersistLargeBrowserResponse(result, "drag");
}
async function evaluate(params) {
    const payload = {
        function: params.function
    };
    const ref = normalizeOptionalString(params.ref);
    const element = normalizeOptionalString(params.element);
    if (element && !ref) {
        throw new Error("ref is required when element is provided");
    }
    if (ref) {
        payload.ref = ref;
    }
    if (element) {
        payload.element = element;
    }
    const result = await callBrowser("browser_evaluate", payload);
    return maybePersistLargeBrowserResponse(result, "evaluate");
}
async function upload(params = {}) {
    const payload = {};
    if (params.paths !== undefined) {
        payload.paths = params.paths;
    }
    const result = await callBrowser("browser_file_upload", payload);
    return maybePersistLargeBrowserResponse(result, "upload");
}
function normalizeFormFields(fields) {
    if (fields.length === 0) {
        throw new Error("fields must be a non-empty array");
    }
    return fields.map((field, index) => {
        const normalized = {
            name: field.name.trim(),
            type: field.type.trim(),
            value: field.value
        };
        if (!normalized.name) {
            throw new Error("fields[" + index + "].name is required");
        }
        if (!normalized.type) {
            throw new Error("fields[" + index + "].type is required");
        }
        const ref = normalizeOptionalString(field.ref);
        const selector = normalizeOptionalString(field.selector);
        if (!ref && !selector) {
            throw new Error("fields[" + index + "] requires ref or selector");
        }
        if (ref) {
            normalized.ref = ref;
        }
        if (selector) {
            normalized.selector = selector;
        }
        return normalized;
    });
}
async function fill_form(params) {
    const payload = {
        fields: normalizeFormFields(params.fields)
    };
    const result = await callBrowser("browser_fill_form", payload);
    return maybePersistLargeBrowserResponse(result, "fill_form");
}
async function handle_dialog(params) {
    const payload = {
        accept: params.accept
    };
    const promptText = normalizeOptionalString(params.promptText);
    if (promptText) {
        payload.promptText = promptText;
    }
    const result = await callBrowser("browser_handle_dialog", payload);
    return maybePersistLargeBrowserResponse(result, "handle_dialog");
}
async function hover(params) {
    const payload = {
        ref: params.ref
    };
    const element = normalizeOptionalString(params.element);
    if (element) {
        payload.element = element;
    }
    const result = await callBrowser("browser_hover", payload);
    return maybePersistLargeBrowserResponse(result, "hover");
}
async function goto(params) {
    const result = await callBrowser("browser_navigate", params);
    return maybePersistLargeBrowserResponse(result, "goto");
}
async function back() {
    const result = await callBrowser("browser_navigate_back");
    return maybePersistLargeBrowserResponse(result, "back");
}
async function network_requests(params = {}) {
    const payload = {};
    if (params.includeStatic !== undefined) {
        payload.includeStatic = params.includeStatic;
    }
    const filename = normalizeOptionalString(params.filename);
    if (filename) {
        payload.filename = filename;
    }
    const result = await callBrowser("browser_network_requests", payload);
    return maybePersistLargeBrowserResponse(result, "network_requests");
}
async function press_key(params) {
    const result = await callBrowser("browser_press_key", params);
    return maybePersistLargeBrowserResponse(result, "press_key");
}
async function resize(params) {
    const result = await callBrowser("browser_resize", params);
    return maybePersistLargeBrowserResponse(result, "resize");
}
async function run_code(params) {
    const result = await callBrowser("browser_run_code", params);
    return maybePersistLargeBrowserResponse(result, "run_code");
}
async function select_option(params) {
    const payload = {
        ref: params.ref,
        values: params.values
    };
    const element = normalizeOptionalString(params.element);
    if (element) {
        payload.element = element;
    }
    const result = await callBrowser("browser_select_option", payload);
    return maybePersistLargeBrowserResponse(result, "select_option");
}
async function snapshot(params = {}) {
    const payload = {};
    const filename = normalizeOptionalString(params.filename);
    if (filename) {
        payload.filename = filename;
    }
    const result = await callBrowser("browser_snapshot", payload);
    return maybePersistLargeBrowserResponse(result, "snapshot");
}
async function type(params) {
    const payload = {
        ref: params.ref,
        text: params.text
    };
    const element = normalizeOptionalString(params.element);
    if (element) {
        payload.element = element;
    }
    if (params.submit !== undefined) {
        payload.submit = params.submit;
    }
    if (params.slowly !== undefined) {
        payload.slowly = params.slowly;
    }
    const result = await callBrowser("browser_type", payload);
    return maybePersistLargeBrowserResponse(result, "type");
}
async function wait_for(params = {}) {
    const payload = {};
    const time = params.time;
    const text = normalizeOptionalString(params.text);
    const textGone = normalizeOptionalString(params.textGone);
    if (time === undefined && !text && !textGone) {
        throw new Error("one of time, text, or textGone is required");
    }
    if (time !== undefined) {
        payload.time = time;
    }
    if (text) {
        payload.text = text;
    }
    if (textGone) {
        payload.textGone = textGone;
    }
    const result = await callBrowser("browser_wait_for", payload);
    return maybePersistLargeBrowserResponse(result, "wait_for");
}
async function tabs(params) {
    const action = params.action;
    if (!["list", "create", "select", "close"].includes(action)) {
        throw new Error("action must be list, create, select, or close");
    }
    const payload = { action };
    if (params.index !== undefined) {
        payload.index = params.index;
    }
    const result = await callBrowser("browser_tabs", payload);
    return maybePersistLargeBrowserResponse(result, "tabs");
}
async function browserMain() {
    return "Browser package ready: " + TOOL_NAMES.join(", ");
}
exports.click = click;
exports.close = close;
exports.console_messages = console_messages;
exports.drag = drag;
exports.evaluate = evaluate;
exports.upload = upload;
exports.fill_form = fill_form;
exports.handle_dialog = handle_dialog;
exports.hover = hover;
exports.goto = goto;
exports.back = back;
exports.network_requests = network_requests;
exports.press_key = press_key;
exports.resize = resize;
exports.run_code = run_code;
exports.select_option = select_option;
exports.snapshot = snapshot;
exports.type = type;
exports.wait_for = wait_for;
exports.tabs = tabs;
exports.main = browserMain;
