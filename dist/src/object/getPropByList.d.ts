/**
 * 根据属性列表获取对象属性
 * @param {object} data 对应对象
 * @param {string[]} propList 属性列表
 * @param {boolean} [showError] 显示错误输出
 * @returns
 */
declare function getPropByList(data: Record<PropertyKey, any>, propList: string[] | number[], showError?: boolean): unknown;
export default getPropByList;
