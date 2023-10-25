import { ComplexType } from '../type/getType'
import getNum from './../number/getNum'

/**
 * 根据类型格式化对象,暂时只对number和boolean进行格式化
 * @param {*} value 需要格式化的值
 * @param {*} type 格式化的类型
 * @returns value
 */
function formatDataByType(value: any, type: 'boolean'): boolean
function formatDataByType(value: any, type: 'number'): number
function formatDataByType<T>(value: T, type?: Exclude<ComplexType, 'boolean' | 'number'>): T
function formatDataByType<T>(value: T, type?: ComplexType) {
  let data
  if (type == 'boolean') {
    data = !!value
  } else if (type == 'number') {
    data = getNum(value, 'origin')
  } else {
    data = value
  }
  return data
}

export default formatDataByType
