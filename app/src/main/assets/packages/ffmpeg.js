/* METADATA
{
    "name": "ffmpeg",

    "display_name": {
        "ru": "FFmpeg Toolkit", "en": "FFmpeg Toolkit"
    },
    "description": {
        "ru": "FFmpeg utilities for processing multimedia content.", "en": "FFmpeg utilities for processing multimedia content."
    },
    "enabledByDefault": true,
    "category": "Media",
    "tools": [
        {
            "name": "ffmpeg_execute",
            "description": { "ru": "Execute a custom FFmpeg command (arguments only; do not include the leading ffmpeg).", "en": "Execute a custom FFmpeg command (arguments only; do not include the leading ffmpeg)." },
            "parameters": [
                { "name": "command", "description": { "ru": "FFmpeg command arguments to execute (do not include the leading ffmpeg)", "en": "FFmpeg command arguments to execute (do not include the leading ffmpeg)" }, "type": "string", "required": true }
            ]
        },
        {
            "name": "ffmpeg_info",
            "description": { "ru": "Get FFmpeg system info, including version, build config, and supported codecs.", "en": "Get FFmpeg system info, including version, build config, and supported codecs." },
            "parameters": []
        },
        {
            "name": "ffmpeg_convert",
            "description": { "ru": "Convert a video file using simplified parameters.", "en": "Convert a video file using simplified parameters." },
            "parameters": [
                { "name": "input_path", "description": { "ru": "Input video file path", "en": "Input video file path" }, "type": "string", "required": true },
                { "name": "output_path", "description": { "ru": "Output video file path", "en": "Output video file path" }, "type": "string", "required": true },
                { "name": "video_codec", "description": { "ru": "Optional. Video codec to use. Prefer 'h264'. Supported values: 'h264', 'hevc', 'vp8', 'vp9', 'av1', 'libx265', 'libvpx', 'libaom', 'mpeg4', 'mjpeg', 'prores'.", "en": "Optional. Video codec to use. Prefer 'h264'. Supported values: 'h264', 'hevc', 'vp8', 'vp9', 'av1', 'libx265', 'libvpx', 'libaom', 'mpeg4', 'mjpeg', 'prores'." }, "type": "string", "required": false },
                { "name": "audio_codec", "description": { "ru": "Optional. Audio codec to use. Supported values: 'aac', 'mp3', 'opus', 'vorbis', 'flac', 'pcm', 'wav', 'ac3', 'eac3'.", "en": "Optional. Audio codec to use. Supported values: 'aac', 'mp3', 'opus', 'vorbis', 'flac', 'pcm', 'wav', 'ac3', 'eac3'." }, "type": "string", "required": false },
                { "name": "resolution", "description": { "ru": "Optional. Output resolution, e.g. '1280x720'.", "en": "Optional. Output resolution, e.g. '1280x720'." }, "type": "string", "required": false },
                { "name": "bitrate", "description": { "ru": "Optional. Video bitrate, e.g. '1000k'.", "en": "Optional. Video bitrate, e.g. '1000k'." }, "type": "string", "required": false }
            ]
        }
    ]
}*/
const FFmpegTools = (function () {
    async function ffmpeg_execute(params) {
        const result = await Tools.FFmpeg.execute(params.command);
        return {
            success: result.returnCode === 0,
            message: result.returnCode === 0 ? "FFmpeg command executed successfully." : `FFmpeg command failed with return code ${result.returnCode}.`,
            data: result.output
        };
    }
    async function ffmpeg_info() {
        const result = await Tools.FFmpeg.info();
        return {
            success: result.returnCode === 0,
            message: result.returnCode === 0 ? "FFmpeg info retrieved successfully." : "Failed to retrieve FFmpeg info.",
            data: result.output
        };
    }
    async function ffmpeg_convert(params) {
        const result = await Tools.FFmpeg.convert(params.input_path, params.output_path, {
            video_codec: params.video_codec,
            audio_codec: params.audio_codec,
            resolution: params.resolution,
            bitrate: params.bitrate,
        });
        return {
            success: result.returnCode === 0,
            message: result.returnCode === 0 ? "FFmpeg conversion completed successfully." : `FFmpeg conversion failed with return code ${result.returnCode}.`,
            data: result.output
        };
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
        console.log("--- FFmpeg Tools Test ---");
        console.log("\n[1/3] Testing ffmpeg_info...");
        const infoResult = await ffmpeg_info();
        console.log(JSON.stringify(infoResult, null, 2));
        console.log("\n[2/3] Testing ffmpeg_execute (example: getting help for a decoder)...");
        const executeResult = await ffmpeg_execute({ command: '-h decoder=h264' });
        console.log(JSON.stringify(executeResult, null, 2));
        console.log("\n[3/3] Testing ffmpeg_convert (example)...");
        console.log("Skipping ffmpeg_convert test as it requires input files.");
        complete({ success: true, message: "Test finished." });
    }
    return {
        ffmpeg_execute: (params) => wrapToolExecution(ffmpeg_execute, params),
        ffmpeg_info: (params) => wrapToolExecution(ffmpeg_info, params),
        ffmpeg_convert: (params) => wrapToolExecution(ffmpeg_convert, params),
        main,
    };
})();
exports.ffmpeg_execute = FFmpegTools.ffmpeg_execute;
exports.ffmpeg_info = FFmpegTools.ffmpeg_info;
exports.ffmpeg_convert = FFmpegTools.ffmpeg_convert;
exports.main = FFmpegTools.main;
