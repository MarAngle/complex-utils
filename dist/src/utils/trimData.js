/**
 * 清除开始结束空格，仅对字符串有效
 * @param {*} data
 * @returns {*}
 */
function trimData(data) {
    if (typeof data === 'string') {
        data = data.trim();
    }
    return data;
}
export default trimData;
