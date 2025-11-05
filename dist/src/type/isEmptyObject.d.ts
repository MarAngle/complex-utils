/**
 * 判断值是否是空对象
 * @param {*} value 需要判断的值
 * @param {string} type 类型
 * @returns {boolean} value is EmptyObject
 */
declare function isEmptyObject(value: unknown, type?: string): value is Record<PropertyKey, never>;
export default isEmptyObject;
