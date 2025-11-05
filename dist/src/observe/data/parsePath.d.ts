/**
 * 返回读取指定属性的函数
 * @param {string} prop 属性
 * @returns {function}
 */
declare function parsePath(prop: string): (obj: Record<PropertyKey, any>) => unknown;
export default parsePath;
