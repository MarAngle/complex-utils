import isArray from './isArray'
import getTag from './getTag'

export type SimpleType = "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "array" | "null"

export type ComplexType = SimpleType | "file" | "blob" | "regExp" | "date"

/**
 * 获取value的数据类型
 * @param {*} value 需要获取类型的值
 * @param {boolean} [complex] 复杂判断，为否则在typeof基础上额外判断null/array，为真则再额外判断file/blob/date/regExp，并准确判断symbol
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array" | "file" | "blob" | "regExp" | "date"}
 */
function getType(value: any): SimpleType
function getType(value: any, complex: true): ComplexType
function getType(value: any, complex?: true) {
  const type = typeof (value)
  if (type === 'object') {
    if (isArray(value)) {
      return 'array'
    } else if (value === null) {
      return 'null'
    } else if (complex) {
      const tag = getTag(value)
      if (tag === '[object File]') {
        return 'file'
      } else if (tag === '[object Blob]') {
        return 'blob'
      } else if (tag === '[object RegExp]') {
        return 'regExp'
      } else if (tag === '[object Date]') {
        return 'date'
      } else if (tag === '[object Symbol]') {
        return 'symbol'
      }
    }
  }
  return type
}

export default getType
