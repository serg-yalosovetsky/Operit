# (Default Tools)

“(default tools)”,**/**,.

: schema / JS / examples / docs,.

---

## 1. ()

:

1. ** Prompt / Schema**( LLM “”)
2. ****( toolName -> executor )
3. ****(Kotlin )
4. **(JS Tools)**( JS/TS API)
5. ****(examples/types examples/**)
6. ****(docs/package_dev )
7. ** / **(app/src/main/assets/packages/*.js )

 (1)(4)(5)(6) “”,(2)(3) “”.

---

## 2. (Checklist)

“//”.

### 2.1 : Schema / Prompt

- ****:`app/src/main/java/com/ai/assistance/operit/core/config/SystemToolPrompts.kt`
- ****:
 - `parametersStructured`(///required)
 - `description` / `details`(、、)
 - ,

:
- LLM tool call , LLM .


### 2.2 :(toolName -> executor)

- ****:`app/src/main/java/com/ai/assistance/operit/core/tools/ToolRegistration.kt`
- ****:
 - ,, executor
 - /,

:
- ,,“/”.


### 2.3 :Kotlin ()

- ****:
  - `app/src/main/java/com/ai/assistance/operit/core/tools/defaultTool/standard/*`
  - `app/src/main/java/com/ai/assistance/operit/core/tools/defaultTool/debugger/*`
  - `app/src/main/java/com/ai/assistance/operit/core/tools/defaultTool/admin/*`
  - `app/src/main/java/com/ai/assistance/operit/core/tools/defaultTool/root/*`
  - `app/src/main/java/com/ai/assistance/operit/core/tools/defaultTool/accessbility/*`
 - `app/src/main/java/com/ai/assistance/operit/core/tools/defaultTool/ToolGetter.kt`()
- ****:
 - (`tool.parameters.find { it.name == "..." }`)
 - `debugger/root/admin/accessibility` override / :
 - :、、、
 - ()

:
- schema ,.


### 2.4 :JS (Tools.*)

- ****:`app/src/main/java/com/ai/assistance/operit/core/tools/javascript/JsTools.kt`
- ****:
 - JS wrapper
 - wrapper `params`
 - `undefined/null` (JS )

:
- `Tools.Files.xxx` toolCall.


### 2.5 :TypeScript ()

- ****:`examples/types/*.d.ts`( `examples/types/files.d.ts`、`examples/types/chat.d.ts`、`examples/types/core.d.ts`、`examples/types/system.d.ts` )
- ****:
  - translated
 - /( `"replace" | "delete" | "create"`), type
  - translated

:
- TS .


### 2.6 :(TS/JS)

- ****:`examples/**`
- ****:
 - `Tools.*` ( `*.ts` )
 - `*.ts -> *.js` : TS , `*.js`
 - “ JS /”,()

:
- ,； app.

(advice-only ):
- /( `usage_advice`), examples metadata `advice: true`.
- `advice: true` ,“”.


### 2.7 : /

- ****:
  - `app/src/main/assets/packages/*.js`
 - `examples/*.js`( bundle)

:
- :****()
- :

(packages ):

- `examples/*.ts` ****
- `examples/*.js` **/**()
- `app/src/main/assets/packages/*.js` App
- `sync_example_packages.py`: `packages_whitelist.txt` `examples/*.js` `app/src/main/assets/packages/*.js`

():

- ,:`python sync_example_packages.py`
- `examples/*.js` `assets/packages/`,/

:

- , `examples/<package>.ts`,/ `examples/<package>.js`
- `sync_example_packages.py` `assets/packages/`
- **** `examples/*.js` `assets/packages/*.js`(/)

:
- App assets JS ； TS assets,.


### 2.8 :

- ****:
  - `docs/package_dev/*.md`
  - `docs/*.md`
- ****:
 - API 、、
 - “/”

:
- ；.

---

## 3. :()

 `content` `old/new/type` ,():

- `"apply_file"`()
- `"content"`( toolCall、schema、、assets)
- `"old"` / `"new"` / `"type"`()

: Kotlin/TS/JS ,.

---

## 4. /()

### 4.1 Kotlin ()

- `:app:compileDebugKotlin`()
- : `JsTools.kt`、`ToolRegistration.kt`、`Standard*Tools.kt` /

### 4.2 /()

- examples TypeScript :( `npm run build` build )
- assets : assets

---

## 5.

- ** prompt**:LLM
- ** prompt JS wrapper**: `params`
- ** TS, assets bundle**:App bundle
- ****:,

---

## 6. :()

:

- `SystemToolPrompts.kt`: ToolPrompt
- `ToolRegistration.kt`:
- `Standard*Tools.kt`:
- `JsTools.kt`:()
- `examples/types/*.d.ts`:(,`Tools.System.*` `examples/types/system.d.ts`)
- `docs/`:

