import getType, { SimpleType } from './getType'
import getTag from './getTag'

export type ComplexType = SimpleType | "file" | "blob" | "regExp" | "date"

/**
 * 获取value的数据类型-额外判断file/blob/date/regExp，并准确判断symbol
 * @param {*} value 需要获取类型的值
 * @returns {"string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function" | "null" | "array" | "file" | "blob" | "regExp" | "date"}
 */
function getComplexType(value: unknown): ComplexType {
  const type = getType (value)
  if (type === 'object') {
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
  return type
}

export default getComplexType
