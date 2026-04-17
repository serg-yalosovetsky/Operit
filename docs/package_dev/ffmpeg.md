# API :`ffmpeg.d.ts`

`ffmpeg.d.ts` `Tools.FFmpeg` ,.

## Translated section

:

- FFmpeg .
- FFmpeg .
- .

## Translated section

### `FFmpegVideoCodec`

:

- `h264`
- `hevc`
- `vp8`
- `vp9`
- `av1`
- `libx265`
- `libvpx`
- `libaom`
- `mpeg4`
- `mjpeg`
- `prores`

### `FFmpegAudioCodec`

:

- `aac`
- `mp3`
- `opus`
- `vorbis`
- `flac`
- `pcm`
- `wav`
- `ac3`
- `eac3`

### `FFmpegResolution`

:

- :`1280x720`、`1920x1080`、`3840x2160`、`7680x4320`
- :`${number}x${number}`

### `FFmpegBitrate`

:

- :`500k`、`1000k`、`2000k`、`4000k`、`8000k`
- :`${number}k`、`${number}M`

## API

### `Tools.FFmpeg.execute(command)`

```ts
execute(command: string): Promise<FFmpegResultData>
```

:

- `command` FFmpeg .
- `ffmpeg` .

:

```ts
await Tools.FFmpeg.execute('-i input.mp4 -vf scale=1280:720 output.mp4');
```

### `Tools.FFmpeg.info()`

```ts
info(): Promise<FFmpegResultData>
```

 FFmpeg .

### `Tools.FFmpeg.convert(inputPath, outputPath, options?)`

```ts
convert(
  inputPath: string,
  outputPath: string,
  options?: {
    video_codec?: FFmpegVideoCodec;
    audio_codec?: FFmpegAudioCodec;
    resolution?: FFmpegResolution;
    bitrate?: FFmpegBitrate;
  }
): Promise<FFmpegResultData>
```

“ → ”.

## Translated section

### Translated section

```ts
const result = await Tools.FFmpeg.convert(
  '/sdcard/input.mp4',
  '/sdcard/output.mp4',
  {
    video_codec: 'h264',
    audio_codec: 'aac',
    resolution: '1920x1080',
    bitrate: '4000k'
  }
);
complete(result);
```

### Translated section

```ts
const info = await Tools.FFmpeg.info();
console.log(info.toString());
```

## Translated section

 API `FFmpegResultData`. `results.d.ts` ,.

## Translated section

- `examples/types/ffmpeg.d.ts`
- `examples/types/results.d.ts`
- `examples/types/index.d.ts`
