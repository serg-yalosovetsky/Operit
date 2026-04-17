# API :`android.d.ts`

`android.d.ts` `Tools.System` 、 Android API.:`AdbExecutor`、`Intent`、`PackageManager`、`ContentProvider`、`SystemManager`、`DeviceController` `Android`.

## Translated section

 `index.d.ts` :

- `Intent`
- `IntentFlag`
- `IntentAction`
- `IntentCategory`
- `Android`

 `index.d.ts` .

## `AdbExecutor`

 Android .

### Translated section

- `executeAdb(command, timeout?)`
- `executeShell(command, timeout?)`
- `parseKeyValueOutput(output, separator?)`
- `escapeShellArg(str)`

 ADB / shell .

## `IntentFlag` / `IntentAction` / `IntentCategory`

 Intent 、.

### `IntentFlag`

:

- Activity , `ACTIVITY_NEW_TASK`、`ACTIVITY_CLEAR_TOP`
- URI , `GRANT_READ_URI_PERMISSION`
- Receiver , `RECEIVER_FOREGROUND`
- translated

### `IntentAction`

:

- , `ACTION_VIEW`、`ACTION_SEND`、`ACTION_PICK`
- , `ACTION_SETTINGS`
- , `ACTION_IMAGE_CAPTURE`
- translated

### `IntentCategory`

,:

- `CATEGORY_DEFAULT`
- `CATEGORY_BROWSABLE`
- `CATEGORY_LAUNCHER`
- `CATEGORY_HOME`
- `CATEGORY_APP_*`

 `examples/types/android.d.ts` .

## `Intent`

### Translated section

```ts
new Intent(action?: string | IntentAction)
```

### Translated section

- `action`
- `packageName`
- `component`
- `extras`
- `flags`
- `categories`
- `executor`
- `uri`
- `type`

### Translated section

- `setComponent(packageName, component)`
- `setPackage(packageName)`
- `setAction(action)`
- `setData(uri)`
- `setType(type)`
- `addCategory(category)`
- `removeCategory(category)`
- `hasCategory(category)`
- `getCategories()`
- `clearCategories()`
- `addFlag(flag)`
- `putExtra(key, value)`

### Translated section

- `start()`: Activity
- `sendBroadcast()`:
- `startService()`: Service

## `PackageManager`

 `AdbExecutor`,.

### Translated section

- `install(apkPath, replaceExisting?)`
- `uninstall(packageName, keepData?)`
- `getInfo(packageName)`
- `getList(includeSystem?)`
- `clearData(packageName)`
- `isInstalled(packageName)`

## `ContentProvider`

 `AdbExecutor`, Content Provider.

### Translated section

- `setUri(uri)`
- `query(projection?, selection?, selectionArgs?, sortOrder?)`
- `insert(values)`
- `update(values, selection?, selectionArgs?)`
- `delete(selection?, selectionArgs?)`

## `SystemManager`

 `AdbExecutor`,、.

### Translated section

- `getProperty(prop)`
- `setProperty(prop, value)`
- `getAllProperties()`
- `getSetting(namespace, key)`
- `setSetting(namespace, key, value)`
- `listSettings(namespace)`
- `getScreenInfo()`

 `namespace` :

```ts
'system' | 'secure' | 'global'
```

## `DeviceController`

 `AdbExecutor`,.

### Translated section

- `takeScreenshot(outputPath)`
- `recordScreen(outputPath, timeLimit?, bitRate?, size?)`
- `setBrightness(brightness)`
- `setVolume(stream, volume)`
- `setAirplaneMode(enable)`
- `setWiFi(enable)`
- `setBluetooth(enable)`
- `lock()`
- `unlock()`
- `reboot(mode?)`

`setVolume()` `stream` :

```ts
'music' | 'call' | 'ring' | 'alarm' | 'notification'
```

## `Android`

### Translated section

```ts
new Android()
```

### Translated section

- `packageManager`
- `systemManager`
- `deviceController`

### Translated section

- `createIntent(action?)`
- `createContentProvider(uri)`

## Translated section

### Intent

```ts
const intent = new Intent(IntentAction.ACTION_VIEW)
  .setData('https://example.com')
  .addFlag(IntentFlag.ACTIVITY_NEW_TASK);

await intent.start();
```

### `Android`

```ts
const android = new Android();
const installed = await android.packageManager.isInstalled('com.android.settings');
console.log(installed);
```

### Translated section

```ts
const android = new Android();
const value = await android.systemManager.getSetting('secure', 'enabled_accessibility_services');
console.log(value);
```

### Translated section

```ts
const android = new Android();
await android.deviceController.takeScreenshot('/sdcard/screen.png');
```

## Translated section

- `examples/types/android.d.ts`
- `examples/types/index.d.ts`
- `docs/package_dev/system.md`
