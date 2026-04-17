# Translated section

## 1.

、.**, Operit AI , AI ,.** ,、UI、.

 **TypeScript** ,, JavaScript (ES6+).

## 2.

**📝 : JavaScript**

,, `.js` JavaScript . TypeScript、,. **[ 4 :](#4--typescript)** ,.

**,:**

* ** A: Operit ()**: ,..
* ** B: ()**: ,,..

---

### A: Operit (5)

.Operit ,.

** 1: **

```bash
# Translated section
git clone https://github.com/AAswordman/Operit.git
cd Operit

# (TypeScript)
npm install
```

** 2: **

 `examples/` ., `my_first_script.ts`,.

```typescript
/*
METADATA
{
    "name": "MyFirstScript",
 "description": ",.",
    "category": "Utility",
    "tools": [
        {
            "name": "hello_world",
 "description": ".",
            "parameters": [
                {
                    "name": "name",
 "description": "",
                    "type": "string",
                    "required": true
                }
            ]
        }
    ]
}
*/

// ,
/// <reference path="./types/index.d.ts" />

// ,
const MyFirstScript = (function () {
 // ,/
    async function wrap(func: (params: any) => Promise<any>, params: any) {
        try {
            const result = await func(params);
 complete(result); // complete()
        } catch (error) {
 complete({ success: false, message: `: ${error.message}` });
        }
    }

 //
    async function hello_world(params: { name: string }): Promise<any> {
 const message = `, ${params.name}! Operit .`;
 await Tools.System.sleep(500); // API
        return { success: true, message: message };
    }

 // ,
    return {
        hello_world: (params: any) => wrap(hello_world, params),
    };
})();

//
exports.hello_world = MyFirstScript.hello_world;
```

** 3: **

TypeScript (`.ts`) JavaScript (`.js`) .`tsc` `tsconfig.json` .

```bash
# examples
cd examples

# TypeScript
npx tsc
```

, `my_first_script.ts` `my_first_script.js` .

** 4: **

USB.,.

```bash
# Translated section
cd ..

# `hello_world`
# Windows:
tools\\execute_js.bat examples\\my_first_script.js hello_world "{\\"name\\":\\"\\"}"
# Linux / macOS:
./tools/execute_js.sh examples/my_first_script.js hello_world '{"name":""}'
```

 sandbox script,:

```bash
# Windows:
tools\\run_sandbox_script.bat examples\\my_first_script.js "{\\"name\\":\\"\\"}"
# Linux / macOS:
./tools/run_sandbox_script.sh examples/my_first_script.js '{"name":""}'
```

** 5: **

., `", !..."` ,.

**！**

., **[ 3 :](#3-)** `METADATA` `Tools` API , **[ 6 :UI](#6-ui)** .

---

### B:

,.

#### 2.1. (`package.json`)

`package.json` Node.js ,.

** 1: `package.json`**

, `package.json` ,:

```json
{
    "name": "my-script-project",
    "version": "1.0.0",
    "description": "My new script project.",
    "scripts": {
        "build": "tsc"
    },
    "devDependencies": {
        "@types/node": "^22.0.0",
        "typescript": "^5.4.5"
    }
}
```
*: `typescript` `@types/node`,.*

** 2: **

,:

```bash
npm install
```

 `package.json` `devDependencies` `typescript` Node.js .

#### 2.2. TypeScript (`tsconfig.json`)

`tsconfig.json` TypeScript , `.ts` `.js` .

**: `tsconfig.json`**

 `tsconfig.json` ,. (`examples/tsconfig.json`) ,.

```json
{
  "compilerOptions": {
    "target": "es2020",
    "module": "commonjs",
    "lib": [
      "es2020"
    ],
    "declaration": false,
    "strict": false,
    "noImplicitAny": false,
    "strictNullChecks": true,
    "noImplicitThis": true,
    "alwaysStrict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noImplicitReturns": true,
    "moduleResolution": "node",
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "typeRoots": [
      "./types"
    ]
  },
  "include": [
    "**/*.ts",
    "**/*.d.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
```

**:**
- `"target": "es2020"`: ES2020 JavaScript, QuickJS .
- `"module": "commonjs"`: CommonJS ,.
- `"lib": ["es2020"]`: ECMAScript , DOM .Operit QuickJS ,；`console`、timer .
- `"typeRoots": ["./types"]`: (`.d.ts`) . `types` , (`index.d.ts`, `files.d.ts` ) , `Tools` .
- `"include": ["**/*.ts", "**/*.d.ts"]`: .

,.,.

#### 2.3.

,,( `assistance` ).

**:**

1. ****: `examples/types/` , `types`. `tsconfig.json` `"typeRoots": ["./types"]` . `Tools` ,.
2. ****: `tools/` .( `execute_js.bat`).

****

,:

```plaintext
my-script-project/
├── node_modules/
├── tools/
│   ├── execute_js.bat
│   └── execute_js.sh
├── types/
│   ├── core.d.ts
│   ├── files.d.ts
│   ├── index.d.ts
│   ├── network.d.ts
│   ├── system.d.ts
│   ├── ui.d.ts
│ └── ... ()
├── my_first_script.ts //
├── package.json
└── tsconfig.json
```

,.

## 3.

,:

### 3.1. (METADATA)

 `/* METADATA ... */` .、、——.** Operit AI .AI `METADATA` ,“”(LLM),.**

**:** (`examples/automatic_bilibili_assistant.ts`)

```typescript
/*
METADATA
{
    "name": "Automatic_bilibili_assistant",
    "display_name": {
 "zh": "B",
        "en": "Bilibili Assistant"
    },
 "description": "B,UIB...",
    "category": "UI_AUTOMATION",
    "env": ["BILIBILI_SESSDATA"],
    "tools": [
        {
            "name": "search_video",
 "description": "B",
            "parameters": [
                {
                    "name": "keyword",
 "description": "",
                    "type": "string",
                    "required": true
                },
                // ... more parameters
            ]
        },
        // ... more tools
    ]
}
*/
```

- `name`: .
- `display_name`: (,). ID； ID `name` .( 3.1.2).
- `description`: .
- `category`: (),., `Other`( 3.1.3).
- `env`: (),/, API Key.“”,.
- `tools`: ,().
 - `name`: .
 - `description`: .
 - `parameters`: , `name`, `description`, `type`, `required`.
 - `advice`: ()“/”( usage_advice / workflow_guide).
 - `advice: true` ,.
 - /,“”.

### 3.1.1. :`states`

/(/), `METADATA` `states` .

`states` ,“”(State).(capabilities) state `condition`, `true` state .

#### State

- `id`: ID(),.
- `condition`: (),“ JS”.
- `inheritTools`: `tools`().
- `excludeTools`: ().
- `tools`: state ( `tools` ).,.

#### Translated section

- `states` : `tools`.
- `states` : `condition` state.
 - : `tools`.

#### Translated section

- `inheritTools=true`: `tools` .
- `excludeTools` .
- state `tools` (,).

#### Condition ()

- :`true` / `false` / `null`
- :`!` / `&&` / `||`
- :`==` / `!=` / `>` / `>=` / `<` / `<=`
- :`in`(:`android.permission_level in ['ADMIN','ROOT']`)
- :`(...)`
- :`[...]`

#### capability key()

- `ui.virtual_display`: (boolean)
- `android.permission_level`: (enum,)
- `android.shizuku_available`: Shizuku (boolean)
- `ui.shower_display`: Shower (boolean)

#### state

 `getState(): string`, state `id`.

#### Translated section

 `getLang(): string`,( `zh` / `en`). `en`.

### 3.1.2. /(LocalizedText)

 `METADATA` ,“”“”:

- :`display_name`
- :`description`
- :`tools[].description`
- :`tools[].parameters[].description`
- ( env ):`env[].description`

#### Translated section

1) **()**

```json
"description": ""
```

2) **/()**

```json
"description": {
 "zh": "",
  "en": "English description",
  "default": "Fallback description"
}
```

#### Key

,:

- ( `zh-CN`、`en-US`,)
- ( `zh`、`en`)
- `default`
- ,

#### (///)

```typescript
/*
METADATA
{
  "name": "MyBilingualPackage",
  "category": "Utility",
  "display_name": {
 "zh": "",
    "en": "Bilingual Demo Package",
    "default": "Bilingual Demo Package"
  },
  "description": {
 "zh": "",
    "en": "Bilingual metadata demo",
    "default": "Bilingual metadata demo"
  },
  "env": [
    {
      "name": "MY_API_KEY",
      "description": {
 "zh": " API ",
        "en": "API key for accessing a service",
        "default": "API key"
      },
      "required": true
    }
  ],
  "tools": [
    {
      "name": "hello",
      "description": {
 "zh": "",
        "en": "Say hello to someone",
        "default": "Say hello"
      },
      "parameters": [
        {
          "name": "name",
          "description": {
 "zh": "",
            "en": "Name to greet",
            "default": "Name"
          },
          "type": "string",
          "required": true
        }
      ]
    }
  ]
}
*/
```

### 3.1.3. `category`

`category` ****,,. `examples/` ,.

```json
"category": "Utility"
```

 `category` 、,:

```json
"category": "Other"
```

 `examples/` :

-   `Automatic`
-   `Chat`
-   `Development`
-   `Draw`
-   `File`
-   `Life`
-   `Map`
-   `Media`
-   `Memory`
-   `Network`
-   `Search`
-   `System`
-   `Utility`
-   `Workflow`
- `Other`()

### 3.3. (Tools)

 `Tools` ,API.API:

- `Tools.System`: , `sleep()`, `startApp()`, `stopApp()`.
- `Tools.UI`: UI, `getPageInfo()`, `pressKey()`, `swipe()`, `setText()`.
- `Tools.Files`: , `read()`, `write()`, `list()`.
- `Tools.Network`: , `httpGet()`, `httpPost()`.
- `UINode`: UI.

****, `await`.

**:**
```typescript
// 3
await Tools.System.sleep(3000);

//
const pageInfo = await Tools.UI.getPageInfo();

//
await Tools.UI.swipe(540, 1800, 540, 900);
```

### 3.4. Java/Kotlin (Java Bridge)

 `Tools` , `Java` / `Kotlin` , Java/Kotlin/Android .

:

- Android SDK ( `android.os.Build`、`android.os.SystemClock`).
- .
- Java ( `Runnable`、`Callable`、Listener).

#### 3.4.1. API

1. ** API()**:`Java` / `Kotlin`(Rhino )
2. ** API(/)**:`NativeInterface.java*`

`Kotlin` `Java` ,API .

#### 3.4.2. API

- :
 - ():`Java.java.lang.StringBuilder`、`Java.android.os.Build.VERSION`、`Java.android.app.AlertDialog.Builder`
 - :`Java.type("java.lang.StringBuilder")`
 - :`Java.use(...)` / `Java.importClass(...)`
- :`Java.java.lang.System.currentTimeMillis()`
- :`Java.callStatic(className, methodName, ...args)`
- :`Java.callSuspend(className, methodName, ...args)`( Promise)
- :`Java.newInstance(className, ...args)` `new Java.java.util.ArrayList()`
- :
 - `Java.implement(interfaceNameOrNames, impl)`( `Java.xxx` )
 - `Java.proxy(interfaceNameOrNames, impl)`(`implement` )
 - ****: Java/Kotlin , JS /,( `implement`)
- :
 - Java handle JS ,

#### 3.4.3.

Java “”( handle ),:

- `Java.implement` / `Java.proxy` ； Java GC , JS .
- Java handle ； `obj.release()` / `Java.release(...)` / `Java.releaseAll()`.
- GC handle,；GC .

#### 3.4.4. : +

```typescript
const Thread = Java.java.lang.Thread;
const Runnable = Java.java.lang.Runnable;

let runCount = 0;
const runnable = Java.implement(Runnable, () => {
    runCount += 1;
});

const worker = new Thread(runnable);
worker.start();
worker.join(2000);
console.log("runCount=", runCount);
```

#### 3.4.5. :Android

```typescript
const Build = Java.android.os.Build;
const Version = Java.android.os.Build.VERSION;
const AlertDialogBuilder = Java.android.app.AlertDialog.Builder;

console.log("brand=", String(Build.BRAND || ""));
console.log("sdk=", Number(Version.SDK_INT));
```

#### 3.4.6. `NativeInterface.java*`()

 API 、. `NativeInterface.java*`:

```typescript
const raw = NativeInterface.javaCallStatic(
    "java.lang.Integer",
    "parseInt",
    JSON.stringify(["42"])
);
const parsed = JSON.parse(raw);
if (!parsed.success) throw new Error(parsed.error);
console.log(parsed.data); // 42
```

 TypeScript , `examples/types/index.d.ts`, Java Bridge ( `Java`、`Kotlin`、`NativeInterface`).

#### 3.4.7. :suspend (callback / Promise)

`callSuspend` Kotlin `suspend` , `Promise`.

```typescript
const EnhancedAIService = Java.com.ai.assistance.operit.api.chat.EnhancedAIService;

// Promise
const service = await EnhancedAIService.callSuspend(
    "getAIServiceForFunction",
    ctx,
    FunctionType.CHAT
);
```

## 4. (TypeScript)

 TypeScript , `types/` ,.

### 1: `.ts`

 `.ts` , `my_new_script.ts`.

### 2:

 `METADATA` ,.

```typescript
/*
METADATA
{
    "name": "MyNewScript",
 "description": ".",
    "category": "Utility",
    "tools": [
        {
            "name": "hello_world",
 "description": ".",
            "parameters": [
                {
                    "name": "name",
 "description": "",
                    "type": "string",
                    "required": true
                }
            ]
        }
    ]
}
*/
```

### 3:

 (IIFE) ,.

```typescript
// ,
/// <reference path="./types/index.d.ts" />

const MyNewScript = (function () {
 // ,
    async function wrapToolExecution(func: (params: any) => Promise<any>, params: any) {
        try {
            const result = await func(params);
            complete(result);
        } catch (error) {
 console.error(` ${func.name} `, error);
            complete({
                success: false,
 message: `: ${error.message}`,
            });
        }
    }

 // `hello_world`
    async function hello_world(params: { name: string }): Promise<any> {
        const { name } = params;
        
 //
        await Tools.System.sleep(500);
        
 const message = `, ${name}! .`;
        
 //
        return { success: true, message: message };
    }

 //
    return {
        hello_world: (params: any) => wrapToolExecution(hello_world, params),
    };
})();

// ,
exports.hello_world = MyNewScript.hello_world;
```

### 4:

- `/// <reference path="./types/index.d.ts" />` TypeScript IDE( VS Code).
- `types/` `.d.ts` .,`types/system.d.ts` `Tools.System.sleep` .

## 5. :

,.`examples/` ,:

### 5.1. : `examples/quick_start.ts`

、.,.

* ****:
 * ****: 、、`async/await` `try/catch` .
 * ****: , `IIFE` , `Wrapper` ,.
 * **`Tools` API **: `Tools.System` `Tools.Files` .
* ****: TypeScript/JavaScript , `IIFE` `Wrapper` ,.

### 5.2. : `examples/various_search.ts`

,.

* ****:
 * ****: `Tools.Net.visit` . HTTP GET/POST；, `httpGet` / `httpPost` / `http`.
 * ****: `combined_search` , `Promise.all` ,.
 * ****: `performSearch` ,,.

### 5.3. : `examples/time.ts`

,.

* ****:
 * **IIFE **: `IIFE` 、.
 * ****: .
 * ****: `Tools` API,.

### 5.4. “”: `examples/various_output.ts`

,AI.

* ****:
 * **(Description)**: `output_image` `description` ,(prompt),AIMarkdown.
 * ****: `METADATA` ,AI“”“”.

,.

## 6. UI

UI.

### `UINode`

`Tools.UI.getPageInfo()` `UINode` . `UINode` UI,:
- (`findById`, `findByText`, `findByClass`, `findAllBy...`)
- (`text`, `contentDesc`, `bounds`, `resourceId`)
- (`click()`)

### Translated section

.

```typescript
//
const page = await UINode.getCurrentPage();

// 1. ID ()
const searchBox = page.findById('com.example:id/search_box');

// 2.
const loginButton = page.findByText("");

// 3.
const allTextViews = page.findAllByClass('TextView');

// 4. (contentDescription)
const backButton = page.findByContentDesc("");
```

### Translated section

,.

```typescript
if (loginButton) {
    await loginButton.click();
 await Tools.System.sleep(2000); //
}
```

## 7.

- `console.log()`、`console.error()` ..
- ,.
- UI, `Tools.System.sleep()` UI,.

## 8.

TypeScript (`.ts`) JavaScript (`.js`). `tsconfig.json`, `tsc` .

## 9.

 JavaScript , `tools/` ADB (Android Debug Bridge) .

### 9.1.

- **Android SDK (ADB)**: Android SDK, `adb` .
- ****: “USB”,.
- **Operit **: `com.ai.assistance.operit` . `ScriptExecutionReceiver` ADB .

### 9.2.

`tools` `execute_js.bat` (Windows) `execute_js.sh` (Linux/macOS) .

** ( Windows ):**

,:

```cmd
tools\\execute_js.bat <JS> <> [JSON]
```

**:**

 `my_new_script.js` `hello_world` , `{ "name": "" }`:

```cmd
tools\\execute_js.bat examples\\my_new_script.js hello_world "{\\"name\\":\\"\\"}"
```

- ,.
- : Windows `cmd` ,JSON `\` .

### 9.3.

,`tools/execute_js.*` `adb logcat` ,** JSON**. JSON,:

- `success`
- `result`
- `error`
- `events`
- `durationMs`

`events` `console.log/info/warn/error` , intermediate result, logcat .

,:

```bash
OPERIT_RESULT_WAIT_SECONDS=30 ./tools/execute_js.sh examples/my_script.js main '{}'
```

.

### 9.4. VS Code ()

, VS Code ,.

**:**

1. VS Code (`.ts` `.js`).
2. “” ( `Ctrl+Shift+D`).
3. ,:
 - **`AndroidTS (+)`**: ****. `.ts` ,.,,.
 - **`AndroidJS`**: `.js` .,.
4. “” (F5).
5. ,**** **JSON **,.

VS Code ,, JSON ..

## 10. VS Code ()

,`.vscode` `.gitignore` ,. `launch.json` `tasks.json` .

 VS Code ,.

### 10.1. tasks.json

1. `.vscode` .
2. `.vscode` , `tasks.json` .
3. `tasks.json` :

```json
{
    "version": "2.0.0",
    "tasks": [
        {
 "label": "JavaScriptAndroid",
            "type": "shell",
            "command": ".\\tools\\execute_js.bat",
            "args": [
                "${fileDirname}\\${fileBasenameNoExtension}.js",
                "${input:jsFunction}",
                "${input:jsParameters}"
            ],
            "windows": {
                "command": ".\\tools\\execute_js.bat"
            },
            "linux": {
                "command": "./tools/execute_js.sh"
            },
            "osx": {
                "command": "./tools/execute_js.sh"
            },
            "problemMatcher": [],
            "group": {
                "kind": "build",
                "isDefault": true
            },
            "presentation": {
                "reveal": "always",
                "panel": "new",
                "focus": true
            }
        },
        {
            "label": "tsc-watch",
            "type": "shell",
            "command": "tsc",
            "args": [
                "--watch",
                "--project",
                "."
            ],
            "isBackground": true,
            "problemMatcher": "$tsc-watch",
            "group": "build",
            "presentation": {
                "reveal": "always",
                "panel": "dedicated",
                "focus": false
            }
        },
        {
 "label": "TypeScriptAndroid",
            "dependsOn": [
                "tsc-watch"
            ],
            "dependsOrder": "sequence",
            "type": "shell",
            "command": ".\\tools\\execute_js.bat",
            "args": [
                "${fileDirname}\\${fileBasenameNoExtension}.js",
                "${input:jsFunction}",
                "${input:jsParameters}"
            ],
            "windows": {
                "command": ".\\tools\\execute_js.bat"
            },
            "linux": {
                "command": "./tools/execute_js.sh"
            },
            "osx": {
                "command": "./tools/execute_js.sh"
            },
            "problemMatcher": [],
            "group": "test",
            "presentation": {
                "reveal": "always",
                "panel": "new",
                "focus": true
            }
        }
    ],
    "inputs": [
        {
            "id": "jsFunction",
 "description": "JavaScript",
            "default": "main",
            "type": "promptString"
        },
        {
            "id": "jsParameters",
 "description": "(JSON)",
            "default": "{}",
            "type": "promptString"
        }
    ]
}
```

### 10.2. launch.json

1. `.vscode` , `launch.json` .
2. `launch.json` :

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Python Debugger: Current File",
            "type": "debugpy",
            "request": "launch",
            "program": "${file}",
            "console": "integratedTerminal"
        },
        {
 "name": "AndroidJS",
            "type": "node",
            "request": "launch",
 "preLaunchTask": "JavaScriptAndroid",
            "presentation": {
                "hidden": false,
                "group": "",
                "order": 1
            }
        },
        {
 "name": "AndroidTS (+)",
            "type": "node",
            "request": "launch",
 "preLaunchTask": "TypeScriptAndroid",
            "presentation": {
                "hidden": false,
                "group": "",
                "order": 2
            }
        }
    ]
}
```

, VS Code,“”.
