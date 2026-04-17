# API :`system.d.ts`

`system.d.ts` `Tools.System` .、、、、.

## Translated section

:

- .
- 、、、、.
- .
- 、、.
- Shell / Intent / Broadcast。
- .

## Translated section

```ts
Tools.System
```

## API

### Translated section

#### `sleep(milliseconds)`

```ts
sleep(milliseconds: string | number): Promise<SleepResultData>
```

#### `getSetting(setting, namespace?)`

, `SystemSettingData`.

#### `setSetting(setting, value, namespace?)`

, `SystemSettingData`.

### Translated section

#### `getDeviceInfo()`

, `DeviceInfoResultData`.

#### `toast(message)`

 Toast, `StringResultData`.

#### `sendNotification(message, title?)`

, `StringResultData`.

### Translated section

#### `usePackage(packageName)`

. `Promise<any>`,.

#### `installApp(path)`

 APK, `AppOperationData`.

#### `uninstallApp(packageName)`

, `AppOperationData`.

#### `stopApp(packageName)`

, `AppOperationData`.

#### `listApps(includeSystem?)`

, `AppListData`.

#### `startApp(packageName, activity?)`

, Activity, `AppOperationData`.

#### `getAppUsageTime(options?)`

 Android Usage Access , `AppUsageTimeResultData`.

```ts
getAppUsageTime({
  packageName?,
  sinceHours?,
  limit?,
  includeSystemApps?
}): Promise<AppUsageTimeResultData>
```

:

- `24` .
- `packageName` ,.
- `packageName` , `limit` .
- “”,.

### Translated section

#### `getNotifications(limit?, includeOngoing?)`

 `NotificationData`.

#### `getLocation(highAccuracy?, timeout?)`

 `LocationData`.

### Shell Intent

#### `shell(command)`

```ts
shell(command: string): Promise<ADBResultData>
```

: root.

#### `intent(options?)`

```ts
intent({
  action?,
  uri?,
  package?,
  component?,
  flags?,
  extras?,
  type?: 'activity' | 'broadcast' | 'service'
}): Promise<IntentResultData>
```

#### `sendBroadcast(options?)`

```ts
sendBroadcast({
  action,
  uri?,
  package?,
  component?,
  extras?,
  extra_key?,
  extra_value?,
  extra_key2?,
  extra_value2?
}): Promise<IntentResultData>
```

## API

 `Tools.System.terminal` .

### `terminal.create(sessionName?)`

, `TerminalSessionCreationResultData`.

### `terminal.exec(sessionId, command, timeoutMs?)`

, `TerminalCommandResultData`.

 `timeoutMs`.

### `terminal.close(sessionId)`

, `TerminalSessionCloseResultData`.

### `terminal.screen(sessionId)`

, `TerminalSessionScreenResultData`.

### `terminal.input(sessionId, options?)`

```ts
input(sessionId, {
  input?,
  control?
}): Promise<StringResultData>
```

:

- `input`.
- `control`.
- ,, `control: 'ctrl', input: 'c'`.

## Translated section

### Toast

```ts
await Tools.System.sleep(1000);
await Tools.System.toast('');
```

### Translated section

```ts
await Tools.System.startApp('com.android.settings');
```

### Translated section

```ts
const usage = await Tools.System.getAppUsageTime({
  sinceHours: 24,
  limit: 5
});
console.log(usage.toString());
```

### Translated section

```ts
await Tools.System.sendBroadcast({
  action: 'com.example.SYNC',
  extra_key: 'mode',
  extra_value: 'full'
});
```

### Translated section

```ts
const session = await Tools.System.terminal.create('demo');
await Tools.System.terminal.exec(session.sessionId, 'pwd', 5000);
const screen = await Tools.System.terminal.screen(session.sessionId);
console.log(screen.toString());
await Tools.System.terminal.close(session.sessionId);
```

## Translated section

- `examples/types/system.d.ts`
- `examples/types/results.d.ts`
- `docs/package_dev/results.md`
