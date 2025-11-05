/**
 * 解析query数据（#此处不做判断）
 * @param {string} url
 * @returns {object}
 */
declare function getQueryData(url: string): Record<string, string | undefined>;
export default getQueryData;
