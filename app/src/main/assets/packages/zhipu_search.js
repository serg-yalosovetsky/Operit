/* METADATA
{
  "name": "zhipu_search",
  "display_name": {
    "ru": "Zhipu Search", "en": "Zhipu Search"
  },
  "description": {
    "ru": "Zhipu AI standalone web search API with structured results.", "en": "Zhipu AI standalone web search API with structured results."
  },
  "env": [
    {
      "name": "ZHIPU_SEARCH_API_KEY",
      "description": {
        "ru": "Zhipu Search API Key (independent from draw Key)", "en": "Zhipu Search API Key (independent from draw Key)"
      },
      "required": false
    }
  ],
  "category": "Search",
  "tools": [
    {
      "name": "search",
      "description": {
        "ru": "Search using Zhipu Web Search API", "en": "Search using Zhipu Web Search API"
      },
      "parameters": [
        { "name": "query", "description": { "ru": "Search query", "en": "Search query" }, "type": "string", "required": true },
        { "name": "api_key", "description": { "ru": "Zhipu API Key", "en": "Zhipu API Key" }, "type": "string", "required": false },
        { "name": "engine", "description": { "ru": "Search engine", "en": "Search engine" }, "type": "string", "required": false },
        { "name": "count", "description": { "ru": "Result count (1-50)", "en": "Result count (1-50)" }, "type": "number", "required": false },
        { "name": "recency", "description": { "ru": "Time range", "en": "Time range" }, "type": "string", "required": false },
        { "name": "content_size", "description": { "ru": "Content size", "en": "Content size" }, "type": "string", "required": false }
      ]
    },
    {
      "name": "test",
      "description": {
        "ru": "Test API connection", "en": "Test API connection"
      },
      "parameters": []
    }
  ]
}*/
/// <reference path="./types/index.d.ts" />
const zhipuSearch = (function () {
    const API_URL = "https://open.bigmodel.cn/api/paas/v4/web_search";
    const TIMEOUT = 60000;
    const client = OkHttp.newBuilder()
        .connectTimeout(TIMEOUT)
        .readTimeout(TIMEOUT)
        .writeTimeout(TIMEOUT)
        .build();
    function getApiKey(providedKey) {
        if (providedKey)
            return providedKey;
        let key = getEnv("ZHIPU_SEARCH_API_KEY");
        if (key)
            return key;
        key = getEnv("DEFAULT_API_KEY");
        return key || "";
    }
    async function httpPost(body, apiKey) {
        const key = getApiKey(apiKey || undefined);
        if (!key) {
            throw new Error("未设置 API Key，请配置 ZHIPU_SEARCH_API_KEY 环境变量或在调用时传入 api_key 参数");
        }
        const request = client
            .newRequest()
            .url(API_URL)
            .method("POST")
            .header("Authorization", "Bearer " + key)
            .header("Content-Type", "application/json")
            .body(JSON.stringify(body), "json");
        const response = await request.build().execute();
        const content = response.content;
        if (!response.isSuccessful()) {
            throw new Error("HTTP " + response.statusCode + ": " + content);
        }
        return JSON.parse(content);
    }
    async function search(params) {
        const body = {
            search_query: params.query,
            search_engine: params.engine || "search_std",
            search_intent: true,
            count: params.count || 10,
            content_size: params.content_size || "medium"
        };
        if (params.recency) {
            body.search_recency_filter = params.recency;
        }
        const result = await httpPost(body, params.api_key);
        let results = [];
        if (result.search_result && Array.isArray(result.search_result)) {
            results = result.search_result.map((item) => ({
                title: item.title,
                content: item.content,
                link: item.link,
                media: item.media,
                icon: item.icon,
                publish_date: item.publish_date,
                refer: item.refer
            }));
        }
        let intent = null;
        if (result.search_intent && result.search_intent.length > 0) {
            intent = result.search_intent[0] || null;
        }
        return {
            success: true,
            query: params.query,
            id: result.id,
            intent,
            results,
            count: results.length
        };
    }
    async function test() {
        const body = {
            search_query: "hi",
            search_engine: "search_std",
            search_intent: false,
            count: 1
        };
        const start = Date.now();
        const result = await httpPost(body, null);
        const latency = Date.now() - start;
        return {
            success: true,
            latency,
            id: result.id
        };
    }
    async function searchWrapper(params) {
        try {
            const result = await search(params);
            complete({
                success: true,
                message: "搜索完成，找到 " + result.count + " 条结果",
                data: result
            });
        }
        catch (error) {
            complete({
                success: false,
                message: "搜索失败：" + error.message,
                error_stack: error.stack
            });
        }
    }
    async function testWrapper() {
        try {
            const result = await test();
            complete({
                success: true,
                message: "连接成功，延迟 " + result.latency + "ms",
                data: result
            });
        }
        catch (error) {
            complete({
                success: false,
                message: "测试失败：" + error.message,
                error_stack: error.stack
            });
        }
    }
    return {
        search: searchWrapper,
        test: testWrapper
    };
})();
exports.search = zhipuSearch.search;
exports.test = zhipuSearch.test;
