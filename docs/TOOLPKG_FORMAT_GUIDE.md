# ToolPkg

## 1.

**ToolPkg** Operit .、 UI 、.

### 1.1 ToolPkg？

- ****:`.toolpkg` ZIP
- ****:(manifest)
- ****:(subpackages)
- ****:、、UI
- ****:

### 1.2 ToolPkg vs JS

| | JS | ToolPkg |
|------|-------------|---------|
| | `.js` | ZIP (`.toolpkg`) |
| | | + + UI |
| | | |
| UI | | Compose DSL UI |
| | | |
| | | |

## 2. ToolPkg

 `.toolpkg` :

```
windows_control.toolpkg (ZIP )
├── manifest.json # ()
├── main.js # ToolPkg ()
├── main.ts # TypeScript ()
├── packages/ #
│ └── windows_control.js #
├── ui/ # UI
│   └── windows_setup/
│ └── index.ui.js # UI
├── resources/ #
│   └── pc_agent/
│ └── operit-pc-agent/ # (readResource zip)
└── i18n/ # ()
    ├── zh-CN.js
    └── en-US.js
```

### 2.1

- **manifest.json** **manifest.hjson**:,

### 2.2

- **packages/**: JavaScript
- **ui/**: UI
- **resources/**:(、、)
- **i18n/**:

## 3. Manifest

 ToolPkg ,.:

- **manifest.json**: JSON
- **manifest.hjson**:HJSON ()

### 3.1

```json
{
  "schema_version": 1,
  "toolpkg_id": "com.operit.windows_bundle",
  "version": "0.2.0",
  "main": "main.js",
  "display_name": {
 "zh": "Windows ",
    "en": "Windows Bundle"
  },
  "description": {
 "zh": "Windows ",
    "en": "Windows one-click setup and control bundle"
  },
  "subpackages": [
    {
      "id": "windows_control",
      "entry": "packages/windows_control.js",
      "enabled_by_default": false,
      "display_name": {
 "zh": "Windows ",
        "en": "Windows Control"
      },
      "description": {
 "zh": " Operit PC Agent Windows",
        "en": "Control Windows via Operit PC Agent"
      }
    }
  ],
  "resources": [
    {
      "key": "pc_agent_zip",
      "path": "resources/pc_agent/operit-pc-agent.zip",
      "mime": "application/zip"
    }
  ]
}
```

### 3.2

#### 3.2.1

| | | | |
|------|------|------|------|
| `schema_version` | number | | , `1` |
| `toolpkg_id` | string | | ,( `com.operit.windows_bundle`) |
| `version` | string | | ,( `0.2.0`) |
| `main` | string | | ToolPkg ( ZIP ), |
| `display_name` | LocalizedText | | , |
| `description` | LocalizedText | | , |
| `subpackages` | array | | , |
| `resources` | array | | , |

#### 3.2.2 LocalizedText

`LocalizedText` :

** 1:**
```json
"display_name": "Windows Bundle"
```

** 2:**
```json
"display_name": {
 "zh": "Windows ",
 "zh-CN": "Windows ",
  "en": "Windows Bundle",
  "en-US": "Windows Bundle",
  "default": "Windows Bundle"
}
```

:
1. ( `zh-CN`、`en-US`)
2. ( `zh`、`en`)
3. `default`
4.

#### 3.2.3 Subpackages()

 ToolPkg ,.

```json
{
  "id": "windows_control",
  "entry": "packages/windows_control.js",
  "enabled_by_default": false,
  "display_name": {
 "zh": "Windows ",
    "en": "Windows Control"
  },
  "description": {
 "zh": " Operit PC Agent Windows",
    "en": "Control Windows via Operit PC Agent"
  }
}
```

| | | | |
|------|------|------|------|
| `id` | string | | , |
| `entry` | string | | ( ZIP ) |
| `enabled_by_default` | boolean | | , `false` |
| `display_name` | LocalizedText | | |
| `description` | LocalizedText | | |

****:
- JavaScript
- `METADATA` ( [SCRIPT_DEV_GUIDE.md](./SCRIPT_DEV_GUIDE.md))
- `<subpackage_id>:<tool_name>`

#### 3.2.4 Main

ToolPkg UI `manifest` , `main` .

`main.js` :

```javascript
const toolboxUI = require("./ui/windows_setup/index.ui.js").default;

function registerToolPkg() {
  ToolPkg.registerToolboxUiModule({
    id: "windows_setup",
    runtime: "compose_dsl",
    screen: toolboxUI,
    params: {},
    title: {
 zh: "Windows ",
      en: "Windows Quick Setup"
    }
  });

  ToolPkg.registerAppLifecycleHook({
    id: "windows_app_create",
    event: "application_on_create",
    function: onApplicationCreate
  });

  ToolPkg.registerMessageProcessingPlugin({
    id: "windows_message_processing",
    function: onMessageProcessing
  });

  ToolPkg.registerXmlRenderPlugin({
    id: "windows_xml_status",
    tag: "windows_status",
    function: onXmlRender
  });

  ToolPkg.registerInputMenuTogglePlugin({
    id: "windows_input_menu_toggle",
    function: onInputMenuToggle
  });

  return true;
}

function onApplicationCreate() {
  return { ok: true };
}

function onMessageProcessing(params) {
  return { matched: false };
}

function onXmlRender(params) {
  if (params.tagName !== "windows_status") {
    return { handled: false };
  }
  return { handled: true, text: "Windows status ready" };
}

function onInputMenuToggle(params) {
  if (params.action === "create") {
    return {
      toggles: [
        {
          id: "windows_mode",
          title: "Windows Mode",
          description: "Enable Windows mode",
          isChecked: false
        }
      ]
    };
  }
  if (params.action === "toggle" && params.toggleId === "windows_mode") {
    return { ok: true };
  }
  return { ok: false };
}

exports.registerToolPkg = registerToolPkg;
exports.onApplicationCreate = onApplicationCreate;
exports.onMessageProcessing = onMessageProcessing;
exports.onXmlRender = onXmlRender;
exports.onInputMenuToggle = onInputMenuToggle;
```

:

| | | | |
|------|------|------|------|
| `ToolPkg.registerToolboxUiModule` | `id` | | UI |
| `ToolPkg.registerToolboxUiModule` | `runtime` | | , `compose_dsl` |
| `ToolPkg.registerToolboxUiModule` | `screen` | | UI ( `import/require ... default` ) |
| `ToolPkg.registerToolboxUiModule` | `params` | | UI |
| `ToolPkg.registerToolboxUiModule` | `title` | | ( `LocalizedText`) |
| `ToolPkg.registerAppLifecycleHook` | `id` | | |
| `ToolPkg.registerAppLifecycleHook` | `event` | | () |
| `ToolPkg.registerAppLifecycleHook` | `function` | | () |
| `ToolPkg.registerMessageProcessingPlugin` | `id` | | |
| `ToolPkg.registerMessageProcessingPlugin` | `function` | | () |
| `ToolPkg.registerXmlRenderPlugin` | `id` | | XML |
| `ToolPkg.registerXmlRenderPlugin` | `tag` | | XML |
| `ToolPkg.registerXmlRenderPlugin` | `function` | | () |
| `ToolPkg.registerInputMenuTogglePlugin` | `id` | | |
| `ToolPkg.registerInputMenuTogglePlugin` | `function` | | () |

`ToolPkg.registerAppLifecycleHook` `event`:

- `application_on_create`
- `application_on_foreground`
- `application_on_background`
- `application_on_low_memory`
- `application_on_trim_memory`
- `application_on_terminate`
- `activity_on_create`
- `activity_on_start`
- `activity_on_resume`
- `activity_on_pause`
- `activity_on_stop`
- `activity_on_destroy`

**Compose DSL **:
- JavaScript UI
- UI (Column, Row, Button, TextField )
- translated
- translated

#### 3.2.5 Resources()

,、、.

```json
{
  "key": "pc_agent_zip",
  "path": "resources/pc_agent/operit-pc-agent.zip",
  "mime": "application/zip"
}
```

:

```json
{
  "key": "pc_agent_zip",
  "path": "resources/pc_agent/operit-pc-agent",
  "mime": "inode/directory"
}
```

| | | | |
|------|------|------|------|
| `key` | string | | , |
| `path` | string | | ZIP |
| `mime` | string | | MIME |

****:
- : PackageManager API
- UI : `ToolPkg.readResource(key)`

:
- `mime` ( `inode/directory`、`vnd.android.document/directory`),`ToolPkg.readResource(key)` zip, zip .
- `outputFileName`, `.zip` .

## 4. ToolPkg

### 4.1

** 1:**

```bash
my_toolpkg/
├── manifest.json
├── packages/
│   └── my_tool.js
├── ui/
│   └── my_ui/
│       └── index.ui.js
└── resources/
    └── icon.png
```

** 2: manifest.json**

 3 .

** 3:**

 `METADATA` , [SCRIPT_DEV_GUIDE.md](./SCRIPT_DEV_GUIDE.md).

** 4: ZIP**

 ZIP , `.toolpkg` :

```bash
# Linux/macOS
cd my_toolpkg
zip -r ../my_toolpkg.toolpkg *

# Windows (PowerShell)
Compress-Archive -Path my_toolpkg\* -DestinationPath my_toolpkg.toolpkg
```

### 4.2 Python

 `sync_example_packages.py` , `examples/` `.toolpkg` .

****:

```bash
# Translated section
python sync_example_packages.py

# Translated section
python sync_example_packages.py --include windows_control

# ()
python sync_example_packages.py --dry-run

# Translated section
python sync_example_packages.py --delete-extra
```

****:
1. `examples/`
2. `manifest.json` `manifest.hjson`
3. `.toolpkg` ZIP
4. `app/src/main/assets/packages/`

## 5.

### 5.1

, `METADATA` :

```javascript
/* METADATA
{
    "name": "windows_control",
    "description": {
 "zh": " HTTP Operit PC Agent Windows ",
        "en": "Control a Windows PC through Operit PC Agent over HTTP"
    },
    "enabledByDefault": false,
    "env": [
        {
            "name": "WINDOWS_AGENT_BASE_URL",
            "description": {
 "zh": "Operit PC Agent ",
                "en": "Operit PC Agent URL"
            },
            "required": true
        }
    ],
    "tools": [
        {
            "name": "windows_exec",
            "description": {
 "zh": " Windows ",
                "en": "Execute commands on Windows"
            },
            "parameters": [
                {
                    "name": "command",
                    "description": {
 "zh": "",
                        "en": "Command to execute"
                    },
                    "type": "string",
                    "required": true
                }
            ]
        }
    ]
}
*/

/// <reference path="../../types/index.d.ts" />

const WindowsControl = (function () {
    async function wrap(func, params) {
        try {
            const result = await func(params);
            complete(result);
        } catch (error) {
            complete({ success: false, message: error.message });
        }
    }

    async function windows_exec(params) {
        const { command } = params;
 // ...
        return { success: true, output: "..." };
    }

    return {
        windows_exec: (params) => wrap(windows_exec, params),
    };
})();

exports.windows_exec = WindowsControl.windows_exec;
```

### 5.2

 `METADATA` :

- `description`:
- `tools[].description`:
- `tools[].parameters[].description`:
- `env[].description`:

### 5.3

:

```json
"env": [
    {
        "name": "API_KEY",
 "description": { "zh": "API ", "en": "API Key" },
        "required": true
    },
    {
        "name": "TIMEOUT",
 "description": { "zh": "", "en": "Timeout" },
        "required": false,
        "defaultValue": "30000"
    }
]
```

### 5.4 Java / Kotlin Bridge

 `Java.type(...)` / `Java.xxx.yyy` ,:

- ** Java JS .**

, Java API :

| Java / Kotlin | JS |
|------|------|
| `List` / `Set` / `Iterable` | :`length`、、`map/filter` |
| Java / `JSONArray` | |
| `Map` / `JSONObject` | |
| `String` / `CharSequence` / `char` | |
| `Enum` / `Class<?>` | |
| Java / Kotlin | Java , / |

:

```javascript
const items = someJavaApi.listSomething();

items.size(); //
items.get(0); //

items.length; //
items[0]; //
```

,JS Java / Kotlin :

- JS Java / `Collection` / `JSONArray`
- plain object `Map` / `JSONObject`
- plain object `Java.implement(...)`
- Java Java

:

- [README.md](../app/src/main/java/com/ai/assistance/operit/core/tools/javascript/README.md)

## 6. UI

### 6.1 Compose DSL

Compose DSL JavaScript UI , Jetpack Compose.

****:
- translated
- translated
- translated
- translated

### 6.2

```javascript
/// <reference path="../../types/index.d.ts" />

function Screen(ctx) {
 //
    const [url, setUrl] = ctx.useState('url', '');
    const [token, setToken] = ctx.useState('token', '');

 //
    async function handleConnect() {
        const result = await ctx.callTool('windows_control:windows_test_connection', {
            base_url: url,
            token: token
        });

        if (result.success) {
 await ctx.showToast('！');
        } else {
 await ctx.showToast(':' + result.error);
        }
    }

 // UI
    return ctx.UI.Column({ padding: 16 }, [
 ctx.UI.Text({ text: 'Windows Agent ', fontSize: 20, bold: true }),
        ctx.UI.Spacer({ height: 16 }),

        ctx.UI.TextField({
            value: url,
            onValueChange: setUrl,
 label: 'Agent ',
            placeholder: 'http://192.168.1.8:58321'
        }),
        ctx.UI.Spacer({ height: 8 }),

        ctx.UI.TextField({
            value: token,
            onValueChange: setToken,
            label: 'Token',
 placeholder: ' Token'
        }),
        ctx.UI.Spacer({ height: 16 }),

        ctx.UI.Button({
 text: '',
            onClick: handleConnect
        })
    ]);
}

exports.default = Screen;
```

### 6.3

#### Translated section
- `Column`:
- `Row`:
- `Box`:
- `Spacer`:
- `LazyColumn`:

#### Translated section
- `Text`:
- `TextField`:
- `Button`:
- `IconButton`:
- `Switch`:
- `Checkbox`:
- `Card`:
- `Icon`:

#### Translated section
- `LinearProgressIndicator`:
- `CircularProgressIndicator`:

### 6.4 Context API

UI `ctx` :

#### Translated section
```javascript
const [value, setValue] = ctx.useState('key', initialValue);
const memoValue = ctx.useMemo('key', () => computeValue(), [deps]);
```

#### Translated section
```javascript
const result = await ctx.callTool('package:tool_name', { param: value });
```

#### Translated section
```javascript
const apiKey = ctx.getEnv('API_KEY');
await ctx.setEnv('API_KEY', 'new_value');
await ctx.setEnvs({ API_KEY: 'value1', TOKEN: 'value2' });
```

#### Translated section
```javascript
const filePath = await ToolPkg.readResource('resource_key');
```

#### Translated section
```javascript
const isImported = await ctx.isPackageImported('package_name');
await ctx.importPackage('package_name');
await ctx.removePackage('package_name');
await ctx.usePackage('package_name');
const packages = await ctx.listImportedPackages();
```

#### Translated section
```javascript
const toolName = await ctx.resolveToolName({
    packageName: 'my_package',
    subpackageId: 'my_subpackage',
    toolName: 'my_tool',
    preferImported: true
});
```

#### UI
```javascript
await ctx.showToast('');
await ctx.navigate('/route', { param: value });
ctx.reportError(error);
```

#### Translated section
```javascript
const locale = getLang(); // 'zh' 'en'
const text = ctx.formatTemplate('Hello {name}!', { name: 'World' });
const packageName = ctx.getCurrentPackageName();
const toolPkgId = ctx.getCurrentToolPkgId();
const moduleId = ctx.getCurrentUiModuleId();
const spec = ctx.getModuleSpec();
```

## 7.

### 7.1

 `manifest.json` :

```json
"resources": [
    {
        "key": "icon",
        "path": "resources/icon.png",
        "mime": "image/png"
    },
    {
        "key": "config",
        "path": "resources/config.json",
        "mime": "application/json"
    }
]
```

### 7.2

** UI **:
```javascript
const iconPath = await ToolPkg.readResource('icon');
// iconPath
```

 `icon` , zip .

****:
```javascript
// PackageManager API ()
```

## 8.

### 8.1

 `.toolpkg` `app/src/main/assets/packages/` , APK .

### 8.2

:
1. `.toolpkg` `Android/data/com.ai.assistance.operit/files/packages/`
2. ""

### 8.3

:
- `MAJOR.MINOR.PATCH`( `1.2.3`)
- MAJOR: API
- MINOR:
- PATCH:

## 9.

### 9.1

- **toolpkg_id**:, `com.operit.windows_bundle`
- **subpackage id**:, `windows_control`
- **resource key**:, `pc_agent_zip`
- **ui_module id**:, `windows_setup`

### 9.2

```
my_toolpkg/
├── manifest.json #
├── packages/ #
│   ├── tool1.js
│   └── tool2.js
├── ui/ # UI
│   ├── setup/
│   │   └── index.ui.js
│   └── dashboard/
│       └── index.ui.js
├── resources/ #
│   ├── images/
│   │   └── icon.png
│   └── data/
│       └── config.json
└── i18n/ # ()
    ├── zh-CN.js
    └── en-US.js
```

### 9.3

- translated
- (`zh`)(`en`)
- `default`

### 9.4

- translated
- translated
- MIME

### 9.5

- `try-catch`
- UI `ctx.reportError()`
- translated

### 9.6

- translated
- UI
- translated
- translated

## 10.

### 10.1

** 1:**
- `manifest.json`
- `toolpkg_id`
- ZIP

** 2:**
- `entry`
- `METADATA`
- translated

** 3:**
- `key`
- `path` ZIP
- translated

** 4:UI **
- `main.js` `registerToolPkg`
- `ToolPkg.registerToolboxUiModule(...)`
- `runtime`
- `screen` ( `const ui = require(...).default`)
- UI

### 10.2

1. ** dry-run **:
   ```bash
   python sync_example_packages.py --dry-run
   ```

2. ****:
   ```bash
   adb logcat -s PackageManager:* JsEngine:*
   ```

3. ****:
   ```bash
   unzip -l my_toolpkg.toolpkg
   ```

4. ** JSON **:
 JSON `manifest.json`

### 10.3

 `.js` `tools/execute_js.bat` / `tools/execute_js.sh` ； `toolpkg` .

 `toolpkg` “”,:

- `manifest.json` / `manifest.hjson`
- `toolpkg_id`
- `main`
- UI 、、Prompt Hook、Tool Lifecycle Hook
- ToolPkg cache hook

,`toolpkg` “”,“”.

:

- Windows：`tools/debug_toolpkg.bat`
- Linux/macOS：`tools/debug_toolpkg.sh`
- :`tools/debug_toolpkg.py`

:

1. ToolPkg `.toolpkg` `manifest`
2. `toolpkg_id` `main`
3. , `.toolpkg`
4. `adb push` `Android/data/com.ai.assistance.operit/files/packages/`
5. , App packages
6. `toolpkg_id` ToolPkg
7. manifest subpackage ()
8. ToolPkg cache、hook/runtime , subpackage

,:

- `ToolPkg.registerToolboxUiModule(...)`
- `ToolPkg.registerMessageProcessingPlugin(...)`
- `ToolPkg.registerXmlRenderPlugin(...)`
- `ToolPkg.registerInputMenuTogglePlugin(...)`
- `ToolPkg.registerToolLifecycleHook(...)`
- Prompt hook

#### 10.3.1

 ToolPkg :

```bash
python tools/debug_toolpkg.py examples/windows_control
```

 `manifest.json`:

```bash
python tools/debug_toolpkg.py examples/windows_control/manifest.json
```

 `.toolpkg`:

```bash
python tools/debug_toolpkg.py /path/to/windows_control.toolpkg
```

Windows :

```bat
tools\debug_toolpkg.bat examples\windows_control
tools\debug_toolpkg.bat examples\windows_control\manifest.json
tools\debug_toolpkg.bat D:\tmp\windows_control.toolpkg --device emulator-5554
```

Linux/macOS :

```bash
bash tools/debug_toolpkg.sh examples/windows_control
bash tools/debug_toolpkg.sh examples/windows_control/manifest.json
```

#### 10.3.2

- `--device <serial>`: adb ；,
- `--no-reset-subpackage-states`: subpackage , manifest
- `--log-wait-seconds <n>`:； `OPERIT_LOG_WAIT_SECONDS`, `6`

#### 10.3.3

:

```bash
adb logcat -d -s ToolPkgDebugInstallReceiver:* ToolPkg:* PackageManager:*
```

 JS ,:

```bash
adb logcat -d -s JsEngine:* ToolPkg:* PackageManager:*
```

#### 10.3.4

- Operit `ToolPkgDebugInstallReceiver` ； App,.
- `toolpkg_id` ToolPkg ； `toolpkg_id` ,.
- hook ,, `toolpkg` `.js` .

## 11.

### 11.1 Windows Control Bundle

 `examples/windows_control/`:

```
windows_control/
├── manifest.json
├── packages/
│   └── windows_control.js
├── ui/
│   └── windows_setup/
│       └── index.ui.js
├── resources/
│   └── pc_agent/
│       └── operit-pc-agent/
└── i18n/
    ├── zh-CN.js
    └── en-US.js
```

****:
- HTTP Windows
- UI
- PC Agent
- translated

### 11.2

```bash
# windows_control
python sync_example_packages.py --include windows_control

# Translated section
ls -lh app/src/main/assets/packages/windows_control.toolpkg
```

## 12.

- [](./SCRIPT_DEV_GUIDE.md):
- [PackageManager.kt](../app/src/main/java/com/ai/assistance/operit/core/tools/packTool/PackageManager.kt):
- [ToolPkgParser.kt](../app/src/main/java/com/ai/assistance/operit/core/tools/packTool/ToolPkgParser.kt):
- [JsComposeDslBridge.kt](../app/src/main/java/com/ai/assistance/operit/core/tools/javascript/JsComposeDslBridge.kt):Compose DSL

## 13.

### v1.0.0 (2024-02-14)
- translated
- 、UI 、
- translated
- Compose DSL UI
