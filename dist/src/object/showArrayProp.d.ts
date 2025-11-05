/**
 * 数组属性快速输出到控制台
 * @param {object[]} list 目标数组
 * @param {string} prop 属性字符串,.类型
 */
declare function showArrayProp(list: Record<PropertyKey, any>[], prop: string): void;
export default showArrayProp;
