import { ComplexType } from '../type/getComplexType'
import formatDataByType from './formatDataByType'
import setProp from './setProp'

/**
 * 根据type设置对象属性值
 * @param {object} targetData 目标对象
 * @param {string} prop 属性字符串
 * @param {*} value 属性值
 * @param {string} type 属性值类型
 * @param {boolean} [useSetData] 为真时通过setData进行赋值操作,主要针对框架中直接赋值无法响应的操作
 */
function setPropByType(targetData: Record<PropertyKey, any>, prop: string, value: any, type?: ComplexType, useSetData?: boolean) {
  const targetdata = formatDataByType(value, type as 'string')
  return setProp(targetData, prop, targetdata, useSetData)
}

export default setPropByType
