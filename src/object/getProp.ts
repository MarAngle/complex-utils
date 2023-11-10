import getPropByList from './getPropByList'

/**
 * 根据'mainprop.prop'格式字符串获取对象值 // 此函数认为targetData和prop必然存在，不做单独校验
 * @param {object} value 对应对象
 * @param {string} prop 对应属性
 * @param {boolean} [showError] 显示错误输出
 * @returns
 */
function getProp(value: Record<PropertyKey, unknown>, prop: string, showError?: boolean) {
  const propList = prop.indexOf('.') > -1 ? prop.split('.') : [prop]
  return getPropByList(value, propList, showError)
}

export default getProp
