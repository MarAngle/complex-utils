/* eslint-disable @typescript-eslint/no-explicit-any */
import setPropByList from './setPropByList'

/**
 * 根据a.b字符串设置属性
 * @param {*} targetData 对应对象
 * @param {string} prop 属性字符串a.b,,父属性不存在时会创建对象
 * @param {*} value 属性值
 * @param {boolean} [useSetData] 为真时通过setData进行赋值操作,主要针对框架中直接赋值无法响应的操作
 * @returns {boolean} 设置是否成功
 */
function setProp(targetData: Record<PropertyKey, any>, prop: string, value: any, useSetData?: boolean) {
  if (!targetData || !prop) {
    return false
  } else {
    const propList = prop != '.' ? prop.split('.') : [prop]
    setPropByList(targetData, propList, value, useSetData)
    return true
  }
}

export default setProp
