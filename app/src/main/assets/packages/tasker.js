/* METADATA
{
  "name": "tasker",

  "display_name": {
      "ru": "Tasker Trigger", "en": "Tasker Trigger"
  },
  "description": {
    "ru": "Integration for triggering Tasker plugin events. This package lets you send events to Tasker.", "en": "Integration for triggering Tasker plugin events. This package lets you send events to Tasker."
  },
  "enabledByDefault": false,
  "category": "Workflow",
  "tools": [
    {
      "name": "trigger_tasker_event",
      "description": {
        "ru": "Trigger a Tasker event. Use task_type to specify the event type. You can pass arg1..arg5 or args_json.", "en": "Trigger a Tasker event. Use task_type to specify the event type. You can pass arg1..arg5 or args_json."
      },
      "parameters": [
        { "name": "task_type", "description": { "ru": "Event type identifier", "en": "Event type identifier" }, "type": "string", "required": true },
        { "name": "arg1", "description": { "ru": "Optional argument 1", "en": "Optional argument 1" }, "type": "string", "required": false },
        { "name": "arg2", "description": { "ru": "Optional argument 2", "en": "Optional argument 2" }, "type": "string", "required": false },
        { "name": "arg3", "description": { "ru": "Optional argument 3", "en": "Optional argument 3" }, "type": "string", "required": false },
        { "name": "arg4", "description": { "ru": "Optional argument 4", "en": "Optional argument 4" }, "type": "string", "required": false },
        { "name": "arg5", "description": { "ru": "Optional argument 5", "en": "Optional argument 5" }, "type": "string", "required": false },
        { "name": "args_json", "description": { "ru": "Pass arbitrary parameters as a JSON string", "en": "Pass arbitrary parameters as a JSON string" }, "type": "string", "required": false }
      ]
    }
  ]
}*/
/// <reference path="./types/index.d.ts" />
const TaskerIntegration = (function () {
    async function trigger_tasker_event(params) {
        const data = await Tools.Tasker.triggerEvent(params);
        return {
            success: true,
            message: "Tasker 事件已触发",
            data
        };
    }
    async function wrapToolExecution(func, params) {
        try {
            const result = await func(params || {});
            complete(result);
        }
        catch (error) {
            console.error(`Tool ${func.name} failed unexpectedly`, error);
            complete({ success: false, message: String(error && error.message ? error.message : error) });
        }
    }
    return {
        trigger_tasker_event: (params) => wrapToolExecution(trigger_tasker_event, params)
    };
})();
exports.trigger_tasker_event = TaskerIntegration.trigger_tasker_event;
