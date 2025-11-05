/**
 * 是否是RegExp
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is RegExp
 */
declare function isRegExp(value: unknown): value is RegExp;
export default isRegExp;
