/**
 * 是否是Error
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is Error
 */
declare function isError(value: unknown): value is Error;
export default isError;
