/* METADATA
{
    "name": "tavily",

    "display_name": {
        "ru": "Tavily Search", "en": "Tavily Search"
    },
    "description": {
        "ru": "Use the Tavily API for advanced web search, content extraction, website crawling, and sitemap generation.", "en": "Use the Tavily API for advanced web search, content extraction, website crawling, and sitemap generation."
    },
    "env": [
        "TAVILY_API_KEY"
    ],
    "category": "Search",
    "tools": [
        {
            "name": "search",
            "description": { "ru": "Powerful web search using Tavily's AI search engine for comprehensive, up-to-date results.", "en": "Powerful web search using Tavily's AI search engine for comprehensive, up-to-date results." },
            "parameters": [
                { "name": "query", "description": { "ru": "Search query", "en": "Search query" }, "type": "string", "required": true },
                { "name": "search_depth", "description": { "ru": "Search depth: 'basic' or 'advanced'", "en": "Search depth: 'basic' or 'advanced'" }, "type": "string", "required": false, "default": "basic" },
                { "name": "topic", "description": { "ru": "Search topic: 'general' or 'news'", "en": "Search topic: 'general' or 'news'" }, "type": "string", "required": false, "default": "general" },
                { "name": "days", "description": { "ru": "Number of past days to include in results", "en": "Number of past days to include in results" }, "type": "number", "required": false },
                { "name": "max_results", "description": { "ru": "Maximum number of search results", "en": "Maximum number of search results" }, "type": "number", "required": false, "default": 10 },
                { "name": "include_images", "description": { "ru": "Include a list of images related to the query in the response", "en": "Include a list of images related to the query in the response" }, "type": "boolean", "required": false, "default": false },
                { "name": "include_raw_content", "description": { "ru": "Include cleaned and parsed HTML content for each search result", "en": "Include cleaned and parsed HTML content for each search result" }, "type": "boolean", "required": false, "default": false },
                { "name": "include_domains", "description": { "ru": "Domain list to specifically include in results", "en": "Domain list to specifically include in results" }, "type": "array", "required": false, "default": [] },
                { "name": "exclude_domains", "description": { "ru": "Domain list to specifically exclude from results", "en": "Domain list to specifically exclude from results" }, "type": "array", "required": false, "default": [] }
            ]
        },
        {
            "name": "extract",
            "description": { "ru": "Extract web content from specified URLs and process the raw content.", "en": "Extract web content from specified URLs and process the raw content." },
            "parameters": [
                { "name": "urls", "description": { "ru": "List of URLs to extract content from", "en": "List of URLs to extract content from" }, "type": "array", "required": true },
                { "name": "extract_depth", "description": { "ru": "Extraction depth: 'basic' or 'advanced'", "en": "Extraction depth: 'basic' or 'advanced'" }, "type": "string", "required": false, "default": "basic" },
                { "name": "include_images", "description": { "ru": "Include a list of images extracted from the URL(s)", "en": "Include a list of images extracted from the URL(s)" }, "type": "boolean", "required": false, "default": false },
                { "name": "format", "description": { "ru": "Output format: 'markdown' or 'text'", "en": "Output format: 'markdown' or 'text'" }, "type": "string", "required": false, "default": "markdown" }
            ]
        },
        {
            "name": "crawl",
            "description": { "ru": "Structured website crawler starting from a base URL.", "en": "Structured website crawler starting from a base URL." },
            "parameters": [
                { "name": "url", "description": { "ru": "Root URL to start crawling from", "en": "Root URL to start crawling from" }, "type": "string", "required": true },
                { "name": "max_depth", "description": { "ru": "Maximum crawl depth", "en": "Maximum crawl depth" }, "type": "number", "required": false, "default": 1 },
                { "name": "max_breadth", "description": { "ru": "Maximum number of links to follow per depth level", "en": "Maximum number of links to follow per depth level" }, "type": "number", "required": false, "default": 20 },
                { "name": "limit", "description": { "ru": "Total number of links the crawler will process", "en": "Total number of links the crawler will process" }, "type": "number", "required": false, "default": 50 },
                { "name": "instructions", "description": { "ru": "Natural-language instructions for the crawler", "en": "Natural-language instructions for the crawler" }, "type": "string", "required": false },
                { "name": "allow_external", "description": { "ru": "Whether to allow following links to external domains", "en": "Whether to allow following links to external domains" }, "type": "boolean", "required": false, "default": false },
                { "name": "format", "description": { "ru": "Output format: 'markdown' or 'text'", "en": "Output format: 'markdown' or 'text'" }, "type": "string", "required": false, "default": "markdown" }
            ]
        },
        {
            "name": "map",
            "description": { "ru": "Generate a structured sitemap of website URLs.", "en": "Generate a structured sitemap of website URLs." },
            "parameters": [
                { "name": "url", "description": { "ru": "Root URL to start mapping from", "en": "Root URL to start mapping from" }, "type": "string", "required": true },
                { "name": "max_depth", "description": { "ru": "Maximum mapping depth", "en": "Maximum mapping depth" }, "type": "number", "required": false, "default": 1 },
                { "name": "max_breadth", "description": { "ru": "Maximum number of links to follow per depth level", "en": "Maximum number of links to follow per depth level" }, "type": "number", "required": false, "default": 20 },
                { "name": "limit", "description": { "ru": "Total number of links the crawler will process", "en": "Total number of links the crawler will process" }, "type": "number", "required": false, "default": 50 }
            ]
        }
    ]
}*/
const tavily = (function () {
    const client = OkHttp.newClient();
    const BASE_URLS = {
        search: 'https://api.tavily.com/search',
        extract: 'https://api.tavily.com/extract',
        crawl: 'https://api.tavily.com/crawl',
        map: 'https://api.tavily.com/map'
    };
    async function makeTavilyRequest(endpoint, params) {
        const apiKey = getEnv("TAVILY_API_KEY");
        if (!apiKey) {
            throw new Error("Tavily API key is not set. Please configure it in the environment variables.");
        }
        const requestBody = { ...params };
        const headers = {
            'accept': 'application/json',
            'content-type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        };
        try {
            const request = client.newRequest()
                .url(endpoint)
                .method('POST')
                .headers(headers)
                .body(JSON.stringify(requestBody), 'json');
            const response = await request.build().execute();
            if (!response.isSuccessful()) {
                throw new Error(`Tavily API Error: ${response.statusCode} - ${response.content}`);
            }
            return JSON.parse(response.content);
        }
        catch (error) {
            console.error(`Tavily request failed: ${error.message}`);
            throw error;
        }
    }
    function formatSearchResults(response) {
        const output = [];
        if (response.answer) {
            output.push(`Answer: ${response.answer}`);
        }
        output.push('Detailed Results:');
        response.results.forEach((result) => {
            output.push(`\nTitle: ${result.title}`);
            output.push(`URL: ${result.url}`);
            output.push(`Content: ${result.content}`);
            if (result.raw_content) {
                output.push(`Raw Content: ${result.raw_content}`);
            }
        });
        return output.join('\n');
    }
    function formatCrawlResults(response) {
        const output = [];
        output.push(`Crawl Results:`);
        output.push(`Base URL: ${response.base_url}`);
        output.push('\nCrawled Pages:');
        response.results.forEach((page, index) => {
            output.push(`\n[${index + 1}] URL: ${page.url}`);
            if (page.raw_content) {
                const contentPreview = page.raw_content.length > 200
                    ? page.raw_content.substring(0, 200) + "..."
                    : page.raw_content;
                output.push(`Content: ${contentPreview}`);
            }
        });
        return output.join('\n');
    }
    function formatMapResults(response) {
        const output = [];
        output.push(`Site Map Results:`);
        output.push(`Base URL: ${response.base_url}`);
        output.push('\nMapped Pages:');
        response.results.forEach((page, index) => {
            output.push(`\n[${index + 1}] URL: ${page}`);
        });
        return output.join('\n');
    }
    async function search(params) {
        const response = await makeTavilyRequest(BASE_URLS.search, params);
        return formatSearchResults(response);
    }
    async function extract(params) {
        const response = await makeTavilyRequest(BASE_URLS.extract, params);
        // Extract uses the same format as search
        return formatSearchResults(response);
    }
    async function crawl(params) {
        const response = await makeTavilyRequest(BASE_URLS.crawl, params);
        return formatCrawlResults(response);
    }
    async function map(params) {
        const response = await makeTavilyRequest(BASE_URLS.map, params);
        return formatMapResults(response);
    }
    async function wrap(func, params, successMessage, failMessage) {
        try {
            const result = await func(params);
            complete({ success: true, message: successMessage, data: result });
        }
        catch (error) {
            console.error(`Function ${func.name} failed! Error: ${error.message}`);
            complete({ success: false, message: `${failMessage}: ${error.message}`, error_stack: error.stack });
        }
    }
    return {
        search: (p) => wrap(search, p, '搜索成功', '搜索失败'),
        extract: (p) => wrap(extract, p, '提取成功', '提取失败'),
        crawl: (p) => wrap(crawl, p, '爬取成功', '爬取失败'),
        map: (p) => wrap(map, p, '映射成功', '映射失败')
    };
})();
exports.search = tavily.search;
exports.extract = tavily.extract;
exports.crawl = tavily.crawl;
exports.map = tavily.map;
