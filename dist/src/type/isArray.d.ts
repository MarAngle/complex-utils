/**
 * 是否是Array
 * @param {*} value 需要判断的值
 * @returns {boolean} value is Array
 */
declare const isArray: (value: unknown) => value is Array<unknown>;
export default isArray;
