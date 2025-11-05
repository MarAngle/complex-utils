/**
 * 判断值是否是空数组
 * @param {*} value 需要判断的值
 * @param {string} type 类型
 * @returns {boolean} value is EmptyArray
 */
declare function isEmptyArray(value: unknown, type?: string): value is [];
export default isEmptyArray;
