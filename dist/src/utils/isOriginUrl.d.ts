/**
 * 判断2个URL是否同源（协议、主机名、端口均相同）。
 * @param {string} url 需要比较的第一个 URL。
 * @param {string} [otherUrl] 需要比较的第二个 URL。如果未提供，则默认为当前页面的 URL (`window.location`)。
 * @returns {boolean} 如果两个 URL 同源则返回 `true`，否则返回 `false`。
 */
declare function isOriginUrl(url: string, otherUrl?: string): boolean;
export default isOriginUrl;
