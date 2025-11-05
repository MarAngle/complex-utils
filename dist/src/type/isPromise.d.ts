/**
 * 是否是Promise对象
 * @param {*} value 需要判断的数据
 * @returns {boolean} value is Promise对象
 */
declare function isPromise(value: unknown): value is Promise<unknown>;
export default isPromise;
