/**
 * 是否是Symbol
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is Symbol
 */
declare function isSymbol(value: unknown): value is symbol;
export default isSymbol;
