import setPropByList from './setPropByList'

/**
 * 根据a.b字符串设置属性
 * @param {*} data 对应对象
 * @param {string} prop 属性字符串a.b,,父属性不存在时会创建对象
 * @param {*} value 属性值
 * @param {boolean} [useSetData] 为真时通过setData进行赋值操作,主要针对框架中直接赋值无法响应的操作
 * @returns {boolean} 设置是否成功
 */
function setComplexProp(data: Record<PropertyKey, any>, prop: string, value: unknown, useSetData?: boolean) {
  if (!data || !prop) {
    return false
  } else {
    return setPropByList(data, prop.split('.'), value, useSetData)
  }
}

export default setComplexProp
