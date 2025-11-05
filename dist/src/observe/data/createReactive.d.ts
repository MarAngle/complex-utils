/**
 * 创建响应式
 * @param {object} data 响应式的对象
 * @param {string} prop 对应的属性
 * @returns {boolean}
 */
declare function createReactive(data: Record<PropertyKey, any>, prop: PropertyKey): false | Record<PropertyKey, any>;
export default createReactive;
