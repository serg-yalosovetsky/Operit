/* METADATA
{
    "name": "12306_ticket",

    "display_name": {
        "ru": "12306 Extension", "en": "12306 Extension"
    },
    "description": { "ru": "Query China Railway 12306 train ticket information, including availability, transfer routes, and stop stations.", "en": "Query China Railway 12306 train ticket information, including availability, transfer routes, and stop stations." },
    "enabledByDefault": true,
    "category": "Life",
    "tools": [
        {
            "name": "get_current_date",
            "description": { "ru": "Get the current date in the Shanghai timezone (Asia/Shanghai, UTC+8). Returns format 'yyyy-MM-dd'. Mainly used to resolve relative dates (e.g. \"tomorrow\", \"next Wednesday\") and provide correct date input for other APIs.", "en": "Get the current date in the Shanghai timezone (Asia/Shanghai, UTC+8). Returns format 'yyyy-MM-dd'. Mainly used to resolve relative dates (e.g. \"tomorrow\", \"next Wednesday\") and provide correct date input for other APIs." },
            "parameters": []
        },
        {
            "name": "get_stations_code_in_city",
            "description": { "ru": "Given a Chinese city name, list **all** train stations in that city and their corresponding `station_code`.", "en": "Given a Chinese city name, list **all** train stations in that city and their corresponding `station_code`." },
            "parameters": [
                { "name": "city", "description": { "ru": "Chinese city name, e.g. '北京', '上海'.", "en": "Chinese city name, e.g. '北京', '上海'." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "get_station_code_of_citys",
            "description": { "ru": "Get the representative `station_code` for a Chinese city name. Use this when the user provides a **city name** as origin/destination and you need a `station_code`.", "en": "Get the representative `station_code` for a Chinese city name. Use this when the user provides a **city name** as origin/destination and you need a `station_code`." },
            "parameters": [
                { "name": "citys", "description": { "ru": "City to query, e.g. '北京'. For multiple cities, separate with |, e.g. '北京|上海'.", "en": "City to query, e.g. '北京'. For multiple cities, separate with |, e.g. '北京|上海'." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "get_station_code_by_names",
            "description": { "ru": "Given a specific Chinese station name, return its `station_code` and station name. Use this when the user provides a **specific station name** for origin/destination.", "en": "Given a specific Chinese station name, return its `station_code` and station name. Use this when the user provides a **specific station name** for origin/destination." },
            "parameters": [
                { "name": "station_names", "description": { "ru": "Specific Chinese station names, e.g. '北京南', '上海虹桥'. For multiple stations, separate with |, e.g. '北京南|上海虹桥'.", "en": "Specific Chinese station names, e.g. '北京南', '上海虹桥'. For multiple stations, separate with |, e.g. '北京南|上海虹桥'." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "get_station_by_telecode",
            "description": { "ru": "Query station details by `station_telecode`, including name, pinyin, city, etc. Mainly for getting more complete station data when `telecode` is known, or for special queries/debugging.", "en": "Query station details by `station_telecode`, including name, pinyin, city, etc. Mainly for getting more complete station data when `telecode` is known, or for special queries/debugging." },
            "parameters": [
                { "name": "station_telecode", "description": { "ru": "Station `station_telecode` (3-letter code).", "en": "Station `station_telecode` (3-letter code)." }, "type": "string", "required": true }
            ]
        },
        {
            "name": "get_tickets",
            "description": { "ru": "Query 12306 ticket availability.", "en": "Query 12306 ticket availability." },
            "parameters": [
                { "name": "date", "description": { "ru": "Query date in 'yyyy-MM-dd'. If the user gives a relative date (e.g. \"tomorrow\"), call `get_current_date` first and compute the target date.", "en": "Query date in 'yyyy-MM-dd'. If the user gives a relative date (e.g. \"tomorrow\"), call `get_current_date` first and compute the target date." }, "type": "string", "required": true },
                { "name": "from_station", "description": { "ru": "Origin `station_code`. Must be obtained via `get_station_code_by_names` or `get_station_code_of_citys` (do NOT pass Chinese names directly).", "en": "Origin `station_code`. Must be obtained via `get_station_code_by_names` or `get_station_code_of_citys` (do NOT pass Chinese names directly)." }, "type": "string", "required": true },
                { "name": "to_station", "description": { "ru": "Destination `station_code`. Must be obtained via `get_station_code_by_names` or `get_station_code_of_citys` (do NOT pass Chinese names directly).", "en": "Destination `station_code`. Must be obtained via `get_station_code_by_names` or `get_station_code_of_citys` (do NOT pass Chinese names directly)." }, "type": "string", "required": true },
                { "name": "train_filter_flags", "description": { "ru": "Train filter flags. Default empty (no filter). Can combine multiple flags. Example: for high-speed rail, use 'G'. Options: [G(High-speed/Intercity),D(EMU),Z(Direct express),T(Express),K(Fast),O(Other),F(Fuxing),S(Smart EMU)].", "en": "Train filter flags. Default empty (no filter). Can combine multiple flags. Example: for high-speed rail, use 'G'. Options: [G(High-speed/Intercity),D(EMU),Z(Direct express),T(Express),K(Fast),O(Other),F(Fuxing),S(Smart EMU)]." }, "type": "string", "required": false },
                { "name": "sort_flag", "description": { "ru": "Sort mode. Default empty (no sorting). Only one mode is supported. Options: [startTime (earliest departure), arriveTime (earliest arrival), duration (shortest duration)].", "en": "Sort mode. Default empty (no sorting). Only one mode is supported. Options: [startTime (earliest departure), arriveTime (earliest arrival), duration (shortest duration)]." }, "type": "string", "required": false },
                { "name": "sort_reverse", "description": { "ru": "Reverse sort order (default: false). Only effective when sort_flag is set.", "en": "Reverse sort order (default: false). Only effective when sort_flag is set." }, "type": "boolean", "required": false },
                { "name": "limited_num", "description": { "ru": "Limit number of returned results (default: 0, no limit).", "en": "Limit number of returned results (default: 0, no limit)." }, "type": "number", "required": false }
            ]
        },
        {
            "name": "get_interline_tickets",
            "description": { "ru": "Query 12306 transfer (interline) ticket availability. Currently only supports the first 10 results.", "en": "Query 12306 transfer (interline) ticket availability. Currently only supports the first 10 results." },
            "parameters": [
                { "name": "date", "description": { "ru": "Query date in 'yyyy-MM-dd'. If the user gives a relative date, call `get_current_date` first and compute the target date.", "en": "Query date in 'yyyy-MM-dd'. If the user gives a relative date, call `get_current_date` first and compute the target date." }, "type": "string", "required": true },
                { "name": "from_station", "description": { "ru": "Origin `station_code`. Must be obtained via station-code lookup APIs (do NOT pass Chinese names directly).", "en": "Origin `station_code`. Must be obtained via station-code lookup APIs (do NOT pass Chinese names directly)." }, "type": "string", "required": true },
                { "name": "to_station", "description": { "ru": "Destination `station_code`. Must be obtained via station-code lookup APIs (do NOT pass Chinese names directly).", "en": "Destination `station_code`. Must be obtained via station-code lookup APIs (do NOT pass Chinese names directly)." }, "type": "string", "required": true },
                { "name": "middle_station", "description": { "ru": "Optional transfer station `station_code`. Must be obtained via station-code lookup APIs (do NOT pass Chinese names directly).", "en": "Optional transfer station `station_code`. Must be obtained via station-code lookup APIs (do NOT pass Chinese names directly)." }, "type": "string", "required": false },
                { "name": "show_wz", "description": { "ru": "Whether to include no-seat (无座) tickets (default: false).", "en": "Whether to include no-seat (无座) tickets (default: false)." }, "type": "boolean", "required": false },
                { "name": "train_filter_flags", "description": { "ru": "Train filter flags. Default empty. Combine multiple flags from: [G(High-speed/Intercity),D(EMU),Z(Direct express),T(Express),K(Fast),O(Other),F(Fuxing),S(Smart EMU)].", "en": "Train filter flags. Default empty. Combine multiple flags from: [G(High-speed/Intercity),D(EMU),Z(Direct express),T(Express),K(Fast),O(Other),F(Fuxing),S(Smart EMU)]." }, "type": "string", "required": false },
                { "name": "sort_flag", "description": { "ru": "Sort mode. Default empty. Options: startTime / arriveTime / duration.", "en": "Sort mode. Default empty. Options: startTime / arriveTime / duration." }, "type": "string", "required": false },
                { "name": "sort_reverse", "description": { "ru": "Reverse sort order (default: false). Only effective when sort_flag is set.", "en": "Reverse sort order (default: false). Only effective when sort_flag is set." }, "type": "boolean", "required": false },
                { "name": "limited_num", "description": { "ru": "Limit number of returned results (default: 10).", "en": "Limit number of returned results (default: 10)." }, "type": "number", "required": false }
            ]
        },
        {
            "name": "get_train_route_stations",
            "description": { "ru": "Query detailed stop information for a specific train within a segment, including stations, arrival/departure times, and stop duration. Use when the user asks for stops of a specific train.", "en": "Query detailed stop information for a specific train within a segment, including stations, arrival/departure times, and stop duration. Use when the user asks for stops of a specific train." },
            "parameters": [
                { "name": "train_no", "description": { "ru": "Actual train number `train_no`, e.g. '240000G10336' (not 'G1033'). Usually obtained from `get_tickets` results or provided by the user.", "en": "Actual train number `train_no`, e.g. '240000G10336' (not 'G1033'). Usually obtained from `get_tickets` results or provided by the user." }, "type": "string", "required": true },
                { "name": "from_station_telecode", "description": { "ru": "`station_telecode` (3-letter code) of the **origin station**. Usually from `telecode` fields in `get_tickets`, or obtained via station code lookup.", "en": "`station_telecode` (3-letter code) of the **origin station**. Usually from `telecode` fields in `get_tickets`, or obtained via station code lookup." }, "type": "string", "required": true },
                { "name": "to_station_telecode", "description": { "ru": "`station_telecode` (3-letter code) of the **destination station**. Usually from `telecode` fields in `get_tickets`, or obtained via station code lookup.", "en": "`station_telecode` (3-letter code) of the **destination station**. Usually from `telecode` fields in `get_tickets`, or obtained via station code lookup." }, "type": "string", "required": true },
                { "name": "depart_date", "description": { "ru": "Departure date from the origin station (format: yyyy-MM-dd). If the user provides a relative date, resolve it via `get_current_date`.", "en": "Departure date from the origin station (format: yyyy-MM-dd). If the user provides a relative date, resolve it via `get_current_date`." }, "type": "string", "required": true }
            ]
        }
    ]
}*/
const TicketDataKeys = [
    'secret_Sstr', 'button_text_info', 'train_no', 'station_train_code', 'start_station_telecode',
    'end_station_telecode', 'from_station_telecode', 'to_station_telecode', 'start_time', 'arrive_time',
    'lishi', 'canWebBuy', 'yp_info', 'start_train_date', 'train_seat_feature',
    'location_code', 'from_station_no', 'to_station_no', 'is_support_card', 'controlled_train_flag',
    'gg_num', 'gr_num', 'qt_num', 'rw_num', 'rz_num',
    'tz_num', 'wz_num', 'yb_num', 'yw_num', 'yz_num',
    'ze_num', 'zy_num', 'swz_num', 'srrb_num', 'yp_ex',
    'seat_types', 'exchange_train_flag', 'houbu_train_flag', 'houbu_seat_limit', 'yp_info_new',
    '40', '41', '42', '43', '44',
    '45', 'dw_flag', '47', 'stopcheckTime', 'country_flag',
    'local_arrive_time', 'local_start_time', '52', 'bed_level_info', 'seat_discount_info',
    'sale_time', '56',
];
const StationDataKeys = [
    'station_id', 'station_name', 'station_code', 'station_pinyin', 'station_short',
    'station_index', 'code', 'city', 'r1', 'r2',
];
// #endregion
const ticket12306 = (function () {
    const API_BASE = 'https://kyfw.12306.cn';
    const WEB_URL = 'https://www.12306.cn/index/';
    const LCQUERY_INIT_URL = 'https://kyfw.12306.cn/otn/lcQuery/init';
    let LCQUERY_PATH = undefined;
    const MISSING_STATIONS = [
        { station_id: '@cdd', station_name: '成  都东', station_code: 'WEI', station_pinyin: 'chengdudong', station_short: 'cdd', station_index: '', code: '1707', city: '成都', r1: '', r2: '' },
    ];
    let STATIONS = undefined;
    let CITY_STATIONS = undefined;
    let CITY_CODES = undefined;
    let NAME_STATIONS = undefined;
    const SEAT_SHORT_TYPES = { swz: '商务座', tz: '特等座', zy: '一等座', ze: '二等座', gr: '高软卧', srrb: '动卧', rw: '软卧', yw: '硬卧', rz: '软座', yz: '硬座', wz: '无座', qt: '其他', gg: '', yb: '' };
    const SEAT_TYPES = {
        '9': { name: '商务座', short: 'swz' }, P: { name: '特等座', short: 'tz' }, M: { name: '一等座', short: 'zy' }, D: { name: '优选一等座', short: 'zy' }, O: { name: '二等座', short: 'ze' }, S: { name: '二等包座', short: 'ze' }, '6': { name: '高级软卧', short: 'gr' }, A: { name: '高级动卧', short: 'gr' }, '4': { name: '软卧', short: 'rw' }, I: { name: '一等卧', short: 'rw' }, F: { name: '动卧', short: 'rw' }, '3': { name: '硬卧', short: 'yw' }, J: { name: '二等卧', short: 'yw' }, '2': { name: '软座', short: 'rz' }, '1': { name: '硬座', short: 'yz' }, W: { name: '无座', short: 'wz' }, WZ: { name: '无座', short: 'wz' }, H: { name: '其他', short: 'qt' },
    };
    const DW_FLAGS = ['智能动车组', '复兴号', '静音车厢', '温馨动卧', '动感号', '支持选铺', '老年优惠'];
    const client = OkHttp.newClient();
    let initPromise = undefined;
    // #region 辅助函数
    function formatDate(date) {
        const year = date.getUTCFullYear();
        const month = (date.getUTCMonth() + 1).toString().padStart(2, '0');
        const day = date.getUTCDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    function parseDate(dateStr) {
        const year = parseInt(dateStr.substring(0, 4), 10);
        const month = parseInt(dateStr.substring(4, 6), 10) - 1;
        const day = parseInt(dateStr.substring(6, 8), 10);
        return new Date(Date.UTC(year, month, day));
    }
    function getCurrentShanghaiDate() {
        const now = new Date();
        return new Date(now.getTime() + 8 * 60 * 60 * 1000);
    }
    function checkDate(dateStr) {
        const todayInShanghai = getCurrentShanghaiDate();
        todayInShanghai.setUTCHours(0, 0, 0, 0);
        const parts = dateStr.split('-').map(p => parseInt(p, 10));
        const inputDate = new Date(Date.UTC(parts[0], parts[1] - 1, parts[2]));
        return inputDate.getTime() >= todayInShanghai.getTime();
    }
    function parseCookies(cookies) {
        const cookieRecord = {};
        if (!cookies)
            return cookieRecord;
        cookies.forEach((cookie) => {
            const keyValuePart = cookie.split(';')[0];
            const [key, value] = keyValuePart.split('=');
            if (key && value) {
                cookieRecord[key.trim()] = value.trim();
            }
        });
        return cookieRecord;
    }
    function formatCookies(cookies) {
        return Object.entries(cookies).map(([key, value]) => `${key}=${value}`).join('; ');
    }
    async function getCookie() {
        const url = `${API_BASE}/otn/leftTicket/init`;
        try {
            const response = await client.newRequest().url(url).build().execute();
            const cookieHeader = response.headers && (response.headers['set-cookie'] || response.headers['Set-Cookie']);
            if (cookieHeader) {
                const parsed = parseCookies(Array.isArray(cookieHeader) ? cookieHeader : [cookieHeader]);
                if (Object.keys(parsed).length > 0) {
                    return parsed;
                }
            }
            // If no cookies are in the header, assume the client is stateful.
            // Return an empty object to signal success and rely on the client's cookie jar.
            return {};
        }
        catch (error) {
            console.error('Error getting 12306 cookie:', error);
            return undefined;
        }
    }
    async function make12306Request(url, params = {}, headers = {}) {
        const queryString = Object.entries(params).map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
        const fullUrl = queryString ? `${url}?${queryString}` : url;
        try {
            const finalHeaders = { ...headers };
            // If the cookie string is empty, remove it to let the client use its cookie jar.
            if (finalHeaders['Cookie'] === '') {
                delete finalHeaders['Cookie'];
            }
            const request = client.newRequest().url(fullUrl).method('GET').headers(finalHeaders);
            const response = await request.build().execute();
            if (!response.isSuccessful()) {
                throw new Error(`HTTP error! status: ${response.statusCode}`);
            }
            return JSON.parse(response.content);
        }
        catch (error) {
            console.error(`Error making 12306 request to ${fullUrl}:`, error);
            return undefined;
        }
    }
    async function make12306RequestHtml(url) {
        try {
            const request = client.newRequest().url(url).method('GET');
            const response = await request.build().execute();
            if (!response.isSuccessful()) {
                throw new Error(`HTTP error! status: ${response.statusCode}`);
            }
            return response.content;
        }
        catch (error) {
            console.error(`Error fetching HTML from ${url}:`, error);
            return undefined;
        }
    }
    function parseTicketsData(rawData) {
        const result = [];
        for (const item of rawData) {
            const values = item.split('|');
            const entry = {};
            TicketDataKeys.forEach((key, index) => {
                entry[key] = values[index];
            });
            result.push(entry);
        }
        return result;
    }
    function extractPrices(yp_info, seat_discount_info, ticketData) {
        const PRICE_STR_LENGTH = 10;
        const DISCOUNT_STR_LENGTH = 5;
        const prices = [];
        const discounts = {};
        for (let i = 0; i < seat_discount_info.length / DISCOUNT_STR_LENGTH; i++) {
            const discount_str = seat_discount_info.slice(i * DISCOUNT_STR_LENGTH, (i + 1) * DISCOUNT_STR_LENGTH);
            discounts[discount_str[0]] = parseInt(discount_str.slice(1), 10);
        }
        for (let i = 0; i < yp_info.length / PRICE_STR_LENGTH; i++) {
            const price_str = yp_info.slice(i * PRICE_STR_LENGTH, (i + 1) * PRICE_STR_LENGTH);
            var seat_type_code;
            if (parseInt(price_str.slice(6, 10), 10) >= 3000) {
                seat_type_code = 'W'; // 为无座
            }
            else if (!Object.keys(SEAT_TYPES).includes(price_str[0])) {
                seat_type_code = 'H'; // 其他坐席
            }
            else {
                seat_type_code = price_str[0];
            }
            const seat_type = SEAT_TYPES[seat_type_code];
            const price = parseInt(price_str.slice(1, 6), 10) / 10;
            const discount = seat_type_code in discounts ? discounts[seat_type_code] : undefined;
            prices.push({
                seat_name: seat_type.name,
                short: seat_type.short,
                seat_type_code,
                num: ticketData[`${seat_type.short}_num`],
                price,
                discount,
            });
        }
        return prices;
    }
    function extractDWFlags(dw_flag_str) {
        const dwFlagList = dw_flag_str.split('#');
        let result = [];
        if ('5' == dwFlagList[0]) {
            result.push(DW_FLAGS[0]);
        }
        if (dwFlagList.length > 1 && '1' == dwFlagList[1]) {
            result.push(DW_FLAGS[1]);
        }
        if (dwFlagList.length > 2) {
            if ('Q' == dwFlagList[2].substring(0, 1)) {
                result.push(DW_FLAGS[2]);
            }
            else if ('R' == dwFlagList[2].substring(0, 1)) {
                result.push(DW_FLAGS[3]);
            }
        }
        if (dwFlagList.length > 5 && 'D' == dwFlagList[5]) {
            result.push(DW_FLAGS[4]);
        }
        if (dwFlagList.length > 6 && 'z' != dwFlagList[6]) {
            result.push(DW_FLAGS[5]);
        }
        if (dwFlagList.length > 7 && 'z' != dwFlagList[7]) {
            result.push(DW_FLAGS[6]);
        }
        return result;
    }
    function parseTicketsInfo(ticketsData, map) {
        const result = [];
        for (const ticket of ticketsData) {
            const prices = extractPrices(ticket.yp_info_new, ticket.seat_discount_info, ticket);
            const dw_flag = extractDWFlags(ticket.dw_flag);
            const startDate = parseDate(ticket.start_train_date);
            const [startHours, startMinutes] = ticket.start_time.split(':').map(Number);
            const [durationHours, durationMinutes] = ticket.lishi.split(':').map(Number);
            const arriveDate = new Date(startDate);
            arriveDate.setUTCHours(arriveDate.getUTCHours() + startHours + durationHours, arriveDate.getUTCMinutes() + startMinutes + durationMinutes);
            result.push({
                train_no: ticket.train_no,
                start_date: formatDate(startDate),
                arrive_date: formatDate(arriveDate),
                start_train_code: ticket.station_train_code,
                start_time: ticket.start_time,
                arrive_time: ticket.arrive_time,
                lishi: ticket.lishi,
                from_station: map[ticket.from_station_telecode],
                to_station: map[ticket.to_station_telecode],
                from_station_telecode: ticket.from_station_telecode,
                to_station_telecode: ticket.to_station_telecode,
                prices: prices,
                dw_flag: dw_flag,
            });
        }
        return result;
    }
    function formatTicketStatus(num) {
        if (num.match(/^\d+$/)) {
            const count = parseInt(num);
            return count === 0 ? '无票' : `剩余${count}张票`;
        }
        switch (num) {
            case '有':
            case '充足': return '有票';
            case '无':
            case '--':
            case '': return '无票';
            case '候补': return '无票需候补';
            default: return `${num}票`;
        }
    }
    function formatTicketsInfo(ticketsInfo) {
        if (ticketsInfo.length === 0)
            return '没有查询到相关车次信息';
        let result = '车次 | 出发站 -> 到达站 | 出发时间 -> 到达时间 | 历时\n';
        ticketsInfo.forEach((ticketInfo) => {
            let infoStr = `${ticketInfo.start_train_code}(实际车次train_no: ${ticketInfo.train_no}) ${ticketInfo.from_station}(telecode: ${ticketInfo.from_station_telecode}) -> ${ticketInfo.to_station}(telecode: ${ticketInfo.to_station_telecode}) ${ticketInfo.start_time} -> ${ticketInfo.arrive_time} 历时：${ticketInfo.lishi}`;
            ticketInfo.prices.forEach((price) => {
                infoStr += `\n- ${price.seat_name}: ${formatTicketStatus(price.num)} ${price.price}元`;
            });
            result += `${infoStr}\n`;
        });
        return result;
    }
    const TRAIN_FILTERS = {
        G: (t) => t.start_train_code.startsWith('G') || t.start_train_code.startsWith('C'),
        D: (t) => t.start_train_code.startsWith('D'),
        Z: (t) => t.start_train_code.startsWith('Z'),
        T: (t) => t.start_train_code.startsWith('T'),
        K: (t) => t.start_train_code.startsWith('K'),
        O: (t) => !/^[GDZTK]/.test(t.start_train_code),
        F: (t) => 'dw_flag' in t ? t.dw_flag.includes('复兴号') : t.ticketList[0].dw_flag.includes('复兴号'),
        S: (t) => 'dw_flag' in t ? t.dw_flag.includes('智能动车组') : t.ticketList[0].dw_flag.includes('智能动车组'),
    };
    const TIME_COMPARETOR = {
        startTime: (a, b) => new Date(`${a.start_date} ${a.start_time}`).getTime() - new Date(`${b.start_date} ${b.start_time}`).getTime(),
        arriveTime: (a, b) => new Date(`${a.arrive_date} ${a.arrive_time}`).getTime() - new Date(`${b.arrive_date} ${b.arrive_time}`).getTime(),
        duration: (a, b) => {
            const [hA, mA] = a.lishi.split(':').map(Number);
            const [hB, mB] = b.lishi.split(':').map(Number);
            return (hA * 60 + mA) - (hB * 60 + mB);
        },
    };
    function filterTicketsInfo(ticketsInfo, trainFilterFlags, sortFlag = '', sortReverse = false, limitedNum = 0) {
        let result = trainFilterFlags ? ticketsInfo.filter(t => [...trainFilterFlags].some(flag => TRAIN_FILTERS[flag](t))) : ticketsInfo;
        if (Object.keys(TIME_COMPARETOR).includes(sortFlag)) {
            result.sort(TIME_COMPARETOR[sortFlag]);
            if (sortReverse)
                result.reverse();
        }
        return limitedNum > 0 ? result.slice(0, limitedNum) : result;
    }
    function parseRouteStationsInfo(routeStationsData) {
        return routeStationsData.map((routeStationData, index) => ({
            arrive_time: index === 0 ? routeStationData.start_time : routeStationData.arrive_time,
            station_name: routeStationData.station_name,
            stopover_time: routeStationData.stopover_time,
            station_no: parseInt(routeStationData.station_no),
        }));
    }
    function parseInterlinesTicketInfo(interlineTicketsData) {
        return interlineTicketsData.map(ticket => {
            const prices = extractPrices(ticket.yp_info, ticket.seat_discount_info, ticket);
            const startDate = parseDate(ticket.start_train_date);
            const [startHours, startMinutes] = ticket.start_time.split(':').map(Number);
            const [durationHours, durationMinutes] = ticket.lishi.split(':').map(Number);
            const arriveDate = new Date(startDate);
            arriveDate.setUTCHours(arriveDate.getUTCHours() + startHours + durationHours, arriveDate.getUTCMinutes() + startMinutes + durationMinutes);
            return {
                train_no: ticket.train_no,
                start_train_code: ticket.station_train_code,
                start_date: formatDate(startDate),
                arrive_date: formatDate(arriveDate),
                start_time: ticket.start_time,
                arrive_time: ticket.arrive_time,
                lishi: ticket.lishi,
                from_station: ticket.from_station_name,
                to_station: ticket.to_station_name,
                from_station_telecode: ticket.from_station_telecode,
                to_station_telecode: ticket.to_station_telecode,
                prices: prices,
                dw_flag: extractDWFlags(ticket.dw_flag),
            };
        });
    }
    function extractLishi(all_lishi) {
        const match = all_lishi.match(/(?:(\d+)小时)?(\d+)分钟/);
        if (!match)
            return '00:00';
        const hours = (match[1] || '0').padStart(2, '0');
        const minutes = (match[2] || '0').padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    function parseInterlinesInfo(interlineData) {
        return interlineData.map(ticket => ({
            lishi: extractLishi(ticket.all_lishi),
            start_time: ticket.start_time,
            start_date: ticket.train_date,
            middle_date: ticket.middle_date,
            arrive_date: ticket.arrive_date,
            arrive_time: ticket.arrive_time,
            from_station_code: ticket.from_station_code,
            from_station_name: ticket.from_station_name,
            middle_station_code: ticket.middle_station_code,
            middle_station_name: ticket.middle_station_name,
            end_station_code: ticket.end_station_code,
            end_station_name: ticket.end_station_name,
            start_train_code: ticket.fullList[0].station_train_code,
            first_train_no: ticket.first_train_no,
            second_train_no: ticket.second_train_no,
            train_count: ticket.train_count,
            ticketList: parseInterlinesTicketInfo(ticket.fullList),
            same_station: ticket.same_station == '0',
            same_train: ticket.same_train == 'Y',
            wait_time: ticket.wait_time,
        }));
    }
    function formatInterlinesInfo(interlinesInfo) {
        if (interlinesInfo.length === 0)
            return '没有查询到相关的中转车次信息';
        let result = '出发时间 -> 到达时间 | 出发车站 -> 中转车站 -> 到达车站 | 换乘标志 | 换乘等待时间 | 总历时\n\n';
        interlinesInfo.forEach((info) => {
            result += `${info.start_date} ${info.start_time} -> ${info.arrive_date} ${info.arrive_time} | `;
            result += `${info.from_station_name} -> ${info.middle_station_name} -> ${info.end_station_name} | `;
            result += `${info.same_train ? '同车换乘' : info.same_station ? '同站换乘' : '换站换乘'} | ${info.wait_time} | ${info.lishi}\n\n`;
            result += '\t' + formatTicketsInfo(info.ticketList).replace(/\n/g, '\n\t') + '\n';
        });
        return result;
    }
    function parseStationsData(rawData) {
        const result = {};
        const dataArray = rawData.split('|');
        for (let i = 0; i < dataArray.length; i += 10) {
            const group = dataArray.slice(i, i + 10);
            if (group.length < 10)
                continue;
            let station = {};
            StationDataKeys.forEach((key, index) => {
                station[key] = group[index];
            });
            if (station.station_code) {
                result[station.station_code] = station;
            }
        }
        return result;
    }
    async function getStationsInternal() {
        const stationNameJSUrl = "https://kyfw.12306.cn/otn/resources/js/framework/station_name.js";
        const stationNameJS = await make12306RequestHtml(stationNameJSUrl);
        if (!stationNameJS)
            throw new Error('Error: get station name js file content failed.');
        const rawDataMatch = stationNameJS.match(/var station_names\s*=\s*'(.*?)';/);
        if (!rawDataMatch)
            throw new Error('Error: could not find station data in JS file.');
        const rawData = rawDataMatch[1];
        const stationsData = parseStationsData(rawData);
        for (const station of MISSING_STATIONS) {
            if (!stationsData[station.station_code]) {
                stationsData[station.station_code] = station;
            }
        }
        return stationsData;
    }
    async function getLCQueryPath() {
        const html = await make12306RequestHtml(LCQUERY_INIT_URL);
        if (html == undefined)
            throw new Error('Error: get 12306 web page for LCQuery path failed.');
        const match = html.match(/var lc_search_url = '(.+?)'/);
        if (match == undefined)
            throw new Error('Error: get LCQuery path failed.');
        return match[1];
    }
    async function init() {
        if (initPromise)
            return initPromise;
        initPromise = (async () => {
            if (STATIONS)
                return;
            try {
                STATIONS = await getStationsInternal();
                LCQUERY_PATH = await getLCQueryPath();
                CITY_STATIONS = {};
                for (const station of Object.values(STATIONS)) {
                    const city = station.city;
                    if (!CITY_STATIONS[city])
                        CITY_STATIONS[city] = [];
                    CITY_STATIONS[city].push({ station_code: station.station_code, station_name: station.station_name });
                }
                CITY_CODES = {};
                for (const [city, stations] of Object.entries(CITY_STATIONS)) {
                    for (const station of stations) {
                        if (station.station_name == city) {
                            CITY_CODES[city] = station;
                            break;
                        }
                    }
                }
                NAME_STATIONS = {};
                for (const station of Object.values(STATIONS)) {
                    NAME_STATIONS[station.station_name] = { station_code: station.station_code, station_name: station.station_name };
                }
            }
            catch (e) {
                initPromise = undefined; // Reset promise on failure to allow retry
                throw e;
            }
        })();
        return initPromise;
    }
    // #endregion
    // #region 工具函数实现
    async function get_current_date(params) {
        const now = getCurrentShanghaiDate();
        return formatDate(now);
    }
    async function get_stations_code_in_city(params) {
        await init();
        if (!(params.city in CITY_STATIONS)) {
            throw new Error('City not found.');
        }
        return CITY_STATIONS[params.city];
    }
    async function get_station_code_of_citys(params) {
        await init();
        let result = {};
        for (const city of params.citys.split('|')) {
            if (!(city in CITY_CODES)) {
                result[city] = { error: '未检索到城市。' };
            }
            else {
                result[city] = CITY_CODES[city];
            }
        }
        return result;
    }
    async function get_station_code_by_names(params) {
        await init();
        let result = {};
        for (let stationName of params.station_names.split('|')) {
            stationName = stationName.endsWith('站') ? stationName.slice(0, -1) : stationName;
            if (!(stationName in NAME_STATIONS)) {
                result[stationName] = { error: '未检索到车站。' };
            }
            else {
                result[stationName] = NAME_STATIONS[stationName];
            }
        }
        return result;
    }
    async function get_station_by_telecode(params) {
        await init();
        if (!STATIONS[params.station_telecode]) {
            throw new Error('Station not found.');
        }
        return STATIONS[params.station_telecode];
    }
    async function get_tickets(params) {
        await init();
        if (!checkDate(params.date))
            throw new Error('The date cannot be earlier than today.');
        if (!STATIONS[params.from_station] || !STATIONS[params.to_station])
            throw new Error('Station not found.');
        const queryParams = {
            'leftTicketDTO.train_date': params.date,
            'leftTicketDTO.from_station': params.from_station,
            'leftTicketDTO.to_station': params.to_station,
            'purpose_codes': 'ADULT',
        };
        const queryUrl = `${API_BASE}/otn/leftTicket/query`;
        const cookies = await getCookie();
        if (!cookies)
            throw new Error('Get cookie failed. Check your network.');
        const response = await make12306Request(queryUrl, queryParams, { Cookie: formatCookies(cookies) });
        if (!response || !response.data || !response.data.result)
            throw new Error('Get tickets data failed.');
        const ticketsData = parseTicketsData(response.data.result);
        const ticketsInfo = parseTicketsInfo(ticketsData, response.data.map);
        const filteredTicketsInfo = filterTicketsInfo(ticketsInfo, params.train_filter_flags || '', params.sort_flag, params.sort_reverse, params.limited_num);
        return formatTicketsInfo(filteredTicketsInfo);
    }
    async function get_interline_tickets(params) {
        await init();
        if (!checkDate(params.date))
            throw new Error('The date cannot be earlier than today.');
        if (!STATIONS[params.from_station] || !STATIONS[params.to_station])
            throw new Error('Station not found.');
        const cookies = await getCookie();
        if (!cookies)
            throw new Error('Get cookie failed. Check your network.');
        const limited_num = params.limited_num || 10;
        let interlineData = [];
        const queryParams = {
            'train_date': params.date,
            'from_station_telecode': params.from_station,
            'to_station_telecode': params.to_station,
            'middle_station': params.middle_station || '',
            'result_index': '0',
            'can_query': 'Y',
            'isShowWZ': params.show_wz ? 'Y' : 'N',
            'purpose_codes': '00',
            'channel': 'E',
        };
        while (interlineData.length < limited_num) {
            const response = await make12306Request(`${API_BASE}${LCQUERY_PATH}`, queryParams, { Cookie: formatCookies(cookies) });
            if (!response)
                throw new Error('Request interline tickets data failed.');
            if (typeof response.data === 'string')
                return `很抱歉，未查到相关的列车余票。(${response.errorMsg})`;
            interlineData.push(...response.data.middleList);
            if (response.data.can_query === 'N' || !response.data.middleList || response.data.middleList.length === 0)
                break;
            queryParams.result_index = response.data.result_index.toString();
        }
        const interlineTicketsInfo = parseInterlinesInfo(interlineData);
        const filtered = filterTicketsInfo(interlineTicketsInfo, params.train_filter_flags || '', params.sort_flag, params.sort_reverse, limited_num);
        return formatInterlinesInfo(filtered);
    }
    async function get_train_route_stations(params) {
        await init();
        const queryParams = {
            'train_no': params.train_no,
            'from_station_telecode': params.from_station_telecode,
            'to_station_telecode': params.to_station_telecode,
            'depart_date': params.depart_date,
        };
        const queryUrl = `${API_BASE}/otn/czxx/queryByTrainNo`;
        const cookies = await getCookie();
        if (!cookies)
            throw new Error('Get cookie failed.');
        const response = await make12306Request(queryUrl, queryParams, { Cookie: formatCookies(cookies) });
        if (!response || !response.data || !response.data.data)
            throw new Error('Get train route stations failed.');
        const routeStationsInfo = parseRouteStationsInfo(response.data.data);
        if (routeStationsInfo.length === 0)
            return '未查询到相关车次信息。';
        return routeStationsInfo;
    }
    // #endregion
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
    async function main() {
        console.log("--- 开始测试 12306 工具包 ---");
        try {
            await init();
            console.log("\n[1/8] 测试 get_current_date...");
            const dateResult = await get_current_date({});
            console.log("测试结果:", JSON.stringify(dateResult, undefined, 2));
            const testDate = dateResult;
            console.log("\n[2/8] 测试 get_stations_code_in_city (北京)...");
            const cityStations = await get_stations_code_in_city({ city: '北京' });
            console.log("测试结果:", JSON.stringify(cityStations, undefined, 2));
            console.log("\n[3/8] 测试 get_station_code_of_citys (北京|上海)...");
            const cityCodesResult = await get_station_code_of_citys({ citys: '北京|上海' });
            console.log("测试结果:", JSON.stringify(cityCodesResult, undefined, 2));
            const beijingCode = cityCodesResult['北京'].station_code;
            const shanghaiCode = cityCodesResult['上海'].station_code;
            console.log("\n[4/8] 测试 get_station_code_by_names (北京南|上海虹桥)...");
            const stationCodesResult = await get_station_code_by_names({ station_names: '北京南|上海虹桥' });
            console.log("测试结果:", JSON.stringify(stationCodesResult, undefined, 2));
            const beijingnanCode = stationCodesResult['北京南'].station_code;
            const shanghaihongqiaoCode = stationCodesResult['上海虹桥'].station_code;
            console.log("\n[5/8] 测试 get_station_by_telecode (VNP)...");
            const stationInfo = await get_station_by_telecode({ station_telecode: 'VNP' }); // VNP is 北京
            console.log("测试结果:", JSON.stringify(stationInfo, undefined, 2));
            console.log(`\n[6/8] 测试 get_tickets (${testDate}, from: 北京南, to: 上海虹桥)...`);
            const tickets = await get_tickets({
                date: testDate,
                from_station: beijingnanCode,
                to_station: shanghaihongqiaoCode,
                train_filter_flags: 'G'
            });
            console.log("测试结果 (部分):", tickets.substring(0, 400) + "...");
            console.log(`\n[7/8] 测试 get_interline_tickets (${testDate}, from: 北京, to: 上海)...`);
            const interlineTickets = await get_interline_tickets({
                date: testDate,
                from_station: beijingCode,
                to_station: shanghaiCode,
                limited_num: 2
            });
            console.log("测试结果 (部分):", interlineTickets.substring(0, 400) + "...");
            console.log(`\n[8/8] 测试 get_train_route_stations...`);
            const ticketsResultForRoute = await get_tickets({ date: testDate, from_station: beijingnanCode, to_station: shanghaihongqiaoCode });
            const trainNoMatch = ticketsResultForRoute.match(/train_no: (\w+)/);
            if (trainNoMatch && trainNoMatch[1]) {
                const trainNo = trainNoMatch[1];
                console.log(`使用车次 ${trainNo} 进行测试...`);
                const routeStations = await get_train_route_stations({
                    train_no: trainNo,
                    from_station_telecode: beijingnanCode,
                    to_station_telecode: shanghaihongqiaoCode,
                    depart_date: testDate
                });
                console.log("测试结果:", JSON.stringify(routeStations, undefined, 2));
            }
            else {
                console.log("未从 get_tickets 结果中找到可用车次来测试 get_train_route_stations。");
            }
        }
        catch (e) {
            console.error("测试主函数出现错误:", e.message, e.stack);
            complete({ success: false, message: `测试失败: ${e.message}` });
            return;
        }
        console.log("\n--- 12306 工具包测试完成 ---");
        complete({ success: true, message: "所有测试已成功或已记录错误。" });
    }
    return {
        get_current_date: (p) => wrap(get_current_date, p, '获取当前日期成功', '获取当前日期失败'),
        get_stations_code_in_city: (p) => wrap(get_stations_code_in_city, p, '查询成功', '查询失败'),
        get_station_code_of_citys: (p) => wrap(get_station_code_of_citys, p, '查询成功', '查询失败'),
        get_station_code_by_names: (p) => wrap(get_station_code_by_names, p, '查询成功', '查询失败'),
        get_station_by_telecode: (p) => wrap(get_station_by_telecode, p, '查询成功', '查询失败'),
        get_tickets: (p) => wrap(get_tickets, p, '查询余票成功', '查询余票失败'),
        get_interline_tickets: (p) => wrap(get_interline_tickets, p, '查询中转票成功', '查询中转票失败'),
        get_train_route_stations: (p) => wrap(get_train_route_stations, p, '查询经停站成功', '查询经停站失败'),
        main: main,
    };
})();
exports.get_current_date = ticket12306.get_current_date;
exports.get_stations_code_in_city = ticket12306.get_stations_code_in_city;
exports.get_station_code_of_citys = ticket12306.get_station_code_of_citys;
exports.get_station_code_by_names = ticket12306.get_station_code_by_names;
exports.get_station_by_telecode = ticket12306.get_station_by_telecode;
exports.get_tickets = ticket12306.get_tickets;
exports.get_interline_tickets = ticket12306.get_interline_tickets;
exports.get_train_route_stations = ticket12306.get_train_route_stations;
exports.main = ticket12306.main;
