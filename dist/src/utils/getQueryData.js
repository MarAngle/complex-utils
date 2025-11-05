/**
 * 解析query数据（#此处不做判断）
 * @param {string} url
 * @returns {object}
 */
function getQueryData(url) {
    const queryData = {};
    const queryUrl = url.split('?')[1];
    if (queryUrl) {
        const queryList = queryUrl.split('&');
        for (const item of queryList) {
            if (item) {
                const [key, value] = item.split('=');
                queryData[key] = value;
            }
        }
    }
    return queryData;
}
export default getQueryData;
