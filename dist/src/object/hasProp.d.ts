/**
 * 判断对象是否存在对应属性
 * @param {object} data 对象
 * @param {string} prop 属性
 * @returns data has prop
 */
declare function hasProp(data: Record<PropertyKey, any>, prop: PropertyKey): boolean;
export default hasProp;
