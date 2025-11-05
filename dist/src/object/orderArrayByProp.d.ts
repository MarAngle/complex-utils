/**
 * 根据rule数组顺序对list[index][prop]的值进行排序
 * @param {object[]} list 目标数组
 * @param {string} prop 对比属性
 * @param {*[]} ruleList 对比属性值列表
 */
declare function orderArrayByProp(list: Record<PropertyKey, any>[], prop: string, ruleList: unknown[]): Record<PropertyKey, any>[];
export default orderArrayByProp;
