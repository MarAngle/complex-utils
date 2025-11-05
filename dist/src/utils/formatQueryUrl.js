import localEncodeURIComponent from './localEncodeURIComponent';
/**
 * 设置queryUrl
 * @param {string} url
 * @param {object} data 值对象
 * @returns {string}
 */
function formatQueryUrl(url, data) {
    url = url.includes('?') ? `${url}&` : `${url}?`;
    for (const key in data) {
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            url += `${key}=${localEncodeURIComponent(data[key])}&`;
        }
    }
    return url.slice(0, -1);
}
export default formatQueryUrl;
