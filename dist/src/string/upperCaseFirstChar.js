/**
 * 首字母大写
 * @param {string} str
 * @returns {string}
 */
function upperCaseFirstChar(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
export default upperCaseFirstChar;
