import { ComplexType } from '../type/getComplexType'
import getNum from './../number/getNum'

/**
 * 根据类型格式化对象,暂时只对number和boolean进行格式化
 * @param {*} value 需要格式化的值
 * @param {*} type 格式化的类型
 * @returns value
 */
function formatDataByType(value: unknown, type: 'boolean'): boolean
function formatDataByType(value: unknown, type: 'number'): number
function formatDataByType(value: unknown, type?: Exclude<ComplexType, 'boolean' | 'number'>): unknown
function formatDataByType(value: unknown, type?: ComplexType) {
  if (type === 'boolean') {
    return !!value
  } else if (type === 'number') {
    return getNum(value, 'origin')
  } else {
    return value
  }
}

export default formatDataByType
