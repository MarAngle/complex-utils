/**
 * 使用标准 URL API 解析一个 URL 字符串。
 * @param {string} url - 需要解析的 URL。可以是绝对路径，也可以是相对路径。
 * @returns {URL} 返回一个 URL 实例。如果 URL 无效，则返回一个指向 'about:blank' 的 URL 实例。
 */
declare function parseUrl(url: string): URL;
export default parseUrl;
