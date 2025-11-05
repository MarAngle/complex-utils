/**
 * 根据'mainprop.prop'格式字符串获取对象值 // 此函数认为targetData和prop必然存在，不做单独校验
 * @param {object} value 对应对象
 * @param {string} prop 对应属性
 * @param {boolean} [showError] 显示错误输出
 * @returns
 */
declare function getComplexProp(value: Record<PropertyKey, any>, prop: string, showError?: boolean): unknown;
export default getComplexProp;
