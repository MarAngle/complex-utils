/**
 * 设置queryUrl
 * @param {string} url
 * @param {object} data 值对象
 * @returns {string}
 */
declare function formatQueryUrl(url: string, data: Record<PropertyKey, string>): string;
export default formatQueryUrl;
